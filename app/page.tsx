'use client'
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-lg tracking-widest">YOUR BRAND</h1>
        <div className="space-x-6 text-sm opacity-70">
          <a href="#">Work</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <section className="relative h-[80vh] flex items-center justify-center text-center">
        
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          className="absolute w-full h-full object-cover opacity-40"
        />

        {/* 👇 一定要是 motion.div */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6"
        >
          <h2 className="text-6xl font-light mb-6">
            Crafting Timeless <br /> Digital Experiences
          </h2>

          <p className="max-w-xl mx-auto opacity-70 mb-8">
            We design modern, high-end websites that elevate brands.
          </p>

          <button className="border border-white px-6 py-3 hover:bg-white hover:text-black transition">
            View Work
          </button>
        </motion.div>

      </section>
{/* Portfolio Section */}
<section className="px-10 py-20">
  <h3 className="text-3xl font-light mb-10">Selected Work</h3>

  <div className="grid md:grid-cols-3 gap-6">
    
    {/* Item 1 */}
    <Link href="/work/project-1" className="group cursor-pointer">
      <div className="overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
          className="w-full h-[300px] object-cover group-hover:scale-110 transition duration-500"
        />
      </div>
      <p className="mt-4 text-sm opacity-70">Brand Identity</p>
    </Link>

    {/* Item 2 */}
    <Link href="/work/project-2" className="group cursor-pointer">
      <div className="overflow-hidden">
        <video 
        src="/shipyards.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-[500px] object-cover mb-10"
      />
      </div>
      <p className="mt-4 text-sm opacity-70">Web Design</p>
    </Link>

    {/* Item 3 */}
    <Link href="/work/project-3" className="group cursor-pointer">
      <div className="overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
          className="w-full h-[300px] object-cover group-hover:scale-110 transition duration-500"
        />
      </div>
      <p className="mt-4 text-sm opacity-70">Creative Direction</p>
    </Link>

  </div>
</section>
    </main>
  );
}