import React, { useState } from "react";
import { InlineWidget } from "react-calendly";

export const Calendaly = ({visible,setvisible}) => {
  const clickHandler = () => {
    setvisible((prevValue) => !(prevValue));
  }
  return (
    <>
      {visible && ( // Added parentheses to wrap the JSX expression
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-full my-6 mx-auto max-w-3xl">
            {/* Content */}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/* Header */}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                {/* Close button */}
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={clickHandler}
                >
                  <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/* Content */}
              <div className="p-6">
                {/* Calendly Inline Widget */}
                <InlineWidget url="https://calendly.com/tahaa_mushtaq" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
