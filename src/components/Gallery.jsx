import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const images = [
    {
        src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=600&q=80&auto=format&fit=crop',
        alt: 'Fresh handmade pasta on wooden board',
        span: 'col-span-1 row-span-1',
    },
    {
        src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80&auto=format&fit=crop',
        alt: 'Elegant restaurant interior with ambient lighting',
        span: 'col-span-1 md:col-span-1 md:row-span-2',
    },
    {
        src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80&auto=format&fit=crop',
        alt: 'Italian wine being poured into crystal glass',
        span: 'col-span-1 row-span-1',
    },
    {
        src: 'https://images.unsplash.com/photo-1482275548304-a58859dc31b7?w=600&q=80&auto=format&fit=crop',
        alt: 'Chef plating a dish with precision',
        span: 'col-span-1 row-span-1',
    },
    {
        src: 'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=600&q=80&auto=format&fit=crop',
        alt: 'Intimate candlelit dining table',
        span: 'col-span-1 md:col-span-1 md:row-span-2',
    },
    {
        src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80&auto=format&fit=crop',
        alt: 'Artisanal pizza from wood-fired oven',
        span: 'col-span-1 row-span-1',
    },
    {
        src: 'https://images.unsplash.com/photo-1528823872057-9c018a7a7553?w=600&q=80&auto=format&fit=crop',
        alt: 'Italian dessert with espresso',
        span: 'col-span-1 row-span-1',
    },
    {
        src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80&auto=format&fit=crop',
        alt: 'Friends enjoying dinner and wine at community table',
        span: 'col-span-1 row-span-1',
    },
]

export default function Gallery() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.gallery-heading', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
            })

            gsap.from('.gallery-item', {
                scrollTrigger: {
                    trigger: '.gallery-grid',
                    start: 'top 80%',
                },
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.08,
                ease: 'power3.out',
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            id="gallery"
            ref={sectionRef}
            className="section-padding bg-midnight-light"
        >
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="gallery-heading text-center mb-16">
                    <p className="font-inter text-champagne text-xs tracking-[0.25em] uppercase mb-4">
                        A Visual Feast
                    </p>
                    <h2 className="text-blanc mb-4">
                        Moments at <span className="text-champagne">Aurelio</span>
                    </h2>
                    <div className="divider-champagne" />
                </div>

                {/* Masonry Grid */}
                <div className="gallery-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[240px]">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className={`gallery-item group relative overflow-hidden rounded-xl-2 cursor-pointer ${img.span}`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-midnight/0 group-hover:bg-midnight/40 transition-colors duration-500" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <p className="font-inter text-blanc text-xs tracking-wide">
                                    {img.alt}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
