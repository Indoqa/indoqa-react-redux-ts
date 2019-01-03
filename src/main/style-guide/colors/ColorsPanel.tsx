import {Flex} from 'indoqa-react-fela'
import * as React from 'react'
import Section from '../Section'
import ColorPanel from './ColorPanel'

interface Props {
  colors: Color[]
}

export interface Color {
  name: string,
  hexCode?: string,
}

const renderColor = (color: Color) => <ColorPanel key={color.name} name={color.name} color={color.hexCode} />

export const ColorsPanel: React.FunctionComponent<Props> = ({colors}) => {
  return (
    <React.Fragment>
      <Section>Colors</Section>
      <Flex>
        {colors.map(renderColor)}
      </Flex>
    </React.Fragment>
  )
}
