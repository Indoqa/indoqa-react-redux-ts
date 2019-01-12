import {IStyle} from 'fela'

export interface SGTheme {
  backgroundColor: string,
  menuBackgroundColor: string,
  menuShadow: string,
  fontPanelBackgroundColor: string,
  fontPanelHeaderBackgroundColor: string,
  fontStyles: {
    base: IStyle,
  }
  fontFamilyCSSImports: string,
}
