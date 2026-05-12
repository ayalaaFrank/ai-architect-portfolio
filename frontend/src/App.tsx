import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AIChatButton from './components/AIChatButton'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    /* cursor-none מסתיר את העכבר הרגיל כדי שהעיצוב המותאם יעבוד */
    <main className="relative bg-[#f8f7f4] antialiased md:cursor-none">
      
      {/* 1. אלמנטים צפים (תמיד למעלה) */}
      <CustomCursor />
      <AIChatButton />

      {/* 2. תפריט ניווט */}
      <Navbar />

      {/* 3. תוכן האתר לפי הסדר */}
      <div className="flex flex-col">
        <Hero />
        
        {/* הוספת ID לכל סקשן מאפשרת ל-Navbar לנווט אליהם בקלות */}
        <div id="about">
          <About />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </div>

      {/* 4. רגל האתר */}
      <Footer />

    </main>
  )
}

export default App