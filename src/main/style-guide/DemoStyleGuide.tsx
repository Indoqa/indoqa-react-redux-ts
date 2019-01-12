import * as React from 'react'
import {withTheme} from 'react-fela'
import {Theme} from '../app/theme'
import StyleGuide from './StyleGuide'
import {Color, ComponentDescription, Font} from './StyleGuideTypes'

interface Props {
  theme: Theme,
}

class DemoStyleGuide extends React.Component<Props> {

  public render() {
    const {theme} = this.props

    const colors: Color[] = [
      {name: 'primary', hexCode: theme.colors.primary},
      {name: 'primary-dark', hexCode: theme.colors.primaryDark},
      {name: 'primary-light', hexCode: theme.colors.primaryLight},
      {name: 'text', hexCode: theme.colors.text},
      {name: 'accent', hexCode: theme.colors.accent},
      {name: 'secondary-text', hexCode: theme.colors.textSecondary},
      {name: 'divider', hexCode: theme.colors.divider},
    ]
    const fonts: Font[] = [
      {name: 'base', fontStyle: theme.fontStyles.base},
      {name: 'headline', fontStyle: theme.fontStyles.headline},
    ]

    const atoms: ComponentDescription[] = [
      {
        name: 'button',
        component: <button>Click me!</button>,
      },
      {
        name: 'button2',
        component: <button>Click me again!</button>,
      },
    ]

    return (
      <StyleGuide fonts={fonts} colors={colors} atoms={atoms} mountPath="/style-guide" />
    )
  }
}

export default withTheme(DemoStyleGuide)
