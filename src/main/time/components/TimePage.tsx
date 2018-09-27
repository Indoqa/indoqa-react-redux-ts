import * as React from 'react'
import MainMenuTemplate from '../../commons/components/templates/MainMenuTemplate'
import Buttons from './Buttons'
import TimeComponent from './DemoComponent.redux'
import Result from './Result.redux'

export default class TimePage extends React.Component<{}> {

  public render() {
    return (
      <MainMenuTemplate title="Time">
        <div>
          <Buttons />
          <Result />
          <hr />
          <TimeComponent />
        </div>
      </MainMenuTemplate>
    )
  }
}
