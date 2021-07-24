import DisplayImage from '@/components/atoms/Image'
import {useWordPressContext} from '@/components/common/WordPressProvider'
import {PropTypes} from 'prop-types'
import React from 'react'
/**
 * Render the Logo component.
 *
 * @param  {object}  props           The component properties.
 * @param  {string}  props.height    The image height.
 * @param  {object}  props.imageMeta The image meta.
 * @param  {string}  props.href      The link the image should go to.
 * @param  {string}  props.width     The image width.
 * @param  {string}  props.className The image className.
 * @return {Element}                 The Logo component.
 */

const Logo = ({className, height, href, width}) => {
  const {siteSettings} = useWordPressContext()
  return (
    <DisplayImage
      alt="The GSC - Givat Shmuel Community"
      className={className}
      height={height ?? null}
      href={href ?? null}
      id={siteSettings?.gqlLogo?.id}
      imageMeta={siteSettings?.gqlLogo}
      width={width ?? null}
    />
  )
}

export default React.memo(Logo)

Logo.propTypes = {
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imageMeta: PropTypes.shape({
    altText: PropTypes.string,
    mediaItemUrl: PropTypes.string,
    mediaDetails: PropTypes.shape({
      height: PropTypes.number,
      sizes: PropTypes.array,
      width: PropTypes.number
    })
  }),
  href: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
}

Logo.whyDidYouRender = true
