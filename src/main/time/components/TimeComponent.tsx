import * as React from 'react'
import {createComponentWithProxy} from 'react-fela'

import './test.css'

type StyleButtonProps = {
  onClick: () => any,
  theme?: any,
  someProperty: boolean,
}

const StyledButton = createComponentWithProxy<StyleButtonProps>(({theme, someProperty}) => ({
  color: theme.colors.text,
  width: someProperty ? 500 : 200,
  fontSize: theme.fontSizes.small,
}), 'button')

type Props = {
  today: number,
  onIncrement: (id?: number) => any,
}

export default class TimeComponent extends React.Component<Props> {

  public render() {
    return (
      <div>
        TimeComponent: {this.props.today}
        <StyledButton onClick={() => this.props.onIncrement()} someProperty={false}>
          Increment by 2
        </StyledButton>
        <StyledButton onClick={() => this.props.onIncrement(3)} someProperty={false}>
          Increment by 3
        </StyledButton>
        <div className="testClass">testClass</div>
      </div>
    )
  }
}
