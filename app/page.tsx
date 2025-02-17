import { NavBar } from "@/components/nav-bar"
import { Hero } from "@/components/hero"
import { AreasOfStudy } from "@/components/areas-of-study"
import { HappeningAtSoa } from "@/components/happening-at-soa";
import { CommunityBoard } from "@/components/community-board"
import { Calendars } from "@/components/calendars"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main>
        <Hero />
        <AreasOfStudy />
        <HappeningAtSoa />
        <CommunityBoard />
        <Calendars />
      </main>
      <Footer />
    </div>
  )
}

