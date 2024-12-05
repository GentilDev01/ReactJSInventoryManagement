import { motion } from "framer-motion";
import AppBar from "./AppBar";
import { MdOutlineInventory } from "react-icons/md";
import { FcAlarmClock, FcCalendar } from "react-icons/fc";
import { BsTools } from "react-icons/bs";
import { useTheme } from '../context/ThemeContext';

const HomePage = () => {
  const { isDarkMode } = useTheme();
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
      <main className={`min-h-screen ${
       isDarkMode 
      ? 'bg-dark-primary text-dark-text' 
      : 'bg-light-primary text-light-text'
} transition-colors duration-300`}>
        <div className="w-full mt-16">
        {/* Hero Section */}
        <motion.section 
          className="container mx-auto px-4 py-16 flex flex-col items-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1 
            className="text-6xl font-bold text-center mb-6"
            variants={fadeInUp}
          >
            Take Control Of Your Inventory
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 text-center max-w-2xl mb-12"
            variants={fadeInUp}
          >
            Track, Manage, and Optimize your inventory with our powerful platform
          </motion.p>

          <motion.div 
            className="bg-[#DCDFE8] rounded-2xl p-8 w-full max-w-4xl shadow-lg"
            variants={fadeInUp}
          >
            {/* Hero image/animation placeholder */}
          </motion.div>
        </motion.section>

        {/* Features Grid */}
        <motion.section 
          className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Feature cards with consistent sizing */}
          <motion.div 
            className="feature-card bg-white rounded-xl shadow-lg p-8"
            variants={fadeInUp}
          >
            <div className="bg-black rounded-xl h-64 mb-6" />
            <h2 className="text-2xl font-bold mb-4">Real-Time Chat for Seamless Collaboration</h2>
            <p className="text-gray-600">Chat with your team, clients, and suppliers in real-time</p>
          </motion.div>
          
          {/* Add more feature cards similarly */}
        </motion.section>

        {/* Benefits Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-4xl font-bold text-center mb-12"
              variants={fadeInUp}
            >
              Our Benefits
            </motion.h2>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
            >
              {/* Benefit cards with consistent styling */}
              <motion.div 
                className="benefit-card bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <div className="bg-[#6636F8] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <MdOutlineInventory className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Stock Management</h3>
                <p className="text-gray-600">Efficiently manage and track your inventory in real-time</p>
                <button className="mt-4 px-6 py-2 border border-[#6636F8] text-[#6636F8] rounded-lg hover:bg-[#6636F8] hover:text-white transition-colors">
                  Learn More
                </button>
              </motion.div>

              <motion.div 
                className="benefit-card bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <div className="bg-[#EC8441] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <FcAlarmClock className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Real-time Updates</h3>
                <p className="text-gray-600">Efficiently manage and track your inventory in real-time</p>
                <button className="mt-4 px-6 py-2 border border-[#EC8441] text-[#EC8441] rounded-lg hover:bg-[#EC8441] hover:text-white transition-colors">
                  Learn More
                </button>
              </motion.div>

              <motion.div 
                className="benefit-card bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <div className="bg-[#6CC489] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <FcCalendar className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Time Tracking</h3>
                <p className="text-gray-600">Efficiently manage and track your inventory in real-time</p>
                <button className="mt-4 px-6 py-2 border border-[#6CC489] text-[#6CC489] rounded-lg hover:bg-[#6CC489] hover:text-white transition-colors">
                  Learn More
                </button>
              </motion.div>

              <motion.div 
                className="benefit-card bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
                variants={fadeInUp}
              >
                <div className="bg-[#6D9EC4] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BsTools className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">Collaboration Tools</h3>
                <p className="text-gray-600">Efficiently manage and track your inventory in real-time</p>
                <button className="mt-4 px-6 py-2 border border-[#6D9EC4] text-[#6D9EC4] rounded-lg hover:bg-[#6D9EC4] hover:text-white transition-colors">
                  Learn More
                </button>
              </motion.div>
              

            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#F6F6F6] py-16">
          <div className="container mx-auto px-4">
           

          </div>
        </footer>
      </div>
    </main>
  );
};

export default HomePage;