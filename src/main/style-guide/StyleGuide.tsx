import {IStyle} from 'fela'
import {Grid, Row, Panel, Box} from 'indoqa-react-fela'
import * as React from 'react'
import {withTheme, FelaComponent} from 'react-fela'
import {Route} from 'react-router'
import {Link} from 'react-router-dom'
import {Theme} from '../app/theme'
import {Color, ColorsPanel} from './colors/ColorsPanel'
import {Font, TypographyPanel} from './typography/TypographiePanel'
import {styleGuideThemeLight} from './StyleGuideThemes'
import {WithSGTheme} from './StyleGuideTypes'

interface Props {
  theme: Theme,
}

interface ComponentDescription {
  name: string,
  description?: React.ReactNode,
  component: React.ReactNode,
}

const OuterContainer: React.FunctionComponent<WithSGTheme> = ({children, sgTheme}) => {
  const style: IStyle = {
    backgroundColor: sgTheme.backgroundColor,
    minHeight: '100%',
  }
  return (
    <FelaComponent style={style}>
      {children}
    </FelaComponent>
  )
}

const createComponentRoute = (name: string, component: React.ReactNode) => {
  return (
    <Route key={name} exact path={`/style-guide/${name}`} render={() => (
      <Box>
        {component}
      </Box>
    )}/>
  )
}

const StyleGuideMenu: React.FunctionComponent<WithSGTheme> = ({children, sgTheme}) => {
  const style: IStyle = {
    backgroundColor: sgTheme.menuBackgroundColor,
    boxShadow: sgTheme.menuShadow,
  }
  return (
    <Box fullWidth fullHeight style={style}>
      {children}
    </Box>
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
    const {sgTheme} = this.state

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

    const atomRoutes = atoms.map((componentDescription) => {
      const {name, component} = componentDescription
      return createComponentRoute(name, component)
    })

    return (
      <OuterContainer sgTheme={sgTheme}>
        <Grid spacing={0}>
          <Row height="100vh">
            <Panel width="300px">
              <StyleGuideMenu sgTheme={sgTheme}>
                <Link to="/style-guide">Styleguide</Link>
                <ul>
                  <li><Link to="/style-guide/colors">Colors</Link></li>
                  <li>Typography</li>
                  <li>Components</li>
                  <ul>
                    <li>Atoms</li>
                    <ul>
                      <li>Atom1</li>
                      <li><Link to="/style-guide/button">Button</Link></li>
                      <li><Link to="/style-guide/button2">Button2</Link></li>
                    </ul>
                  </ul>
                </ul>
              </StyleGuideMenu>
            </Panel>
            <Panel>
              <Box py={2} px={3} fullHeight fullWidth style={{overflowY: 'auto'}}>
                <Route exact path="/style-guide" render={() => (
                  <Box>
                    <ColorsPanel colors={colors}/>
                    <TypographyPanel fonts={fonts} sgTheme={sgTheme}/>
                  </Box>
                )}/>
                <Route exact path="/style-guide/colors" render={() => (
                  <Box>
                    <ColorsPanel colors={colors}/>
                  </Box>
                )}/>
                {atomRoutes}
              </Box>
            </Panel>
          </Row>
        </Grid>
      </OuterContainer>
    )
  }
}

export default withTheme(StyleGuide)
