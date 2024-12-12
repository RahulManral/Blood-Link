import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API)
    console.log(formData);
  };

  return (
    <section className="py-6 bg-red-100 font-customFont">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-3">Contact Us</h2>
        <p className="text-lg text-center mb-6">
          We’d love to hear from you! Please fill out the form below or reach us via the provided contact details.
        </p>

        <div className="flex justify-center mb-10">
          <form 
            onSubmit={handleSubmit} 
            className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg border-2 border-black"
          >
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                rows="4"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-red-600 text-white hover:bg-red-500 py-2 rounded transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
          <p>Email: support@blooddonation.org</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Blood Donation St, City, State, ZIP</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;