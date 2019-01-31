import {Box, Grid, Panel, Row} from 'indoqa-react-fela'
import * as React from 'react'
import {Col} from './Col'
import {ColRow} from './ColRow'

export default class ColPage extends React.Component {

  public render() {
    const innerBox = (
      <Box bg="primary" fullWidth fullHeight style={{height: '29px'}}>
        foo
      </Box>
    )
    const innerBox2 = (
      <Box bg="primary" fullWidth fullHeight style={{height: '29px', backgroundColor: 'red'}}>
        foo
      </Box>
    )
    return (
      <Box>
        <h1>Grid page</h1>
        <Grid spacing="0.5rem">
          <Row>
            <Panel>{innerBox2}</Panel>
            <Panel>{innerBox2}</Panel>
            <Panel>{innerBox2}</Panel>
          </Row>
          <ColRow>
            <Col size={4}>{innerBox}</Col>
            <Col size={4}>{innerBox}</Col>
            <Col size={4}>{innerBox}</Col>
            <Col size={6}>
              <Grid spacing="0.5rem">
                <ColRow>
                  <Col size={3}>{innerBox}</Col>
                  <Col size={3}>{innerBox}</Col>
                  <Col size={3}>{innerBox}</Col>
                  <Col size={3}>{innerBox}</Col>
                  <Col size={3}>{innerBox}</Col>
                  <Col size={3}>{innerBox}</Col>
                  <Col size={3}>{innerBox}</Col>
                  <Col size={3}>{innerBox}</Col>
                </ColRow>
              </Grid>
            </Col>
            <Col size={2}>{innerBox}</Col>
            <Col size={2}>{innerBox}</Col>
            <Col size={2}>{innerBox}</Col>
            <Col size={7}>
              <Grid spacing="0">
                <Row>
                  <Panel>
                    foo
                  </Panel>
                  <Panel>
                    foo
                  </Panel>
                  <Panel>
                    foo
                  </Panel>
                </Row>
                <Row>
                  <Panel>
                    foo
                  </Panel>
                </Row>
              </Grid>
            </Col>
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
          <Row>
            <Panel>{innerBox2}</Panel>
            <Panel>{innerBox2}</Panel>
            <Panel>{innerBox2}</Panel>
          </Row>
        </Grid>
        <h2>col-row</h2>
        <ColRow>
          <Col size={3}>{innerBox}</Col>
          <Col size={3}>{innerBox}</Col>
          <Col size={3}>{innerBox}</Col>
          <Col size={3}>{innerBox}</Col>
          <Col size={3}>{innerBox}</Col>
          <Col size={3}>{innerBox}</Col>
          <Col size={3}>{innerBox}</Col>
          <Col size={3}>{innerBox}</Col>
        </ColRow>
      </Box>
    )
  }
}
