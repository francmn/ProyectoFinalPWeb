import { useContext } from 'react'
import ThemeContext from '../../services/ThemeContext'
import styles from '../LogoutButton/styles.module.css'

function Button() {

    const { theme, handleThemeChange } = useContext(ThemeContext)

  return (
    <div className={styles.logoutButton} onClick={handleThemeChange}>
        {theme === "dark" ? "Claro" : "Oscuro"}
    </div>
  )
}

export default Button