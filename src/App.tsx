import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons';

const photos = [
  {
    src: "photos/photo1.png",
    caption: "",
  },
  {
    src: "photos/photo2.jpg",
    caption: "Quiet Forest Path",
  },
  {
    src: "photos/photo3.png",
    caption: "",
  },
];

export default function App() {
  return (
    <div className="h-screen w-screen flex flex-col">
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
      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-4 px-6 flex flex-row items-center justify-between">
        <span className="flex items-center gap-2">
          <FontAwesomeIcon icon={faPhone} />
          <a href="tel:+918240596697" className="underline">8240596697</a>
        </span>
        <span className="flex items-center gap-2">
          <FontAwesomeIcon icon={faLocationPin} className="mr-2" />
          <a
            href="https://maps.app.goo.gl/PQYx8eLcVFYWyeBz6"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            aria-label="View Location"
          >
            SonarTari
          </a>
        </span>
      </footer>
    </div>
  );
}
