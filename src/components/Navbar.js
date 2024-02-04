import React, { useState, useEffect } from 'react'

import {
    FlexContainer,
    PaddingContainer,
    Container,
    BlueText,
} from '../styles/Global.styled';

import {
    NavbarContainer,
    Logo,
    MenuIcon,
} from '../styles/Navbar.styled'

import { GiHamburgerMenu } from 'react-icons/gi';
import { theme } from '../utils/Theme';
import NavMenu from './layouts/NavMenu';
import { warning } from 'framer-motion';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const [sticky, setSticky] = useState (false);

    useEffect(() => {
        const onscroll = () => {
            window.pageYOffset > 50 ? setSticky(true) : setSticky(false);
        }

        window.addEventListener('scroll', onscroll)
        return () => window.removeEventListener('scroll', onscroll)
    },[])

  return (
    <NavbarContainer 
        bgColor={ sticky ? theme.colors.primary : 'transparent'}>
            <PaddingContainer
                top="1.2rem"
                bottom="1.2rem"
            >
                <Container>
                    <FlexContainer justify="space-between">
                        <Logo>
                            JustA<BlueText>Dev </BlueText>
                        </Logo>
                        <MenuIcon
                            onClick={() => {setOpenMenu(true)}}
                        >

                            <GiHamburgerMenu/>
                        </MenuIcon>
                    </FlexContainer>
                </Container>

                {openMenu && <NavMenu setOpenMenu={setOpenMenu}/>}
            </PaddingContainer>
    </NavbarContainer>
  )
}

export default Navbar