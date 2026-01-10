'use client';

import Image from "next/image";
import { InstagramLogo, LinkedinLogo, Phone, Envelope } from "@phosphor-icons/react";

export default function Footer() {
    return (
        <footer className="bg-[#5D3171] py-10 text-white">
            <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

                {/* Logo */}
                <div className="flex-shrink-0">
                    <Image
                        src="/img/logo/logoBranco.png" // Substitua pelo caminho da sua logo no /public
                        alt="Logo"
                        width={200}
                        height={50}
                        className="object-contain"
                    />
                </div>

                {/* Contato */}
                <div className="text-center md:text-left">
                    <h3 className="mb-2 font-regular text-lg">Contato</h3>
                    <ul className="space-y-2 text-sm">
                        {/* Telefone */}
                

                        {/* Email */}
                        <li className="flex items-center gap-2">
                            <Envelope size={20} weight="regular" />
                            <a href="mailto:mail@mail.com" className="hover:underline">
                                mail@mail.com
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Redes sociais */}
                <div className="flex gap-4">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <InstagramLogo size={28} weight="fill" className="hover:text-green-400 transition" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <LinkedinLogo size={28} weight="fill" className="hover:text-green-400 transition" />
                    </a>
                </div>
            </div>

        </footer>
    );
}
