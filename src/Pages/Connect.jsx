import React, { useState } from 'react';

const ConnectPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const donors = [
    { name: 'John Doe', bloodType: 'A+', location: 'Central and Western', number: '12345678' },
    { name: 'Jane Smith', bloodType: 'B-', location: 'Kowloon City', number: '87654321' },
    { name: 'Alice Wong', bloodType: 'O+', location: 'Sha Tin', number: '23456789' },
    { name: 'Bob Chan', bloodType: 'AB+', location: 'Eastern', number: '98765432' },
    // Add more donors as needed
  ];

  // Filter donors based on search query
  const filteredDonors = donors.filter(donor =>
    donor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 font-customFont">
      <h1 className="text-3xl font-bold mb-6 text-center">Connect with <spam className="text-red-500">Blood Donors</spam></h1>

      {/* Search Input */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search Donors..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="border-2 border-black rounded-md p-2 w-full max-w-lg"
        />
      </div>

      <div className="overflow-auto rounded-md text-xl font-customFont">
        <table className="min-w-full bg-white border-4 border-black text-center shadow-md font-customFont">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-3 px-4 border-b">Donor Name</th>
              <th className="py-3 px-4 border-b text-red-600">Blood Type</th>
              <th className="py-3 px-4 border-b">Location (District)</th>
              <th className="py-3 px-4 border-b">Contact Number</th>
            </tr>
          </thead>
          <tbody>
            {filteredDonors.map((donor, index) => (
              <tr key={index} className="hover:bg-gray-100 ">
                <td className="py-3 px-4 border-b">{donor.name}</td>
                <td className="py-3 px-4 border-b text-red-600">{donor.bloodType}</td>
                <td className="py-3 px-4 border-b">{donor.location}</td>
                <td className="py-3 px-4 border-b">{donor.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConnectPage;