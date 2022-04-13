import styled from 'styled-components'

const Header  = styled.header`
    background: #000;
    display: flex;
    height: 80px;
`

const LogoStyled = styled.img`
    margin-top: 25px;
    padding: 10px 0 0 35px; 
`

const MenuHeaderItems = styled.div`
    color: #FFF;
    display: flex;
    justify-content: center;
    margin: 25px 0 0 45px; 
    width: 85%;
`

const MenuHeaderItemsLabels = styled.p`
    margin-left: 10px;
`

export const HeaderStyled = {
    Header,
    LogoStyled,
    MenuHeaderItems,
    MenuHeaderItemsLabels
}