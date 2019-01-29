import {Box, Grid} from 'indoqa-react-fela'
import * as React from 'react'
import {Col} from './Col'
import {ColRow} from './ColRow'

export default class ColPage extends React.Component<{}> {

  public render() {
    const innerBox = (
      <Box bg="primary" fullWidth fullHeight style={{height: '49px'}}>
        foo
      </Box>
    )
    return (
      <Box pt={4}>
        <Grid spacing="1rem">
          <ColRow>
            <Col size={3}>{innerBox}</Col>
            <Col size={3}>{innerBox}</Col>
            <Col size={3}>{innerBox}</Col>
            <Col size={3}>{innerBox}</Col>
            <Col size={6}>
              {/*<Grid spacing="1rem">*/}
                {/*<ColRow>*/}
                  {/*<Col size={3}>{innerBox}</Col>*/}
                  {/*<Col size={3}>{innerBox}</Col>*/}
                  {/*<Col size={3}>{innerBox}</Col>*/}
                  {/*<Col size={3}>{innerBox}</Col>*/}
                {/*</ColRow>*/}
              {/*</Grid>*/}
            </Col>
            <Col size={2}>{innerBox}</Col>
            <Col size={2}>{innerBox}</Col>
            <Col size={2}>{innerBox}</Col>
            <Col size={7}>{innerBox}</Col>
            <Col size={5}>{innerBox}</Col>
            <Col size={5}>{innerBox}</Col>
            <Col size={7}>{innerBox}</Col>
            <Col size={12}>{innerBox}</Col>
            <Col size={1}>{innerBox}</Col>
            <Col size={1}>{innerBox}</Col>
            <Col size={1}>{innerBox}</Col>
            <Col size={1}>{innerBox}</Col>
            <Col size={1}>{innerBox}</Col>
            <Col size={1}>{innerBox}</Col>
            <Col size={1}>{innerBox}</Col>
            <Col size={1}>{innerBox}</Col>
            <Col size={1}>{innerBox}</Col>
            <Col size={1}>{innerBox}</Col>
            <Col size={1}>{innerBox}</Col>
            <Col size={1}>{innerBox}</Col>
            <Col size={1}>{innerBox}</Col>
            <Col size={11}>{innerBox}</Col>
          </ColRow>
        </Grid>
      </Box>
    )
  }
}
