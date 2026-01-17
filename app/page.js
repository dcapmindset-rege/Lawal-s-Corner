'use client'
import { useEffect } from 'react'
import VisitTracker from '../components/VisitTracker'

export default function Home() {
  return (
    <main className="min-h-screen py-20 px-6 md:px-12 max-w-4xl mx-auto">
      <VisitTracker />
      
      <section className="text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-serif font-light mb-8 leading-tight">
          Welcome to My Personal Space
        </h1>
        <div className="prose prose-lg max-w-3xl mx-auto dark:prose-invert">
          <p>This blog is my quiet corner on the internet — a place where ideas breathe, stories unfold, and conversations happen without noise.</p>
          
          <p>It is intentionally simple. Mature. Human.</p>
          
          <p>Here, I share my life as it truly is: the work, the learning, the experiments, the failures, the reflections, and the moments that shape who I am — professionally and personally.</p>
        </div>
      </section>

      {/* Who This Space Is For */}
      <section className="mb-24">
        <h2 className="text-4xl font-serif font-light mb-12">Who This Space Is For</h2>
        <div className="grid md:grid-cols-2 gap-8 text-lg">
          <ul className="space-y-2">
            <li>• Clients who want to understand how I think, not just what I offer</li>
            <li>• Followers who value depth over noise</li>
            <li>• Young professionals and builders looking for clarity, not hype</li>
          </ul>
          <div>
            <p className="mb-4">If you enjoy thoughtful writing, lived experience, and honest perspectives, you&apos;ll feel at home here.</p>
            <p>Readers curious about real estate, design, entrepreneurship, sustainability, and life itself.</p>
          </div>
        </div>
      </section>

      {/* Quick Menu Preview */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-xl hover:shadow-lg transition-all">
          <h3 className="text-2xl font-serif mb-4">Journal</h3>
          <p>Ongoing thoughts on real estate, business, sustainability, and life.</p>
        </div>
        <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-xl hover:shadow-lg transition-all">
          <h3 className="text-2xl font-serif mb-4">CV</h3>
          <p>Professional record, experience, and credentials.</p>
        </div>
        <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-xl hover:shadow-lg transition-all">
          <h3 className="text-2xl font-serif mb-4">Portfolio</h3>
          <p>Selected projects across design, development, and real estate.</p>
        </div>
      </section>
    </main>
  )
        }
