const brands = [
  "Disney",
  "Pixar",
  "Marvel",
  "Star Wars",
  "National Geographic",
];

export default function BrandRow() {
  return (
    <section className="px-10 py-8">
      <div className="grid grid-cols-5 gap-4">
        {brands.map((brand) => (
          <div
            key={brand}
            className="bg-[#1A1D29] h-32 rounded-xl flex items-center justify-center text-white font-bold hover:scale-105 transition"
          >
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}