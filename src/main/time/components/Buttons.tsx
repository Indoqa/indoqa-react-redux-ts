import * as React from 'react'
import {translate} from 'react-i18next'

import Button from '../../commons/components/atoms/Button'
import Box from '../../idqFela/components/Box'

interface Props {
  t: any,
  loadVienna: () => any,
  loadNewYork: () => any,
  clear: () => any,
}

const Buttons = ({t, loadVienna, loadNewYork, clear}: Props) => (
  <Box mb={2}>
    <Button onClick={loadVienna}>{t('Vienna')}</Button>
    <Button onClick={loadNewYork}>{t('New York')}</Button>
    <Button>{t('Vienna')} {t('and')} {t('New York')}</Button>
    <Button>{t('Invalid Location')}</Button>
    <Button onClick={clear}>{t('Clear')}</Button>
  </Box>
)

export default translate('translations')(Buttons)
