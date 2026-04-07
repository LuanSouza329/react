"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/produtos", label: "Produtos" },
  { href: "/estados", label: "Estados" },
];

export function Topo() {
  const [menuAberto, setMenuAberto] = useState(false);

  function toggleMenu() {
    setMenuAberto((estadoAtual) => !estadoAtual);
  }

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <header className="bg-amber-600 text-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <div className="text-lg font-bold">LOGO</div>

        <nav className="hidden items-center gap-4 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded px-3 py-2 transition hover:bg-amber-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={toggleMenu}
          className="rounded border border-white px-3 py-2 md:hidden"
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          aria-controls="menu-mobile"
        >
          <span className="block h-0.5 w-5 bg-white"></span>
          <span className="mt-1 block h-0.5 w-5 bg-white"></span>
          <span className="mt-1 block h-0.5 w-5 bg-white"></span>
        </button>
      </div>

      {menuAberto && (
        <nav
          id="menu-mobile"
          className="flex flex-col gap-2 border-t border-amber-500 px-4 pb-4 md:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={fecharMenu}
              className="rounded px-3 py-2 transition hover:bg-amber-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
