import {IStyle} from 'fela'

export interface SGTheme {
  backgroundColor: string,
  menuBackgroundColor: string,
  menuShadow: string,
  fontPanelBackgroundColor: string,
  fontPanelHeaderBackgroundColor: string,
  fontPanelHeaderColor: string,
  fontStyles: {
    base: IStyle,
    h1: IStyle,
    h2: IStyle,
    h3: IStyle,
  }
  fontFamilyCSSImports: string,
  spacing: {
    space0: string,
    space1: string,
    space2: string,
    space3: string,
    space4: string,
  }
}
