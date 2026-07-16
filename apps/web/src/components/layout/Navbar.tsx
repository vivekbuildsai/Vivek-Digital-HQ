import { NavLink } from "react-router-dom";

import Container from "../shared/Container";
import { navigation } from "../../data/navigation";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <Container>
        <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl">
          <nav className="flex h-16 items-center justify-between px-6">
            <NavLink
              to="/"
              className="text-2xl font-bold text-white"
            >
              Vivek
              <span className="text-cyan-400">.</span>
            </NavLink>

            <div className="hidden gap-8 md:flex">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `transition ${
                      isActive
                        ? "text-cyan-400"
                        : "text-slate-300 hover:text-cyan-400"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
