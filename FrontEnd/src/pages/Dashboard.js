import React, { useState } from "react";
import Popups from "../components/Popups";

function Dashboard() {
  const [handler, setHandler] = useState(null);
  const [abc , setAbc] = useState(1);

  // This function updates the state with the counselor ID when an image is clicked
  const handleClick = (id) => () => {
    setHandler(id);
    setAbc(abc+1);
  };

  return (
    <>
      <div className="grid grid-cols-1 col-span-12 lg:col-span-10 gap-6 md:grid-cols-3 lg:grid-cols-4  p-4">
        <article className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6">
          <div>
            <strong className="block text-sm font-medium text-gray-500">
              Councillor 1
            </strong>
            <p><span className="text-2xl font-medium text-gray-900">Ms. Mohua Das</span></p><br />
            <img 
              src="https://srmap.edu.in/wp-content/uploads/2023/08/srmap-mohua-das.jpg" 
              alt="Ms. Mohua Das" 
              className="rounded cursor-pointer"
              onClick={handleClick(1)}
            />
          </div>
        </article>

        <article className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6">
          <div>
            <strong className="block text-sm font-medium text-gray-500">
              Councillor 2
            </strong>
            <p><span className="text-2xl font-medium text-gray-900">Ms. Mani Mounica M</span></p><br />
            <img 
              src="https://media.licdn.com/dms/image/D5603AQGs8WL88kNCOQ/profile-displayphoto-shrink_800_800/0/1690527055297?e=2147483647&v=beta&t=DhIkXPBjsPMmqZ_mKOy5bdgXdAaABlPZzg13ga3ONns" 
              alt="Ms. Mani Mounica M" 
              className="rounded cursor-pointer"
              onClick={handleClick(2) }
            />
          </div>
        </article>

        <article className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6">
          <div>
            <strong className="block text-sm font-medium text-gray-500">
              Councillor 3
            </strong>
            <p><span className="text-2xl font-medium text-gray-900">Ms. Alekhya Sankara</span></p><br />
            <img 
              src=""  // Add a valid image source here
              alt="Ms. Alekhya Sankara" 
              className="rounded cursor-pointer"
              onClick={handleClick(3)}
            />
          </div>
        </article>
      </div>
      {handler !== null && <Popups a={handler} b ={abc}/>}
    </>
  );
}

export default Dashboard;
