import merge from 'deepmerge'
import baseTheme from './baseTheme'

const buildTheme = (customTheme: any) => {
  return merge(baseTheme, customTheme)
}

export default buildTheme
