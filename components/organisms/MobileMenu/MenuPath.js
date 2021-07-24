import Logo from '@/components/molecules/Logo'
import {Button} from '@material-ui/core'
import cn from 'classnames'
// import styles from '../../styles/MenuPath.module.scss';
import styles from './MenuPath.module.scss'

const MenuPath = (props) => {
  const {menuPath, setMenuPath, toggleDrawer} = props

  const toggleBack = () => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    const currentMenuPath = {...menuPath}
    currentMenuPath.path.pop()
    currentMenuPath.label.pop()
    setMenuPath(currentMenuPath)
  }
  return (
    <div className={styles.container}>
      <Button
        onClick={toggleBack()}
        className={cn(styles.btn, !menuPath.path.length && styles.hidden)}
      >
        &lsaquo;
      </Button>
      <Logo href="/" width={'80px'} height={'107.33px'} />
      <Button className={styles.btn} onClick={toggleDrawer(false)}>
        &times;
      </Button>
    </div>
  )
}

export default MenuPath
