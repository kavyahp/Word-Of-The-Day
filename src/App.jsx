import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import WordCarousel from './components/word/WordCarousel.jsx'

function App() {
  return (
    <div className="app-root">
      <Navbar />

      <main>
        <section className="section hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-text">
                <p className="eyebrow">Vocabulary made practical</p>
                <h1 className="hero-title">Word of the Day</h1>
                <p className="hero-subtitle">
                  Learn practical vocabulary you can use in real conversations.
                  One premium word card at a time.
                </p>
              </div>

              <div className="hero-carousel">
                <WordCarousel />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
