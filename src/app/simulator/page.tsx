'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Play, Pause, RotateCcw } from 'lucide-react';

export default function Simulator() {
  const [isRunning, setIsRunning] = useState(false);
  const [intensity, setIntensity] = useState(50);

  return (
    <main className="min-h-screen bg-dark">
      <nav className="flex items-center gap-4 p-6 border-b border-plasma/20">
        <Link href="/" className="flex items-center gap-2 text-plasma hover:text-white transition">
          <ArrowLeft className="w-5 h-5" /> Back
        </Link>
      </nav>
      <div className="p-6">
        <h1 className="text-4xl font-bold mb-8">Plasma Simulator</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-b from-plasma/10 to-transparent rounded-lg p-12 border border-plasma/20 min-h-96 flex items-center justify-center">
              <div className="text-center">
                <div className={`w-32 h-32 rounded-full mx-auto mb-4 transition-all ${isRunning ? 'bg-plasma shadow-2xl shadow-plasma animate-pulse' : 'bg-plasma/20'}`} />
                <p className="text-gray-400">Status: {isRunning ? 'Running' : 'Idle'}</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-plasma/5 rounded-lg p-6 border border-plasma/20">
              <div className="space-y-2">
                <button onClick={() => setIsRunning(!isRunning)} className="w-full px-4 py-2 bg-plasma text-dark font-semibold rounded-lg hover:shadow-lg transition">
                  {isRunning ? <Pause className="inline w-4 h-4" /> : <Play className="inline w-4 h-4" />} {isRunning ? 'Pause' : 'Start'}
                </button>
                <button onClick={() => {setIsRunning(false); setIntensity(50);}} className="w-full px-4 py-2 border border-plasma text-plasma font-semibold rounded-lg hover:bg-plasma/10 transition">
                  <RotateCcw className="inline w-4 h-4" /> Reset
                </button>
              </div>
            </div>
            <div className="bg-plasma/5 rounded-lg p-6 border border-plasma/20">
              <label className="block text-sm text-gray-400 mb-2">Intensity: {intensity}%</label>
              <input type="range" min="0" max="100" value={intensity} onChange={(e) => setIntensity(Number(e.target.value))} className="w-full h-2 bg-plasma/20 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}