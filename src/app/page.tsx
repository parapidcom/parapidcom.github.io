'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './fonts.css';
import CookieModal from './components/CookieModal';

const GorunnPage = () => {
  return (
    <div className="min-h-screen bg-[#f5f7f5]">
       <CookieModal />
      {/* Header */}
      <header className="bg-white shadow-sm bg-[#f4feeb]">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-0">
  <Image
    src="/images/parapidcom_logo.png"
    alt="Parapidcom Logo"
    width={32}
    height={32}
    className="object-contain"
    priority
  />
  <span className="text-xl font-bold text-[#1a3a1a]">
    arapidcom
  </span>
</Link>


        </div>
          <div className="flex space-x-6">
            <Link
              href="mailto:goran@parapid.com"
              className="text-[#1a3a1a] hover:text-[#2d5a2d]"
            >
              Contact Me
            </Link>
            <Link
              href="/about"
              className="text-[#1a3a1a] hover:text-[#2d5a2d]"
            >
              About Me
            </Link>
            <Link
              href="/donate"
              className="text-[#1a3a1a] hover:text-[#2d5a2d]"
            >
              Donate
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/images/parapidcom_logo.png" alt="Parapidcom Logo" style={{ marginRight: '8px' }} />
          arapidcom
        </h1>
        <h1 className="text-2xl font-bold italic text-gray-800 sm:text-2xl">
          Building Tools for Devs
        </h1>
        <p className="mt-6 text-xl text-gray-500 flex items-center justify-center gap-2">
          At Parapidcom we strive to bring ease to the development process.
        </p>
      </div>


        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Link
              href="https://gorunn.io"
              className="text-[#1a3a1a] hover:text-[#2d5a2d]"
            >
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-[#1a3a1a]">
              <span className="ethnocentric font-bold">gorunn</span>
            </h3>
            <p className="mt-2 text-gray-600">
              Set up and manage local develop environments in Docker with ease, in minutes.
            </p>
          </div>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-24">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <p className="text-base text-gray-400 text-center">
              &copy; {new Date().getFullYear()}{' '}
              <a href="https://github.com/donparapidos" className="hover:underline text-gray-900">
                Parapidcom by Donparapidos
              </a>{' '}
              All rights reserved.
            </p>
        </div>
      </footer>
    </div>
  );
};

export default GorunnPage;
