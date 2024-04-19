import React, { useContext, useEffect, useState } from "react";
function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-1 col-span-12 lg:col-span-10 gap-6 md:grid-cols-3 lg:grid-cols-4  p-4 ">
        <article className="flex flex-col gap-4 rounded-lg border  border-gray-100 bg-white p-6  ">
          <div>
            <strong className="block text-sm font-medium text-gray-500">
              Councillor 1
            </strong>

            <p>
              <span className="text-2xl font-medium text-gray-900">
                Ms. Mohua Das
              </span>
            </p>
          </div>
        </article>

        <article className="flex flex-col  gap-4 rounded-lg border border-gray-100 bg-white p-6 ">

          <div>
            <strong className="block text-sm font-medium text-gray-500">
              Councillor 2
            </strong>

            <p>
              <span className="text-2xl font-medium text-gray-900">
                Ms. Mani Mounica M
              </span>
            </p>
          </div>
        </article>
        <article className="flex flex-col   gap-4 rounded-lg border border-gray-100 bg-white p-6 ">
          <div>
            <strong className="block text-sm font-medium text-gray-500">
              Councillor 3
            </strong>

            <p>
              <span className="text-2xl font-medium text-gray-900">
                Ms. Alekhya Sankara
              </span>
            </p>
          </div>
        </article>
      </div>
    </>
  );
}

export default Dashboard;
