import {IStyle} from 'fela'
import {Box, Grid, Panel, Row} from 'indoqa-react-fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {Route} from 'react-router'

import ColorsPanel from './colors/ColorsPanel'
import ContentHeader from './ContentHeader'
import ContentPanel from './ContentPanel'
import Heading from './Heading'
import Logo from './menu/Logo'
import MenuGroup from './menu/MenuGroup'
import MenuHeader from './menu/MenuHeader'
import MenuItem from './menu/MenuItem'
import StyleGuideMenu from './menu/StyleGuideMenu'
import OverviewPanel from './overview/OverviewPanel'
import {SGTheme} from './sgtheme/SGTheme'
import StyleGuideThemeContext from './sgtheme/SGThemeContext'
import {lightTheme} from './sgtheme/sgThemes'
import {WithSGTheme} from './sgtheme/withSGTheme'
import {Color, Font, Group} from './types'
import TypographyPanel from './typography/TypographyPanel'
import importCss from './utils/importCss'

interface Props {
  projectName: string,
  logo?: React.ReactNode,
  colors: Color[],
  fonts: Font[],
  groups: Group[],
  mountPath: string,
}

interface InnerContentPanelProps extends WithSGTheme {
  name: string,
}

const InnerContentPanel: React.FC<InnerContentPanelProps> = ({name, sgTheme, children}) => {
  const style: IStyle = {
    paddingTop: sgTheme.spacing.space4,
    paddingRight: sgTheme.spacing.space4,
    paddingBottom: sgTheme.spacing.space4,
    paddingLeft: sgTheme.spacing.space4,
  }
  return (
    <React.Fragment>
      <ContentHeader>
        <Heading as="h1">{name}</Heading>
      </ContentHeader>
      <Box style={style}>
        {children}
      </Box>
    </React.Fragment>
  )
}

const createComponentRoute = (name: string, component: React.ReactNode, mountPath: string, sgTheme: SGTheme) => {
  const componentMountPath = `${mountPath}/${name.toLowerCase()}`
  return (
    <Route key={componentMountPath} exact path={componentMountPath} render={() => (
      <InnerContentPanel name={name} sgTheme={sgTheme}>
        {component}
      </InnerContentPanel>
    )}/>
  )
}


/**
 * Todos
 * - heading: Logo, Heading
 * - make sgTheme configurable
 * - logo support (-> Menu)
 * - make colors and overview mixedFontStyle clickable to get to the details
 *   -> see https://www.webdeveloperpal.com/2018/03/07/react-router-v4-navigate-and-redirect-programmatically/
 * - remove borderRadius FontStylePanel
 * - mixed fontStylePanel for overview page
 * - singleLine fontStylePanel -> for headlines
 * - move to indoqa-react-fela
 * - search box
 * - set <title>
 * - printing
 * - mobile menu -> collapsing
 * - show effective CSS properties
 * - show spacings
 * - inline styles (inkl. ul, ol, link, table, etc.)
 */
/**
 * see
 * - https://github.com/yeun/open-color
 * - https://www.producthunt.com/posts/fontspark
 * - https://github.com/pitr12/base-styling-components/blob/master/README.md
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
    const {colors, fonts, groups, mountPath, logo, projectName} = this.props
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
        routes.push(createComponentRoute(
          description.name,
          description.component,
          `${mountPath}/${name.toLowerCase()}`,
          sgTheme,
        ))
      })
    })

    return (
      <StyleGuideThemeContext.Provider value={sgTheme}>
        <Grid spacing={0}>
          <Row height="100vh">
            <Panel width="20rem">
              <StyleGuideMenu>
                <MenuHeader>
                  <Logo to={mountPath}>{logo || projectName}</Logo>
                </MenuHeader>
                <FelaComponent style={{height: sgTheme.spacing.space3}}/>
                <MenuGroup name="Base Styles">
                  <MenuItem to={`${mountPath}/colors`}>Colors</MenuItem>
                  <MenuItem to={`${mountPath}/typography`}>Typography</MenuItem>
                </MenuGroup>
                {menuGroups}
              </StyleGuideMenu>
            </Panel>
            <Panel>
              <ContentPanel>
                <Route exact path={mountPath} render={() => (
                  <InnerContentPanel name={`Styleguide ${this.props.projectName}`} sgTheme={sgTheme}>
                    <OverviewPanel colors={colors}/>
                  </InnerContentPanel>
                )}/>
                <Route exact path={`${mountPath}/colors`} render={() => (
                  <InnerContentPanel name="Color Scheme" sgTheme={sgTheme}>
                    <ColorsPanel colors={colors}/>
                  </InnerContentPanel>
                )}/>
                <Route exact path={`${mountPath}/typography`} render={() => (
                  <InnerContentPanel name="Typography" sgTheme={sgTheme}>
                    <TypographyPanel fonts={fonts}/>
                  </InnerContentPanel>
                )}/>
                {routes}
              </ContentPanel>
            </Panel>
          </Row>
        </Grid>
      </StyleGuideThemeContext.Provider>
    )
  }
}

export default StyleGuide
