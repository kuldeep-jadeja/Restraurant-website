import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.about-image', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
                x: -60,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
            })

            gsap.from('.about-text > *', {
                scrollTrigger: {
                    trigger: '.about-text',
                    start: 'top 80%',
                },
                y: 30,
                opacity: 0,
                duration: 0.7,
                stagger: 0.15,
                ease: 'power3.out',
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            id="about"
            ref={sectionRef}
            className="section-padding bg-midnight-light"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image */}
                    <div className="about-image relative">
                        <div className="relative rounded-xl-2 overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80&auto=format&fit=crop"
                                alt="Chef Aurelio preparing handmade pasta"
                                loading="lazy"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-midnight/30 to-transparent" />
                        </div>
                        {/* Floating accent */}
                        <div className="absolute -bottom-6 -right-6 hidden lg:block">
                            <div className="glass-card px-6 py-4 text-center">
                                <p className="font-inter text-champagne text-3xl font-bold">25+</p>
                                <p className="font-inter text-blanc/60 text-xs tracking-[0.1em] uppercase mt-1">
                                    Years of Craft
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="about-text">
                        <p className="font-inter text-champagne text-xs tracking-[0.25em] uppercase mb-4">
                            Our Story
                        </p>
                        <h2 className="text-blanc mb-6">
                            A Heritage of <span className="text-champagne">Flavor</span>
                        </h2>
                        <div className="divider-champagne !mx-0 mb-8" />

                        <p className="text-blanc/70 text-lg mb-6 leading-relaxed">
                            Trattoria Aurelio was born from a family table in the hills of
                            Piedmont — where meals were never rushed and recipes were never
                            written down. Chef Marco Aurelio brought that spirit to Austin in
                            2001, opening a kitchen that refuses to compromise.
                        </p>
                        <p className="text-blanc/60 text-lg mb-6 leading-relaxed">
                            Every morning begins with the roll of dough, the simmer of broth,
                            the careful selection of the day's ingredients. We source from
                            local Texas farms and trusted Italian importers — because the
                            quality of every plate starts long before it reaches the stove.
                        </p>
                        <p className="text-blanc/50 text-lg mb-8 leading-relaxed italic">
                            "Cooking is memory made tangible. Every dish is a letter home."
                            <br />
                            <span className="not-italic text-champagne/70 text-base">
                                — Chef Marco Aurelio
                            </span>
                        </p>

                        <a href="#menu" className="btn-secondary">
                            Explore Our Menu
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
