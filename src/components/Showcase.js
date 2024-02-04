import React from 'react'
import {motion} from 'framer-motion';

import{
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
} from '../styles/Global.styled';

import { ShowcaseImageCard,
         ShowcaseParticleContainer,     
         Particle,   
} from '../styles/Showcase.styled';

import {BsLinkedin, BsTwitter, BsInstagram, BsYoutube} from "react-icons/bs";

import ShowcaseImg from '../assets/image.png';
import BackgroundImg from '../assets/particle.png';

import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';

const Showcase = () => {
  return (
    <PaddingContainer
        id="Home"
        left="3%"
        right="10%"
        top="18%"
        bottom="10%"
    >
        <FlexContainer align="center fullWhidthChild">
            <motion.div
                variants={fadeInLeftVariant}
                initial="hidden"
                whileInView="visible"
            >
                <Heading size= "h4">Hello!</Heading>

                <Heading
                    as="h2"
                    size="h2"
                    top="0.5rem"
                    bottom="1rem"
                >
                    I'm <BlueText>Sena Nur Altuner</BlueText>
                </Heading>

                <Heading
                    as="h3"
                    size="h3"
                >
                    I'm a <BlueText>Frontend Developer</BlueText>
                </Heading>

                <ParaText
                    as="p"
                    top="2rem"
                    bottom="4rem"
                >
                    Hello, my name is Sena Nur Altuner ans I'm a front-end developer width 1 years o experience in creating ans designing user-friendly websites and web applications.
                </ParaText>

                <FlexContainer gap="20px">
                    <IconContainer color="white" size="1.5rem">
                        <BsLinkedin/> 
                    </IconContainer>

                    <IconContainer color="white" size="1.5rem">
                        <BsTwitter/> 
                    </IconContainer>

                    <IconContainer color="white" size="1.5rem">
                        <BsYoutube/> 
                    </IconContainer>

                    <IconContainer color="white" size="1.5rem">
                        <BsInstagram/> 
                    </IconContainer>
                </FlexContainer>

            </motion.div>

            <FlexContainer 
                as={motion.div}
                variants={fadeInRightVariant}
                initial="hidden"
                justify="flex-end"
                whileInView="visible"
            >

                <ShowcaseParticleContainer>
                    <ShowcaseImageCard>
                        <img src ={ShowcaseImg} alt="showcase" />
                    </ShowcaseImageCard>

                    <Particle
                        as={motion.img}
                        animate={{
                            x: [0, 100, 0],
                            rotate:360,
                            scale:[1, 0.5, 1]
                        }}
                        transition={{
                            duration:20,
                            repeat: Infinity,
                        }}
                        src={BackgroundImg}
                        alt="particle"
                        top="120px"
                        left="900px"
                        rotate="60deg"
                    />

                    <Particle
                        as={motion.img}
                        animate={{
                            y: [0, 100, 0],
                            rotate:360,
                            scale:[1, 0.8, 1]
                        }}
                        transition={{
                            duration:18,
                            repeat: Infinity,
                        }}
                        src={BackgroundImg}
                        alt="particle"
                        top="200px"
                        left="1190px"
                        rotate="0deg"
                    />

                    <Particle
                        as={motion.img}
                        animate={{
                            x: [0, -100, 0],
                            rotate:360,
                            scale:[1, 0.9, 1]
                        }}
                        transition={{
                            duration:15,
                            repeat: Infinity,
                        }}
                        src={BackgroundImg}
                        alt="particle"
                        bottom="10px"
                        left="800px"
                        rotate="50deg"
                    />

                </ShowcaseParticleContainer>
            </FlexContainer>
        </FlexContainer>
        </PaddingContainer>
  )
}

export default Showcase