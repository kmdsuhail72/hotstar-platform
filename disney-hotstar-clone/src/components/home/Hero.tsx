export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 px-10 max-w-3xl text-white">
        <h1 className="text-6xl font-bold mb-6">
          Avengers: Endgame
        </h1>

        <p className="text-lg text-gray-300 mb-8">
          After the devastating events of Infinity War,
          the Avengers assemble one final time.
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-lg">
            Watch Now
          </button>

          <button className="bg-gray-700 px-6 py-3 rounded-lg">
            + Watchlist
          </button>
        </div>
      </div>
    </section>
  );
}