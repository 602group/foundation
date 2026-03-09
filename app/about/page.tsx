export default function AboutPage() {
    return (
        <div>
            {/* Hero */}
            <section style={{ background: "#000", color: "#fff", padding: "100px 48px 60px", textAlign: "center" }}>
                <h1 style={{ fontSize: "clamp(32px, 6vw, 64px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-1px", margin: "0 0 16px" }}>
                    About EPIC Foundation
                </h1>
                <p style={{ fontSize: "18px", color: "#aaa", maxWidth: "600px", margin: "0 auto" }}>
                    Creating once-in-a-lifetime golf experiences while making a lasting impact
                </p>
            </section>

            {/* Mission */}
            <section style={{ padding: "80px 48px", maxWidth: "800px", margin: "0 auto" }}>
                <h2 style={{ fontSize: "28px", fontWeight: 900, textTransform: "uppercase", marginBottom: "24px" }}>Our Mission</h2>
                <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#444", marginBottom: "16px" }}>
                    EPIC Foundation exists to democratize access to the world's most exclusive golf courses while generating meaningful support for charitable causes. We believe that unforgettable golf experiences shouldn't be limited to the privileged few, and that every round played can contribute to something greater than the game itself.
                </p>
                <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#444" }}>
                    Through our innovative auction and event platform, we connect passionate golfers with once-in-a-lifetime opportunities at legendary courses—from Pebble Beach to Augusta National—while channeling 100% of proceeds toward organizations making real change in their communities.
                </p>
            </section>

            {/* Three Pillars */}
            <section style={{ background: "#f8f8f8", padding: "80px 48px" }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                    <h2 style={{ fontSize: "28px", fontWeight: 900, textTransform: "uppercase", marginBottom: "48px", textAlign: "center" }}>
                        Where Your Money Goes: Our Three Pillars
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
                        {[
                            { title: "Youth Golf Development", pct: "35%", desc: "Proceeds support programs that introduce golf to underserved youth, providing equipment, instruction, and access to courses. We partner with organizations like The First Tee and local junior golf programs." },
                            { title: "Veteran Support Services", pct: "35%", desc: "Funds golf therapy programs for veterans dealing with PTSD and physical rehabilitation. Golf has proven therapeutic benefits and we work with organizations that use the game to help veterans heal." },
                            { title: "Environmental Conservation", pct: "30%", desc: "Supports golf course sustainability initiatives and environmental conservation efforts. We fund projects that protect natural habitats, promote water conservation, and help courses transition to eco-friendly practices." },
                        ].map((p) => (
                            <div key={p.title} style={{ background: "#fff", borderRadius: "12px", padding: "32px", border: "1px solid #e8e8e8" }}>
                                <div style={{ fontSize: "36px", fontWeight: 900, color: "#000", marginBottom: "12px" }}>{p.pct}</div>
                                <h3 style={{ fontSize: "18px", fontWeight: 800, marginBottom: "12px", textTransform: "uppercase" }}>{p.title}</h3>
                                <p style={{ fontSize: "14px", lineHeight: "1.7", color: "#555" }}>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section style={{ padding: "80px 48px", maxWidth: "800px", margin: "0 auto" }}>
                <h2 style={{ fontSize: "28px", fontWeight: 900, textTransform: "uppercase", marginBottom: "24px" }}>Who We Are</h2>
                <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#444", marginBottom: "16px" }}>
                    EPIC Foundation was founded by a group of passionate golfers who saw an opportunity to bridge two worlds: the exclusive realm of private golf clubs and the broader community of players who dream of experiencing these legendary courses.
                </p>
                <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#444", marginBottom: "16px" }}>
                    Our team combines decades of experience in golf, nonprofit management, and technology. We've built relationships with over 150 of the world's most prestigious clubs, from century-old American classics to hidden gems across Scotland and Ireland.
                </p>
                <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#444" }}>
                    But we're more than just a platform for exclusive golf. We're a community of people who believe that privilege comes with responsibility, and that the joy of the game is amplified when it's shared and used for good.
                </p>
            </section>

            {/* Impact Stats */}
            <section style={{ background: "#000", color: "#fff", padding: "80px 48px" }}>
                <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{ fontSize: "28px", fontWeight: 900, textTransform: "uppercase", marginBottom: "48px" }}>Our Impact</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "32px" }}>
                        {[
                            { num: "$12M+", label: "Raised for Charity" },
                            { num: "3,500+", label: "Golfers Served" },
                            { num: "150+", label: "Partner Courses" },
                            { num: "45", label: "Charitable Organizations" },
                        ].map((s) => (
                            <div key={s.label}>
                                <div style={{ fontSize: "48px", fontWeight: 900, marginBottom: "8px" }}>{s.num}</div>
                                <div style={{ fontSize: "14px", color: "#aaa", textTransform: "uppercase", letterSpacing: "1px" }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
