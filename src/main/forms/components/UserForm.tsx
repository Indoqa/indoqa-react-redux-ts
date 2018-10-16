import * as React from 'react'
import {Link} from 'react-router-dom'
import {Form, Formik, FormikProps} from 'formik'
import {Box} from 'indoqa-react-fela'
import * as Yup from 'yup'

import ButtonLink from '../../commons/components/atoms/ButtonLink'
import AddressesForm from './AddressesForm'
import FormRow from './FormRow'
import {User} from '../store/forms.types'

export interface Props {
  user: User,
  onSubmit: (values: any, errors: any) => any,
}

const validationSchema = () => {
  return Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required('E-mail is required'),
    addresses: Yup.array().of(Yup.object().shape({
      country: Yup.string().required('Country is required'),
      zipCode: Yup.string().required('ZIP code is required'),
    })),
  })
}

const UserForm = ({user, onSubmit}: Props) => {
  return (
    <Formik
      key={user.id + user.lastModified.toString()}
      displayName="UserForm"
      onSubmit={(values, {setErrors}) => onSubmit(values, setErrors)}
      initialValues={user}
      validateOnChange={false}
      validationSchema={validationSchema}
      render={({values, errors, touched}: FormikProps<any>) => {
        return (
          <Form>
            <FormRow name="name" label="Name" errors={errors} touched={touched} />
            <FormRow name="email" label="E-Mail" errors={errors} touched={touched} />
            <AddressesForm values={values} errors={errors} touched={touched} />
            <Box mt={2}>
              <ButtonLink>
                <Link to="/forms">Cancel</Link>
              </ButtonLink>
              <button type="submit">Save</button>
            </Box>
          </Form>
        )
      }}
    />
  )
}

export default UserForm
