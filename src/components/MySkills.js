import React from 'react'
import {motion} from 'framer-motion';

import{
    FlexContainer,
    PaddingContainer,
    Heading,
    IconContainer,
    ParaText,
    BlueText,
} from '../styles/Global.styled';

import{
    SkillsCardContainer,
    SkillsCard,
}from '../styles/MySkills.styled';

import { Skills } from '../utils/Data';

import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';

const MySkills = () => {
  return (
    <PaddingContainer
        id="Skills"
        top="10%"
        bottom="10%"    
    >

        <FlexContainer fullWidthChild>
            <SkillsCardContainer
                as={motion.div}
                variants={fadeInLeftVariant}
                initial="hidden"
                whileInView="visible"
            >
                {Skills.map((skill) => (
                    <SkillsCard>
                        <IconContainer size="5rem" color="blue">
                            {skill.icon}
                        </IconContainer>

                        <Heading as="h4" size="h4">
                            {skill.tech}
                        </Heading>
                    </SkillsCard>
                ))}
            </SkillsCardContainer>

            <motion.div
                variants={fadeInRightVariant}
                initial="hidden"
                whileInView="visible"
            >
                    <Heading as="h4" size="h4">
                        MY SKILLS
                    </Heading>
                    <Heading as="h2" size="h2" top="0.5rem">
                        What <BlueText> I can do</BlueText>
                    </Heading>

                    <ParaText top="2rem" bottom="1.5rem">
                        As a Developer, I have a wide range of experience in front-end development. I am proficient in Javascript, React, Angular, HTML ans CSS. My strong experience in bulding responsive ans dynamic user interfaces using React ans Redux has allowed me to create engaging and interactive web applications.  
                    </ParaText>

                    <ParaText>
                        I have experience in using React for building scrable and maintainable applications. This has allowed me to create efficient and sustainable code that can adept to the changing needs of a business.
                    </ParaText>
            </motion.div>
            
        </FlexContainer>

    </PaddingContainer>
  )
}

export default MySkills