import * as React from 'react'
import {CSSProperties} from 'react'
import {FelaComponent, FelaStyleProps} from 'react-fela'
import {Theme} from '../app/theme'

interface Props {
  color?: string,
  name: string,
}

const toHexString = (color: string) => {
  return color.startsWith('#') ? color.substr(1) : color
}

/* tslint:disable:no-bitwise */
// tslint:disable-next-line
/* see https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color */
const calcTextColor = (color?: string) => {
  if (!color) {
    return '#fff'
  }
  const bigint = parseInt(toHexString(color), 16)
  const red = (bigint >> 16) & 255
  const green = (bigint >> 8) & 255
  const blue = bigint & 255
  return (red * 0.299 + green * 0.587 + blue * 0.114) > 180 ? '#000' : '#fff'
}

const ColorPanel = ({color, name}: Props) => {
  const textColor = calcTextColor(color)
  return (
    <FelaComponent style={({theme}: FelaStyleProps<{}, Theme>): CSSProperties => ({
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      minWidth: '12rem',
      height: '7rem',
      backgroundColor: color,
      textAlign: 'center',
      textTransform: 'uppercase',
      padding: theme.spacing.space1,
      marginRight: '0.4rem',
      marginBottom: '0.4rem',
      borderRadius: '3px',
    })}>
      <div style={{color: textColor, fontSize: '100%', marginBottom: 'auto'}}>{name}</div>
      <div style={{color: textColor, fontSize: '90%'}}>{color}</div>
    </FelaComponent>
  )
}

export default ColorPanel
