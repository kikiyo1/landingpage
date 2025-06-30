
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Products from '@/components/landing/Products';
import About from '@/components/landing/About';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';
import CallToAction from '@/components/landing/CallToAction';

function LandingPage() {
  return (
    <>
      <Helmet>
        <title>METARAK HADESOLUTION - Solusi Rak Minimarket Terbaik</title>
        <meta name="description" content="Jual rak minimarket berkualitas tinggi dengan harga terjangkau. Rak gondola, end cap, checkout counter dan berbagai solusi display untuk toko Anda." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-gray-950 to-emerald-950 text-white hero-pattern">
        <Header />
        <main>
          <Hero />
          <Features />
          <Products />
          <About />
          <CallToAction />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
