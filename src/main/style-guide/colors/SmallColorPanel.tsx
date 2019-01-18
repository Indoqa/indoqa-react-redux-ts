import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {WithSGTheme, withSGTheme} from '../sgtheme/withSGTheme'

interface Props extends WithSGTheme {
  color?: string,
}

const ColorPanel = ({color, sgTheme}: Props) => {
  const style: IStyle = {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '5rem',
    height: '5rem',
    backgroundColor: color,
    padding: sgTheme.spacing.space1,
    marginRight: '0.4rem',
    marginBottom: '0.4rem',
    borderRadius: '3px',
    border: sgTheme.colorPanelBorder,
  }
  return (
    <FelaComponent style={style} />
  )
}

export default withSGTheme(ColorPanel)
