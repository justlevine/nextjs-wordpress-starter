// Taken from https://github.com/mui-org/material-ui/blob/master/examples/nextjs/src/Link.js
/* eslint-disable jsx-a11y/anchor-has-content */
import MuiLink from '@material-ui/core/Link'
import cn from 'classnames'
import NextLink from 'next/link'
import {useRouter} from 'next/router'
import PropTypes from 'prop-types'
import React from 'react'

const NextComposed = React.forwardRef(function NextComposed(props, ref) {
  const {as, href, ...other} = props

  return (
    <NextLink href={href} as={as}>
      <a ref={ref} {...other} />
    </NextLink>
  )
})

NextComposed.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  prefetch: PropTypes.bool
}

/**
 * A styled version of the Next.js Link component.
 *
 * @param  {*}       props The component props.
 * @return {Element}       The Link component.
 */
function Link(props) {
  const {
    href,
    activeClassName = 'active',
    className: classNameProps,
    innerRef,
    naked,
    ...other
  } = props

  const router = useRouter()
  const pathname = typeof href === 'string' ? href : href.pathname
  const className = cn(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName
  })

  if (naked) {
    return (
      <NextComposed
        className={className}
        ref={innerRef}
        href={href}
        {...other}
      />
    )
  }

  return (
    <MuiLink
      component={NextComposed}
      className={className}
      ref={innerRef}
      href={href}
      {...other}
    />
  )
}

Link.propTypes = {
  activeClassName: PropTypes.string,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  naked: PropTypes.bool,
  onClick: PropTypes.func,
  prefetch: PropTypes.bool
}

export default React.forwardRef(function composedLink(props, ref) {
  return <Link {...props} innerRef={ref} />
})
