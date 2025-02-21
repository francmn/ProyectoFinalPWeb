import React from 'react'
import styles from './styles.module.css'
import { ClipLoader } from 'react-spinners'

function LoadingPage({name}) {
  return (
    <div className={styles.loading}><ClipLoader size={50} />
    <p>Cargando {name}...</p>
    </div>
  )
}

export default LoadingPage