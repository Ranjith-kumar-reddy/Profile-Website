import React from "react";
import styled, { keyframes } from "styled-components";

// ============ ANIMATIONS ============

const borderFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
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
  50% { transform: translateY(-8px); }
`;

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 10px rgba(99,102,241,0.3); }
  50% { box-shadow: 0 0 25px rgba(99,102,241,0.7), 0 0 50px rgba(6,182,212,0.3); }
`;

const rotateSlow = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// ============ STYLED COMPONENTS ============

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 60px 0;
  overflow: hidden;
`;

const BlobLeft = styled.div`
  position: absolute;
  top: 10%;
  left: -100px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.1), transparent 70%);
  animation: ${floatY} 6s ease-in-out infinite;
  pointer-events: none;
`;

const BlobRight = styled.div`
  position: absolute;
  bottom: 10%;
  right: -100px;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.08), transparent 70%);
  animation: ${floatY} 8s ease-in-out infinite reverse;
  pointer-events: none;
`;

const Star = styled.div`
  position: absolute;
  width: ${({ size }) => size || "4px"};
  height: ${({ size }) => size || "4px"};
  border-radius: 50%;
  background: ${({ color }) => color || "#a5b4fc"};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  animation: ${twinkle} ${({ duration }) => duration || "3s"} ease-in-out infinite;
  animation-delay: ${({ delay }) => delay || "0s"};
  pointer-events: none;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  animation: ${fadeSlideUp} 0.8s ease;
`;

const TopTag = styled.div`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  background: linear-gradient(135deg, #6366f1, #06b6d4, #8b5cf6);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmerMove} 3s linear infinite;
`;

const Title = styled.div`
  font-size: 56px;
  text-align: center;
  font-weight: 900;
  background: linear-gradient(135deg, #ffffff 0%, #c4b5fd 40%, #67e8f9 80%, #ffffff 100%);
  background-size: 300% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmerMove} 5s linear infinite;
  letter-spacing: -1px;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const TitleUnderline = styled.div`
  width: 60%;
  height: 3px;
  margin: 6px auto 0;
  background: linear-gradient(90deg, transparent, #6366f1, #06b6d4, #8b5cf6, transparent);
  border-radius: 2px;
`;

const Desc = styled.div`
  font-size: 17px;
  text-align: center;
  font-weight: 400;
  color: rgba(200, 210, 255, 0.7);
  max-width: 600px;
  line-height: 1.7;
  margin-top: 10px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

// Card outer with animated border
const CardOuter = styled.div`
  width: 95%;
  max-width: 550px;
  position: relative;
  border-radius: 22px;
  padding: 2px;
  background: linear-gradient(270deg, #6366f1, #8b5cf6, #06b6d4, #ec4899, #6366f1);
  background-size: 400% 400%;
  animation: ${borderFlow} 5s ease infinite, ${pulseGlow} 3s ease-in-out infinite;
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 30px 80px rgba(99, 102, 241, 0.4);
  }
`;

const SpinRing = styled.div`
  position: absolute;
  inset: -8px;
  border-radius: 28px;
  border: 1px dashed rgba(99, 102, 241, 0.2);
  animation: ${rotateSlow} 12s linear infinite;
  pointer-events: none;
`;

const CardInner = styled.div`
  background: linear-gradient(
    135deg,
    rgba(10, 10, 30, 0.97) 0%,
    rgba(20, 15, 50, 0.97) 50%,
    rgba(10, 20, 40, 0.97) 100%
  );
  border-radius: 20px;
  padding: 40px 36px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 28px 20px;
  }
`;

const OrbTop = styled.div`
  position: absolute;
  top: -40px;
  right: -40px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.2), transparent 70%);
  pointer-events: none;
`;

const OrbBottom = styled.div`
  position: absolute;
  bottom: -30px;
  left: -30px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.15), transparent 70%);
  pointer-events: none;
`;

const CardTitle = styled.div`
  font-size: 22px;
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff, #a5b4fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Divider = styled.div`
  width: 100%;
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
    background: rgba(10, 10, 30, 0.97);
    padding: 0 6px;
  }
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  background: rgba(99, 102, 241, 0.08);
  border: 1px solid rgba(99, 102, 241, 0.25);
  border-radius: 16px;
  padding: 16px 20px;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  cursor: pointer;

  &:hover {
    background: rgba(99, 102, 241, 0.18);
    border-color: rgba(99, 102, 241, 0.6);
    transform: translateX(6px);
    box-shadow: 0 6px 25px rgba(99, 102, 241, 0.3);
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const ContactLabel = styled.div`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(165, 180, 252, 0.6);
`;

const ContactValue = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
`;

const ArrowIcon = styled.div`
  margin-left: auto;
  font-size: 18px;
  color: rgba(165, 180, 252, 0.5);
  transition: all 0.3s ease;

  ${ContactItem}:hover & {
    color: #a5b4fc;
    transform: translateX(4px);
  }
`;

// ============ COMPONENT ============

const Contact = () => {
  return (
    <Container id="Contact">
      {/* Background decorations */}
      <BlobLeft />
      <BlobRight />
      <Star top="5%" left="5%" size="5px" color="#c4b5fd" duration="2.5s" delay="0s" />
      <Star top="15%" left="15%" size="3px" color="#67e8f9" duration="3s" delay="0.5s" />
      <Star top="8%" right="10%" size="4px" color="#a5b4fc" duration="2s" delay="1s" />
      <Star top="80%" right="8%" size="5px" color="#c4b5fd" duration="3.2s" delay="1.2s" />

      <Wrapper>
        <TopTag>— Get In Touch —</TopTag>
        <Title>Contact</Title>
        <TitleUnderline />

        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>

        <CardOuter>
          <SpinRing />
          <CardInner>
            <OrbTop />
            <OrbBottom />

            <CardTitle>📬 My Contact Details</CardTitle>
            <Divider />

            {/* Name */}
            <ContactItem as="div">
              <IconWrapper>👤</IconWrapper>
              <ContactInfo>
                <ContactLabel>Full Name</ContactLabel>
                <ContactValue>Ambati Ranjith Kumar Reddy</ContactValue>
              </ContactInfo>
            </ContactItem>

            {/* Email */}
            <ContactItem href="mailto:ambatiranjith08@gmail.com">
              <IconWrapper>📧</IconWrapper>
              <ContactInfo>
                <ContactLabel>Email Address</ContactLabel>
                <ContactValue>aranjithkumarreddy085@gmail.com</ContactValue>
              </ContactInfo>
              <ArrowIcon>→</ArrowIcon>
            </ContactItem>

            {/* Phone */}
            <ContactItem href="tel:+91 9347273180">
              <IconWrapper>📱</IconWrapper>
              <ContactInfo>
                <ContactLabel>Phone Number</ContactLabel>
                <ContactValue>+91 9347273180 </ContactValue>
              </ContactInfo>
              <ArrowIcon>→</ArrowIcon>
            </ContactItem>

          </CardInner>
        </CardOuter>
      </Wrapper>
    </Container>
  );
};

export default Contact;
