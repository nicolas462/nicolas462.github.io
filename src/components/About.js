import React from "react";

import './About.css';

const About = ({ language }) => {
  return (
    <div className="flex-container content">
      <div className={`lang-section ${language === "en" ? "visible" : "hidden"}`}>
        <h2>About me</h2>
        <p>
          Autodidactic systems engineer in professional training with strong
          systematic analytic skills to model, develop, adapt and integrate web
          software. Great love and passion for my profession.
        </p>
        <br />
        <p>
          I constantly get updated information to use it and integrate it with
          my knowledge. Ease of incorporation.
        </p>
        <br />
        <p>
          In my search to complete my wisdoms, I've had the opportunity to
          develop web projects and cloud applications. Therefore, I've improved
          my develop paradigms and understood my skills thoroughly.
        </p>
      </div>

      <div className={`lang-section ${language === "es" ? "visible" : "hidden"}`}>
        <h2>Acerca de mí</h2>
        <p>
          Ingeniero de sistemas autodidacta en formación profesional con fuertes
          habilidades analíticas sistemáticas para modelar, desarrollar, adaptar
          e integrar software web. Gran amor y pasión por mi profesión.
        </p>
        <br />
        <p>
          Constantemente obtengo información actualizada para utilizarla e
          integrarla con mis conocimientos. Facilidad de incorporación.
        </p>
        <br />
        <p>
          En mi búsqueda por completar mis saberes, he tenido la oportunidad de
          desarrollar proyectos web y aplicaciones en la nube. Por lo tanto, he
          mejorado mis paradigmas de desarrollo y he entendido mis habilidades a
          fondo.
        </p>
      </div>
    </div>
  );
};

export default About;
