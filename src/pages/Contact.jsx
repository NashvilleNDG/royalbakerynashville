import React, { useState } from "react";
import PageSEO from "../components/shared/PageSEO";
import PageHero from "../components/shared/PageHero";
import CTASection from "../components/home/CTASection";
import FAQSection from "../components/contact/FAQSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { base44 } from "@/api/base44Client";

const HERO_BG = "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=1920&q=80&fit=crop";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "2703 McCampbell Ave, Nashville, TN 37214", href: "https://maps.google.com/?q=2703+McCampbell+Ave+Nashville+TN+37214" },
  { icon: Phone, label: "Phone", value: "(615) 829-4411  ·  (615) 603-1262", href: "tel:6158294411" },
  { icon: Mail, label: "Email", value: "royalcateringnashville@gmail.com", href: "mailto:royalcateringnashville@gmail.com" },
  { icon: Clock, label: "Hours", value: "Mon–Fri 9AM–7PM  ·  Sat 10AM–6PM", href: null },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", eventType: "", guestCount: "", eventDate: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await base44.functions.invoke("sendInquiryEmail", form);
      setSubmitted(true);
      toast.success("Thank you! We'll be in touch within 24 hours.");
    } catch (err) {
      toast.error("Something went wrong. Please call us at (615) 829-4411.");
    } finally {
      setSending(false);
    }
  };

  const handleChange = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  return (
    <div>
      <PageSEO
        title="Contact Us"
        description="Contact Royal Bakery Nashville for a free consultation and personalized quote. Call (615) 829-4411 or email royalcateringnashville@gmail.com. Located at 2703 McCampbell Ave, Nashville TN 37214."
        canonical="https://royalcateringnashville.com/contact"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ContactPage",
              "name": "Contact Royal Bakery Nashville",
              "url": "https://royalcateringnashville.com/contact",
              "description": "Get a free quote or consultation from Royal Bakery Nashville. We respond within 24 hours.",
              "isPartOf": { "@id": "https://royalcateringnashville.com/#website" }
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How do I place a custom cake order at Royal Bakery Nashville?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Call us at (615) 829-4411, email royalcateringnashville@gmail.com, or fill out the inquiry form on our Contact page. We respond within 24 hours to discuss your order and provide a customized quote." }
                },
                {
                  "@type": "Question",
                  "name": "How far in advance should I order a custom cake or wedding cake?",
                  "acceptedAnswer": { "@type": "Answer", "text": "We recommend booking wedding cakes at least 3–6 months in advance. Custom celebration cakes typically need 1–2 weeks notice. Corporate and rush orders may be accommodated depending on availability — contact us to check." }
                },
                {
                  "@type": "Question",
                  "name": "Does Royal Bakery Nashville offer free consultations?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes! We offer free consultations and complimentary tasting sessions for wedding cake clients. Contact us at (615) 829-4411 or royalcateringnashville@gmail.com to schedule yours." }
                },
                {
                  "@type": "Question",
                  "name": "Does Royal Bakery Nashville deliver cakes and bakery orders?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes, we offer delivery across Nashville and Middle Tennessee including Brentwood, Franklin, Murfreesboro, Hendersonville, Smyrna, and surrounding areas. Delivery fees may apply for orders beyond 30 miles. Professional setup is available for wedding and dessert table orders." }
                }
              ]
            }
          ]
        }}
      />
      <PageHero title="Contact Us" subtitle="Let's start crafting your perfect creation together" bgImage={HERO_BG} />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.55 }} viewport={{ once: true }} className="lg:col-span-2">
              <span className="font-body text-xs uppercase tracking-[0.2em] text-secondary font-semibold text-center lg:text-left block">Get In Touch</span>
              <h1 className="font-heading text-4xl text-foreground mt-4 mb-5 leading-tight text-center lg:text-left">We'd Love to Hear From You</h1>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3 text-center lg:text-left">
                Whether you're planning a wedding cake, a custom order, or a corporate treat, our team is ready to help create an unforgettable baked creation.
              </p>
              <p className="font-body text-xs text-secondary/80 font-medium mb-8 text-center lg:text-left">Free consultation · Custom designs · 24hr response</p>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-1">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} target={info.label === "Address" ? "_blank" : undefined} rel={info.label === "Address" ? "noopener noreferrer" : undefined}
                          className="font-body text-sm text-foreground hover:text-primary transition-colors">{info.value}</a>
                      ) : <p className="font-body text-sm text-foreground">{info.value}</p>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 overflow-hidden shadow-md border border-border/50" style={{ borderRadius: 12 }}>
                <iframe
                  title="Royal Bakery Nashville location map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.3!2d-86.6697!3d36.1799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864675b0e0b1a21%3A0x0!2s2703+McCampbell+Ave%2C+Nashville%2C+TN+37214!5e0!3m2!1sen!2sus!4v1716000000000"
                  width="100%"
                  height="350"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: 0.1 }} viewport={{ once: true }} className="lg:col-span-3">
              {submitted ? (
                <div className="bg-card rounded-2xl border border-border/50 p-14 text-center shadow-sm h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/15 border border-secondary/30 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-secondary" />
                  </div>
                  <h2 className="font-heading text-3xl text-foreground mb-3">Thank You!</h2>
                  <p className="font-body text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                    We've received your inquiry and will get back to you within 24 hours. We look forward to creating something extraordinary for you.
                  </p>
                  <Button className="mt-8 bg-primary hover:bg-primary/90 font-body text-sm font-semibold px-8 h-11"
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", eventType: "", guestCount: "", eventDate: "", message: "" }); }}>
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <div className="bg-card rounded-2xl border border-border/50 p-8 sm:p-10 shadow-sm">
                  <h2 className="font-heading text-2xl text-foreground mb-1">Request a Quote</h2>
                  <p className="font-body text-xs text-muted-foreground mb-8 uppercase tracking-wide">We respond within 24 hours</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <Label className="font-body text-[13px] sm:text-xs uppercase tracking-wide text-muted-foreground">Full Name *</Label>
                        <Input required placeholder="Your name" value={form.name} onChange={e => handleChange("name", e.target.value)} className="mt-2 font-body h-11 rounded-xl" />
                      </div>
                      <div>
                        <Label className="font-body text-[13px] sm:text-xs uppercase tracking-wide text-muted-foreground">Email Address *</Label>
                        <Input required type="email" placeholder="you@email.com" value={form.email} onChange={e => handleChange("email", e.target.value)} className="mt-2 font-body h-11 rounded-xl" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <Label className="font-body text-[13px] sm:text-xs uppercase tracking-wide text-muted-foreground">Phone Number</Label>
                        <Input type="tel" placeholder="(615) 000-0000" value={form.phone} onChange={e => handleChange("phone", e.target.value)} className="mt-2 font-body h-11 rounded-xl" />
                      </div>
                      <div>
                        <Label className="font-body text-[13px] sm:text-xs uppercase tracking-wide text-muted-foreground">Order Type *</Label>
                        <Select value={form.eventType} onValueChange={v => handleChange("eventType", v)}>
                          <SelectTrigger className="mt-2 font-body h-11 rounded-xl"><SelectValue placeholder="Select order type" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="wedding-cake">Wedding Cake</SelectItem>
                            <SelectItem value="custom-cake">Custom Cake</SelectItem>
                            <SelectItem value="corporate">Corporate / Business Order</SelectItem>
                            <SelectItem value="birthday">Birthday Cake</SelectItem>
                            <SelectItem value="pastry-bread">Pastries & Breads</SelectItem>
                            <SelectItem value="dessert-table">Dessert Table</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <Label className="font-body text-[13px] sm:text-xs uppercase tracking-wide text-muted-foreground">Number of Guests / Servings</Label>
                        <Input type="number" placeholder="e.g. 50" value={form.guestCount} onChange={e => handleChange("guestCount", e.target.value)} className="mt-2 font-body h-11 rounded-xl" />
                      </div>
                      <div>
                        <Label className="font-body text-[13px] sm:text-xs uppercase tracking-wide text-muted-foreground">Needed By Date</Label>
                        <Input type="date" value={form.eventDate} onChange={e => handleChange("eventDate", e.target.value)} className="mt-2 font-body h-11 rounded-xl" />
                      </div>
                    </div>
                    <div>
                      <Label className="font-body text-[13px] sm:text-xs uppercase tracking-wide text-muted-foreground">Tell Us About Your Order</Label>
                      <Textarea placeholder="Share details about your order — flavors, design ideas, dietary needs, occasion..." value={form.message} onChange={e => handleChange("message", e.target.value)} className="mt-2 font-body h-32 rounded-xl" />
                    </div>
                    <Button type="submit" size="lg" disabled={sending} className="w-full bg-primary hover:bg-primary/90 font-body font-semibold text-sm gap-2 h-12 rounded-xl">
                      <Send className="w-4 h-4" /> {sending ? "Sending..." : "Send Inquiry"}
                    </Button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection />
    </div>
  );
}
