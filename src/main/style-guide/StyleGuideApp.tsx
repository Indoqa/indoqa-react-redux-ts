import {Flex} from 'indoqa-react-fela'
import * as React from 'react'
import ColorPanel from './ColorPanel'
import FontStylePanel from './FontStylePanel'

export default class StyleGuideApp extends React.Component<{}> {

  public render() {
    return (
      <div>
        <h1>Colors</h1>
        <Flex>
          <ColorPanel color="#303f9f" name="primary" />
          <ColorPanel color="#c5cae9" name="dark-primary" />
          <ColorPanel color="#3f51b5" name="light-primary" />
          <ColorPanel color="#FFFFFF" name="text" />
          <ColorPanel color="#ff5722" name="accent" />
          <ColorPanel color="#212121" name="primary-text" />
          <ColorPanel color="#757575" name="secondary-text" />
          <ColorPanel color="#BDBDBD" name="divider" />
        </Flex>
        <h1>Fonts</h1>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <FontStylePanel fontStyles={{color: 'red'}} name="default" />
      </div>
    )
  }
}
