import { useTheme } from '../context/ThemeContext';

 const Billing = () => {
     const { isDarkMode } = useTheme();
      
     return (
          <div className={`billing-container ${
               isDarkMode 
                 ? 'bg-dark-primary text-dark-text' 
                 : 'bg-light-primary text-light-text'
             } transition-colors duration-300`}>Bill</div>
     );
          }
 export default Billing;


