import {IStyle} from 'fela'
import {Grid, Row, Panel, Box} from 'indoqa-react-fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {Route} from 'react-router'
import {Link} from 'react-router-dom'
import ColorsPanel from './colors/ColorsPanel'
import TypographyPanel from './typography/TypographiePanel'
import {styleGuideThemeLight} from './StyleGuideThemes'
import {Color, Font, WithSGTheme, ComponentDescription} from './StyleGuideTypes'

interface Props {
  colors: Color[],
  fonts: Font[],
  atoms: ComponentDescription[],
  mountPath: string,
}

interface StyleGuideMenuCSSProps extends IStyle {
  tablet: IStyle,
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

const createComponentRoute = (name: string, component: React.ReactNode, mountPath: string) => {
  return (
    <Route key={name} exact path={`${mountPath}/${name}`} render={() => (
      <Box>
        {component}
      </Box>
    )}/>
  )
}

const StyleGuideMenu: React.FunctionComponent<WithSGTheme> = ({children, sgTheme}) => {
  const style: StyleGuideMenuCSSProps = {
    boxSizing: 'border-box',
    backgroundColor: sgTheme.fontPanelHeaderBackgroundColor,
    marginBottom: '10px',
    tablet: {
      overflowY: 'auto',
      boxShadow: sgTheme.menuShadow,
      borderBottom: 'none',
      backgroundColor: sgTheme.menuBackgroundColor,
    },
  }
  return (
    <Box fullWidth fullHeight style={style} p={2}>
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
    const {colors, fonts, atoms, mountPath} = this.props
    const {sgTheme} = this.state

    const atomRoutes = atoms.map((componentDescription) => {
      const {name, component} = componentDescription
      return createComponentRoute(name, component, mountPath)
    })

    return (
      <OuterContainer sgTheme={sgTheme}>
        <Grid spacing={0}>
          <Row height="100vh">
            <Panel width="300px">
              <StyleGuideMenu sgTheme={sgTheme}>
                <Link to="/style-guide">Styleguide</Link>
                <hr />
                <ul>
                  <li><Link to="/style-guide/colors">Colors</Link></li>
                  <li>Typography</li>
                </ul>
                <hr />
                ATOMS
                <ul>
                  <li><Link to="/style-guide/button">Button</Link></li>
                  <li><Link to="/style-guide/button2">Button2</Link></li>
                </ul>
                <hr />
                MOLECULES
                <ul>
                  <li><Link to="/style-guide/button">Button</Link></li>
                  <li><Link to="/style-guide/button2">Button2</Link></li>
                </ul>
                <hr />
                ORGANISMS
                <ul>
                  <li><Link to="/style-guide/button">Button</Link></li>
                  <li><Link to="/style-guide/button2">Button2</Link></li>
                </ul>
              </StyleGuideMenu>
            </Panel>
            <Panel>
              <Box py={2} px={2} fullHeight fullWidth style={{overflowY: 'auto'}}>
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

export default StyleGuide
