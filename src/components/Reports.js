import React, { useState } from 'react';
import ProductTable from '../data/ProductTable';
import { jsPDF } from 'jspdf';
import { FiDownload, FiEye, FiUpload } from 'react-icons/fi';
import { BiAnalyse } from 'react-icons/bi';

const Reports = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [reportTitle, setReportTitle] = useState('Product Report');
  const [reportDescription, setReportDescription] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const generatePDF = (isPreview = false) => {
    const doc = new jsPDF();
    
    doc.setFontSize(24);
    doc.text(reportTitle, 20, 20);
    
    if (reportDescription) {
      doc.setFontSize(12);
      doc.text(reportDescription, 20, 30);
    }
    
    if (uploadedImage) {
      doc.addImage(uploadedImage, 'JPEG', 20, 40, 50, 50);
    }
    
    const startY = uploadedImage ? 100 : 50;
    doc.setFontSize(14);
    doc.text('Email', 20, startY);
    doc.text('Phone', 70, startY);
    doc.text('Sign Up Date', 120, startY);
    doc.text('Account Type', 170, startY);
    
    let yPosition = startY + 10;
    ProductTable.forEach((item) => {
      doc.setFontSize(12);
      doc.text(item.email, 20, yPosition);
      doc.text(item.phoneNumber, 70, yPosition);
      doc.text(item.signUpDate, 120, yPosition);
      doc.text(item.accountType, 170, yPosition);
      yPosition += 10;
    });

    isPreview ? window.open(doc.output('bloburl'), '_blank') : doc.save(`${reportTitle.toLowerCase().replace(/\s+/g, '-')}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center space-x-3 mb-8">
          <BiAnalyse className="text-3xl text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-800">Report Generator</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">Report Title</label>
              <input
                type="text"
                value={reportTitle}
                onChange={(e) => setReportTitle(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter report title"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">Report Description</label>
              <textarea
                value={reportDescription}
                onChange={(e) => setReportDescription(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows="4"
                placeholder="Enter report description"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">Upload Logo/Image</label>
              <div className="flex items-center justify-center w-full">
                <label className="w-full flex flex-col items-center px-4 py-6 bg-white rounded-lg shadow-lg tracking-wide border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white transition-all">
                  <FiUpload className="text-2xl" />
                  <span className="mt-2 text-sm">Select an image</span>
                  <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center bg-gray-50 rounded-lg p-6">
            {uploadedImage ? (
              <img src={uploadedImage} alt="Preview" className="max-w-xs rounded-lg shadow-md" />
            ) : (
              <div className="text-center text-gray-500">
                <FiUpload className="text-4xl mx-auto mb-2" />
                <p>Image preview will appear here</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button
            onClick={() => generatePDF(true)}
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <FiEye />
            <span>Preview Report</span>
          </button>

          <button
            onClick={() => generatePDF(false)}
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FiDownload />
            <span>Download Report</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;