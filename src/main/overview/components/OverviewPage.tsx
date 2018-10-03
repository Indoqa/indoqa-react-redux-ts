import * as React from 'react'
import {createComponent} from 'react-fela'
import {Link} from 'react-router-dom'

import MainMenuTemplate from '../../commons/components/templates/MainMenuTemplate'

import './OverviewPage.css'

const Headline = createComponent(({theme}) => ({
  fontSize: theme.fontSizes.big,
  fontWeight: 'bold',
  marginTop: theme.spacing.space2,
  marginBottom: theme.spacing.space1,
}), 'h1') as any

const Para = createComponent(({theme}) => ({
  lineHeight: '125%',
  marginBottom: theme.spacing.space1,
}), 'p') as any

const List = createComponent(({theme}) => ({
  listStyleType: 'square',
  listStylePosition: 'outside',
  paddingLeft: theme.spacing.space3,
}), 'ul') as any

const ListItem = createComponent(({theme}) => ({
  lineHeight: '125%',
  marginBottom: theme.spacing.space1,
}), 'li') as any

export default class OverviewPage extends React.Component<{}> {

  public render() {
    return (
      <MainMenuTemplate title="Overview">
        <Para>Welcome to the <span className="indoqa">Indoqa React-Redux Typescript samples</span>.
          Each of these samples demonstrates particular technologies from the React-Redux ecosystem.
        </Para>
        <Headline>
          <Link to="/time">Time</Link>
        </Headline>
        <List>
          <ListItem>
            tbd
          </ListItem>
        </List>
        <Headline>
          <Link to="/todos">Todos</Link>
        </Headline>
        <List>
          <ListItem>
            tbd
          </ListItem>
        </List>
        <Headline>
          <Link to="/words">Words</Link>
        </Headline>
        <List>
          <ListItem>
            tbd
          </ListItem>
        </List>
        <Headline>
          <Link to="/forms">Forms</Link>
        </Headline>
        <List>
          <ListItem>
            tbd
          </ListItem>
        </List>
      </MainMenuTemplate>
    )
  }
}
