import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom';


function BackButton() {

    const navigate = useNavigate()

  return (
    <IoMdArrowRoundBack size={32} className={styles.backBttn} onClick={() => navigate(-1)}/>
  )
}

export default BackButton