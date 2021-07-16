import about from "../images/about-us.png";
import linkedin from "../images/linkedin.png";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";

const About = () => {
  return (
    
    <div className="about">
      <title>Sobre nós</title>
      <img className="about-page" id="about-page" src={about} alt=""></img>
    <main>
      <h1>Sobre nós!</h1>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
        placeat aspernatur modi. Corrupti sed quasi, aperiam inventore est
        soluta eveniet necessitatibus excepturi minus odio et ad id quam
        temporibus tempora.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rerum
        repudiandae quos cum! Fugit perferendis amet velit placeat, minima
        doloremque harum saepe eaque odio nisi quos aperiam dolorum in quasi!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem voluptas
        alias doloremque dicta molestias neque praesentium quam repudiandae
        magnam. Culpa voluptatem possimus molestias natus saepe nihil error
        temporibus cupiditate repellat.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aliquid
        iste repudiandae perferendis doloribus debitis cum in, molestias
        consequatur beatae minus, quasi numquam neque adipisci libero tenetur,
        fuga quod incidunt!
      </p>
      <br /><br />

      <h3>Nos siga nas redes sociais:</h3>

      <a
        href="https://www.linkedin.com/in/karen-lorhana-1848301aa/"
        
        ><img  src={linkedin} alt=""></img></a>
      <a href="https://www.instagram.com"
        ><img  src={instagram} alt=""></img></a>
      <a href="https://www.facebook.com" 
        ><img  src={facebook} alt=""></img></a><br /><br />
    </main>
    
    </div>
  );
};

export default About;
