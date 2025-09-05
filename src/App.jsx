// src/App.jsx
import React, { useMemo, useState } from "react";
import {
  MessageCircle,
  Shield,
  Clock,
  Sparkles,
  CheckCircle2,
  BookOpen,
  Quote,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "./assets/logo.png";

/* ================= CONFIG ================= */
const BRAND = "E for English";
const TAGLINE = "Friendship in Learning. Confidence in Speaking.";
const CONTACT_EMAIL = "sowmyanarayana2000@gmail.com";
const WHATSAPP_DISPLAY = "+44 7887 816721";
const WHATSAPP_INTL = "447887816721"; // intl format, no '+'
const ALT_NUM_1 = "+91 88437 00961";
const ALT_NUM_2 = "+91 99464 24464";
const ADDRESS = "Wey Side, London, United Kingdom";

/* =============== SMALL UI PARTS =============== */
const Container = ({ children, className = "" }) => (
  <div className={`max-w-6xl mx-auto px-4 ${className}`}>{children}</div>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-700 bg-white">
    {children}
  </span>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border bg-white p-6 shadow-sm ${className}`}>
    {children}
  </div>
);

/* =================== APP =================== */
export default function App() {
  const [form, setForm] = useState({
    parent: "",
    child: "",
    age: "",
    contact: "",
    note: "",
  });

  const waQuickText = encodeURIComponent(
    "Hi, I'd like to know about the 15-day trial for my child."
  );

  const waFormLink = useMemo(() => {
    const lines = [
      "Quick enquiry — E for English",
      `Parent: ${form.parent || "-"}`,
      `Child: ${form.child || "-"}  Age: ${form.age || "-"}`,
      `Contact: ${form.contact || "-"}`,
      `Message: ${form.note || "-"}`,
    ];
    return `https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
  }, [form]);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
        <Container className="py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-7 w-7 rounded" />
            <div>
              <div className="text-sm font-semibold">{BRAND}</div>
              <div className="text-xs text-gray-500">{TAGLINE}</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-sky-700">
              About
            </a>
            <a href="#trial" className="hover:text-sky-700">
              15-Day Trial
            </a>
            <a href="#program" className="hover:text-sky-700">
              Program
            </a>
            <a href="#motto" className="hover:text-sky-700">
              Our Motto
            </a>
            <a href="#contact" className="hover:text-sky-700">
              Contact
            </a>
          </nav>
          <a
            href={`https://wa.me/${WHATSAPP_INTL}?text=${waQuickText}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm bg-white hover:bg-gray-50"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </Container>
      </header>

      {/* INFO NOTE */}
      <div className="bg-sky-50 border-b">
        <Container className="py-2 text-sm">
          <span className="font-medium">Note:</span> We emphasise{" "}
          <span className="font-medium">concept understanding</span> over rote
          memorisation. Confidence comes from clarity—not cramming.
        </Container>
      </div>

      {/* HERO */}
      <section className="bg-gradient-to-b from-sky-50 to-white">
        <Container className="py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Making English simple, interactive & enjoyable— <br className="hidden md:block" />
              for confident young speakers
            </h1>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {BRAND} is an online English learning space created with love for
              teaching and a passion for helping learners gain confidence.
              Founded by experienced teachers, we focus on child-friendly,
              activity-based learning.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>Child-centred</Badge>
              <Badge>Supportive & safe</Badge>
              <Badge>Concepts-first (not rote)</Badge>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#trial"
                className="inline-flex items-center rounded-xl bg-sky-700 text-white px-4 py-2"
              >
                Start 15-Day Trial
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_INTL}?text=${waQuickText}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-xl border px-4 py-2 bg-white hover:bg-gray-50"
              >
                Talk to us
              </a>
            </div>
          </div>

          <Card className="md:justify-self-end">
            <div className="flex items-center justify-center">
              <img src={logo} alt="E for English" className="h-40 w-auto" />
            </div>
          </Card>
        </Container>
      </section>

      {/* ABOUT + CONTACTS CARD */}
      <section id="about" className="py-12">
        <Container className="grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2">
            <h2 className="text-xl md:text-2xl font-bold">About the Teacher</h2>
            <p className="text-gray-600">Expertise that blends education, empathy, and experience</p>

            <Card className="mt-4">
              <h3 className="text-lg font-semibold">
                Sowmya Narayana, Founder &amp; Lead Educator
              </h3>
              <p className="text-gray-700 italic mt-1">
                Mental Health Practitioner · Former Lecturer in Psychiatry · Experienced Online English Tutor
              </p>
              <p className="mt-3 text-gray-700 leading-relaxed">
                With a professional background in mental health and higher education,
                Sowmya understands children’s emotions, thoughts, and learning styles.
                Over years of teaching English online, she has created a friendly space
                where mistakes are welcomed as steps toward mastery.
              </p>
            </Card>
          </div>

          <Card>
            <h4 className="font-semibold">Contacts</h4>
            <div className="mt-3 space-y-2 text-sm text-gray-700">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> {WHATSAPP_DISPLAY}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> {ALT_NUM_1}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> {ALT_NUM_2}
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                {ADDRESS}
              </p>
            </div>
          </Card>
        </Container>
      </section>

      {/* PROGRAM OVERVIEW */}
      <section id="program" className="py-8">
        <Container>
          <h2 className="text-xl md:text-2xl font-bold">Program Overview</h2>
          <p className="text-gray-600">Simple, interactive, enjoyable</p>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <Card>
              <div className="flex items-center gap-2 font-semibold">
                <BookOpen className="h-5 w-5 text-sky-700" />
                Foundation (Ages 5–7)
              </div>
              <p className="mt-2 text-gray-700">
                Phonics, sight words, basic sentences, fun games to build comfort with speaking and listening.
              </p>
            </Card>

            <Card>
              <div className="flex items-center gap-2 font-semibold">
                <Sparkles className="h-5 w-5 text-sky-700" />
                Growth (Ages 8–10)
              </div>
              <p className="mt-2 text-gray-700">
                Grammar basics, reading comprehension, short writing tasks, storytelling and role-play.
              </p>
            </Card>

            <Card>
              <div className="flex items-center gap-2 font-semibold">
                <CheckCircle2 className="h-5 w-5 text-sky-700" />
                Confidence (Ages 11–13)
              </div>
              <p className="mt-2 text-gray-700">
                Paragraph writing, presentations, vocabulary building, conversation practice and feedback.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* MOTTO */}
      <section id="motto" className="py-10">
        <Container>
          <h2 className="text-xl md:text-2xl font-bold">Our Motto</h2>
          <Card className="mt-4">
            <p className="leading-relaxed text-gray-700">
              “We focus not only on teaching English but also on understanding each child’s emotions, thoughts, and
              feelings. We aim to be their friend in learning, breaking down barriers so they feel confident to express
              themselves without fear of mistakes. Learning isn’t about memorising by heart—it’s about truly
              understanding concepts and applying them with confidence.”
            </p>
            <div className="mt-4 flex items-start gap-3 text-sm text-gray-600">
              <Quote className="h-5 w-5" />
              <em>
                “Learning gives creativity; creativity leads to thinking; thinking provides knowledge; and knowledge
                makes you great.” — Dr. A.P.J. Abdul Kalam
              </em>
            </div>
          </Card>
        </Container>
      </section>

      {/* CONTACT & ENROL */}
      <section id="contact" className="py-12 bg-gray-50">
        <Container className="grid md:grid-cols-2 gap-6 items-start">
          {/* Left: Get in touch */}
          <Card>
            <h3 className="text-lg font-semibold">Get in touch</h3>
            <p className="mt-1 text-gray-700">
              Have questions or want to book the 15-day trial? Message us on WhatsApp or email and we’ll respond promptly.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_INTL}?text=${waQuickText}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-700 text-white px-4 py-2"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 bg-white"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
              <a
                href={`tel:${WHATSAPP_DISPLAY.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 bg-white"
              >
                <Phone className="h-4 w-4" />
                Call
              </a>
            </div>
          </Card>

          {/* Right: Quick enquiry form */}
          <Card>
            <h3 className="text-lg font-semibold">Quick enquiry</h3>
            <form
              className="mt-3 grid grid-cols-1 gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                window.open(waFormLink, "_blank");
              }}
            >
              <input
                className="rounded-xl border px-3 py-2"
                placeholder="Parent name"
                value={form.parent}
                onChange={(e) => setForm({ ...form, parent: e.target.value })}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  className="rounded-xl border px-3 py-2"
                  placeholder="Child name & age"
                  value={form.child}
                  onChange={(e) => setForm({ ...form, child: e.target.value })}
                />
                <input
                  className="rounded-xl border px-3 py-2"
                  placeholder="Age"
                  value={form.age}
                  onChange={(e) => setForm({ ...form, age: e.target.value })}
                />
              </div>
              <input
                className="rounded-xl border px-3 py-2"
                placeholder="Email or WhatsApp"
                value={form.contact}
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
              />
              <textarea
                rows={3}
                className="rounded-xl border px-3 py-2"
                placeholder="Brief enquiry…"
                value={form.note}
                onChange={(e) => setForm({ ...form, note: e.target.value })}
              />
              <div className="flex flex-wrap gap-3 pt-1">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-sky-700 text-white px-4 py-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  Send via WhatsApp
                </button>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 bg-white"
                >
                  <Mail className="h-4 w-4" />
                  Email us
                </a>
              </div>
            </form>
          </Card>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-white">
        <Container className="py-6 text-sm text-gray-600 flex flex-wrap items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {BRAND}. All rights reserved.</p>
          <p className="flex items-center gap-4">
            <a href={`https://wa.me/${WHATSAPP_INTL}?text=${waQuickText}`} className="hover:text-gray-800">WhatsApp</a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-gray-800">{CONTACT_EMAIL}</a>
          </p>
        </Container>
      </footer>
    </main>
  );
}
