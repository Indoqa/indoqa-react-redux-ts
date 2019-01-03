import {IStyle} from 'fela'
import * as React from 'react'
import {withTheme, FelaComponent} from 'react-fela'
import {Theme} from '../app/theme'
import {Color, ColorsPanel} from './colors/ColorsPanel'
import {Font, TypographyPanel} from './typography/TypographiePanel'
import {styleGuideThemeLight} from './StyleGuideThemes'
import {WithSGTheme} from './StyleGuideTypes'

interface Props {
  theme: Theme,
}

const OuterContainer: React.FunctionComponent<WithSGTheme> = ({children, sgTheme}) => {
  const style: IStyle = {
    backgroundColor: sgTheme.backgroundColor,
    minHeight: '100%',
    paddingTop: '1rem',
    paddingBottom: '1rem',
  }
  return (
    <FelaComponent style={style}>
      {children}
    </FelaComponent>
  )
}

const InnerContainer: React.FunctionComponent = ({children}) => {
  const style: IStyle = {
    maxWidth: 1140,
    height: '100%',
    margin: 'auto',
  }
  return (
    <FelaComponent style={style}>
      {children}
    </FelaComponent>
  )
}

/**
 * Todos
 * - colors automatically (sorting, derive name from property)
 * - text automatically
 * - text with different backgrounds
 * - spacing automatically
 * - shadows automatically
 * - color library?
 * - use colors from theme -> in this app
 * - link styling
 * - line elements styling
 * - use semantic HTML throughout the app
 * - Atoms | Molecules | Organisms | Templates
 *     colors
 *     font-mixins
 *     Inline elements
 *     Links
 *     Spacing
 *     Icons
 *     Logo(s)
 *     ? Listen
 *     ? Tables
 *     ? Bilder
 *     ? Button
 *     ? Forms
 * - Printing
 * - Where do the names come from? Oder über die Properties des Themes iterieren? (+ Alphabetische Sortierung?)
 * - use https://github.com/yeun/open-color
 * - see https://www.producthunt.com/posts/fontspark
 * - see https://github.com/pitr12/base-styling-components/blob/master/README.md
 */
class StyleGuide extends React.Component<Props, WithSGTheme> {

  constructor(props: Props) {
    super(props)
    this.state = {
      sgTheme: styleGuideThemeLight,
    }
  }

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
    const {sgTheme} = this.state
    return (
      <OuterContainer sgTheme={sgTheme}>
        <InnerContainer>
          <ColorsPanel colors={colors} />
          <TypographyPanel fonts={fonts} sgTheme={sgTheme} />
        </InnerContainer>
      </OuterContainer>
    )
  }
}

export default withTheme(StyleGuide)
