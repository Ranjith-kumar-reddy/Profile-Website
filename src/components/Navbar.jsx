import React, { useState, useEffect } from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { keyframes, useTheme } from "styled-components";
import { Bio } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";

// ============ ANIMATIONS ============

const borderFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const shimmerMove = keyframes`
  0% { background-position: -400% 0; }
  100% { background-position: 400% 0; }
`;

const fadeDown = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

// ============ STYLED COMPONENTS ============

const Nav = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  color: white;
  background: ${({ scrolled }) =>
    scrolled ? "rgba(10, 10, 30, 0.95)" : "rgba(10, 10, 30, 0.6)"};
  backdrop-filter: blur(18px);
  border-bottom: 1px solid ${({ scrolled }) =>
    scrolled ? "rgba(99, 102, 241, 0.3)" : "rgba(255, 255, 255, 0.05)"};
  transition: all 0.4s ease;
  animation: ${fadeDown} 0.6s ease;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLogo = styled(LinkR)`
  font-weight: 800;
  font-size: 18px;
  text-decoration: none;
  background: linear-gradient(135deg, #ffffff 0%, #a5b4fc 50%, #67e8f9 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmerMove} 4s linear infinite;
  white-space: nowrap;
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 0;
  list-style: none;
  margin: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: rgba(200, 210, 255, 0.8);
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  padding: 6px 14px;
  border-radius: 20px;
  position: relative;

  &:hover {
    color: #ffffff;
    background: rgba(99, 102, 241, 0.15);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #6366f1, #06b6d4);
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 60%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  position: relative;
  border-radius: 22px;
  padding: 2px;
  background: linear-gradient(270deg, #6366f1, #8b5cf6, #06b6d4, #6366f1);
  background-size: 300% 300%;
  animation: ${borderFlow} 4s ease infinite;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.5);
  }
`;

const GithubButtonInner = styled.div`
  background: rgba(10, 10, 30, 0.9);
  border-radius: 20px;
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 600;
  color: #a5b4fc;
  transition: all 0.3s ease;
  white-space: nowrap;

  ${GithubButton}:hover & {
    background: rgba(99, 102, 241, 0.2);
    color: #ffffff;
  }
`;

const MobileIcon = styled.div`
  display: none;
  align-items: center;
  color: #a5b4fc;
  cursor: pointer;
  padding: 8px;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(99, 102, 241, 0.15);
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
  width: 100%;
  padding: 16px 24px 24px;
  background: rgba(10, 10, 30, 0.97);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(99, 102, 241, 0.2);
  position: absolute;
  top: 70px;
  right: 0;
  transition: all 0.4s ease;
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-110%)")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
`;

const MobileNavLink = styled.a`
  color: rgba(200, 210, 255, 0.8);
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  padding: 10px 16px;
  border-radius: 12px;
  width: 100%;

  &:hover {
    color: #ffffff;
    background: rgba(99, 102, 241, 0.15);
    padding-left: 22px;
  }
`;

const MobileDivider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.4), transparent);
  margin: 4px 0;
`;

// ============ COMPONENT ============

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Nav scrolled={scrolled}>
      <NavbarContainer>
        {/* Logo */}
        <NavLogo to="/">Ambati Ranjith Kumar Reddy</NavLogo>

        {/* Mobile menu icon */}
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>

        {/* Desktop nav links */}
        <NavItems>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
          <NavLink href="#Contact">Contact</NavLink>
          <NavLink href="#Certifications">Certifications</NavLink>
        </NavItems>

        {/* Desktop button */}
        <ButtonContainer>
          <GithubButton href={Bio.github} target="_blank">
            <GithubButtonInner>⚡ Github Profile</GithubButtonInner>
          </GithubButton>
        </ButtonContainer>

        {/* Mobile menu */}
        <MobileMenu isOpen={isOpen}>
          <MobileNavLink onClick={() => setIsOpen(false)} href="#About">About</MobileNavLink>
          <MobileNavLink onClick={() => setIsOpen(false)} href="#Skills">Skills</MobileNavLink>
          <MobileNavLink onClick={() => setIsOpen(false)} href="#Experience">Experience</MobileNavLink>
          <MobileNavLink onClick={() => setIsOpen(false)} href="#Projects">Projects</MobileNavLink>
          <MobileNavLink onClick={() => setIsOpen(false)} href="#Education">Education</MobileNavLink>
          <MobileNavLink onClick={() => setIsOpen(false)} href="#Contact">Contact</MobileNavLink>
          <MobileDivider />
          <GithubButton href={Bio.github} target="_blank" style={{ width: "100%" }}>
            <GithubButtonInner style={{ textAlign: "center" }}>⚡ Github Profile</GithubButtonInner>
          </GithubButton>
        </MobileMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
