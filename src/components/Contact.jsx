import React from "react";

function Contact() {
  return (
    <div>
      <h1 className="text-4xl font-bold p-4 m-4">Contact</h1>
      <div>
        <input
          className="border border-black p-2 m-2"
          placeholder="name"
          type="text"
        />
        <input
          className="border border-black p-2 m-2"
          placeholder="name"
          type="text"
        />

        <button className="p-2 m-4 rounded-md bg-green-50">Submit</button>
      </div>
    </div>
  );
}

export default Contact;
