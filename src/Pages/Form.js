// Form.js
import React, { useState } from "react";
import { toast } from "react-toastify";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!name || !email || !message) {
      toast.error("Please fill in all fields!");
      return;
    }

    // Submit form (This could be an API call)
    toast.success("Feedback Submitted!");
    
    // Clear the form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-bgDark2">
      <form
        onSubmit={handleSubmit}
        className="bg-bgDark2 p-8 rounded shadow-2xl w-11/12 max-w-[500px]"
      >
        <h1 className="text-2xl text-white font-bold mb-6 text-center">Feedback Form</h1>

        <div className="mb-4">
          <label htmlFor="name" className=" text-white block text-lg font-semibold">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=" bg-bgDark2  w-full border border-gray-300 p-2 rounded mt-1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className=" text-white block text-lg font-semibold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-bgDark2  w-full border border-gray-300 p-2 rounded mt-1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="  text-white block text-lg font-semibold">
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-bgDark2 w-full border border-gray-300 p-2 rounded mt-1"
            rows="5"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded w-full mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
