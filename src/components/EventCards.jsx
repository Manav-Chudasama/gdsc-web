import React from "react";

const EventCards = () => {
  return (
    <div>
      <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
          />
        </div>
        <div className="p-4">
          <h6 className="mb-2 text-slate-800 text-xl font-semibold">
            Upcoming Event 1
          </h6>
          <p className="text-slate-600 leading-normal font-light">
            Details about the upcoming event.
          </p>
        </div>
        <div className="px-4 pb-4 pt-0 mt-2">
          <button
            className="rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white  hover:bg-blue-700"
            type="button"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCards;
