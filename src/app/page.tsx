"use client"
import { useState, useEffect } from 'react';
import { ArrowRight, Code, Sparkles, Laptop } from 'lucide-react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">

      <div className="absolute inset-0 overflow-hidden">
        {mounted && Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animation: `float ${Math.random() * 10 + 15}s infinite ease-in-out`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl px-6 text-center space-y-8">
        <div className="mb-8 flex items-center">
          <Sparkles className="h-12 w-12 text-blue-400 mr-4" />
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            CodeCraft Yash Mishra
          </h1>
        </div>

        <h2 className="text-3xl md:text-4xl font-light text-gray-300 mb-8">
          Create, Edit, <span className="text-blue-400">Innovate</span>
        </h2>


        <p className="text-xl text-gray-400 max-w-2xl mb-12">
          Dive into a seamless editing experience designed for modern developers. Powerful tools meet intuitive design.
        </p>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transform transition-all duration-300 hover:scale-105">
            <Code className="h-8 w-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-medium mb-2">Smart Syntax</h3>
            <p className="text-gray-400 text-sm">Intelligent code assistance across languages</p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transform transition-all duration-300 hover:scale-105">
            <Laptop className="h-8 w-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-medium mb-2">Responsive Design</h3>
            <p className="text-gray-400 text-sm">Build for any device with real-time download</p>
          </div>


        </div>


        <a
          href="/editor"
          className="group relative flex items-center justify-center px-8 py-4 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-lg transition-all duration-300 ease-out shadow-lg hover:shadow-xl hover:scale-105"
        >
          <span className="mr-2">Go To Editor</span>
          <ArrowRight className="inline-block transition-transform duration-300 group-hover:translate-x-1" />
          <span className="absolute -inset-x-1 bottom-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300" />
        </a>
      </div>


      <footer className="absolute bottom-0 left-0 right-0 p-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} CodeCraft • Yash Mishra
      </footer>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-20px) scale(1.1);
            opacity: 0.2;
          }
        }
      `}</style>
    </main>
  );
}