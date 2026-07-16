import Background from "./components/ui/Background";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Journey from "./components/sections/Journey";

export default function App() {
  return (
    <>
      <Background />
      <Navbar />

      <main className="relative text-white">
        <Hero />
        <Journey />
      </main>
    </>
  );
}
