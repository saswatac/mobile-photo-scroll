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
    <div className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory">
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
  );
}
