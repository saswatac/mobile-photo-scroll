import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faPhone, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const photos = [
  {
    src: "photos/photo1.png",
    caption: "",
  },
  {
    src: "photos/photo2.jpg",
    caption: "",
  },
  {
    src: "photos/photo3.png",
    caption: "",
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-screen w-screen flex flex-col relative" style={{ backgroundColor: 'black' }}>
      {/* Menu Toggle Button and Items Container */}
      <div className="fixed top-4 left-0 w-full z-50 flex items-center px-4">
        {/* Menu Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-transparent hover:bg-white/10 p-3 transition-all duration-200 relative z-10 focus:outline-none"
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon 
            icon={isMenuOpen ? faTimes : faBars}
            className="text-white"
            style={{ color: 'white' }}
          />
        </button>

        {/* Horizontal Menu Items */}
        <div
          className={`flex items-center gap-3 ml-3 transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex items-center gap-2 p-2 bg-gray-900/90 rounded-lg shadow-lg">
            <FontAwesomeIcon icon={faPhone} style={{ color: 'white' }} className="text-green-400" />
            <a
              href="tel:+918240596697"
              className="text-white hover:text-green-400 transition-colors text-sm"
            >
              8240596697
            </a>
          </div>
          <div className="flex items-center gap-2 p-2 bg-gray-900/90 rounded-lg shadow-lg">
            <FontAwesomeIcon icon={faLocationPin} style={{ color: 'white' }} className="text-red-400" />
            <a
              href="https://maps.app.goo.gl/PQYx8eLcVFYWyeBz6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-400 transition-colors text-sm"
              aria-label="View Location"
            >
              SonarTari
            </a>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-y-scroll snap-y snap-mandatory">
        {photos.map((photo, idx) => (
          <div
            key={idx}
            className="h-screen w-screen snap-start flex flex-col"
          >
            {/* Image takes up available vertical space except for caption */}
            <img
              src={photo.src}
              alt={photo.caption}
              className="flex-grow w-full object-contain"
              loading="lazy" // Enable native lazy loading
            />

            {/* Caption is in normal flow, always visible at bottom */}
            {photo.caption && (
              <div className="w-full bg-white/80 px-4 py-3 text-center">
                <h2 className="text-lg text-black font-medium">{photo.caption}</h2>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
