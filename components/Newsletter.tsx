import React from 'react';

function Newsletter() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <p className="  mb-4 tracking-[7px] text-black">News Letter</p>
        <h1 className="text-black text-8xl mb-8">
          Subscribe To Our Newsletter For Updates
        </h1>
        <div className="flex flex-col items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className=" w-1/2 py-2 px-4 border rounded-md focus:outline-none tracking-[3px] focus:border-blue-500 text-xl"
          />
          <button className="bg-blue-500 hover:bg-blue-700 tracking-[5px] text-white font-bold py-2 px-4 rounded mt-4">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
