import {Box} from 'indoqa-react-fela'
import * as React from 'react'
import {WithNamespaces, withNamespaces} from 'react-i18next'

import Button from '../../commons/components/atoms/Button'

export interface ButtonDispatchProps {
  loadVienna: () => void,
  loadNewYork: () => void,
  loadViennaAndNewYork: () => void,
  loadInvalidLocation: () => void,
  clear: () => void,
}

const Buttons: React.FunctionComponent<ButtonDispatchProps & WithNamespaces> =
  ({t, loadVienna, loadNewYork, loadViennaAndNewYork, loadInvalidLocation, clear}) => (
  <Box mb={2}>
    <Button onClick={loadVienna}>{t('Vienna')}</Button>
    <Button onClick={loadNewYork}>{t('New York')}</Button>
    <Button onClick={loadViennaAndNewYork}>{t('Vienna')} {t('and')} {t('New York')}</Button>
    <Button onClick={loadInvalidLocation}>{t('Invalid Location')}</Button>
    <Button onClick={clear}>{t('Clear')}</Button>
  </Box>
)

export default withNamespaces('translations')(Buttons)
