import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {WithSGTheme, withSGTheme} from '../sgtheme/withSGTheme'

interface Props extends WithSGTheme {
  name?: string,
}

const Titel: React.FC = ({children}) => {
  const style: IStyle = {
    fontSize: '12px',
    fontWeight: 700,
    fontFamily: 'Roboto',
    color: '#868e96',
    textTransform: 'uppercase',
    paddingBottom: '0.3rem',
  }
  return (
    <FelaComponent style={style} as="h1">
      {children}
    </FelaComponent>
  )
}

const List: React.FC = ({children}) => {
  const style: IStyle = {
    listStyle: 'none',
  }
  return (
    <FelaComponent style={style} as="ul">
      {children}
    </FelaComponent>
  )
}

const MenuGroup: React.FC<Props> = ({sgTheme, name, children}) => {
  const style: IStyle = {
    paddingTop: '1rem',
  }
  return (
    <FelaComponent style={style}>
      {name && <Titel>{name}</Titel>}
      <List>
        {children}
      </List>
    </FelaComponent>
  )
}

export default withSGTheme(MenuGroup)
