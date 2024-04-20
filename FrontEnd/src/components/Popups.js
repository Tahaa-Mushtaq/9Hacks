import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
export default function Modal({ a,b}) {
  const [showModal, setShowModal] = useState(a);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  console.log(a);

  useEffect(() => {
    setShowModal(true);
  }, [b]); // Only re-run the effect if `a` changes

  const submitHandler = async(e) => {
    e.preventDefault();
    const form = document.getElementById("myform")
    const data = new FormData(form);
    const FormDict = {
        id:a,
        date:data.get("date"),
        time:data.get("time")
    };
    console.log(FormDict)
    const response = await fetch("https://localhost:5000/api/Appointment",{
        method:"POST",
        body:JSON.stringify(FormDict),
        headers:{
            "Content-Type":"application/json"
        }
    })
    const responseData = response.data;
    toast(responseData.message);
  }
  return (
    <>
    
    </>
  );
}
