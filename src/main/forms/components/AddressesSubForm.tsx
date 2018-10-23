import * as React from 'react'
import {ArrayHelpers, FieldArray, FormikErrors, FormikTouched} from 'formik'
import {Box, Flex, Text} from 'indoqa-react-fela'
import {InjectedTranslateProps, withNamespaces} from 'react-i18next'

import Optional from '../../commons/components/utils/Optional'
import FormRow from '../../commons/components/molecules/FormRow'
import {createNewAddress} from '../store/forms.factory'
import {Address} from '../store/forms.types'

const renderAddressHeader = (
  arrayHelpers: ArrayHelpers,
  count: number,
  index: number,
  t: InjectedTranslateProps['t'],
) => {
  return (
    <Box>
      <Text mr={1}>{t('address')} {index + 1}</Text>
      <button type="button" onClick={() => arrayHelpers.remove(index)}>-</button>
      <Optional test={index > 0}>
        <button type="button" onClick={() => arrayHelpers.move(index, index - 1)}>↑</button>
      </Optional>
      <Optional test={index < count - 1}>
        <button type="button" onClick={() => arrayHelpers.move(index, index + 1)}>↓</button>
      </Optional>
    </Box>
  )
}

const renderAddressForm = (
  arrayHelpers: ArrayHelpers,
  addresses: Address[],
  errors: FormikErrors<{}>,
  touched: FormikTouched<{}>,
  address: Address,
  index: number,
  t: InjectedTranslateProps['t'],
) => {
  return (
    <Flex key={index} mt={2}>
      <Box>
        {renderAddressHeader(arrayHelpers, addresses.length, index, t)}

        <FormRow name={`addresses.${index}.street`} label={t('street')} errors={errors} touched={touched}/>
        <FormRow name={`addresses.${index}.city`} label={t('city')} errors={errors} touched={touched}/>
        <FormRow name={`addresses.${index}.zipCode`} label={t('zipCode')} errors={errors} touched={touched}/>
        <FormRow name={`addresses.${index}.country`} label={t('country')} errors={errors} touched={touched}/>
      </Box>
    </Flex>
  )
}
const renderForms = (
  arrayHelpers: ArrayHelpers,
  addresses: Address[],
  errors: FormikErrors<{}>,
  touched: FormikTouched<{}>,
  t: InjectedTranslateProps['t'],
) => {
  return (
    <Optional test={addresses && addresses.length > 0}>
      {
        addresses.map((address, index) => (
          renderAddressForm(arrayHelpers, addresses, errors, touched, address, index, t)
        ))
      }
    </Optional>
  )
}

const renderHeader = (arrayHelpers: ArrayHelpers, t: InjectedTranslateProps['t']) => {
  return (
    <Box>
      <Box>
        <Text mr={1}>{t('addresses')}</Text>
        <button type="button" onClick={() => arrayHelpers.push(createNewAddress())}>+</button>
      </Box>
    </Box>
  )
}

export interface AddressFormProps extends InjectedTranslateProps {
  addresses: Address[],
  errors: FormikErrors<{}>,
  touched: FormikTouched<{}>,
}

const AddressesSubForm = ({addresses, errors, touched, t}: AddressFormProps) => {
  return (
    <FieldArray
      name="addresses"
      render={(arrayHelpers) => (
        <Box mt={2}>
          {renderHeader(arrayHelpers, t)}
          {renderForms(arrayHelpers, addresses, errors, touched, t)}
        </Box>
      )}
    />
  )
}

export default withNamespaces('forms')(AddressesSubForm)
