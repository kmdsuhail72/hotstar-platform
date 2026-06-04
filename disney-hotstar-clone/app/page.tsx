import Sidebar from "@/src/components/sidebar/Sidebar";
import Hero from "@/src/components/home/Hero";
import BrandRow from "@/src/components/home/BrandRow";
import MovieRow from "@/src/components/home/MovieRow";

export default function Home() {
  return (
    <main className="bg-[#0F1014] min-h-screen ml-20">
      <Sidebar />
      <Hero />
      <BrandRow />
      <MovieRow />
    </main>
  );
}