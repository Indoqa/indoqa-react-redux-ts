import {Flex} from 'indoqa-react-fela'
import * as React from 'react'
import Heading from '../Heading'
import {Color} from '../types'
import ColorPanel from './ColorPanel'

interface Props {
  colors: Color[]
}

const renderColor = (color: Color) => <ColorPanel key={color.name} name={color.name} color={color.hexCode} />

const ColorsPanel: React.FunctionComponent<Props> = ({colors}) => {
  return (
    <React.Fragment>
      <Heading as="h2">Colors</Heading>
      <Flex>
        {colors.map(renderColor)}
      </Flex>
    </React.Fragment>
  )
}

export default ColorsPanel
