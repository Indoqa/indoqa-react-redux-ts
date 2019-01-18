import {IStyle} from 'fela'
import {Box, Grid, Panel, Row} from 'indoqa-react-fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {Route} from 'react-router'

import ColorsPanel from './colors/ColorsPanel'
import ContentHeader from './ContentHeader'
import ContentPanel from './ContentPanel'
import Logo from './menu/Logo'
import MenuGroup from './menu/MenuGroup'
import MenuHeader from './menu/MenuHeader'
import MenuItem from './menu/MenuItem'
import StyleGuideMenu from './menu/StyleGuideMenu'
import OverviewPanel from './overview/OverviewPanel'
import StyleGuideThemeContext from './sgtheme/SGThemeContext'
import {lightTheme} from './sgtheme/sgThemes'
import {WithSGTheme} from './sgtheme/withSGTheme'
import {Color, Font, Group} from './types'
import TypographyPanel from './typography/TypographyPanel'
import importCss from './utils/importCss'

interface Props {
  projectName: string,
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

interface InnterContentPanelProps {
  name: string,
}

const InnerContentPanel: React.FC<InnterContentPanelProps> = ({name, children}) => {
  return (
    <React.Fragment>
      <ContentHeader>
        <Logo to="" small>{name}</Logo>
      </ContentHeader>
      <Box p={2}>
        {children}
      </Box>
    </React.Fragment>
  )
}

const createComponentRoute = (name: string, component: React.ReactNode, mountPath: string) => {
  const componentMountPath = `${mountPath}/${name.toLowerCase()}`
  return (
    <Route key={componentMountPath} exact path={componentMountPath} render={() => (
      <InnerContentPanel name={name}>
        {component}
      </InnerContentPanel>
    )}/>
  )
}


/**
 * Todos
 * - cleanup sgTheme
 * - logo support (-> Menu)
 * - remove borderRadius FontStylePanel
 * - mixed fontStylePanel for overview page
 * - singleLine fontStylePanel -> for headlines
 * - move to indoqa-react-fela
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
                  <MenuHeader>
                    <Logo to={mountPath} small>{this.props.projectName}</Logo>
                  </MenuHeader>
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
                    <InnerContentPanel name={`Styleguide ${this.props.projectName}`}>
                      <OverviewPanel colors={colors} />
                    </InnerContentPanel>
                  )}/>
                  <Route exact path={`${mountPath}/colors`} render={() => (
                    <InnerContentPanel name="Color Scheme">
                      <ColorsPanel colors={colors}/>
                    </InnerContentPanel>
                  )}/>
                  <Route exact path={`${mountPath}/typography`} render={() => (
                    <InnerContentPanel name="Typography">
                      <TypographyPanel fonts={fonts} />
                    </InnerContentPanel>
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
