import * as React from 'react'
import {createComponentWithProxy} from 'react-fela'

type StyleButtonProps = {
  onClick: () => any,
  theme?: any,
  someProperty: boolean,
}

const StyledButton = createComponentWithProxy<StyleButtonProps>(({theme, someProperty}) => ({
  color: 'blue',
  width: someProperty ? 500 : 400,
  fontSize: theme.fontSizes.small,
}), 'button')

type Props = {
  today: number,
  onToggle: any,
}

export default class TimeComponent extends React.Component<Props> {

  public render() {
    return (
      <div>
        TimeComponent: {this.props.today}
        <StyledButton onClick={() => this.props.onToggle()} someProperty={false}>
          Toggle3
        </StyledButton>
      </div>
    )
  }
}
