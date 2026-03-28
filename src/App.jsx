import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Timeline from './components/Timeline'
import Technologies from './components/Technologies'
import CloudVsDVR from './components/CloudVsDVR'
import Platform from './components/Platform'
import Videos from './components/Videos'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Timeline />
      <Technologies />
      <CloudVsDVR />
      <Platform />
      <Videos />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
