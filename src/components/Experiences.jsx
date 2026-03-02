import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
    {
        title: 'Handmade Pasta',
        subtitle: 'Crafted Daily',
        description:
            'Every strand, every fold — shaped by hand each morning from heirloom semolina and farm-fresh eggs. Our sfoglina carries decades of Northern Italian tradition in every cut.',
        detail:
            'Tagliatelle, pappardelle, agnolotti — each variety demands its own touch, its own rhythm. No shortcuts, no machines. Just flour, eggs, and patience.',
        image:
            'https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=800&q=80&auto=format&fit=crop',
        accent: 'From flour to fork',
    },
    {
        title: "Chef's Seasonal",
        subtitle: 'Tasting Experience',
        description:
            'A curated five-course journey through Northern Italy\'s seasons — guided by Chef Aurelio\'s instinct for the extraordinary. Each course tells a story written by the land.',
        detail:
            'Sourced from local Texas farms and Italian importers, every ingredient is chosen at its peak. The menu evolves weekly, never repeated, always surprising.',
        image:
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80&auto=format&fit=crop',
        accent: 'Five courses, one story',
    },
    {
        title: 'Wine & Amaro',
        subtitle: 'Program',
        description:
            'Over 200 labels spanning Piedmont to Puglia — curated by our sommelier to complement every plate. Rare amaros and digestivi close every evening with warmth.',
        detail:
            'From a crisp Vermentino with crudo to a structured Barolo alongside braised ossobuco — every pairing is designed to elevate, not overpower.',
        image:
            'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80&auto=format&fit=crop',
        accent: '200+ Italian labels',
    },
]

export default function Experiences() {
    const sectionRef = useRef(null)
    const [hoveredIdx, setHoveredIdx] = useState(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.exp-heading', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
            })

            gsap.from('.exp-card', {
                scrollTrigger: {
                    trigger: '.exp-grid',
                    start: 'top 80%',
                },
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="section-padding bg-midnight">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="exp-heading text-center mb-16 md:mb-20">
                    <p className="font-inter text-champagne text-xs tracking-[0.25em] uppercase mb-4">
                        Our Heart & Craft
                    </p>
                    <h2 className="text-blanc mb-4">
                        Three Pillars of <span className="text-champagne">Aurelio</span>
                    </h2>
                    <div className="divider-champagne" />
                </div>

                {/* Cards Grid */}
                <div className="exp-grid grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                    {experiences.map((exp, i) => (
                        <div
                            key={i}
                            className="exp-card group glass-card overflow-hidden cursor-pointer relative"
                            onMouseEnter={() => setHoveredIdx(i)}
                            onMouseLeave={() => setHoveredIdx(null)}
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={exp.image}
                                    alt={exp.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate/90 via-slate/40 to-transparent" />
                                <span className="absolute bottom-4 left-5 font-inter text-[0.7rem] tracking-[0.15em] uppercase text-champagne/80 font-medium">
                                    {exp.accent}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8">
                                <h3 className="text-blanc mb-1 font-inter">
                                    {exp.title}
                                </h3>
                                <p className="font-inter text-champagne text-sm font-medium tracking-wide mb-4">
                                    {exp.subtitle}
                                </p>
                                <p className="text-blanc/60 text-[0.95rem] leading-relaxed mb-4">
                                    {exp.description}
                                </p>

                                {/* Reveal Detail on Hover */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ${hoveredIdx === i ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="pt-4 border-t border-champagne/10">
                                        <p className="text-blanc/50 text-sm leading-relaxed italic font-cormorant">
                                            {exp.detail}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
