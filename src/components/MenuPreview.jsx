import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const dishes = [
    {
        name: 'Agnolotti del Plin',
        category: 'Primi',
        description: 'Pinched pasta filled with braised veal, sage butter, Parmigiano',
        price: '$28',
        image:
            'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80&auto=format&fit=crop',
    },
    {
        name: 'Vitello Tonnato',
        category: 'Antipasti',
        description: 'Chilled veal loin, tuna-caper sauce, crispy capers, lemon oil',
        price: '$22',
        image:
            'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80&auto=format&fit=crop',
    },
    {
        name: 'Branzino al Sale',
        category: 'Secondi',
        description: 'Salt-crusted sea bass, roasted fennel, salsa verde, charred lemon',
        price: '$42',
        image:
            'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=600&q=80&auto=format&fit=crop',
    },
    {
        name: 'Tagliatelle al Ragù',
        category: 'Primi',
        description: 'Hand-cut ribbons, slow-cooked Bolognese, 24-month Parmigiano',
        price: '$26',
        image:
            'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&q=80&auto=format&fit=crop',
    },
    {
        name: 'Ossobuco alla Milanese',
        category: 'Secondi',
        description: 'Braised veal shank, saffron risotto, gremolata, bone marrow',
        price: '$46',
        image:
            'https://images.unsplash.com/photo-1432139509613-5c4255a1d197?w=600&q=80&auto=format&fit=crop',
    },
    {
        name: 'Panna Cotta al Limone',
        category: 'Dolci',
        description: 'Meyer lemon custard, wild berry compote, almond tuile',
        price: '$16',
        image:
            'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80&auto=format&fit=crop',
    },
]

export default function MenuPreview() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.menu-heading', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
            })

            gsap.from('.menu-card', {
                scrollTrigger: {
                    trigger: '.menu-grid',
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 0.7,
                stagger: 0.12,
                ease: 'power3.out',
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section id="menu" ref={sectionRef} className="section-padding bg-midnight">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="menu-heading text-center mb-16">
                    <p className="font-inter text-champagne text-xs tracking-[0.25em] uppercase mb-4">
                        Seasonal & Signature
                    </p>
                    <h2 className="text-blanc mb-4">
                        A Curated <span className="text-champagne">Selection</span>
                    </h2>
                    <div className="divider-champagne" />
                    <p className="text-blanc/50 text-lg mt-6 max-w-xl mx-auto">
                        Dishes that honor tradition while embracing the best of what Texas
                        and Italy offer — curated, never crowded.
                    </p>
                </div>

                {/* Dish Grid */}
                <div className="menu-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {dishes.map((dish, i) => (
                        <div
                            key={i}
                            className="menu-card group relative rounded-xl-2 overflow-hidden cursor-pointer h-72"
                        >
                            <img
                                src={dish.image}
                                alt={dish.name}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Default overlay — category badge */}
                            <div className="absolute top-4 left-4 z-10">
                                <span className="font-inter text-[0.65rem] tracking-[0.15em] uppercase font-semibold text-midnight bg-champagne/90 px-3 py-1 rounded-full">
                                    {dish.category}
                                </span>
                            </div>

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/85 to-midnight/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                <h3 className="font-inter text-blanc text-xl mb-2">{dish.name}</h3>
                                <p className="font-cormorant text-blanc/65 text-base leading-relaxed mb-3">
                                    {dish.description}
                                </p>
                                <p className="font-inter text-champagne text-lg font-semibold">
                                    {dish.price}
                                </p>
                            </div>

                            {/* Persistent bottom info */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight/80 to-transparent p-5 group-hover:opacity-0 transition-opacity duration-300">
                                <h3 className="font-inter text-blanc text-lg">{dish.name}</h3>
                                <p className="font-inter text-champagne text-sm font-medium">
                                    {dish.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Full Menu CTA */}
                <div className="text-center mt-12">
                    <a href="#" className="btn-secondary">
                        View Full Menu
                    </a>
                </div>
            </div>
        </section>
    )
}
