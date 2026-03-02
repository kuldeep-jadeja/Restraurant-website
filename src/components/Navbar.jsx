import { useState, useEffect } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const links = [
        { label: 'Menu', href: '#menu' },
        { label: 'About', href: '#about' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'Visit', href: '#reservations' },
        { label: 'Contact', href: '#footer' },
    ]

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled
                    ? 'bg-midnight/90 backdrop-blur-xl shadow-lg shadow-black/20'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#"
                    className="font-cormorant text-2xl md:text-[1.7rem] font-semibold tracking-wide text-blanc"
                >
                    Trattoria <span className="text-champagne">Aurelio</span>
                </a>

                {/* Desktop Links */}
                <ul className="hidden lg:flex items-center gap-8">
                    {links.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className="font-inter text-[0.8rem] font-medium tracking-[0.12em] uppercase text-blanc/70 hover:text-champagne transition-colors duration-300 link-lift"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA + Hamburger */}
                <div className="flex items-center gap-4">
                    <a href="#reservations" className="hidden md:inline-flex btn-primary">
                        <span>Reserve a Table</span>
                    </a>
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`block w-6 h-[2px] bg-blanc transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[5px]' : ''
                                }`}
                        />
                        <span
                            className={`block w-6 h-[2px] bg-blanc transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''
                                }`}
                        />
                        <span
                            className={`block w-6 h-[2px] bg-blanc transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed inset-0 top-0 bg-midnight/98 backdrop-blur-2xl transition-all duration-500 flex flex-col items-center justify-center gap-8 ${mobileOpen
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                    }`}
            >
                <button
                    onClick={() => setMobileOpen(false)}
                    className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-blanc text-2xl"
                    aria-label="Close menu"
                >
                    ✕
                </button>
                {links.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="font-inter text-lg tracking-[0.15em] uppercase text-blanc/80 hover:text-champagne transition-colors duration-300"
                    >
                        {link.label}
                    </a>
                ))}
                <a
                    href="#reservations"
                    onClick={() => setMobileOpen(false)}
                    className="btn-primary mt-4"
                >
                    <span>Reserve a Table</span>
                </a>
            </div>
        </nav>
    )
}
