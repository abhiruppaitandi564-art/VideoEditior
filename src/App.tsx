/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer, { CTA } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian text-white font-sans selection:bg-neon-purple/30 overflow-x-hidden relative">
      {/* Theme Background Decorations */}
      <div className="neon-glow top-[-100px] right-[-100px]" />
      <div className="neon-glow bottom-[-100px] left-[-100px]" />

      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>

      <Footer />
      
      {/* Global Grain Overlay for texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-[60]">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
    </div>
  );
}
