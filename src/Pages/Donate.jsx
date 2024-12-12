import { useState } from 'react'
const Donate = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        bloodType: '',
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
        <section className="py-6 bg-red-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-3">Become a <spam className="text-red-600">Donor</spam></h2>
            <p className="text-lg text-center mb-6">
              Your donation can save lives! Please fill out the form below to get started.
            </p>
            
            <div className="flex justify-center">
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
                  <label className="block text-gray-700" htmlFor="phone">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700" htmlFor="bloodType">Blood Type</label>
                  <select 
                    id="bloodType" 
                    name="bloodType" 
                    value={formData.bloodType} 
                    onChange={handleChange} 
                    required 
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  >
                    <option value="">Select your blood type</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700" htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    rows="4"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-red-600 text-white hover:bg-red-500 py-2 rounded transition duration-200"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      );
    };

 
export default Donate;