import * as React from 'react'
import {createComponentWithProxy} from 'react-fela'
import {Themeable} from '../../app/theme'
import Box from '../../idqFela/components/Box'

import './test.css'

interface StyleButtonProps {
  onClick: () => any,
  someProperty: boolean,
}

interface ThemedStyleButtonProps extends Themeable, StyleButtonProps {}

const StyledButton = createComponentWithProxy<StyleButtonProps>(({theme, someProperty}: ThemedStyleButtonProps) => ({
  color: theme.colors.text,
  width: someProperty ? 500 : 200,
  fontSize: theme.fontSizes.extraBig,
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
        <StyledButton onClick={() => this.props.onIncrement(3)} someProperty={true}>
          Increment by 3
        </StyledButton>
        <div className="testClass">testClass</div>
        <Box />
      </div>
    )
  }
}
