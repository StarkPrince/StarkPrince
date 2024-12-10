'use client'

import { About } from "@/components/About"
import { Contact } from "@/components/Contact"
import { Experience } from "@/components/Experience"
import Footer from "@/components/Footer"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Projects } from "@/components/Projects"
import { Skills } from "@/components/Skills"


export default function Home()
{
  return (
    <HomeContent />
  )
}

function HomeContent()
{
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  )
}