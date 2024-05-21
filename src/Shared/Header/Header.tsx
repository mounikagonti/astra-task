import {Link} from 'react-router-dom'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import {RxCross2} from 'react-icons/rx'
import {FC, useState} from 'react'
import {HiBars3CenterLeft} from 'react-icons/hi2'

// Styles
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight,
  HeaderLogo,
  HeaderIcon,
  IconWrapper,
  MobileNav,
} from './header.style'
import {Container, FlexWrapper} from '../../Styles/commonStyles'

// Assets
import Logo from '../../Assets/logo.png'

// Redux slice
import ThemeSwitcher from '../ThemeSwitcher'

// Hooks
import useWindowSize from '../../hooks/useWindowSize'

interface NavItem {
  id: number
  name: string
  path: string
}

const navItems: NavItem[] = [
  {
    id: 1,
    name: 'Home',
    path: '/',
  },
  {
    id: 2,
    name: 'Contact',
    path: '/contact',
  },
  {
    id: 3,
    name: 'Task Page',
    path: '/task-page',
  },
]

const Header: FC = () => {
  const {width} = useWindowSize()
  const [isToggle, setIsToggle] = useState(false)

  const handleToggle = () => {
    setIsToggle((prev) => !prev)
  }
  return (
    <HeaderWrapper>
      <Container>
        <FlexWrapper>
          <HeaderLeft>
            <Link to='/'>
              <HeaderLogo src={Logo} alt='Logo' />
            </Link>
          </HeaderLeft>
          <HeaderRight>
            <FlexWrapper>
              {width > 768 && (
                <FlexWrapper>
                  {navItems?.map((item) => (
                    <Link key={item.id} to={item.path}>
                      {item.name}
                    </Link>
                  ))}
                </FlexWrapper>
              )}
              <FlexWrapper>
                {width > 768 && (
                  <>
                    <HeaderIcon
                      href=''
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FaInstagram />
                    </HeaderIcon>
                    <HeaderIcon
                      href=''
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FaFacebook />
                    </HeaderIcon>
                    <HeaderIcon
                      href=''
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FaTwitter />
                    </HeaderIcon>
                  </>
                )}
                <ThemeSwitcher />
                {width < 768 && !isToggle ? (
                  <IconWrapper onClick={handleToggle}>
                    <HiBars3CenterLeft />
                  </IconWrapper>
                ) : (
                  width < 768 && (
                    <IconWrapper onClick={handleToggle}>
                      <RxCross2 />
                    </IconWrapper>
                  )
                )}
              </FlexWrapper>
            </FlexWrapper>
            {width < 786 && (
              <MobileNav isVisible={isToggle}>
                {navItems?.map((item) => (
                  <Link key={item.id} to={item.path}>
                    {item.name}
                  </Link>
                ))}
              </MobileNav>
            )}
          </HeaderRight>
        </FlexWrapper>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
