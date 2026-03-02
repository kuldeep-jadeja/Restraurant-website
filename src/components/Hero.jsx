import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
    const heroRef = useRef(null)
    const contentRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.3 })
            tl.from('.hero-tag', {
                y: 20,
                opacity: 0,
                duration: 0.7,
                ease: 'power3.out',
            })
                .from(
                    '.hero-heading',
                    {
                        y: 40,
                        opacity: 0,
                        duration: 0.9,
                        ease: 'power3.out',
                    },
                    '-=0.4'
                )
                .from(
                    '.hero-sub',
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.7,
                        ease: 'power3.out',
                    },
                    '-=0.4'
                )
                .from(
                    '.hero-cta',
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.6,
                        ease: 'power3.out',
                    },
                    '-=0.3'
                )
        }, heroRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={heroRef}
            className="relative w-full h-screen min-h-[700px] flex items-end overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85&auto=format&fit=crop"
                    alt="Elegant Italian fine dining atmosphere"
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/70 to-midnight/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-midnight/60 to-transparent" />
            </div>

            {/* Content */}
            <div
                ref={contentRef}
                className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 md:pb-28"
            >
                <div className="max-w-2xl">
                    <p className="hero-tag font-inter text-champagne text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-6">
                        Elevated Fine Dining · Austin, TX
                    </p>
                    <h1 className="hero-heading text-blanc mb-6 leading-[1.05]">
                        Italian hearts.
                        <br />
                        <span className="text-champagne">Austin soul.</span>
                    </h1>
                    <p className="hero-sub font-cormorant text-blanc/75 text-xl md:text-2xl leading-relaxed mb-10 max-w-lg">
                        Handcrafted Northern Italian cuisine rooted in tradition —
                        reimagined for the bold spirit of Austin.
                    </p>
                    <a href="#reservations" className="hero-cta btn-primary text-base px-8 py-4">
                        <span>Reserve Your Table</span>
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60">
                <span className="font-inter text-[0.65rem] tracking-[0.2em] uppercase text-blanc/50">
                    Scroll
                </span>
                <div className="w-[1px] h-8 bg-gradient-to-b from-champagne/60 to-transparent animate-pulse" />
            </div>
        </section>
    )
}
