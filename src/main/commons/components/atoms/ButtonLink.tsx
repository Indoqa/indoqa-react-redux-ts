import {createComponentWithProxy} from 'react-fela'
import {WithTheme} from '../../../app/theme'

const ButtonLink = ({theme}: WithTheme): any => ({
  '& > a': {
    color: theme.colors.text,
    display: 'block',
    height: '100%',
    textDecoration: 'none',
  },
})

export default createComponentWithProxy(ButtonLink, 'button')
