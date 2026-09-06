'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Viewer3D() {
  return (
    <main className="min-h-screen bg-dark">
      <nav className="flex items-center gap-4 p-6 border-b border-plasma/20">
        <Link href="/" className="flex items-center gap-2 text-plasma hover:text-white transition">
          <ArrowLeft className="w-5 h-5" /> Back
        </Link>
      </nav>
      <div className="p-6">
        <h1 className="text-4xl font-bold mb-6">3D Model Viewer</h1>
        <div className="bg-gradient-to-b from-plasma/10 to-transparent rounded-lg p-12 border border-plasma/20 min-h-96 flex items-center justify-center">
          <p className="text-gray-400">3D viewer coming soon...</p>
        </div>
      </div>
    </main>
  );
}