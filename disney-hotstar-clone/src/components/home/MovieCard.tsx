type MovieCardProps = {
  title: string;
  image: string;
};

export default function MovieCard({
  title,
  image,
}: MovieCardProps) {
  return (
    <div className="min-w-[220px] cursor-pointer transition-transform duration-300 hover:scale-105">
      <img
        src={image}
        alt={title}
        className="rounded-xl h-[320px] w-full object-cover"
      />

      <h3 className="text-white mt-3 font-medium">
        {title}
      </h3>
    </div>
  );
}