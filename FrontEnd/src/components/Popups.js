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
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <form id="myform" className="space-y-4" onSubmit={submitHandler} >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Appointment Order
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={submitHandler}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
              </form>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          <ToastContainer/>
        </>
      ) : null}
    </>
  );
}
