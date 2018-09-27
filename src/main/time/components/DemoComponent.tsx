import * as React from 'react'
import {createComponentWithProxy} from 'react-fela'
import {Link} from 'react-router-dom'
import Types from 'Types'
import Box from '../../idqFela/components/Box'
import Flex from '../../idqFela/components/Flex'

import './test.css'
import Button from '../../commons/components/atoms/Button'
import ButtonLink from '../../commons/components/atoms/ButtonLink'

interface StyleButtonProps {
  onClick: () => any,
  someProperty: boolean,
}

interface ThemedStyleButtonProps extends Types.WithTheme, StyleButtonProps {
}

const StyledButton = createComponentWithProxy<StyleButtonProps>(({theme, someProperty}: ThemedStyleButtonProps) => ({
  color: theme.colors.text,
  width: someProperty ? 500 : 200,
  fontSize: theme.fontSizes.text,
}), 'button')

type Props = {
  today: number,
  onIncrement: (id?: number) => any,
}

export default class DemoComponent extends React.Component<Props> {

  public render() {
    return (
      <Box>
        <Box>
          TimeComponent: {this.props.today}
        </Box>
        <Button>some button</Button>
        <ButtonLink><Link to="/">OverviewPage</Link></ButtonLink>
        <StyledButton onClick={() => this.props.onIncrement()} someProperty={false}>
          Increment by 2
        </StyledButton>
        <StyledButton onClick={() => this.props.onIncrement(3)} someProperty={true}>
          Increment by 3
        </StyledButton>
        <div className="testClass">testClass</div>
        <Flex direction="column">
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
        </Flex>
      </Box>
    )
  }
}
