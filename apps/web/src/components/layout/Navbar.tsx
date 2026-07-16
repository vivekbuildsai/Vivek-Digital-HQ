import Container from "../shared/Container";
import { navigation } from "../../data/navigation";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <Container>
        <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl">
          <nav className="flex h-16 items-center justify-between px-6">
            <h1 className="text-2xl font-bold text-white">
              Vivek
              <span className="text-cyan-400">.</span>
            </h1>

            <div className="hidden gap-8 md:flex">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
