// import { SearchBox, CtaButtons, MenuPath, MenuItem } from '..';
import DualButton from '@/components/molecules/DualButton/DualButton'
import SearchBox from '@/components/molecules/SearchBox/SearchBox'
import {faBars} from '@fortawesome/fontawesome-pro/js-packages/@fortawesome/pro-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Button, ClickAwayListener, Drawer} from '@material-ui/core'
import {useRouter} from 'next/router'
import {useMemo, useState} from 'react'
import {MenuItem, MenuPath} from '.'
import styles from './MobileMenu.module.scss'

const MobileMenu = ({menu}) => {
  if (!menu || !menu?.length) {
    return null
  }

  const {asPath} = useRouter()
  // console.warn({asPath})
  // console.warn({menu})

  const [open, setOpen] = useState(false)

  const [menuPath, setMenuPath] = useState({
    path: [],
    label: []
  })

  const buttons = useMemo(
    () => [
      {
        className: styles.volunteer,
        href: 'about/volunteer',
        color: 'secondary',
        underline: 'none',
        text: 'Volunteer'
      },
      {
        className: styles.donate,
        href: 'about/donate',
        color: 'primary',
        underline: 'none',
        text: 'Donate'
      }
    ],
    []
  )

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setOpen(open)
  }

  return (
    <>
      {!open ? (
        <Button
          onClick={toggleDrawer(true)}
          className={styles.open}
          size="small"
        >
          <FontAwesomeIcon icon={faBars} size="xs" />
        </Button>
      ) : (
        <ClickAwayListener onClickAway={toggleDrawer(false)}>
          <Drawer
            component="aside"
            anchor="left"
            open={open}
            onClose={toggleDrawer(false)}
          >
            <div className={styles.drawer}>
              <MenuPath
                menuPath={menuPath}
                setMenuPath={setMenuPath}
                toggleDrawer={toggleDrawer}
              />
              <SearchBox className={styles.mobileSearch} />
              <nav
                id="mobile-menu"
                className={styles.nav}
                role="navigation"
                aria-label="Main Menu"
              >
                {menu.length &&
                  menu.map((item) => (
                    <MenuItem
                      key={item.id}
                      id={item.id}
                      path={item.path}
                      label={item.label}
                      children={item.children}
                      menuPath={menuPath}
                      setMenuPath={setMenuPath}
                    />
                  ))}
              </nav>
              <footer>
                <DualButton buttons={buttons} />
              </footer>
            </div>
          </Drawer>
        </ClickAwayListener>
      )}
    </>
  )
}
export default MobileMenu
