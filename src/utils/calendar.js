import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import { motion } from 'framer-motion';
import 'react-calendar/dist/Calendar.css';
     
const Calend = () => {
  const [value, setValue] = useState(new Date());

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-4"
    >
      <Calendar
        onChange={setValue}
        value={value}
        className="rounded-xl border-none shadow-lg"
        tileClassName={({ date, view }) => 
          view === 'month' && date.getDay() === 0 ? 'text-red-500' : null
        }
        tileContent={({ date, view }) => 
          view === 'month' && date.getDate() < 7 ? 
          <div className="dot bg-blue-500 w-1 h-1 rounded-full mx-auto mt-1"></div> : null
        }
      />
    </motion.div>
  );
};

export default Calend;