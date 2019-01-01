import {IStyle} from 'fela'
import {Flex} from 'indoqa-react-fela'
import * as React from 'react'
import {withTheme, FelaComponent} from 'react-fela'
import {Theme} from '../app/theme'
import ColorPanel from './ColorPanel'
import FontStylePanel from './FontStylePanel'
import Section from './Section'
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
    return (
      <OuterContainer sgTheme={this.state.sgTheme}>
        <InnerContainer>
          <Section>Colors</Section>
          <Flex>
            <ColorPanel color={theme.colors.primary} name="primary" />
            <ColorPanel color={theme.colors.primaryDark} name="dark-primary" />
            <ColorPanel color={theme.colors.primaryLight} name="light-primary" />
            <ColorPanel color={theme.colors.text} name="text" />
            <ColorPanel color={theme.colors.accent} name="accent" />
            <ColorPanel color={theme.colors.textSecondary} name="secondary-text" />
            <ColorPanel color={theme.colors.divider} name="divider" />
          </Flex>
          <Section>Fonts</Section>
          <FontStylePanel sgTheme={this.state.sgTheme} fontStyles={theme.fontStyles.base} name="text" />
          <FontStylePanel sgTheme={this.state.sgTheme} fontStyles={theme.fontStyles.headline} name="headline" />
        </InnerContainer>
      </OuterContainer>
    )
  }
}

export default withTheme(StyleGuide)
