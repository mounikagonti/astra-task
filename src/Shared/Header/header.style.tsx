import styled from 'styled-components'
import {DefaultTheme} from 'styled-components'
import {size} from '../../Utils/breakpoints'

interface MobileNavProps {
  theme: DefaultTheme
  isVisible: boolean
}

export const HeaderWrapper = styled.header`
  background-color: transparent;
  padding: 20px 0;
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background: ${(props) => props.theme.headerBg};
  box-shadow: 0 8px 32px 0 transparent;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 20;
`
export const HeaderLeft = styled.div``

export const HeaderRight = styled.div`
  color: ${(props) => props.theme.whiteColor};
  svg {
    font-size: 20px;
  }
`

export const HeaderLogo = styled.img`
  @media screen and (max-width: ${size.sm}) {
    height: 30px;
  }
`

export const HeaderIcon = styled.a``
export const IconWrapper = styled.div`
  cursor: pointer;
`

export const MobileNav = styled.div<MobileNavProps>`
  position: absolute;
  top: 70px;
  background-color: ${({theme}) => theme.buttonColor};
  height: 400px;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  right: 0;
  display: flex;
  align-items: flex-end;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  a {
    color: ${({theme}) => theme.blackColor};
    font-weight: 600;
    margin: 15px 10px;
  }
`
