import * as React from 'react'
import {Link, RouteComponentProps} from 'react-router-dom'
import {Form, Formik, FormikProps} from 'formik'
import {Box} from 'indoqa-react-fela'
import * as Yup from 'yup'

import ButtonLink from '../../commons/components/atoms/ButtonLink'
import AddressesForm from './AddressesForm'
import FormRow from './FormRow'
import {User} from '../store/forms.types'

interface TemplateParams {
  id: string,
}

export interface Props extends RouteComponentProps<TemplateParams> {
  loadUser: (id: string) => void,
  saveUser: (user: User, setErrors: any) => void
  user: User,
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

export default class UserForm extends React.Component<Props> {

  public componentWillMount() {
    const {match, loadUser} = this.props
    loadUser(match.params.id)
  }

  public render() {
    const {user, saveUser} = this.props
    if (user === null) {
      return null
    }
    return (
      <Formik
        key={user.id + user.lastModified.toString()}
        displayName="UserForm"
        onSubmit={(values, {setErrors}) => saveUser(values, setErrors)}
        initialValues={user}
        validateOnChange={false}
        validationSchema={validationSchema}
        render={({values, errors, touched}: FormikProps<any>) => {
          return (
            <Form>
              <FormRow name="name" label="Name" errors={errors} touched={touched}/>
              <FormRow name="email" label="E-Mail" errors={errors} touched={touched}/>
              <AddressesForm values={values} errors={errors} touched={touched}/>
              <Box mt={2}>
                <ButtonLink>
                  <Link to="./">Cancel</Link>
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
