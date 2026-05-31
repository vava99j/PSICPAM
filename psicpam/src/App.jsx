import { useState } from 'react'
import './App.css'

function App() {
  const [contato, setContato] = useState(false)
  const [child, setChild] = useState(false)
  const [family, setFamily] = useState(false)
  const [career, setCareer] = useState(false)
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          {/* Substitua pelo caminho correto da sua logo se necessário */}
          <div className="logo-area">
            <span className="logo-p">P</span>
            <h1>PsicPam</h1>
          </div>
          <button className="nav-btn" onClick={() => setContato(!contato)}>Contato</button>
        </div>
      </nav>
      {contato && (
        <div className="main-content">
          <button className="nav-btn" style={{ color: 'red' }}>E-mail</button>
          <button className="nav-btn" style={{ color: "bluepurple" }}>Instagram</button>
          <button className="nav-btn" style={{ color: 'green' }}>WhatsApp</button>

        </div>
      )}
      <main className="main-content">
        <section id="center" className="hero-section">
          <div className="hero-text">
            <h3>Expanda <br /><span>seus horizontes</span></h3>
            <p>Descubra novos caminhos para o desenvolvimento pessoal e profissional com um acompanhamento dedicado.</p>
            <a href="#services" className="cta-btn">Conhecer Serviços</a>
          </div>
          <div id='uemSou'>
            <div className="badge">Quem <br />sou</div>
            <p>PsicPam (Pâmela Feitosa) é psicopedagoga clínica e institucional, especialista em TDAH, com 15 anos de experiência na área da educação. Seu trabalho é voltado para a identificação e intervenção de dificuldades de aprendizagem, promovendo o desenvolvimento cognitivo, emocional e acadêmico de crianças de forma individualizada. Com uma abordagem humanizada e baseada em evidências científicas, oferece avaliações psicopedagógicas completas, acompanhamento personalizado e orientação para famílias e escolas. Além da atuação clínica, também é mentora de profissionais da área e palestrante, contribuindo para a formação e disseminação de conhecimento sobre aprendizagem e desenvolvimento infantil.</p>            <div className="hero-img-placeholder"></div>
            <div className="hero-img-placeholder"></div>
          </div>
        </section>

        <section id="services" className="services-section">
          <div className="services-header">
            <h2>Tipos de serviços</h2>
            <div className="line-accent"></div>
          </div>

          <div className="services-grid">
            <div className="card" id="career" onClick={() => setCareer(!career)}>
              <div className="card-icon">🚀</div>
              <h5>Impulsione sua carreira</h5>
              <p>Orientação estratégica para profissionais que buscam recolocação ou evolução no mercado.</p>
            </div>

            <div className="card" id="school" onClick={() => setChild(!child)}>
              <div className="card-icon">🧠</div>
              <h5>Reforço para seu filho</h5>
              {child ? (
                <p>Intervenção Psicopedagógica Personalizada <br /> Avaliação Psicopedagógica Completa <br /> Laudo Psicopedagógico</p>
                
              ) : (
                <p>Suporte psicopedagógico especializado para potencializar o aprendizado e a confiança.</p>
              )}
            </div>

            <div className="card" id="familia" onClick={() => setFamily(!family)}>
              <div className="card-icon">🏡</div>
              <h5>Plano família</h5>
              {family ? (
                <p>
                  Plano que une o mentoria e reforço para seu filho
                </p>
              ) : (
                <p>Você e seu filho aprendendo e evoluindo juntos em um ambiente de suporte mútuo.</p>
              )}
            </div>
          </div>
        </section>
        <p>
          Serviço Web feito por <a href="https://wa.me/5511953051805">Jorge Sites</a>
        </p>
      </main>

    </>
  )
}

export default App