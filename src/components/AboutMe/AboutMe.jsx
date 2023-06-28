import {useState, useEffect} from 'react'
import Title from '../Utils/Title'
import './AboutMe.scss'
import MyLottie from './MyLottie';
import {motion} from "framer-motion"



export default function AboutMe() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize(){
      setWidth(window.innerWidth);
    }

    addEventListener("resize", handleResize)
    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  })

  const title = "Was ich mache"; 
  

  const container = {
    hidden: {scale : 0},
    visible: {scale : 1,
      boxShadow:
        "0rem 0rem 0.5rem rgba(0, 0, 0, .3)",

      transition: {ease: "easeOut",
        duration: .8}
    },
  }
  return (
    <section className="aboutMe">
      <Title text = {title} />
      <div className="aboutMeMain">
        <MyLottie />
        <motion.div className="speechbubble"
          style={width < 1000 ? {originX: 0.5, originY: 0} : {originX: 0, originY: 0.5}}
          variants={container}
          initial="hidden"
          visible="visible"
          whileInView="visible"
        >
          <p className="bubble-text">
          Willkommen auf meiner persönlichen Website!
          </p>
          <p className="bubble-text">
          Ich habe Luft- und Raumfahrttechnik und Mechatronik studiert und arbeite derzeit als Produktmanager im Bereich Automatisierungstechnik für Lucas-Nuelle, ein Unternehmen, das Laborgeräte für den Bildungsbereich herstellt. 
          </p>
          <p className="bubble-text">
          Der Bildungsbereich passte auch ganz gut zu mir, da ich schon immer Lust gehabt habe, Neues zu lernen. So lerne ich etwa seit einiger Zeit Spanisch. Außerdem verfolge ich leidenschaftlich neue Technologien und Entwicklungen. So begeistere ich mich beispielsweise für Kryptowährungen und der Idee von digitalen Welten. Aus der Neugier heraus, diese Themen besser zu verstehen und der Überlegung, wie ich daran teilnehmen könnte, habe ich angefangen die 3D-Modellierung und Animierung mit Blender zu lernen. Da ich eher Richtung Entwicklung als Design denke, war schnell klar, dass ich weiterdenken und -lernen müsste, um einen Teil vom Internet abzubekommen. 
          </p>
          <p className="bubble-text">
          In letzter Zeit habe ich mich daher mit dem Web und Webtechnologien beschäftigt. Mein Ziel ist es, visuell beeindruckende Webseiten zu entwerfen, die außergewöhnliche Benutzererfahrungen bieten. 
          </p>
          <p className="bubble-text">
          Diese Webseite möchte ich in Zukunft nutzen, um mich weiterzuentwickeln, neugelerntes umzusetzen und meine Projekte und Erkenntnisse zu zeigen. Ich denke und hoffe, dass die Seite sich im Laufe der Zeit füllen und weiterentwickeln wird. 
          </p>
          <p className="bubble-text">
          Vielen Dank für Ihren Besuch!
          </p>                   
        </motion.div>
      </div>
    </section>
  )
}
