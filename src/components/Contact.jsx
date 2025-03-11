import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_6lg0m13", // Replace with your EmailJS Service ID
        "template_5hygic6", // Replace with your EmailJS Template ID
        formData,
        "9-W2ApSbvyvRrPKUe", // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          alert("Email sent successfully!");
          console.log("Success:", response);
        },
        (error) => {
          alert("Failed to send email. Please try again.");
          console.log("Error:", error);
        },
      );
  };
  return (
    <div id="contact" className="pb-25">
      <div className="contact mt-20 mb-10 text-center !text-[42px] font-[600]">
        Contact
      </div>
      <div className="mt-3 text-center !text-[18px]">
        Feel free to reach out to me for any questions or opportunities!
      </div>
      <div className="m-0-auto block text-center">
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-[40px] flex h-fit w-full max-w-[600px] flex-col gap-[30px] rounded-[20px] bg-[#171721] p-[32px]"
        >
          <div className="text-start !text-[24px] font-[600]">Email Me 🚀</div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            className="input"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            className="input"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            className="input"
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            id="message"
            rows="4"
            placeholder="Message"
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" value="Send" className="contact-submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
