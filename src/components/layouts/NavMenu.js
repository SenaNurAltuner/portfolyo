import React from 'react'

import {
    PaddingContainer,
    FlexContainer,
} from '../../styles/Global.styled';

import {
    NavMenuContainer,
    MenuIcon,
    MenuItem,
} from '../../styles/Navbar.styled';

import {AiOutlineClose} from 'react-icons/ai';
import { navLinks } from '../../utils/Data';

const NavMenu = ({ setOpenMenu }) => {
  return (
    <NavMenuContainer>
        <PaddingContainer left="5%" right="5%" top="2rem">
            <FlexContainer justify="flex-end">
                <MenuIcon
                    onClick ={() => setOpenMenu( false )}  
                >
                    <AiOutlineClose/>
                </MenuIcon>
            </FlexContainer>
        </PaddingContainer>

        <PaddingContainer top="%8">
            <FlexContainer
            direction="column"
            align="center"
            >
                {navLinks.map((link) => (
                <MenuItem 
                    key={link.id}
                    href={`#${link.href}`}
                    onClick={() => setOpenMenu(false)}
                >
                    {link.name}
                </MenuItem>
                ))}

            </FlexContainer>
        </PaddingContainer>
    </NavMenuContainer>
  )
}

export default NavMenu