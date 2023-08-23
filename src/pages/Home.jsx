import React, { useEffect, useState } from 'react'
import H2 from '../components/ui/H2.element'
import P from '../components/ui/P.element'
import Button from '../components/ui/Button.element'
import Section from '../components/ui/Section.element'
import DivLayout from '../components/ui/DivLayout.element'
import { useNavigate} from 'react-router-dom'



const Home = () => {
    const navigate = useNavigate()
    const [scr, setScr] = useState(0)
    const controlScroll = () => {
        const sections = document.querySelectorAll(".animatedSectionOff")
        const scrollTop = document.documentElement.scrollTop

        sections.forEach((elem,index)=>{
            let altura = sections[index].offsetTop
            if(altura-600<scrollTop){
                sections[index].style.opacity=1

            }else{
                sections[index].style.opacity=0;

            }
            
        })
    }

    window.addEventListener("scroll", controlScroll)

  return (
    <>
    <DivLayout>
        {/* <div className="divHomeIntro">
            <a href="https://www.linkedin.com/in/samuel-martinez-gonzalez-640594266/" target="_blank" rel="noopener noreferrer">
                <img 
                src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1691481491/icons8-linkedin-48_phhzaj.png"
                />
            </a>
            <P 
            text={"Web designed by Samuel Martinez. All copyright its from Riot Games API"} 
            fontSize={"small"}
            bkColor={"var(--whiteColor)"}
            color={"var(--blackColor)"}
            width={"50vw"}
            ></P>
            <a href="https://github.com/Samuelson23/ValorantAPI" target="_blank" rel="noopener noreferrer">
                <img 
                    src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1691481489/icons8-github-64_fbjunw.png"
                />
            </a>
        </div> */}
        <Section className={"animatedSection"}>
            <P text={"El shooter táctico 5v5 con personajes y habilidades"} fontSize={"big"} width={"75%"}></P>
            <H2 text={"VALORANT"}></H2>
            <P 
            text={"Visita cada una de las secciones para ver la información completa del juego. Y por si fuera poco, puedes añadir lo que te guste a tus favoritos!! Así tendrás toda la información a tu alcance en un click"} 
            fontSize={"medium"} 
            width={"60vw"}
            
            padding={"10px 20px"}
            ></P>
            <div className="divHomeIntro">
                <a href="https://www.linkedin.com/in/samuel-martinez-gonzalez-640594266/" target="_blank" rel="noopener noreferrer">
                    <img 
                    src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1691481491/icons8-linkedin-48_phhzaj.png"
                    alt="logo linkedin"
                    />
                </a>
                <P 
                text={"Web designed by Samuel Martinez. All copyright its from Riot Games API"} 
                fontSize={"small"}
                bkColor={"var(--whiteColor)"}
                color={"var(--blackColor)"}
                width={"50vw"}
                ></P>
                <a href="https://github.com/Samuelson23/ValorantAPI" target="_blank" rel="noopener noreferrer">
                    <img 
                        src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1691481489/icons8-github-64_fbjunw.png"
                        alt="logo github"
                    />
                </a>
            </div>
        </Section>
        <Section className={"animatedSectionOff"}>
            <P text={"Descubre toda la información sobre los diferentes agentes del juego"} fontSize={"big"} width={"75%"}></P>
            <H2 text={"AGENTS"}></H2>
            <Button text={"Ver mas"} action={()=> navigate("/agents")}></Button> 
        </Section>
        <Section className={"animatedSectionOff"}>
            <P text={"Echa un vistazo a los mapas para crear la mejor estrategia"} fontSize={"big"} width={"75%"}></P>
            <H2 text={"MAPS"}></H2>
            <Button text={"Ver mas"} action={()=> navigate("/maps")}></Button> 
        </Section>
        <Section className={"animatedSectionOff"}>
            <P text={"¿No sabes que arma elegir? Aquí tienes toda la información sobre ellas. Y también las diferentes skins"} fontSize={"big"} width={"75%"}></P>
            <H2 text={"WEAPONS"}></H2>
            <Button text={"Ver mas"} action={()=> navigate("/weapons")}></Button> 
        </Section>
        <Section className={"animatedSectionOff"}>
            <P text={"No te pierdas los sprays del juego, ya que puedes hacer graffittis mientras estas luchando"} fontSize={"big"} width={"75%"}></P>
            <H2 text={"SPRAYS"}></H2>
            <Button text={"Ver mas"} action={()=> navigate("/sprays")}></Button> 
        </Section>
    </DivLayout>
    
    </>
  )
}

export default Home