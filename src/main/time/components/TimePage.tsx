import * as React from 'react'
import MainMenuTemplate from '../../commons/components/templates/MainMenuTemplate'
import TimeComponent from './TimeComponent.redux'
import {Link} from 'react-router-dom'

export default class TimePage extends React.Component<{}> {

  public render() {
    return (
      <MainMenuTemplate title="Time">
        <div>
          <h1>TimePage</h1>
          <TimeComponent />
          <hr />
          <Link to="/">OverviewPage</Link>
        </div>
      </MainMenuTemplate>
    )
  }
}
