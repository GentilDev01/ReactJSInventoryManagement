import React from 'react';
import { motion } from 'framer-motion';
import { Bar } from 'react-chartjs-2';
import Calend from '../utils/calendar';
import Heatmap from '../utils/heatmap';
import { useTheme } from '../context/ThemeContext';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
     const { isDarkMode } = useTheme();

     const chartData = {
       labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
       datasets: [{
         label: 'Sales 2023',
         data: [12, 19, 3, 5, 2, 3],
         backgroundColor: 'rgba(54, 162, 235, 0.5)',
       }]
     };

     const chartOptions = {
       responsive: true,
       scales: {
         x: {
           type: 'category',
           grid: {
             display: false
           }
         },
         y: {
           beginAtZero: true,
           grid: {
             borderDash: [2, 4]
           }
         }
       },
       plugins: {
         legend: {
           position: 'top'
         }
       },
       animation: {
         duration: 2000,
         easing: 'easeInOutQuart'
       }
     };

     return (
       <main className={`w-full flex flex-col h-full mt-32 relative ${isDarkMode ? 'bg-gray-900' : 'bg-white'} p-6`}>
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
         >
           {/* Stats Cards */}
           <motion.div 
             whileHover={{ scale: 1.02 }}
             className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-xl shadow-lg"
           >
             <h3 className="text-white text-xl font-bold">Total Revenue</h3>
             <p className="text-white text-3xl font-bold mt-2">$24,567</p>
           </motion.div>

           {/* Calendar Section */}
           <div className="col-span-2 bg-white rounded-xl shadow-lg p-4">
             <Calend />
           </div>

           {/* Analytics Graph */}
           <div className="col-span-2 bg-white rounded-xl shadow-lg p-4">
             <Bar data={chartData} options={chartOptions} />
           </div>

           {/* 3D Heatmap */}
           <div className="col-span-3 bg-white rounded-xl shadow-lg p-4 h-[400px]">
             <Heatmap />
           </div>
         </motion.div>
       </main>
     );
}

export default Dashboard;