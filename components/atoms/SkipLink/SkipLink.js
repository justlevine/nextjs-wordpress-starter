import Link from '@/components/atoms/Link'
import {Typography} from '@material-ui/core'

/**
 * Render the SkipLink component.
 *
 * @return {Element} The SkipLink component.
 */
export default function SkipLink() {
  return (
    <Typography variant="srOnly">
      <Link className="skip-link screen-reader-text" href="#main">
        Skip to content.
      </Link>
    </Typography>
  )
}
