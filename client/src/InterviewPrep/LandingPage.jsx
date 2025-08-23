import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBrain } from "react-icons/fa";
import Hero from "../assets/Hero.png";
import { FaBolt } from "react-icons/fa";
import { APP_FEATURES } from "../utils/data";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleCTA = () => {
    console.log("CTA Clicked");
    // You can add navigation logic here, for example:
    // navigate('/signup');
  };

  const handleLoginSignup = () => {
    console.log("Login/Signup clicked");
    // You can add navigation logic here, for example:
    navigate('/login');
  };

  return (
    <>
      <div className="min-h-screen bg-[#1e1e2f] text-white flex flex-col">
        {/* Header */}
        <header className="w-full px-6 py-4 flex justify-between items-center shadow-md bg-[#1e1e2f] z-10">
          <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
            <FaBrain className="text-yellow-400" />
            AI InterviewPrep
          </h1>
          <button
            onClick={handleLoginSignup}
            className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
          >
            Login / Signup
          </button>
        </header>

        {/* Hero Text Section */}
        <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-12">
          <div className="flex items-center gap-3 mb-6">
            <FaBolt
              className="text-yellow-400 text-3xl sm:text-4xl animate-pulse"
              aria-hidden="true"
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              AI-Powered Interview Prep
            </h1>
          </div>

          <p className="text-base sm:text-lg md:text-xl max-w-3xl text-gray-300 mb-10 leading-relaxed">
            Supercharge your job hunt with{" "}
            <span className="text-yellow-400 font-semibold">
              real-time, AI-generated questions
            </span>{" "}
            tailored to your skills.
            <br className="hidden sm:block" />
            Practice smarter, track your progress, and walk into interviews with
            unshakeable confidence.
            <br className="hidden sm:block" />
            Your personal interview coach —{" "}
            <span className="text-blue-400 font-semibold">powered by AI</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button
              onClick={handleCTA}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-sm sm:text-base px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
              aria-describedby="cta-description"
            >
              <span className="flex items-center gap-2">
                Get Started Free
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>

            <p id="cta-description" className="text-sm text-gray-400">
              No credit card required • 2 minutes setup
            </p>
          </div>

         
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              1000+ Questions Database
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              Real-time Feedback
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
              Progress Tracking
            </div>
          </div>
        </main>
      </div>
      {/* Separate Hero Image Section with fixed height and 85% width */}
      <div className="bg-[#1e1e2f] flex justify-center items-center py-12">
        <div className="w-[85%] h-[600px]">
          <img
            src={Hero}
            alt="Hero"
            className="w-full h-full object-cover rounded-xl shadow-2xl"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#1e1e2f] py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-white text-4xl font-bold mb-12">
            Features That Make You Better
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
            {APP_FEATURES.slice(0, 3).map((feature) => (
              <div
                key={feature.id}
                className="bg-[#2e2e3e] rounded-2xl shadow-lg p-8 min-h-[320px] flex flex-col gap-4 hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-blue-400 text-3xl mb-2">
                  
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m4-4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
                    />
                  </svg>
                </div>
                <h3 className="text-white text-2xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-b from-[#1e1e2f] to-[#151525] border-t border-gray-700/50">
        <footer className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <FaBolt className="text-yellow-400 text-xl" />
                <h3 className="text-white font-bold text-lg">
                  AI Interview Prep
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Your AI-powered interview coach. Practice smarter, perform
                better.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.030-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
                Product
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Question Bank
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Progress Tracking
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
                Support
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
                Stay Updated
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                Get interview tips and product updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700/50 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-xs text-gray-400">
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>

            <div className="text-xs text-gray-400 text-center sm:text-right">
              © {new Date().getFullYear()} InterviewPrep AI. All rights
              reserved.
              <br className="sm:hidden" />
              <span className="hidden sm:inline mx-2">•</span>
              Made with ❤️ in India
            </div>
          </div>

          {/* Optional: Back to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 z-50"
            aria-label="Back to top"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;