'use client';

import Link from 'next/link';
import { Zap, Cube, Beaker, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-dark via-dark to-dark">
      <nav className="fixed top-0 w-full bg-dark/80 backdrop-blur-md border-b border-plasma/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Zap className="w-8 h-8 text-plasma" />
            <span className="text-xl font-bold">CAP Pen</span>
          </div>
          <div className="flex gap-6">
            <Link href="#features" className="hover:text-plasma transition">Features</Link>
            <Link href="/simulator" className="hover:text-plasma transition">Simulator</Link>
            <Link href="/3d-viewer" className="hover:text-plasma transition">3D Viewer</Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-plasma via-blue-400 to-plasma bg-clip-text text-transparent">
            Handheld Cold Atmospheric Plasma Pen
          </h1>
          <p className="text-xl text-gray-400 mb-8">Professional medical-grade device showcase</p>
          <div className="flex gap-4 justify-center">
            <Link href="/3d-viewer" className="px-8 py-3 bg-plasma text-dark font-semibold rounded-lg hover:shadow-lg hover:shadow-plasma/50 transition flex items-center gap-2">
              View 3D Model <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/simulator" className="px-8 py-3 border border-plasma text-plasma font-semibold rounded-lg hover:bg-plasma/10 transition">
              Plasma Simulator
            </Link>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6 border-t border-plasma/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { Icon: Cube, title: '3D Viewer', description: 'Interactive 3D model visualization' },
              { Icon: Zap, title: 'Plasma Simulator', description: 'Real-time plasma behavior simulation' },
              { Icon: Beaker, title: 'Testing Portal', description: 'Comprehensive testing interface' },
            ].map((feature, idx) => (
              <div key={idx} className="p-6 rounded-lg border border-plasma/20 bg-plasma/5 hover:bg-plasma/10 transition">
                <feature.Icon className="w-12 h-12 text-plasma mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-plasma/20 py-12 px-6 text-center text-gray-500">
        <p>© 2024 CAP Pen Showcase. Designed by Abubakkar Mansuri.</p>
      </footer>
    </main>
  );
}
