import React from "react";
import SmallLogo from '../../images/small-logo.png'
import { HeaderStyled } from './header-styled'


const Header = () => {
   return (
      <HeaderStyled.Header>
         <HeaderStyled.LogoStyled src={SmallLogo} alt="Logo Airbnb" />
         <HeaderStyled.MenuHeaderItems>
            <HeaderStyled.MenuHeaderItemsLabels>Lugares pra ficar</HeaderStyled.MenuHeaderItemsLabels>
            <HeaderStyled.MenuHeaderItemsLabels>Experiências</HeaderStyled.MenuHeaderItemsLabels>
            <HeaderStyled.MenuHeaderItemsLabels>Experiências online</HeaderStyled.MenuHeaderItemsLabels>
         </HeaderStyled.MenuHeaderItems>
      </HeaderStyled.Header>
   )

}

export default Header