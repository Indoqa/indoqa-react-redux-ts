import {Flex} from 'indoqa-react-fela'
import * as React from 'react'
import {withTheme, FelaComponent} from 'react-fela'
import * as Types from 'Types'
import {Theme} from '../app/theme'
import ColorPanel from './ColorPanel'
import FontStylePanel from './FontStylePanel'
import Section from './Section'

interface Props {
  theme: Theme,
}

const Container = ({children}: Types.WithChildren) => (
  <FelaComponent rule={(): React.CSSProperties => ({
      maxWidth: 1140,
      margin: 'auto',
    })}
  >
    {children}
  </FelaComponent>
)

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
 */
class StyleGuide extends React.Component<Props> {

  public render() {
    const {theme} = this.props
    return (
      <Container>
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
        <FontStylePanel fontStyles={theme.fontStyles.base} name="text" />
        <FontStylePanel fontStyles={theme.fontStyles.headline} name="headline" />
      </Container>
    )
  }
}

export default withTheme(StyleGuide)
