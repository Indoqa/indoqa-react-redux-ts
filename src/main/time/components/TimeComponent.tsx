import * as React from 'react'
import {createComponentWithProxy} from 'react-fela'

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
  onToggle: any,
}

export default class TimeComponent extends React.Component<Props> {

  public render() {
    return (
      <div>
        TimeComponent: {this.props.today}
        <StyledButton onClick={() => this.props.onToggle()} someProperty={false}>
          Toggle
        </StyledButton>
      </div>
    )
  }
}
