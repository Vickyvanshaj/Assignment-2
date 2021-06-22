import React from "react";
import "bootstrap-select/dist/css/bootstrap-select.css";
import styles from "../styles/Welcome.module.css";
const Signup = (props) => {
    const handleClick=(e)=>{
        e.preventDefault();
        props.setChange('finish');
        let elem=document.getElementById('done');
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
      </svg> Consultancy Created`
    }
  return (
    <div className="container">
      <div>
        <h4>First Add Basic Info</h4>
        <span className="text-muted">
          You'll decide which info is public to other users on FirmConnect
        </span>
        <br />
        <br />
        <span className="text">Buisness Info</span>
        <form>
          <div className="mb-3">
            <input
              type="text"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Business Name"
            />
            <br />
            <input
              type="text"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Current Webiste Url"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              No Website
            </label>
          </div>
          <div className="mb-3">
            <input
              type="text"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Current Operating City"
            />
            <br />
            <input
              type="text"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Consultancy Operating State"
            />
            <br/>
            <select class="form-select" aria-label="Default select example">
              <option selected>United States</option>
              <option value="1">India</option>
              <option value="2">United Kingdom</option>
              <option value="3">Argentina</option>
            </select>
          </div>

          <button type="submit" className={`btn ${styles.purple}`} onClick={handleClick}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
