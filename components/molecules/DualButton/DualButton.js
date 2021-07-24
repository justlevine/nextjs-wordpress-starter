import Link from '@/components/atoms/Link'
import {Button} from '@material-ui/core'
import {PropTypes} from 'prop-types'
import React from 'react'
import styles from './DualButton.module.scss'

const DualButton = ({buttons}) => {
  return (
    <ul className={styles.dualButton}>
      {buttons.length &&
        buttons.map((button) => (
          <li key={button.href} className={button.className}>
            <Button
              href={button.href}
              component={Link}
              variant={button.variant ?? 'contained'}
              color={button.color ?? 'secondary'}
              underline={button.underline ?? 'none'}
            >
              {button.text}
            </Button>
          </li>
        ))}
    </ul>
  )
}

export default DualButton

DualButton.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      className: PropTypes.string,
      variant: PropTypes.string,
      color: PropTypes.string,
      underline: PropTypes.string,
      text: PropTypes.string
    })
  )
}
