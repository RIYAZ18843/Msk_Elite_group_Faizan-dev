import React, { lazy } from 'react';

import Hero from '../components/Hero';
import About from '../components/About';
const Services = lazy(() => import('../components/Services'));
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
