import {IStyle} from 'fela'
import {Grid, Panel, Row} from 'indoqa-react-fela'
import * as React from 'react'
import {FelaComponent, StyleFunction} from 'react-fela'
import {Theme} from '../../app/theme'
import {WithSGTheme} from '../StyleGuideTypes'

interface FontStyleContainerProps {
  fontStyles: IStyle,
}

interface Props extends FontStyleContainerProps {
  name: string,
}

const TextSample: React.FunctionComponent<FontStyleContainerProps> = ({fontStyles, children}) => {
  const style: StyleFunction<Theme> = ({theme}): IStyle => ({
    marginTop: theme.spacing.space1,
    marginBottom: theme.spacing.space1,
    padding: '0.5rem',
  })
  return (
    <FelaComponent style={[style, fontStyles]} as="p">
      {children}
    </FelaComponent>
  )
}

const TextSampleHeader: React.FunctionComponent<WithSGTheme> = ({sgTheme, children}) => {
  const style: IStyle = {
    backgroundColor: sgTheme.fontPanelHeaderBackgroundColor,
    padding: '0.5rem',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    fontSize: '0.75rem',
    color: '#ffffff',
    borderRadius: '3px',
  }
  return (
    <FelaComponent style={style}>
      {children}
    </FelaComponent>
  )
}

const FontStyleContainer: React.FunctionComponent<WithSGTheme> = ({sgTheme, children}) => {
  const style: IStyle = {
    flexGrow: 1,
    backgroundColor: sgTheme.fontPanelBackgroundColor,
    borderRadius: '3px',
  }
  return (
    <FelaComponent style={style}>
      {children}
    </FelaComponent>
  )
}

const FontStylePanel: React.FunctionComponent<Props & WithSGTheme> = ({fontStyles, name, sgTheme}) => {
  return (
    <Grid spacing="2rem">
      <Row>
        <Panel>
          <FontStyleContainer sgTheme={sgTheme}>
            <TextSampleHeader sgTheme={sgTheme}>{name} / plain</TextSampleHeader>
            <TextSample fontStyles={fontStyles}>
              The quick brown fox jumps over the lazy dog.
            </TextSample>
            <TextSample fontStyles={fontStyles}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
              abcdefghijklmnopqrstuvwxyz<br/>
              0123456789<br/>! " § % & / ( ) = ? + * # ' - _ . : , ; € @ | &lt; &gt; {'{'} {'}'}
            </TextSample>
            <TextSample fontStyles={fontStyles}>
              Apparently we had reached a great height in the atmosphere, for the sky was&nbsp;
              a dead black, and the stars had ceased to twinkle. By the same illusion which&nbsp;
              lifts the horizon of the sea to the level of the spectator on a hillside, the&nbsp;
              sable cloud beneath was dished out, and the car seemed to float in the middle&nbsp;
              of an immense dark sphere, whose upper half was strewn with silver.&nbsp;
              Looking down into the dark gulf below, I could see a ruddy light streaming&nbsp;
              through a rift in the clouds.&nbsp;
            </TextSample>
          </FontStyleContainer>
        </Panel>
        <Panel>
          <FontStyleContainer sgTheme={sgTheme}>
            <TextSampleHeader sgTheme={sgTheme}>{name} / markup</TextSampleHeader>
            <TextSample fontStyles={fontStyles}>
              The quick brown fox jumps over the lazy dog.
            </TextSample>
            <TextSample fontStyles={fontStyles}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
              abcdefghijklmnopqrstuvwxyz<br/>
              0123456789<br/>! " § % & / ( ) = ? + * # ' - _ . : , ; € @ | &lt; &gt; {'{'} {'}'}
            </TextSample>
            <TextSample fontStyles={fontStyles}>
              Apparently we <b>had reached</b> a great <em>height</em> in the atmosphere, for the sky was&nbsp;
              a dead black, and the <mark>stars</mark> had ceased to twinkle. By the same illusion which&nbsp;
              lifts the horizon of the sea to the level of the spectator on a hillside, the&nbsp;
              sable cloud beneath was dished out, and the car seemed to float in the middle&nbsp;
              of an immense dark sphere, whose upper half was strewn with silver.&nbsp;
              Looking down into the dark gulf below, I could see a ruddy light streaming&nbsp;
              through a rift in the clouds.&nbsp;
            </TextSample>
          </FontStyleContainer>
        </Panel>
      </Row>
    </Grid>
  )
}

export default FontStylePanel
