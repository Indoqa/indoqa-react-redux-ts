/* tslint:disable */
import {IStyle} from 'fela'
import {
  BaseTheme,
  createPaddingCSSProps,
  createStylingCSSProps,
  GridContext,
  mergeThemedStyles,
  PaddingProps,
  StylingProps,
  WithStyle
} from 'indoqa-react-fela'
import * as React from 'react'
import {FelaComponent, StyleFunction} from 'react-fela'
import {GRID_SIZE} from './Col'


interface Props<T extends BaseTheme> extends WithStyle<T>, PaddingProps, StylingProps {}

interface RowContainerProps<T extends BaseTheme> extends Props<T> {
  spacing?: number | string,
}

interface RowStyle extends IStyle {
  ':first-child': IStyle,
}

class RowContainer<T extends BaseTheme> extends React.Component<RowContainerProps<T>> {

  public render() {
    const rowStyle: StyleFunction<BaseTheme, RowContainerProps<T>> = ({style, spacing, ...otherProps}): RowStyle => ({
      ...createPaddingCSSProps(otherProps),
      ...createStylingCSSProps(otherProps),
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      marginTop: spacing,
      ':first-child': {
        marginTop:  0 //`-${spacing}`,
      },
    })
    const {children, style, ...otherProps} = this.props
    const styles = mergeThemedStyles<T, RowContainerProps<T>>(rowStyle, style)
    return (
      <FelaComponent<T> style={styles} {...otherProps}>
        {children}
      </FelaComponent>
    )
  }
}

export class ColRow<T extends BaseTheme> extends React.Component<Props<T>> {

  renderChildren(spacing: string | number) {
    let currentRowSize = 0
    let rowsCount = 0
    // see https://mxstbr.blog/2017/02/react-children-deepdive/#looping-over-children
    return React.Children.map(this.props.children, (child) => {
      const c = child as any
      // calculate the sum of all <Col> sizes
      currentRowSize += c.props.size

      if (currentRowSize >= GRID_SIZE) {
        rowsCount++
      }
      if (currentRowSize === GRID_SIZE) {
        currentRowSize = 0
        return React.cloneElement((c), {
          rowBreak: true,
          marginTop: rowsCount > 1 ? spacing : 0
        })
      }
      if (rowsCount > 0) {
        return React.cloneElement((c), {
          marginTop: spacing
        })
      }
      return c
    })
  }

  public render() {
    return (
      <GridContext.Consumer>
        {({spacing}) => (
          <RowContainer spacing={spacing} {...this.props}>
            {this.renderChildren(spacing)}
          </RowContainer>
        )}
      </GridContext.Consumer>
    )
  }
}
