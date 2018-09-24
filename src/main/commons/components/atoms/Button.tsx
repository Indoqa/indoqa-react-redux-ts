import {createComponentWithProxy} from 'react-fela'
import {WithTheme} from '../../../app/theme'

const Button = ({theme}: WithTheme) => ({
  color: theme.colors.text,
})

export default createComponentWithProxy(Button, 'button')
