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
      ':first-child': {
        marginTop: `-${spacing}`,
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
    return React.Children.map(this.props.children, (child, i) => {
      const c = child as any
      currentRowSize += c.props.size
      if (currentRowSize >= 12) {
        rowsCount++
      }
      if (currentRowSize === 12) {
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
    console.log('children', this.props.children)
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
