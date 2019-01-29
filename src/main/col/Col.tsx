import {IStyle} from 'fela'
import {BaseTheme, GridContext} from 'indoqa-react-fela'
import * as React from 'react'
import {FelaComponent, StyleFunction} from 'react-fela'

// type Size = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const GRID_SIZE = 12

interface Props {
  rowBreak?: boolean,
  marginTop?: string | number,
  size?: number,
}

interface RowContainerProps extends Props {
  spacing?: number | string,
}

export class Col extends React.Component<Props> {

  public static displayName = 'Col'

  public static defaultProps = {
    rowBreak: false,
    size: GRID_SIZE,
    marginTop: 0,
  }

  public render() {
    const {children, rowBreak, marginTop, size} = this.props
    const effectiveSize: number = size ? size : 12
    const colStyle: StyleFunction<BaseTheme, RowContainerProps> = ({spacing}): IStyle => {
      const marginRight = rowBreak ? '0px' : spacing
      const availableSpace = `(100% - ${spacing} * ${GRID_SIZE - 1})`
      const coveredSpacing = `${spacing} * ${effectiveSize - 1}`
      return ({
        // evenly distribute the full with considering the spacing:
        width: `calc(${availableSpace} / ${GRID_SIZE} * ${effectiveSize} + ${coveredSpacing})`,
        backgroundColor: 'green',
        marginRight,
        marginTop,
      })
    }
    return (
      <GridContext.Consumer>
        {({spacing}) => (
          <FelaComponent style={colStyle} spacing={spacing}>
            {children}
          </FelaComponent>
        )}
      </GridContext.Consumer>
    )
  }
}
