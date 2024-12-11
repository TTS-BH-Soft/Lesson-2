import styled from 'styled-components'
import tw from 'twin.macro'

export const NavbarContainer = tw.div`
  flex items-center justify-around m-auto py-10 max-w-[1140px]

  // md:(justify-around items-center)
`

export const Logo = tw.img`
  ml-3

  md:(flex-col text-center)
`

export const Nav = styled.div<{ $isActive: boolean }>`
  ${tw`flex justify-between items-center mt-1 mr-2`};

  ${({ $isActive }) =>
    $isActive &&
    `
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 15px;
      right: 0;
      background-color: white;
      width: 100%;
      padding: 16px;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    `}
`

export const NavBoxLink = tw.div`
  w-[481px] pr-8 flex justify-end

  sm:(justify-between)
`

export const NavBox = tw.div`
  flex justify-end
`

export const NavLink = styled.a`
  ${tw`text-gray-500 [font-weight: 600] text-base transition-colors duration-300 no-underline tracking-wide flex items-center`};

  &:hover {
    ${tw`text-[#41487f]`};
  }

  &.active {
    ${tw`font-semibold text-[#41487f] w-16 mt-1 flex justify-center flex-row`};
  }
`

export const RootLink = tw(NavLink)`
  mr-4 pl-12
`

export const ChildLink = tw(NavLink)`
  pl-11 max-w-[114px]
`

export const Button = tw.button`
  p-4 text-center w-[158px] h-[52px] tracking-wide cursor-pointer transition-colors duration-300

  hover:(bg-[#e07eb3])
`

export const HamburgerMenu = styled.div<{ $isMenuOpen: boolean }>`
  ${tw`hidden flex-col cursor-pointer gap-1`};

  div {
    ${tw`w-6 h-[3px] bg-[#41487f] transition-all ease-in-out duration-300 md:hidden`};

    &:nth-child(1) {
      ${({ $isMenuOpen }) => $isMenuOpen && tw`rotate-45 translate-y-2`};
    }

    &:nth-child(2) {
      ${({ $isMenuOpen }) => $isMenuOpen && tw`opacity-0`};
    }

    &:nth-child(3) {
      ${({ $isMenuOpen }) => $isMenuOpen && tw`-rotate-45 -translate-y-2`};
    }
  }

  ${tw`md:flex`};
`

export const MobileMenu = styled.div`
  ${tw`fixed top-0 left-0 w-full h-full bg-white/95 z-50 flex flex-col items-center justify-center`};

  a {
    ${tw`no-underline text-[#41487f] text-lg my-4 text-center w-full flex justify-center items-center pl-0`};

    &:hover {
      ${tw`font-bold`};
    }
  }

  button {
    ${tw`mt-6`};
  }

  .close-btn {
    ${tw`absolute top-10 right-10 text-xl cursor-pointer text-[#41487f]`};
  }
`
