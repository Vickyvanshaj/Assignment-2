import React from 'react'
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Welcome from "../components/Welcome";
const NavBar = ({children}) => {
    return (
        <div className="container my-5 ">
        <div className="row d-flex justify-content-center">
          <div className={`col-md-2 ${styles.div1}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="green"
              className="bi bi-check"
              viewBox="0 0 16 16"
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
            </svg>
            Add new Consultancy
          </div>
          <div id="info"className={`col-md-2 ${styles.div2}`}>Add Basic Info</div>
          <div id="done" className={`col-md-2 ${styles.div2}`}>Consultancy Created</div>
          <div className={`col-md-2`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-clock"
              viewBox="0 0 16 16"
              className={styles.icon}
            >
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
            </svg>
          </div>
          <div className={`col-md-4 ${styles.time}`}>
            Time to complete : 2 minutes
          </div>
        </div>
        <div>
        {children}
  
        </div>
  
      </div>
    )
}

export default NavBar
