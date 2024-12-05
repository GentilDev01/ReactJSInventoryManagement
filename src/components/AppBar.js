import { useState, useEffect } from 'react';
import { IoIosArrowDown, IoIosNotificationsOutline } from "react-icons/io"; 
import { FaShopify, FaSearch, FaRobot } from "react-icons/fa";
import { MdOutlineSettingsSuggest, MdOutlinePersonOutline } from "react-icons/md";
import { GiBookCover } from "react-icons/gi";
import { LuActivitySquare } from "react-icons/lu";
import { AiFillProduct } from "react-icons/ai";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { TbReport } from "react-icons/tb";
import Switch from "../utils/Switch";
import { Link } from 'react-router-dom';
import { auth } from '../firebase/Config';
import AuthModal from '../auth/AuthModal';
import { Toaster, toast } from 'react-hot-toast';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';

const AppBar = () => {
  const [user, setUser] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { t } = useTranslation();
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0 pt-0.5">
                <img
                  className="h-10 w-10 rounded-full"
                  src={auth.currentUser?.photoURL}
                  alt=""
                />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Welcome {auth.currentUser?.displayName}!
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Successfully signed in
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      ), {
        duration: 4000,
        position: 'top-right',
      });
    } catch (error) {
      toast.error('Login failed. Please try again.', {
        style: {
          border: '1px solid #FF0000',
          padding: '16px',
          color: '#FF0000',
        },
        iconTheme: {
          primary: '#FF0000',
          secondary: '#FFFFFF',
        },
        duration: 4000,
      });
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('Successfully logged out!', {
        icon: '👋',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
        duration: 4000,
      });
    } catch (error) {
      toast.error('Logout failed');
    }
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
          <Toaster />
          <nav className={`sticky overflow-hidden top-0 left-0 right-0 z-20 ${
            isDarkMode 
              ? 'bg-dark-primary text-dark-text border-dark-accent' 
              : 'bg-light-primary text-light-text border-light-accent'
          } transition-colors duration-300`}>
        {/*TODO:Upper Bar */}   
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">  
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
          <Link to="/" className="nav-link"><span className="text-white text-xl font-bold">G</span></Link>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{user.displayName}</span>
                  <IoIosArrowDown className="text-gray-500" />
                </div>
                <button onClick={handleLogout} className="text-sm text-gray-600">
                  {t('logout')}
                </button>
              </>
            ) : (
              <button
                onClick={handleGoogleLogin}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg flex items-center space-x-2 hover:bg-gray-50"
              >
                <img src="/google-icon.png" alt="Google" className="w-5 h-5" />
                <span>{t('signInWithGoogle')}</span>
              </button>
            )}
            
          </div>

          <div className="flex items-center space-x-2 px-3 py-1.5 bg-gray-100 rounded-lg">
            <FaShopify className="text-gray-600" />
            <span className="text-sm font-medium">{t('SteelSHop')}</span>
            <IoIosArrowDown className="text-gray-500" />
          </div>
        </div>

        {/* Center Section - Search */}
        <div className="flex-1 max-w-xl mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder={t('search')}
              className="w-full pl-4 pr-10 py-2 rounded-xl border border-gray-200 focus:border-blue-500 
                focus:ring-2 focus:ring-blue-200 transition-all outline-none"
            />
            <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <IoIosNotificationsOutline className="text-xl text-gray-600 hover:text-blue-600 cursor-pointer" />
           <Link to='/Settings' className="nav-link">
          <MdOutlineSettingsSuggest className="text-xl text-gray-600 hover:text-blue-600 cursor-pointer" />
          </Link>
          <div className="flex items-center space-x-2">
            <Switch onChange={toggleTheme} checked={isDarkMode} />
            <span className="text-sm font-medium">{t('darkMode')}</span>
          </div>

          <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg 
            flex items-center space-x-1 hover:opacity-90 transition-opacity">
            <span>{t('create')}</span>
            <IoIosArrowDown />
          </button>
        </div>
      </div>
   

      {/* TODO:Lower Bar */}

      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/*TODO:Leftside*/}
          <div className="">
            <div className="flex items-center space-x-6 text-lg font-medium">
             <Link to="/" className="nav-link">
               <span className="flex items-center space-x-3">
                <GiBookCover />
                 {t('overview')}
               </span></Link>
                
               <span className="flex items-center space-x-3">
                <LuActivitySquare />
                 {t('activities')}
               </span>
               
               

               <Link to="/products" className="nav-link">
               <span className="flex items-center space-x-3">
                <AiFillProduct />
                 {t('products')}
               </span> </Link>
                
               <Link to="/billing" className="nav-link">
               <span className="flex items-center space-x-3">
               <LiaMoneyBillWaveAltSolid />
                 {t('billing')}
               </span></Link>
               
               <Link to="/people" className="nav-link">
               <span className="flex items-center space-x-3">
               <MdOutlinePersonOutline />
                 {t('client')}
               </span></Link>

               <Link to="/Dashboard" className="nav-link">
               <span className="flex items-center space-x-3">
               <MdOutlinePersonOutline />
                 {t('dashboard')}
               </span></Link>

               <Link to="/reports" className="nav-link">
               <span className="flex items-center space-x-3">
                <TbReport />
                 {t('report')}
               </span></Link>

            </div>
          </div>

          {/*TODO:Rightside*/}
          <div>
          
          </div>
      </div>
        
        {/* {!user && (
          <button
            onClick={() => setIsAuthModalOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Sign In
          </button>
        )} */}
        <hr className='bg-black text-lg w-dvw'/>
      </nav>

      {isAuthModalOpen && (
        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={() => setIsAuthModalOpen(false)}
          // TODO:nakayigize Off nuko ntararangiza kuyikorera so display yayo iraba none for now
        />
      )}
    </div>
  );
}

export default AppBar;
