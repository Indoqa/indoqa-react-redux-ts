import * as React from 'react'
import {withTheme} from 'react-fela'

import {Theme} from '../app/theme'
import StyleGuide from './StyleGuide'
import {Color, Font, FontMix, FontSizes, Group} from './types'

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
    const textFonts: Font[] = [
      {name: 'base', fontStyle: theme.fontStyles.base},
    ]

    const headingFonts: Font[] = [
      {name: 'headline', fontStyle: theme.fontStyles.headline},
    ]

    const fontSizes: FontSizes = [
      theme.fontSizes.extraBig,
      theme.fontSizes.big,
      theme.fontSizes.text,
      theme.fontSizes.small,
    ]

    const fontMixes: FontMix[] = [
      {name: 'headline', textFont: theme.fontStyles.headline, headlineFont: theme.fontStyles.headline},
    ]

    const atomsGroup: Group = {
      name: 'Atoms',
      descriptions: [
        {
          name: 'button',
          component: <button>Click me!</button>,
        },
        {
          name: 'button2',
          component: <button>Click me again!</button>,
        },
      ],
    }

    const moleculesGroup: Group = {
      name: 'Molecules',
      descriptions: [
        {
          name: 'Button',
          component: <button>Click me!</button>,
        },
        {
          name: 'Button2',
          component: <button>Click me again!</button>,
        },
      ],
    }

    const groups = [atomsGroup, moleculesGroup]

    // const demoTheme: SGTheme = {
    //   colors: {
    //     ...lightTheme.colors,
    //     primary: 'red',
    //     text: 'white',
    //     primaryLight: 'red',
    //     primaryDark: 'white',
    //     textInverted: 'red',
    //   },
    //   fontFamilyCSSImports: lightTheme.fontFamilyCSSImports,
    //   fontSizes: {
    //     ...lightTheme.fontSizes,
    //   },
    //   fontStyles: {
    //     ...lightTheme.fontStyles,
    //   },
    //   spacing: {
    //     ...lightTheme.spacing,
    //   },
    //   layout: {
    //     ...lightTheme.layout,
    //   },
    // }

    return (
      <StyleGuide
        projectName="Content-Pools"
        textFonts={textFonts}
        headlineFonts={headingFonts}
        fontMixes={fontMixes}
        fontSizes={fontSizes}
        colors={colors}
        groups={groups}
        mountPath="/style-guide"
        // sgTheme={demoTheme}
      />
    )
  }
}

export default withTheme(DemoStyleGuide)
