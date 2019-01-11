import {Flex} from 'indoqa-react-fela'
import * as React from 'react'
import Section from '../Section'
import {Color} from '../StyleGuideTypes'
import ColorPanel from './ColorPanel'

interface Props {
  colors: Color[]
}

const renderColor = (color: Color) => <ColorPanel key={color.name} name={color.name} color={color.hexCode} />

const ColorsPanel: React.FunctionComponent<Props> = ({colors}) => {
  return (
    <React.Fragment>
      <Section>Colors</Section>
      <Flex>
        {colors.map(renderColor)}
      </Flex>
    </React.Fragment>
  )
}

export default ColorsPanel
