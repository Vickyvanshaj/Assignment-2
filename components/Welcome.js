import Image from "next/image";
import styles from "../styles/Welcome.module.css";
import Link from "next/link"

import Signup from "./Signup";
const Welcome = (props) => {
  
  const handleClick=(e)=>{
      e.preventDefault();
      props.setChange('signup');
      let elem=document.getElementById('info');
      console.log(elem.className.div);
      elem.style.backgroundColor='purple'
      elem.innerHTML=` <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="green"
      className="bi bi-check"
      viewBox="0 0 16 16"
    >
      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
    </svg> Add Basic Info`
  }
  return (
    <div className={`row d-flex justify-content-center my-5 ${styles.div1}`}>
      <div className="col-md-6">
        <div className={`card ${styles.card1} ${styles.card}`}>
          <div className="card-body">
            <h1 className="card-title">Welcome! Increasing your impact starts here!</h1>
            <p className="card-text">
              Your Firmconnect Consultancy Profile lets you easily connect with individuals and companies. We're excited to have Your
              Consultancy and offeringson the Firmconnect marketplace!
              <br/>
              <br/>
              <br/>
              <span className="text-muted">By continuing, you confirm you are an authorized representative of the consultancy being added</span>
            </p>
           
             <a className={`btn ${styles.purple}`} onClick={handleClick}>Continue</a>
             
            
          </div>
        </div>
      </div>
      <div className="col-md-6">
          <Image src="/sunrise.jpeg" width="500px" height="400px" className={`${styles.img1}`} />
      </div>
    </div>
  );
};

export default Welcome;
