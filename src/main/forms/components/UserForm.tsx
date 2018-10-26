import * as React from 'react'
import {InjectedTranslateProps, withNamespaces} from 'react-i18next'
import {Link} from 'react-router-dom'
import {Form, Formik, FormikProps} from 'formik'
import {Box} from 'indoqa-react-fela'
import * as Types from 'Types'
import * as Yup from 'yup'

import AddressesSubForm from './AddressesSubForm'
import FormRow from '../../commons/components/molecules/FormRow'
import ButtonLink from '../../commons/components/atoms/ButtonLink'
import {User} from '../store/forms.types'

const validationSchema = (t: Types.translate) => {
  return Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(t('errorMissingEmail')),
    addresses: Yup.array().of(Yup.object().shape({
      country: Yup.string().required(),
      zipCode: Yup.string().required(),
    })),
  })
}

export interface UserFormProps extends InjectedTranslateProps {
  user: User,
  cancelUrl: string,
  saveUser: (user: User, setErrors: any) => void
}

class UserForm extends React.Component<UserFormProps> {

  public render() {
    const {user, cancelUrl, saveUser, t} = this.props
    return (
      <Formik
        key={user.id + user.lastModified.toString()}
        displayName="UserForm"
        onSubmit={(values, {setErrors}) => saveUser(values, setErrors)}
        initialValues={user}
        validateOnChange={false}
        validationSchema={validationSchema(t)}
        render={({values, errors, touched}: FormikProps<User>) => {
          return (
            <Form>
              <FormRow name="name" label={t('name')} errors={errors} touched={touched}/>
              <FormRow name="email" label={t('email')} errors={errors} touched={touched}/>
              <AddressesSubForm addresses={values.addresses} errors={errors} touched={touched}/>
              <Box mt={2}>
                <ButtonLink>
                  <Link to={cancelUrl}>{t('cancel')}</Link>
                </ButtonLink>
                <button type="submit">{t('save')}</button>
              </Box>
            </Form>
          )
        }}
      />
    )
  }
}

export default withNamespaces('forms')(UserForm)
