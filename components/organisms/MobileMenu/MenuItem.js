import Link from '@/components/atoms/Link'
import {Button} from '@material-ui/core'
import cn from 'classnames'
import {isEmpty} from 'lodash'
import {useRouter} from 'next/router'
// import styles from '../../styles/MenuItem.module.scss'
import styles from './MenuItem.module.scss'

const MenuItem = (props) => {
  const {asPath} = useRouter()

  const {id, path, label, parentPath, children, menuPath, setMenuPath} = props

  const setCurrentParent = (path, label) => (event) => {
    const currentMenuPath = {...menuPath}
    currentMenuPath.path.push(path)
    currentMenuPath.label.push(label)
    setMenuPath(currentMenuPath)
  }

  const hideItem = (path, parentPath, currentPath) => {
    if (!parentPath && !currentPath) {
      return false
    }

    if (parentPath && parentPath === currentPath) {
      return false
    }

    return true
  }

  return (
    <>
      <li
        key={id}
        className={cn(
          styles.item,
          hideItem(path, parentPath, menuPath.path[menuPath.path.length - 1]) &&
            styles.isHidden
        )}
      >
        <span className={styles.link}>
          <Link color="inherit" href={path} underline="none">
            {label}
          </Link>
          {!isEmpty(children) && (
            <Button
              className={styles.next}
              onClick={setCurrentParent(path, label)}
            >
              &rsaquo;
            </Button>
          )}
        </span>
      </li>
      {!isEmpty(children) &&
        children.map((item) => (
          <MenuItem
            key={item.id}
            id={item.id}
            path={item.path}
            label={item.label}
            children={item.childItems?.nodes}
            parentPath={path}
            menuPath={menuPath}
            setMenuPath={setMenuPath}
          />
        ))}
    </>
  )
}

export default MenuItem
