'use client'
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "../components/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_c6a9tzi", // Replace with your EmailJS service ID
        "template_tu91qap", // Replace with your EmailJS template ID
        formData,
        "Yt7duJ8PkQlj2j1w7" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div className="flex flex-col gap-10">
      {/* Navbar */}
      <div className="shadow-sm shadow-sky-900 hover:shadow-md hover:shadow-sky-800 transition duration-200 fixed top-0 w-full z-20">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="p-6 pt-24 gap-6 text-white bg-gradient-to-tr from-blue-950 via-black to-slate-950 w-screen min-h-screen flex flex-col items-center">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
          📬 Get in Touch
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500  ">
          Have any questions or feedback? Feel free to reach out by filling in the form below!
        </p>

        <div className="mt-6 max-w-xl w-full bg-gradient-to-br from-black via-black to-blue-950 p-6 lg:p-8 rounded-lg shadow-md hover:shadow-lg shadow-blue-700 hover:shadow-blue-500 transition duration-300">
          <form onSubmit={handleSubmit} className="space-y-6 p-6 m-6 ">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name..."
              className="w-full p-3 border border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black text-sky-400 rounded-lg shadow-md placeholder:text-sky-600 placeholder:italic"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email..."
              className="w-full p-3 border border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black text-sky-400 rounded-lg shadow-md placeholder:text-sky-600 placeholder:italic"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message / Feedback ..."
              className="w-full p-3 border border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black text-sky-400 rounded-lg shadow-md placeholder:text-sky-600 placeholder:italic"
              rows="5"
              required
            />
            <button
              type="submit"
              className="` mt-2 w-full mx-auto px-10 py-4 text-lg font-bold uppercase text-sky-300 bg-[rgb(14,14,26)] rounded-md shadow-[0px_0px_60px_#1f4c65] transition duration-500 hover:bg-gradient-to-l hover:from-[rgba(2,29,78,0.681)] hover:to-[rgba(31,215,232,0.873)] hover:text-[rgb(255,255,255)] active:scale-90  `"
            >
              Send Message
            </button>
          </form>
          {status && <p className="text-center mt-4 text-teal-400 font-medium">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
