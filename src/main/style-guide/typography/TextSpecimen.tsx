import * as React from 'react'

export const headerText = 'The spectacle before us was indeed sublime.'

export const longText = `
  Apparently we had reached a great height in the atmosphere, for the sky was
  a dead black, and the stars had ceased to twinkle. By the same illusion which
  lifts the horizon of the sea to the level of the spectator on a hillside, the
  sable cloud beneath was dished out, and the car seemed to float in the middle
  of an immense dark sphere, whose upper half was strewn with silver.
  Looking down into the dark gulf below, I could see a ruddy light streaming
  through a rift in the clouds.
`

export const longTextInlineStyle = (
  <React.Fragment>
    <p>
      Apparently we <b>had reached</b> a great height in the atmosphere, for the sky was&nbsp;
      a dead black, and the stars had ceased to twinkle. By the same illusion which&nbsp;
      lifts the <a href="https://www.google.com">horizon of the sea</a> to the level of the&nbsp;
      spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to&nbsp;
      <mark>float in the middle</mark> of an
    </p>
    <ul>
      <li>immense dark sphere,</li>
      <li>whose upper half</li>
    </ul>
    <p>
      was strewn with silver. <em>Looking down into the dark gulf</em> below, I could see a ruddy light streaming&nbsp;
      through a rift in the clouds. By the same illusion which&nbsp;
      lifts the horizon of the sea to the level of the spectator on a hillside, the&nbsp;
      sable cloud beneath was dished out, and the car seemed to float in the middle&nbsp;
      of an
    </p>
    <ol>
      <li>immense dark sphere,</li>
      <li>whose upper half</li>
    </ol>
    <p>
      was strewn with silver.
    </p>
  </React.Fragment>
)
