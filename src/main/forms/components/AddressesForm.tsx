import * as React from 'react'
import {ArrayHelpers, FieldArray, FormikErrors, FormikTouched} from 'formik'
import {Box, Flex, Text} from 'indoqa-react-fela'
import {createNewAddress} from '../store/forms.factory'

import {Address, User} from '../store/forms.types'
import FormRow from './FormRow'

export interface Props {
  values: User,
  errors: FormikErrors<any>,
  touched: FormikTouched<any>,
}

const renderAddressHeader = (arrayHelpers: ArrayHelpers, count: number, index: number) => {
  return (
    <Box>
      <Text mr={1}>Address {index + 1}</Text>
      <button type="button" onClick={() => arrayHelpers.remove(index)}>-</button>
      {index < count - 1 ?
        <button type="button" onClick={() => arrayHelpers.move(index, index + 1)}>down</button>
        : null
      }
      {index > 0 ?
        <button type="button" onClick={() => arrayHelpers.move(index, index - 1)}>up</button>
        : null
      }
    </Box>
  )
}

const renderAddressForm = (
  arrayHelpers: any,
  values: User,
  errors: FormikErrors<any>,
  touched: FormikTouched<any>,
  address: Address,
  index: number,
) => {
  const addressesCount = values.addresses === undefined ? 0 : values.addresses.length
  return (
    <Flex key={index} mt={2}>
      <Box>
        {renderAddressHeader(arrayHelpers, addressesCount, index)}

        <FormRow name={`addresses.${index}.street`} label="Street" errors={errors} touched={touched}/>
        <FormRow name={`addresses.${index}.city`} label="City" errors={errors} touched={touched}/>
        <FormRow name={`addresses.${index}.zipCode`} label="Zip code" errors={errors} touched={touched}/>
        <FormRow name={`addresses.${index}.country`} label="Country" errors={errors} touched={touched}/>
      </Box>
    </Flex>
  )
}

const renderAddressesHeader = (arrayHelpers: any) => {
  return (
    <Box>
      <Box>
        <Text mr={1}>Addresses</Text>
        <button type="button" onClick={() => arrayHelpers.push(createNewAddress())}>+</button>
      </Box>
    </Box>
  )
}

const renderForms = (
  arrayHelpers: any,
  values: User,
  errors: FormikErrors<any>,
  touched: FormikTouched<any>,
) => {
  const {addresses} = values

  if (!(addresses && addresses.length > 0)) {
    return null
  }
  return addresses.map((address, index) => (
    renderAddressForm(arrayHelpers, values, errors, touched, address, index)
  ))
}

const AddressesForm = ({values, errors, touched}: Props) => {
  return (
    <FieldArray
      name="addresses"
      render={(arrayHelpers) => (
        <Box mt={2}>
          {renderAddressesHeader(arrayHelpers)}
          {renderForms(arrayHelpers, values, errors, touched)}
        </Box>
      )}
    />
  )
}

export default AddressesForm
