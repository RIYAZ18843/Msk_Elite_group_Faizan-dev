import React, { lazy } from 'react';

// Lazy loaded components for better performance
const Hero = lazy(() => import('../components/Hero'));
const Services = lazy(() => import('../components/Services'));
const About = lazy(() => import('../components/About'));
const Contact = lazy(() => import('../components/Contact'));
const WhatsAppWidget = lazy(() => import('../components/WhatsAppWidget'));

export default function Home({ onContactClick }) {
    return (
        <>
            <Hero onContactClick={onContactClick} />
            <About />
            <Services onContactClick={onContactClick} />
            <Contact onContactClick={onContactClick} />
        </>
    );
}
