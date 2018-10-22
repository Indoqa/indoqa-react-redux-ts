import * as React from 'react'
import {ArrayHelpers, FieldArray, FormikErrors, FormikTouched} from 'formik'
import {Box, Flex, Text} from 'indoqa-react-fela'
import Optional from '../../commons/components/utils/Optional'
import {createNewAddress} from '../store/forms.factory'

import {Address} from '../store/forms.types'
import FormRow from '../../commons/components/molecules/FormRow'

const renderAddressHeader = (arrayHelpers: ArrayHelpers, count: number, index: number) => {
  return (
    <Box>
      <Text mr={1}>Address {index + 1}</Text>
      <button type="button" onClick={() => arrayHelpers.remove(index)}>-</button>
      <Optional test={index < count - 1}>
        <button type="button" onClick={() => arrayHelpers.move(index, index + 1)}>down</button>
      </Optional>
      <Optional test={index > 0}>
        <button type="button" onClick={() => arrayHelpers.move(index, index - 1)}>up</button>
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
) => {
  return (
    <Flex key={index} mt={2}>
      <Box>
        {renderAddressHeader(arrayHelpers, addresses.length, index)}

        <FormRow name={`addresses.${index}.street`} label="Street" errors={errors} touched={touched}/>
        <FormRow name={`addresses.${index}.city`} label="City" errors={errors} touched={touched}/>
        <FormRow name={`addresses.${index}.zipCode`} label="Zip code" errors={errors} touched={touched}/>
        <FormRow name={`addresses.${index}.country`} label="Country" errors={errors} touched={touched}/>
      </Box>
    </Flex>
  )
}
const renderForms = (
  arrayHelpers: ArrayHelpers,
  addresses: Address[],
  errors: FormikErrors<{}>,
  touched: FormikTouched<{}>,
) => {
  return (
    <Optional test={addresses && addresses.length > 0}>
      {
        addresses.map((address, index) => (
          renderAddressForm(arrayHelpers, addresses, errors, touched, address, index)
        ))
      }
    </Optional>
  )
}

const renderHeader = (arrayHelpers: ArrayHelpers) => {
  return (
    <Box>
      <Box>
        <Text mr={1}>Addresses</Text>
        <button type="button" onClick={() => arrayHelpers.push(createNewAddress())}>+</button>
      </Box>
    </Box>
  )
}

export interface AddressFormProps {
  addresses: Address[],
  errors: FormikErrors<{}>,
  touched: FormikTouched<{}>,
}

const AddressesForm = ({addresses, errors, touched}: AddressFormProps) => {
  return (
    <FieldArray
      name="addresses"
      render={(arrayHelpers) => (
        <Box mt={2}>
          {renderHeader(arrayHelpers)}
          {renderForms(arrayHelpers, addresses, errors, touched)}
        </Box>
      )}
    />
  )
}

export default AddressesForm
