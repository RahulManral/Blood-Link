import aboutimage from '../Images/aboutimage1.png';
import dashboard from '../Images/dashboard.png';
import find from '../Images/find.png';
import register from '../Images/Register.png';

const AboutUsCard = ({ title, description, image }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg border-4 border-black h-96 font-customFont w-80 transform transition-transform duration-300 hover:-translate-y-2">
      <img src={image} alt={title} className="w-44 h-44 p-4 "/>
      <div className="">
        <h2 className="block text-xl font-bold mb-2 text-center bg-red-400 bg-cover p-2">{title}</h2>
        <p className="text-gray-700 p-4 text-center">{description}</p>
      </div>
    </div>
  );
};

const AboutUsSection = () => {
  const cards = [
    {
      title: 'Our Mission',
      description: 'To save lives by facilitating blood donations and raising awareness about the importance of donating blood.',
      image: dashboard,
    },
    {
      title: 'Our Vision',
      description: 'A world where every patient in need of blood has access to safe and sufficient blood supplies.',
      image: find,
    },
    {
      title: 'Get Involved',
      description: 'Join us in our mission to save lives. Learn how you can help by donating blood or volunteering.',
      image: register,
    },
  ];

  return (
    <div className="max-w-7xl  p-6 sm:mx-6 lg:mx-20 xl:20">
      <div className="flex flex-col md:flex-row items-center p-6 bg-red-200 rounded-xl border-4 border-black">
        <div className="flex-1">
          <img
            src={aboutimage} // Replace with your image source
            alt="Blood Donation"
            className="max-w-xs"
          />
        </div>
        <div className="flex-col items-start p-4 font-customFont">
          <h2 className="text-2xl font-bold mb-2">About Us</h2>
          <p className="text-gray-600 font-semibold">
          At Blood-Link, our mission is to save lives by bridging the gap between blood donors and those in need. We are dedicated to fostering a community where compassion and generosity are at the forefront. Our goal is to make blood donation easy, accessible, and impactful for everyone involved.
          </p>
          <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
            Donate Now
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-14 mt-10">
        {cards.map((card, index) => (
          <AboutUsCard key={index} title={card.title} description={card.description} image={card.image} />
        ))}
      </div>
      <p className='bg-black mt-7 rounded-lg p-3  text-white font-customFont text-center  border-4 border-black font-bold'>
      24x7 availability of blood so that No one should die waiting for Blood, Blood should wait to give a life.
      </p>
    </div>
  );
};

export default AboutUsSection;