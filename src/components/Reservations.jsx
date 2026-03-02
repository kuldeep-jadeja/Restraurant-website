import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Reservations() {
    const sectionRef = useRef(null)
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        notes: '',
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // In production, this would POST to an API
        alert('Thank you! Your reservation request has been submitted. We will confirm shortly.')
    }

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.res-content > *', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
                y: 40,
                opacity: 0,
                duration: 0.7,
                stagger: 0.12,
                ease: 'power3.out',
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            id="reservations"
            ref={sectionRef}
            className="section-padding bg-slate/30"
        >
            <div className="max-w-7xl mx-auto">
                <div className="res-content grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left — Info */}
                    <div className="flex flex-col justify-center">
                        <p className="font-inter text-champagne text-xs tracking-[0.25em] uppercase mb-4">
                            Get a Seat
                        </p>
                        <h2 className="text-blanc mb-6">
                            Reserve Your <span className="text-champagne">Experience</span>
                        </h2>
                        <div className="divider-champagne !mx-0 mb-8" />
                        <p className="text-blanc/60 text-lg leading-relaxed mb-8">
                            Whether it's an intimate dinner for two or a celebration with
                            friends — we prepare every evening with the care it deserves.
                            Reserve your table and let us take care of the rest.
                        </p>

                        {/* Info cards */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-champagne/10 flex items-center justify-center mt-1 shrink-0">
                                    <span className="text-champagne text-lg">📍</span>
                                </div>
                                <div>
                                    <p className="font-inter text-blanc text-sm font-medium">Location</p>
                                    <p className="text-blanc/50 text-sm">
                                        742 Congress Avenue, Austin, TX 78701
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-champagne/10 flex items-center justify-center mt-1 shrink-0">
                                    <span className="text-champagne text-lg">🕖</span>
                                </div>
                                <div>
                                    <p className="font-inter text-blanc text-sm font-medium">Hours</p>
                                    <p className="text-blanc/50 text-sm">
                                        Tue – Thu: 5:30 PM – 10:00 PM
                                        <br />
                                        Fri – Sat: 5:00 PM – 11:00 PM
                                        <br />
                                        Sun: 5:00 PM – 9:30 PM
                                        <br />
                                        Mon: Closed
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-champagne/10 flex items-center justify-center mt-1 shrink-0">
                                    <span className="text-champagne text-lg">📞</span>
                                </div>
                                <div>
                                    <p className="font-inter text-blanc text-sm font-medium">Contact</p>
                                    <p className="text-blanc/50 text-sm">(512) 555-0142</p>
                                </div>
                            </div>
                        </div>

                        {/* Secondary CTA */}
                        <a href="#" className="btn-secondary w-fit">
                            Order Online
                        </a>
                    </div>

                    {/* Right — Form */}
                    <div className="glass-card p-8 md:p-10">
                        <h3 className="font-inter text-blanc text-xl mb-6">
                            Make a Reservation
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="font-inter text-blanc/50 text-xs tracking-wide uppercase block mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-midnight/50 border border-champagne/10 rounded-xl px-4 py-3 text-blanc font-cormorant text-lg focus:outline-none focus:border-champagne/40 transition-colors"
                                        placeholder="Marco Aurelio"
                                    />
                                </div>
                                <div>
                                    <label className="font-inter text-blanc/50 text-xs tracking-wide uppercase block mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-midnight/50 border border-champagne/10 rounded-xl px-4 py-3 text-blanc font-cormorant text-lg focus:outline-none focus:border-champagne/40 transition-colors"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="font-inter text-blanc/50 text-xs tracking-wide uppercase block mb-2">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className="w-full bg-midnight/50 border border-champagne/10 rounded-xl px-4 py-3 text-blanc font-cormorant text-lg focus:outline-none focus:border-champagne/40 transition-colors"
                                    placeholder="(512) 555-0142"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                <div>
                                    <label className="font-inter text-blanc/50 text-xs tracking-wide uppercase block mb-2">
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={form.date}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-midnight/50 border border-champagne/10 rounded-xl px-4 py-3 text-blanc font-cormorant text-lg focus:outline-none focus:border-champagne/40 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="font-inter text-blanc/50 text-xs tracking-wide uppercase block mb-2">
                                        Time
                                    </label>
                                    <select
                                        name="time"
                                        value={form.time}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-midnight/50 border border-champagne/10 rounded-xl px-4 py-3 text-blanc font-cormorant text-lg focus:outline-none focus:border-champagne/40 transition-colors appearance-none"
                                    >
                                        <option value="">Select</option>
                                        <option value="17:00">5:00 PM</option>
                                        <option value="17:30">5:30 PM</option>
                                        <option value="18:00">6:00 PM</option>
                                        <option value="18:30">6:30 PM</option>
                                        <option value="19:00">7:00 PM</option>
                                        <option value="19:30">7:30 PM</option>
                                        <option value="20:00">8:00 PM</option>
                                        <option value="20:30">8:30 PM</option>
                                        <option value="21:00">9:00 PM</option>
                                        <option value="21:30">9:30 PM</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="font-inter text-blanc/50 text-xs tracking-wide uppercase block mb-2">
                                        Guests
                                    </label>
                                    <select
                                        name="guests"
                                        value={form.guests}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-midnight/50 border border-champagne/10 rounded-xl px-4 py-3 text-blanc font-cormorant text-lg focus:outline-none focus:border-champagne/40 transition-colors appearance-none"
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                                            <option key={n} value={n}>
                                                {n} {n === 1 ? 'Guest' : 'Guests'}
                                            </option>
                                        ))}
                                        <option value="9+">9+ (Large Party)</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="font-inter text-blanc/50 text-xs tracking-wide uppercase block mb-2">
                                    Special Requests
                                </label>
                                <textarea
                                    name="notes"
                                    value={form.notes}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full bg-midnight/50 border border-champagne/10 rounded-xl px-4 py-3 text-blanc font-cormorant text-lg focus:outline-none focus:border-champagne/40 transition-colors resize-none"
                                    placeholder="Allergies, celebrations, seating preferences..."
                                />
                            </div>

                            <button type="submit" className="btn-primary w-full py-4">
                                <span>Confirm Reservation</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
