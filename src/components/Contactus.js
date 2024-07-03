import React, { useState } from "react";
import Navbar1 from "./Navbar";
// import "../styles/contact.css"; // Import your CSS file for custom styling (if applicable)

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to backend or display a confirmation
    console.log(formData);
    // Optionally, you can clear the form fields after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    // <div className="contact-page">
    //   <div className="container-wrapper">
    //     <div className="container card">
    //       <div className="row justify-content-center">
    //         <div className="col-md-8">
    //           <h2 className="text-center">Contact Us</h2>
    //           <form onSubmit={handleSubmit}>
    //             <div className="form-group">
    //               <label htmlFor="name" className="p-2 fs-5">
    //                 Name
    //               </label>
    //               <input
    //                 type="text"
    //                 className="form-control p-3 fs-5"
    //                 id="name"
    //                 name="name"
    //                 value={formData.name}
    //                 onChange={handleChange}
    //                 placeholder="Enter your name"
    //                 required
    //               />
    //             </div>

    //             <div className="form-group">
    //               <label htmlFor="email" className="p-2 fs-5">
    //                 Email address
    //               </label>
    //               <input
    //                 type="email"
    //                 className="form-control p-3 fs-5"
    //                 id="email"
    //                 name="email"
    //                 value={formData.email}
    //                 onChange={handleChange}
    //                 placeholder="Enter your email"
    //                 required
    //               />
    //             </div>

    //             <div className="form-group">
    //               <label htmlFor="message" className="p-2 fs-5">
    //                 Message
    //               </label>
    //               <textarea
    //                 className="form-control p-3 fs-5"
    //                 id="message"
    //                 name="message"
    //                 rows="4"
    //                 value={formData.message}
    //                 onChange={handleChange}
    //                 placeholder="Enter your message"
    //                 required
    //               ></textarea>
    //             </div>

    //             <button
    //               type="submit"
    //               className="btn btn-success p-2 m-4 w-100 fs-6 "
    //             >
    //               Submit
    //             </button>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <Navbar1 />
      <div className="container-wrapper">
        <div className="container card">
          <div className="contact-page ">
            <h2 className="mb-3">Reach out to us on: </h2>
            <i class="fa-brands fa-instagram fs-5">
              <span className="p-3">@party_hall123</span>
            </i>
            <br></br>
            <br></br>
            <i class="fa-brands fa-telegram fs-5">
              <span className="p-3">@party_hall</span>
            </i>
            <br></br>
            <br></br>
            <i class="fa-regular fa-envelope fs-5">
              {" "}
              <span className="p-3">@party_hall1@gmail.com</span>
            </i>
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
