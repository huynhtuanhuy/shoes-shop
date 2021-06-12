import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface COffcanvasHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
}

export const COffcanvasHeader = forwardRef<HTMLDivElement, COffcanvasHeaderProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('offcanvas-header', className)

    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

COffcanvasHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

COffcanvasHeader.displayName = 'COffcanvasHeader'
