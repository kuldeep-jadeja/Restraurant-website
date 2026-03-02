import { useState, useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
    {
        name: 'Isabella R.',
        quote:
            'The agnolotti del plin was transcendent — delicate, buttery, and deeply soul-satisfying. This is the closest I\'ve felt to dining in Torino without a passport.',
        dish: 'Agnolotti del Plin',
        rating: 5,
    },
    {
        name: 'James & Lauren K.',
        quote:
            'We celebrated our anniversary at Aurelio and were moved by every course. The tasting menu was a journey — thoughtful, surprising, and so deeply personal.',
        dish: "Chef's Tasting Experience",
        rating: 5,
    },
    {
        name: 'David M.',
        quote:
            'The wine program here is unmatched in Austin. The sommelier paired a Barbaresco with our ossobuco that I still dream about weeks later.',
        dish: 'Ossobuco + Barbaresco',
        rating: 5,
    },
    {
        name: 'Sofia L.',
        quote:
            'Aurelio feels like a secret — intimate, warm, and unforgettable. The kind of place you want to tell everyone about but also keep all to yourself.',
        dish: 'Tagliatelle al Ragù',
        rating: 5,
    },
]

export default function Testimonials() {
    const [active, setActive] = useState(0)
    const sectionRef = useRef(null)
    const intervalRef = useRef(null)

    const next = useCallback(() => {
        setActive((prev) => (prev + 1) % testimonials.length)
    }, [])

    const prev = useCallback(() => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }, [])

    // Auto-play
    useEffect(() => {
        intervalRef.current = setInterval(next, 5000)
        return () => clearInterval(intervalRef.current)
    }, [next])

    // Reset timer on manual nav
    const handleNav = (direction) => {
        clearInterval(intervalRef.current)
        direction === 'next' ? next() : prev()
        intervalRef.current = setInterval(next, 5000)
    }

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.testi-content', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const t = testimonials[active]

    return (
        <section ref={sectionRef} className="section-padding bg-midnight">
            <div className="max-w-4xl mx-auto testi-content">
                {/* Heading */}
                <div className="text-center mb-12">
                    <p className="font-inter text-champagne text-xs tracking-[0.25em] uppercase mb-4">
                        Their Stories
                    </p>
                    <h2 className="text-blanc">
                        Words That <span className="text-champagne">Warm Us</span>
                    </h2>
                    <div className="divider-champagne" />
                </div>

                {/* Testimonial Card */}
                <div className="glass-card p-8 md:p-12 text-center relative">
                    {/* Quote mark */}
                    <span className="text-champagne/20 text-[6rem] font-cormorant leading-none absolute top-4 left-6 select-none">
                        "
                    </span>

                    <div className="relative z-10">
                        {/* Stars */}
                        <div className="flex justify-center gap-1 mb-6">
                            {Array.from({ length: t.rating }).map((_, i) => (
                                <span key={i} className="text-champagne text-lg">★</span>
                            ))}
                        </div>

                        {/* Quote */}
                        <p className="font-cormorant text-blanc/80 text-xl md:text-2xl leading-relaxed italic mb-8 max-w-2xl mx-auto transition-opacity duration-500">
                            "{t.quote}"
                        </p>

                        {/* Author */}
                        <p className="font-inter text-blanc text-sm font-medium tracking-wide">
                            {t.name}
                        </p>
                        <p className="font-inter text-champagne/60 text-xs tracking-[0.1em] uppercase mt-1">
                            Loved: {t.dish}
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={() => handleNav('prev')}
                            className="w-10 h-10 rounded-full border border-champagne/20 flex items-center justify-center text-champagne/60 hover:border-champagne/50 hover:text-champagne transition-colors"
                            aria-label="Previous testimonial"
                        >
                            ←
                        </button>
                        {/* Dots */}
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        clearInterval(intervalRef.current)
                                        setActive(i)
                                        intervalRef.current = setInterval(next, 5000)
                                    }}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === active
                                        ? 'bg-champagne w-6'
                                        : 'bg-champagne/20 hover:bg-champagne/40'
                                        }`}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={() => handleNav('next')}
                            className="w-10 h-10 rounded-full border border-champagne/20 flex items-center justify-center text-champagne/60 hover:border-champagne/50 hover:text-champagne transition-colors"
                            aria-label="Next testimonial"
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
