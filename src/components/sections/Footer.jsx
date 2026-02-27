import React from "react";
import styled, { keyframes } from "styled-components";
import { Bio } from "../../data/constants";
import { LinkedIn, GitHub } from "@mui/icons-material";

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

const twinkle = keyframes`
  0%, 100% { opacity: 0.2; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.3); }
`;

const floatY = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
`;

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 8px rgba(99,102,241,0.3); }
  50% { box-shadow: 0 0 20px rgba(99,102,241,0.7); }
`;

// ============ STYLED COMPONENTS ============

const FooterContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: 10;
  overflow: hidden;
  padding-top: 2px;
  background: linear-gradient(
    270deg,
    #6366f1,
    #8b5cf6,
    #06b6d4,
    #ec4899,
    #6366f1
  );
  background-size: 400% 400%;
  animation: ${borderFlow} 6s ease infinite;
`;

const FooterInner = styled.div`
  background: linear-gradient(
    135deg,
    rgba(8, 8, 25, 0.98) 0%,
    rgba(15, 10, 40, 0.98) 50%,
    rgba(8, 15, 30, 0.98) 100%
  );
  padding: 48px 24px 32px;
`;

const Star = styled.div`
  position: absolute;
  width: ${({ size }) => size || "3px"};
  height: ${({ size }) => size || "3px"};
  border-radius: 50%;
  background: ${({ color }) => color || "#a5b4fc"};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  animation: ${twinkle} ${({ duration }) => duration || "3s"} ease-in-out infinite;
  animation-delay: ${({ delay }) => delay || "0s"};
  pointer-events: none;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 28px;
  align-items: center;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Logo = styled.div`
  font-weight: 900;
  font-size: 28px;
  letter-spacing: -0.5px;
  background: linear-gradient(135deg, #ffffff 0%, #a5b4fc 40%, #67e8f9 80%, #ffffff 100%);
  background-size: 300% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmerMove} 4s linear infinite;
  font-family: 'Georgia', serif;
`;

const LogoTagline = styled.div`
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  background: linear-gradient(135deg, #6366f1, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Divider = styled.div`
  width: 100%;
  max-width: 800px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(99, 102, 241, 0.5),
    rgba(6, 182, 212, 0.5),
    transparent
  );
  position: relative;

  &::after {
    content: "✦";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 10px;
    color: #a5b4fc;
    background: rgba(8, 8, 25, 0.98);
    padding: 0 8px;
  }
`;

const Nav = styled.ul`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
`;

const NavLink = styled.a`
  color: rgba(200, 210, 255, 0.7);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 6px 14px;
  border-radius: 20px;
  letter-spacing: 0.3px;

  &:hover {
    color: #ffffff;
    background: rgba(99, 102, 241, 0.15);
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const SocialMediaIcon = styled.a`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 2px;
  background: linear-gradient(270deg, #6366f1, #8b5cf6, #06b6d4, #6366f1);
  background-size: 300% 300%;
  animation: ${borderFlow} 4s ease infinite, ${pulseGlow} 3s ease-in-out infinite;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: translateY(-4px) scale(1.1);
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.5);
  }
`;

const SocialIconInner = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 30, 0.9);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a5b4fc;
  transition: all 0.3s ease;

  ${SocialMediaIcon}:hover & {
    background: rgba(99, 102, 241, 0.2);
    color: #ffffff;
  }
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const Copyright = styled.p`
  font-size: 13px;
  color: rgba(165, 180, 252, 0.5);
  text-align: center;
  margin: 0;
  letter-spacing: 0.3px;
`;

const MadeWith = styled.div`
  font-size: 12px;
  color: rgba(165, 180, 252, 0.4);
  text-align: center;

  span {
    color: #f43f5e;
  }

  strong {
    background: linear-gradient(135deg, #6366f1, #06b6d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

// ============ COMPONENT ============

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInner>
        {/* Stars */}
        <Star top="10%" left="5%" size="4px" color="#c4b5fd" duration="2.5s" delay="0s" />
        <Star top="30%" left="10%" size="3px" color="#67e8f9" duration="3s" delay="0.5s" />
        <Star top="60%" left="3%" size="5px" color="#a5b4fc" duration="2s" delay="1s" />
        <Star top="10%" right="5%" size="3px" color="#c4b5fd" duration="3.5s" delay="0.3s" />
        <Star top="50%" right="8%" size="4px" color="#67e8f9" duration="2.8s" delay="0.8s" />

        <FooterWrapper>
          {/* Logo & tagline */}
          <TopSection>
            <Logo>Ambati Ranjith Kumar Reddy</Logo>
            <LogoTagline>Full Stack • MERN Developer</LogoTagline>
          </TopSection>

          <Divider />

          {/* Nav links */}
          <Nav>
            <NavLink href="#About">About</NavLink>
            <NavLink href="#Skills">Skills</NavLink>
            <NavLink href="#Experience">Experience</NavLink>
            <NavLink href="#Projects">Projects</NavLink>
            <NavLink href="#Certifications">Certifications</NavLink>
            <NavLink href="#Education">Education</NavLink>
            <NavLink href="#Contact">Contact</NavLink>
          </Nav>

          {/* Social icons */}
          <SocialMediaIcons>
            <SocialMediaIcon href={Bio.linkedin} target="_blank">
              <SocialIconInner>
                <LinkedIn fontSize="small" />
              </SocialIconInner>
            </SocialMediaIcon>
            <SocialMediaIcon href={Bio.github} target="_blank">
              <SocialIconInner>
                <GitHub fontSize="small" />
              </SocialIconInner>
            </SocialMediaIcon>
          </SocialMediaIcons>

          <Divider />

          {/* Copyright */}
          <BottomSection>
            <Copyright>
              &copy; 2025 Ambati Ranjith Kumar Reddy. All rights reserved.
            </Copyright>
            <MadeWith>
              Made with <span>for</span> using <strong>Profile view</strong>
            </MadeWith>
          </BottomSection>
        </FooterWrapper>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer;
