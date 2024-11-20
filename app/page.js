"use client"; // Client Component for interactivity

import Head from 'next/head';
import Navbar from './components/Navbar';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-white to-blue-100 p-4">
      <Head>
        <title>Smart Yoga Products</title>
        <meta name="description" content="Buy the best smart yoga products" />
      </Head>

      <Navbar />

      <main className="flex flex-col items-center justify-center py-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">Welcome to Smart Yoga Products</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">Discover the best in smart yoga technology to enhance your practice.</p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-colors">
          Shop Now
        </button>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Follow Us on Instagram</h2>
          <a href="https://www.instagram.com/rootsyogaproducts" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors underline">
            Visit our Instagram Profile
          </a>
        </div>
      </main>
    </div>
  );
}
