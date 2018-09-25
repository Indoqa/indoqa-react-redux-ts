import {createComponentWithProxy} from 'react-fela'

const Menu = ({theme}: any) => ({
  width: theme.layout.menuWidth,
  height: '100%',
  backgroundColor: theme.colors.bgLight,
})

export default createComponentWithProxy(Menu)
