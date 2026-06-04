import MovieCard from "./MovieCard";

const movies = [
  {
    title: "Avengers",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c",
  },
  {
    title: "Batman",
    image:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1",
  },
  {
    title: "Joker",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
  },
];

export default function MovieRow() {
  return (
    <section className="px-10 py-10">
      <h2 className="text-white text-3xl font-bold mb-6">
        Trending Movies
      </h2>

      <div className="flex gap-6 overflow-x-auto">
        {movies.map((movie) => (
          <MovieCard
            key={movie.title}
            title={movie.title}
            image={movie.image}
          />
        ))}
      </div>
    </section>
  );
}