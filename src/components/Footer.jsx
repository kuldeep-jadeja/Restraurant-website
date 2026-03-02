export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer id="footer" className="bg-midnight border-t border-champagne/5">
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <h3 className="font-cormorant text-2xl text-blanc font-semibold mb-3">
                            Trattoria <span className="text-champagne">Aurelio</span>
                        </h3>
                        <p className="text-blanc/40 text-sm leading-relaxed mb-6">
                            Handcrafted Northern Italian cuisine rooted in tradition, elevated
                            for Austin.
                        </p>
                        {/* Social */}
                        <div className="flex gap-4">
                            {[
                                { label: 'Instagram', icon: '📷' },
                                { label: 'Facebook', icon: '📘' },
                                { label: 'Yelp', icon: '⭐' },
                            ].map((s) => (
                                <a
                                    key={s.label}
                                    href="#"
                                    aria-label={s.label}
                                    className="w-10 h-10 rounded-full bg-champagne/5 flex items-center justify-center text-champagne/60 hover:bg-champagne/15 hover:text-champagne transition-all duration-300"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="font-inter text-blanc text-sm font-semibold tracking-[0.1em] uppercase mb-4">
                            Hours
                        </h4>
                        <ul className="space-y-2 text-blanc/40 text-sm font-cormorant">
                            <li className="flex justify-between">
                                <span>Tue – Thu</span>
                                <span className="text-blanc/60">5:30 – 10:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Fri – Sat</span>
                                <span className="text-blanc/60">5:00 – 11:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span className="text-blanc/60">5:00 – 9:30 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Monday</span>
                                <span className="text-champagne/50">Closed</span>
                            </li>
                        </ul>
                    </div>

                    {/* Location */}
                    <div>
                        <h4 className="font-inter text-blanc text-sm font-semibold tracking-[0.1em] uppercase mb-4">
                            Visit Us
                        </h4>
                        <p className="text-blanc/50 text-sm font-cormorant leading-relaxed">
                            742 Congress Avenue
                            <br />
                            Austin, TX 78701
                        </p>
                        <p className="text-blanc/40 text-sm font-cormorant mt-3">
                            (512) 555-0142
                        </p>
                        <p className="text-blanc/40 text-sm font-cormorant mt-1">
                            hello@trattoria-aurelio.com
                        </p>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-inter text-blanc text-sm font-semibold tracking-[0.1em] uppercase mb-4">
                            Stay Connected
                        </h4>
                        <p className="text-blanc/40 text-sm mb-4 font-cormorant">
                            Seasonal menus, wine events, and stories from our table to yours.
                        </p>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault()
                                alert('Thank you for subscribing!')
                            }}
                            className="flex gap-2"
                        >
                            <input
                                type="email"
                                placeholder="Your email"
                                required
                                className="flex-1 bg-champagne/5 border border-champagne/10 rounded-xl px-4 py-2.5 text-blanc text-sm font-cormorant focus:outline-none focus:border-champagne/30 transition-colors"
                            />
                            <button
                                type="submit"
                                className="bg-champagne/15 border border-champagne/20 rounded-xl px-4 py-2.5 text-champagne text-sm font-inter font-medium hover:bg-champagne/25 transition-colors"
                            >
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-16 pt-8 border-t border-champagne/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-blanc/25 text-xs font-inter">
                        © {currentYear} Trattoria Aurelio. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {['Privacy Policy', 'Terms of Service'].map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="text-blanc/25 text-xs font-inter hover:text-champagne/50 transition-colors"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
