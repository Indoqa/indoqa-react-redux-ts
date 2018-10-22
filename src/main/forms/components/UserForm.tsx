import * as React from 'react'
import {Link} from 'react-router-dom'
import {Form, Formik, FormikProps} from 'formik'
import {Box} from 'indoqa-react-fela'
import * as Yup from 'yup'

import AddressesForm from './AddressesForm'
import FormRow from './FormRow'
import ButtonLink from '../../commons/components/atoms/ButtonLink'
import {User} from '../store/forms.types'

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

export interface UserFormProps {
  user: User,
  cancelUrl: string,
  saveUser: (user: User, setErrors: any) => void
}

export default class UserForm extends React.Component<UserFormProps> {

  public render() {
    const {user, cancelUrl, saveUser} = this.props
    return (
      <Formik
        key={user.id + user.lastModified.toString()}
        displayName="UserForm"
        onSubmit={(values, {setErrors}) => saveUser(values, setErrors)}
        initialValues={user}
        validateOnChange={false}
        validationSchema={validationSchema}
        render={({values, errors, touched}: FormikProps<User>) => {
          return (
            <Form>
              <FormRow name="name" label="Name" errors={errors} touched={touched}/>
              <FormRow name="email" label="E-Mail" errors={errors} touched={touched}/>
              <AddressesForm addresses={values.addresses} errors={errors} touched={touched}/>
              <Box mt={2}>
                <ButtonLink>
                  <Link to={cancelUrl}>Cancel</Link>
                </ButtonLink>
                <button type="submit">Save</button>
              </Box>
            </Form>
          )
        }}
      />
    )
  }
}
