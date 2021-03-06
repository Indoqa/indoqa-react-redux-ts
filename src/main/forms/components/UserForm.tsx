import i18next from 'i18next'
import * as React from 'react'
import {WithNamespaces, withNamespaces} from 'react-i18next'
import {Link} from 'react-router-dom'
import {Form, Formik, FormikProps} from 'formik'
import {Box} from 'indoqa-react-fela'
import * as Yup from 'yup'

import AddressesSubForm from './AddressesSubForm'
import FormRow from '../../commons/components/molecules/FormRow'
import ButtonLink from '../../commons/components/atoms/ButtonLink'
import {User} from '../store/forms.types'

const validationSchema = (t: i18next.TranslationFunction) =>
  Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(t('errorMissingEmail')),
    addresses: Yup.array().of(Yup.object().shape({
      country: Yup.string().required(),
      zipCode: Yup.string().required(),
    })),
  })

export interface Props {
  user: User,
  cancelUrl: string,
  saveUser: (user: User, setErrors: any) => void
}

class UserForm extends React.Component<Props & WithNamespaces> {

  public render() {
    const {user, cancelUrl, saveUser, t} = this.props
    return (
      <Formik
        key={user.id + user.lastModified.toString()}
        onSubmit={(values, {setErrors}) => saveUser(values, setErrors)}
        initialValues={user}
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
