'use client'

import Image from 'next/image'
import Link from 'next/link'

const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tipo de Ambientes', href: '#ambientes' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  return (
    <header className="w-full bg-[#5D3171]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/img/logo/logoBranco.png"
            alt="WingHub"
            width={180}
            height={42}
            priority
          />
        </div>

        {/* Navegação */}
        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-light text-white/90 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Botão Entrar */}
        <Link
          href="/login"
          className="rounded-full bg-[#4BB37C] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#43a97a]"
        >
          Entrar
        </Link>
      </div>
    </header>
  )
}
