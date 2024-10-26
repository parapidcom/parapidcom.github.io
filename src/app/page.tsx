import React from 'react';
import Image from 'next/image';

// Metadata configuration would go in a separate layout.tsx or page.tsx file
export const metadata = {
  title: 'Gorunn by Parapidcom',
  icons: {
    icon: '/src/favicon.ico',
  },
};

const GorunnPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/parapidcom_logo.png"
              alt="Parapidcom Logo"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
            <span className="text-xl font-bold text-gray-600">Gorunn by Parapidcom</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Documentation</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Donate</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
            Dockerized Local Environment Manager
          </h1>
          <p className="mt-6 text-xl text-gray-500 flex items-center justify-center gap-2">
            <img src="/images/gorunn_logo.png" alt="Gorunn Logo" className="h-6 w-6 object-contain" />
            <span className="font-bold">gorunn</span> sets up and manages dockerized local environment with all your projects in single stack.
          </p>

          {/* Installation Command */}
          <div className="mt-8 inline-block">
            <div className="bg-gray-800 rounded-lg p-4">
              <code className="text-white font-mono text-sm sm:text-base">
                brew tap parapidcom/tap && brew install gorunn
              </code>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Paste that in a macOS Terminal or Linux shell prompt.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900">Wide</h3>
            <p className="mt-2 text-gray-600">
              Gorunn supports MySQL, PostgreSQL, Opensearch, Chroma and Redis databases. From the language side, Python, PHP and NextJS (node) are supported.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900">Collaborative</h3>
            <p className="mt-2 text-gray-600">
              Gorunn provides easy way to implement it organisation-wide and share project stack and secrets with other team members.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900">AI Powered</h3>
            <p className="mt-2 text-gray-600">
              Unleash full power of OpenAI or Claude with <a href="https://aider.chat/" className="text-base text-gray-900 hover:text-blue-900">Aider</a> impelementation
            </p>
          </div>
        </div>

        {/* Documentation Preview */}
        <div className="mt-20">
  <h2 className="text-3xl font-bold text-gray-900">Quick Start</h2>
  <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
    <pre className="bg-black p-4 rounded overflow-x-auto">
    <h6 className="text-xl font-bold text-gray-100">1. Fork example projects stack https://github.com/parapidcom/gorunn-example-projects</h6>
    <h6 className="text-xl font-bold text-gray-100">2. Initialize gorunn cli and follow setup</h6>
      <code className="text-sm font-mono text-green-400">
        {`
        $ gorunn init
        `}
      </code>
    <h6 className="text-xl font-bold text-gray-100">3. Parse projects</h6>
      <code className="text-sm font-mono text-green-400">
        {`
        $ gorunn parse
        `}
      </code>
    <h6 className="text-xl font-bold text-gray-100">4. Build all projects</h6>
      <code className="text-sm font-mono text-green-400">
        {`
        $ gorunn build --app all
        `}
      </code>
    </pre>
  </div>
</div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-24">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Documentation</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Installation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Usage
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Community</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 text-center">
              &copy; {new Date().getFullYear()} Parapidcom. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GorunnPage;
