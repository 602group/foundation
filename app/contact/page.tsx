export default function ContactPage() {
    return (
        <div>
            {/* Hero */}
            <section style={{ background: "#000", color: "#fff", padding: "100px 48px 60px", textAlign: "center" }}>
                <h1 style={{ fontSize: "clamp(32px, 6vw, 64px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-1px", margin: "0 0 16px" }}>
                    Contact Us
                </h1>
                <p style={{ fontSize: "18px", color: "#aaa", maxWidth: "600px", margin: "0 auto" }}>
                    Have a question? We'd love to hear from you.
                </p>
            </section>

            {/* Contact Form + Info */}
            <section style={{ padding: "80px 48px" }}>
                <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px" }}>

                    {/* Info */}
                    <div>
                        <h2 style={{ fontSize: "24px", fontWeight: 900, textTransform: "uppercase", marginBottom: "24px" }}>Get In Touch</h2>
                        <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#555", marginBottom: "32px" }}>
                            Whether you have questions about membership, upcoming events, or how to get involved with EPIC Foundation, our team is here to help.
                        </p>
                        {[
                            { label: "Email", value: "info@epicfoundation.com" },
                            { label: "Phone", value: "(555) 123-4567" },
                            { label: "Location", value: "United States" },
                        ].map((item) => (
                            <div key={item.label} style={{ marginBottom: "20px" }}>
                                <div style={{ fontSize: "11px", fontWeight: 700, color: "#888", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "4px" }}>{item.label}</div>
                                <div style={{ fontSize: "16px", color: "#000", fontWeight: 600 }}>{item.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Form */}
                    <div>
                        <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                            {[
                                { name: "name", label: "Full Name", type: "text", placeholder: "Your name" },
                                { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
                                { name: "subject", label: "Subject", type: "text", placeholder: "What is this about?" },
                            ].map((field) => (
                                <div key={field.name}>
                                    <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#888", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>
                                        {field.label}
                                    </label>
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        style={{ width: "100%", padding: "11px 14px", border: "2px solid #e8e8e8", borderRadius: "8px", fontSize: "14px", outline: "none", boxSizing: "border-box", fontFamily: "inherit" }}
                                    />
                                </div>
                            ))}
                            <div>
                                <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#888", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    placeholder="Tell us more..."
                                    style={{ width: "100%", padding: "11px 14px", border: "2px solid #e8e8e8", borderRadius: "8px", fontSize: "14px", outline: "none", boxSizing: "border-box", fontFamily: "inherit", resize: "vertical" }}
                                />
                            </div>
                            <button
                                type="submit"
                                style={{ background: "#000", color: "#fff", border: "none", padding: "14px 32px", borderRadius: "25px", fontSize: "14px", fontWeight: 700, cursor: "pointer", textTransform: "uppercase", letterSpacing: "0.5px", marginTop: "8px" }}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
