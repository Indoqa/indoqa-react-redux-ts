import * as React from 'react'
import {CSSProperties} from 'react'
import {FelaComponent, FelaRuleProps} from 'react-fela'
import * as Types from 'Types'
import {Theme} from '../app/theme'

interface FontStyleContainerProps {
  fontStyles: CSSProperties,
}

interface Props extends FontStyleContainerProps {
  name: string,
}

const FontStyleContainer = ({fontStyles, children}: FontStyleContainerProps & Types.WithChildren) => {
  return (
    <FelaComponent rule={({theme}: FelaRuleProps<Theme, Props>): CSSProperties => ({
      marginTop: theme.spacing.space1,
      marginBottom: theme.spacing.space1,
      ...fontStyles,
    })}
    render="p">
      {children}
    </FelaComponent>
  )
}

const FontStylePanel = ({fontStyles, name}: Props) => {
  return (
    <div>
      <h1>{name}</h1>
      <FontStyleContainer fontStyles={fontStyles}>
        The quick brown fox jumps over the lazy dog.
      </FontStyleContainer>
      <FontStyleContainer fontStyles={fontStyles}>
        ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
        abcdefghijklmnopqrstuvwxyz<br/>
        0123456789<br/>! " § % & / ( ) = ? + * # ' - _ . : , ; € @ | &lt; &gt; {'{'} {'}'}
      </FontStyleContainer>
      <FontStyleContainer fontStyles={fontStyles}>
        Apparently we <b>had reached</b> a great <em>height</em> in the atmosphere, for the <mark>sky was</mark>&nbsp;
        a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the&nbsp;
        sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the&nbsp;
        car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.&nbsp;
        Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.&nbsp;
      </FontStyleContainer>
    </div>
  )
}

export default FontStylePanel
