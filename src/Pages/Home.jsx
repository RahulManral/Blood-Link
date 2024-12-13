import Hompage from '../Images/Homepage.png'

const Home = () => {
  return (
    <section 
      className="flex items-center justify-start h-screen bg-cover bg-center text-white text-center  relative bg-home" 
    >
      <div className="max-w-4xl p-6 mx-2  text-left font-customFont">
        <h1 className="text-5xl md:text-6xl text-red-900 font-bold">
          Save Lives, 
        </h1>
        <h1 className="text-5xl md:text-6xl text-red-900 font-bold mb-4">
          Donate Blood 
        </h1>
        <p className="text-lg md:text-2xl text-red-900  mb-6 flex items-center max-w-lg">
          Your donation can make a difference in someone's life. Join us in our mission to save lives through blood donation.
        </p>
        <a 
          href="/donate" 
          className="bg-red-600 text-white-600 hover:bg-white-200 hover:text-red-800 px-6 py-3 rounded transition duration-200 font-semibold"
        >
          Donate Now
        </a>
      </div>
    </section>
  );
}

export default Home; 