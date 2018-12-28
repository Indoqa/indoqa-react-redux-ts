import * as React from 'react'
import {CSSProperties} from 'react'
import {FelaComponent, FelaRuleProps} from 'react-fela'
import * as Types from 'Types'
import {Theme} from '../app/theme'
import {WithSGTheme} from './StyleGuideTypes'

interface FontStyleContainerProps {
  fontStyles: CSSProperties,
}

interface Props extends FontStyleContainerProps {
  name: string,
}

const TextSample = ({fontStyles, children}: FontStyleContainerProps & Types.WithChildren) => {
  return (
    <FelaComponent rule={({theme}: FelaRuleProps<Theme, Props>): CSSProperties => ({
      marginTop: theme.spacing.space1,
      marginBottom: theme.spacing.space1,
      padding: '0.5rem',
      ...fontStyles,
    })}
    render="p">
      {children}
    </FelaComponent>
  )
}

const TextSampleHeader: React.FunctionComponent<WithSGTheme> = ({sgTheme, children}) => {
  return (
    <FelaComponent rule={(): CSSProperties => ({
      backgroundColor: sgTheme.fontPanelHeaderBackgroundColor,
      padding: '0.5rem',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontFamily: 'sans-serif',
      fontSize: '0.75rem',
      color: '#ffffff',
      borderRadius: '3px',
    })}
    >
      {children}
    </FelaComponent>
  )
}

const FontStyleContainer: React.FunctionComponent<WithSGTheme> = ({sgTheme, children}) => {
  return (
    <FelaComponent rule={(): CSSProperties => ({
      flexGrow: 1,
      backgroundColor: sgTheme.fontPanelBackgroundColor,
      marginRight: '0.5rem',
      marginBottom: '2rem',
      borderRadius: '3px',
    })}
    >
      {children}
    </FelaComponent>
  )
}

const FontStyleContainers: React.FunctionComponent<WithSGTheme> = ({sgTheme, children}) => {
  return (
    <FelaComponent rule={(): CSSProperties => ({
      display: 'flex',
    })}
    >
      {children}
    </FelaComponent>
  )
}

const FontStylePanel: React.FunctionComponent<Props & WithSGTheme> = ({fontStyles, name, sgTheme}) => {
  return (
    <FontStyleContainers sgTheme={sgTheme}>
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
          a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the&nbsp;
          sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the&nbsp;
          car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.&nbsp;
          Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.&nbsp;
        </TextSample>
      </FontStyleContainer>
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
          Apparently we <b>had reached</b> a great <em>height</em> in the atmosphere, for the <mark>sky was</mark>&nbsp;
          a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the&nbsp;
          sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the&nbsp;
          car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.&nbsp;
          Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.&nbsp;
        </TextSample>
      </FontStyleContainer>
    </FontStyleContainers>
  )
}

export default FontStylePanel
