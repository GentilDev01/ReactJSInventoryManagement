import { useState } from 'react';
import { auth } from '../firebase/Config';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  RecaptchaVerifier,
  signInWithPhoneNumber 
} from 'firebase/auth';

const AuthModal = ({ isOpen, onClose }) => {
  const [authMethod, setAuthMethod] = useState('email');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone: ''
  });

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  const handlePhoneAuth = async () => {
    const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
    try {
      const confirmation = await signInWithPhoneNumber(auth, formData.phone, recaptchaVerifier);
      // Handle confirmation code verification
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="modal p-6 bg-white rounded-xl shadow-lg mt-44">
      <div className="flex space-x-4 mb-4">
        <button 
          onClick={() => setAuthMethod('email')}
          className={`px-4 py-2 rounded ${authMethod === 'email' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Email
        </button>
        <button 
          onClick={() => setAuthMethod('phone')}
          className={`px-4 py-2 rounded ${authMethod === 'phone' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Phone
        </button>
      </div>

      {authMethod === 'email' ? (
        <form onSubmit={handleEmailSignIn}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-3 border rounded"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-3 border rounded"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
            Sign In
          </button>
        </form>
      ) : (
        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-2 mb-3 border rounded"
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          <div id="recaptcha-container"></div>
          <button 
            onClick={handlePhoneAuth}
            className="w-full bg-blue-600 text-white p-2 rounded"
          >
            Send Code
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthModal;