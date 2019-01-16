import {IStyle} from 'fela'
import {Box, Grid, Panel, Row} from 'indoqa-react-fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {Route} from 'react-router'

import ColorsPanel from './colors/ColorsPanel'
import ContentPanel from './ContentPanel'
import Logo from './menu/Logo'
import MenuGroup from './menu/MenuGroup'
import MenuItem from './menu/MenuItem'
import StyleGuideMenu from './menu/StyleGuideMenu'
import StyleGuideThemeContext from './sgtheme/SGThemeContext'
import {lightTheme} from './sgtheme/sgThemes'
import {WithSGTheme} from './sgtheme/withSGTheme'
import {Color, Font, Group} from './types'
import TypographyPanel from './typography/TypographyPanel'
import importCss from './utils/importCss'

interface Props {
  colors: Color[],
  fonts: Font[],
  groups: Group[],
  mountPath: string,
}

const OuterContainer: React.FC<WithSGTheme> = ({children, sgTheme}) => {
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
  const componentMountPath = `${mountPath}/${name.toLowerCase()}`
  return (
    <Route key={componentMountPath} exact path={componentMountPath} render={() => (
      <Box>
        {component}
      </Box>
    )}/>
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
      sgTheme: lightTheme,
    }
  }

  public componentDidMount() {
    const {sgTheme} = this.state
    const {fontFamilyCSSImports} = sgTheme
    importCss('style-guide-fonts', fontFamilyCSSImports)
  }

  public render() {
    const {colors, fonts, groups, mountPath} = this.props
    const {sgTheme} = this.state

    const menuGroups = groups.map((componentDescription) => {
      const {name, descriptions} = componentDescription
      const menuItems = descriptions.map((description) => {
        const componentMountPath = `${mountPath}/${name.toLowerCase()}/${description.name.toLowerCase()}`
        return <MenuItem key={componentMountPath} to={componentMountPath}>{description.name}</MenuItem>
      })
      return (
        <MenuGroup name={name} key={name}>
          {menuItems}
        </MenuGroup>
      )
    })

    const routes: JSX.Element[] = []
    groups.forEach((componentDescription) => {
      const {name, descriptions} = componentDescription
      descriptions.forEach((description) => {
        routes.push(createComponentRoute(description.name, description.component, `${mountPath}/${name.toLowerCase()}`))
      })
    })

    return (
      <StyleGuideThemeContext.Provider value={sgTheme}>
        <OuterContainer sgTheme={sgTheme}>
          <Grid spacing={0}>
            <Row height="100vh">
              <Panel width="300px">
                <StyleGuideMenu>
                  <Logo to={mountPath}>Indoqa Styleguide</Logo>
                  <MenuGroup>
                    <MenuItem to={`${mountPath}/colors`}>Colors</MenuItem>
                    <MenuItem to={`${mountPath}/typography`}>Typography</MenuItem>
                  </MenuGroup>
                  {menuGroups}
                </StyleGuideMenu>
              </Panel>
              <Panel>
                <ContentPanel>
                  <Route exact path={mountPath} render={() => (
                    <div>
                      Welcome!
                    </div>
                  )}/>
                  <Route exact path={`${mountPath}/colors`} render={() => (
                    <ColorsPanel colors={colors}/>
                  )}/>
                  <Route exact path={`${mountPath}/typography`} render={() => (
                    <TypographyPanel fonts={fonts} sgTheme={sgTheme}/>
                  )}/>
                  {routes}
                </ContentPanel>
              </Panel>
            </Row>
          </Grid>
        </OuterContainer>
      </StyleGuideThemeContext.Provider>
    )
  }
}

export default StyleGuide
