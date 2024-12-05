import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StarIcon } from '@heroicons/react/solid';
import { toast } from 'react-hot-toast';
import { useTheme } from '../context/ThemeContext';

const People = () => {
    const { isDarkMode } = useTheme();
    const [people, setPeople] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('people');

    // Mock reviews data
    const reviews = [
        {
            id: 1,
            name: "Sarah Johnson",
            email: "sarah.j@example.com",
            picture: "https://i.pinimg.com/736x/4f/e5/6c/4fe56c504a8be7f1e61533c6857e5812.jpg",
            rating: 5,
            reason: "Excellent inventory management system. Helped streamline our entire process.",
            date: "2023-10-15"
        },
         {
            id: 2,
            name: "John Smith",
            email: "john.smith@example.com",
            picture: "https://i.pinimg.com/736x/b1/62/0d/b1620d95790926a1da47fd3bd9ea267b.jpg",
            rating: 4,
            reason: "Great customer support. Helped us resolve a few issues.",
            date: "2023-10-14"
        },
        {
            id: 3,
            name: "Emily Davis",
            email: "emily.d@example.com",
            picture: "https://randomuser.me/api/portraits/women/3.jpg",
            rating: 5,
            reason: "Excellent inventory management system. Helped streamline our entire process.",
            date: "2023-10-13"
        },
    ];

    useEffect(() => {
        fetchPeople();
    }, []);

    const fetchPeople = async () => {
        try {
            const response = await axios.get('https://randomuser.me/api/?results=10');
            setPeople(response.data.results);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching people:', error);
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen mt-32 bg-gradient-to-b  from-gray-50 to-gray-100">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Navigation Tabs */}
                <div className="flex space-x-4 mb-8 bg-white p-2 rounded-lg shadow-sm">
                    <button
                        onClick={() => setActiveTab('people')}
                        className={`px-6 py-3 rounded-lg transition-all ${
                            activeTab === 'people' 
                            ? 'bg-blue-600 text-white shadow-lg' 
                            : 'hover:bg-gray-100'
                        }`}
                    >
                        Team Members
                    </button>
                    <button
                        onClick={() => setActiveTab('reviews')}
                        className={`px-6 py-3 rounded-lg transition-all ${
                            activeTab === 'reviews' 
                            ? 'bg-blue-600 text-white shadow-lg' 
                            : 'hover:bg-gray-100'
                        }`}
                    >
                        Customer Reviews
                    </button>
                </div>

                {activeTab === 'people' ? (
                    <>
                        {/* Search Bar */}
                        <div className="relative mb-8">
                            <input
                                type="text"
                                placeholder="Search by name or country..."
                                className="w-full max-w-2xl px-6 py-4 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                🔍
                            </span>
                        </div>

                        {/* Team Members Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {people.map((person, index) => (
                                <div className={`card ${
                                  isDarkMode 
                                    ? 'bg-dark-secondary text-dark-text hover:bg-dark-accent' 
                                    : 'bg-light-secondary text-light-text hover:bg-light-accent'
                                } transition-all duration-300`}>
                                    <div className="relative h-64">
                                        <img
                                            src={person.picture.large}
                                            alt={`${person.name.first} ${person.name.last}`}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                                            <div className="absolute bottom-4 left-4">
                                                <h3 className="text-white text-2xl font-bold">
                                                    {person.name.first} {person.name.last}
                                                </h3>
                                                <p className="text-gray-200 mt-1">
                                                    {person.location.city}, {person.location.country}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 space-y-3">
                                        <div className="flex items-center space-x-2">
                                            <span className="text-blue-600">📧</span>
                                            <p className="text-gray-600">{person.email}</p>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-green-600">📱</span>
                                            <p className="text-gray-600">{person.phone}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    // Reviews Section
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {reviews.map(review => (
                            <div key={review.id} className="bg-white p-6 rounded-2xl shadow-lg">
                                <div className="flex items-center space-x-4">
                                    <img 
                                        src={review.picture} 
                                        alt={review.name}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    <div>
                                        <h3 className="font-bold text-lg">{review.name}</h3>
                                        <p className="text-gray-600 text-sm">{review.email}</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex items-center space-x-1 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <StarIcon 
                                                key={i}
                                                className={`h-5 w-5 ${
                                                    i < review.rating 
                                                    ? 'text-yellow-400' 
                                                    : 'text-gray-300'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-gray-700">{review.reason}</p>
                                    <p className="text-gray-400 text-sm mt-2">{review.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default People;