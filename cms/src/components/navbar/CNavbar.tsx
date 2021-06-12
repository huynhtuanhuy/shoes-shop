import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Colors, colorPropType } from '../Types'

export interface CNavbarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
   */
  color?: Colors
  /**
   * Sets if the color of text should be colored for a light or dark dark background. [docs]
   *
   * @type 'dark' | 'light'
   */
  colorScheme?: 'dark' | 'light'
  /**
   * Component used for the root node. Either a string to use a HTML element or a component. [docs]
   *
   * @default 'nav'
   */
  component?: string | ElementType
  /**
   * Defines optional container wrapping children elements.
   *
   * @type boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid'
   */
  container?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid'
  /**
   * Defines the responsive breakpoint to determine when content collapses. [docs]
   */
  expand?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  /**
   * Place component in non-static positions. [docs]
   *
   * @type 'fixed-top' | 'fixed-bottom' | 'sticky-top'
   */
  placement?: 'fixed-top' | 'fixed-bottom' | 'sticky-top'
}

export const CNavbar = forwardRef<HTMLDivElement, CNavbarProps>(
  (
    {
      children,
      className,
      color,
      colorScheme,
      component: Component = 'nav',
      container,
      expand,
      placement,
      ...rest
    },
    ref,
  ) => {
    const _className = classNames(
      'navbar',
      {
        [`bg-${color}`]: color,
        [`navbar-${colorScheme}`]: colorScheme,
        [typeof expand === 'boolean' ? 'navbar-expand' : `navbar-expand-${expand}`]: expand,
      },
      placement,
      className,
    )

    let content
    if (container) {
      content = (
        <div className={`container${container !== true ? '-' + container : ''}`}>{children}</div>
      )
    } else {
      content = children
    }

    return (
      <Component className={_className} {...rest} ref={ref}>
        {content}
      </Component>
    )
  },
)

CNavbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType,
  colorScheme: PropTypes.oneOf(['dark', 'light']),
  component: PropTypes.elementType,
  container: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf<'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid'>([
      'sm',
      'md',
      'lg',
      'xl',
      'xxl',
      'fluid',
    ]),
  ]),
  expand: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf<'sm' | 'md' | 'lg' | 'xl' | 'xxl'>(['sm', 'md', 'lg', 'xl', 'xxl']),
  ]),
  placement: PropTypes.oneOf(['fixed-top', 'fixed-bottom', 'sticky-top']),
}

CNavbar.displayName = 'CNavbar'
