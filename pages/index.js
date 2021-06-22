import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Welcome from "../components/Welcome";
import Signup from "../components/Signup";
import {useState} from "react"
import Finish from "../components/Finish";
export default function Home() {
  const [isChange,setChange]=useState('home');
  return (
   <>
   {isChange=='home'&&<Welcome isChange={isChange} setChange={setChange}/>}
   {isChange=='signup'&&<Signup isChange={isChange} setChange={setChange}/>}
   {isChange=='finish'&&<Finish isChange={isChange} setChange={setChange}/>}
   </>  
  );
}
