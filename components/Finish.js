import React from 'react'
import Image from 'next/image'
import styles from "../styles/Welcome.module.css";
const Finish = () => {
    return (
        <div className="container text-center">
           <Image src="/con.png" width="200px" height="200px"/>
           <h2>Congratulations!</h2>
           <p>Your consultancy has been created.<br/> Now you can add offerings and manage your consultancy profile</p>
           <button className={`btn ${styles.purple}`}>Consultancy Manager</button>
        </div>
    )
}

export default Finish
