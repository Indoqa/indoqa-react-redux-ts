import * as React from 'react'
import {withTheme} from 'react-fela'
import {Theme} from '../app/theme'
import StyleGuide from './StyleGuide'
import {Color, Font, Group} from './types'

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

    return (
      <StyleGuide
        projectName="Content-Pools"
        fonts={fonts}
        colors={colors}
        groups={groups}
        mountPath="/style-guide"
      />
    )
  }
}

export default withTheme(DemoStyleGuide)
