import * as React from 'react'
import {translate} from 'react-i18next'

import Button from '../../commons/components/atoms/Button'
import Box from '../../idqFela/components/Box'

interface Props {
  t: any
}

const Buttons = ({t}: Props) => (
  <Box mb={2}>
    <Button>{t('Vienna')}</Button>
    <Button>{t('New York')}</Button>
    <Button>{t('Vienna')} {t('and')} {t('New York')}</Button>
    <Button>{t('Invalid Location')}</Button>
    <Button>{t('Clear')}</Button>
  </Box>
)

export default translate('translations')(Buttons)
