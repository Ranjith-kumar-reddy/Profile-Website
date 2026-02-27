import React, { useState } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled, { keyframes } from "styled-components";

// ============ ANIMATIONS ============

const borderFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0px); }
`;

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 8px rgba(99,102,241,0.4); }
  50% { box-shadow: 0 0 20px rgba(99,102,241,0.8), 0 0 40px rgba(99,102,241,0.3); }
`;

const dotPulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.7; }
`;

const shimmerSlide = keyframes`
  0% { transform: translateX(-100%) skewX(-15deg); }
  100% { transform: translateX(300%) skewX(-15deg); }
`;

const twinkle = keyframes`
  0%, 100% { opacity: 0.2; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); }
`;

const rotateSlow = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// ============ STYLED COMPONENTS ============

const CardOuter = styled.div`
  position: relative;
  border-radius: 20px;
  padding: 2px;
  background: linear-gradient(270deg, #6366f1, #8b5cf6, #06b6d4, #ec4899, #6366f1);
  background-size: 400% 400%;
  animation: ${borderFlow} 5s ease infinite;
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-6px) scale(1.01);
    box-shadow:
      0 25px 60px rgba(99, 102, 241, 0.4),
      0 0 50px rgba(6, 182, 212, 0.2);
  }
`;

const SpinRing = styled.div`
  position: absolute;
  inset: -6px;
  border-radius: 24px;
  border: 1px dashed rgba(99, 102, 241, 0.2);
  animation: ${rotateSlow} 12s linear infinite;
  pointer-events: none;
`;

const Star = styled.div`
  position: absolute;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #a5b4fc;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  animation: ${twinkle} ${({ duration }) => duration || "2s"} ease-in-out infinite;
  animation-delay: ${({ delay }) => delay || "0s"};
  pointer-events: none;
`;

const CardInner = styled.div`
  background: linear-gradient(
    135deg,
    rgba(10, 10, 30, 0.97) 0%,
    rgba(20, 15, 50, 0.97) 50%,
    rgba(10, 20, 40, 0.97) 100%
  );
  border-radius: 18px;
  padding: 22px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: relative;
  overflow: hidden;
  animation: ${slideIn} 0.6s ease;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 40%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.05),
      transparent
    );
  }

  ${CardOuter}:hover &::after {
    animation: ${shimmerSlide} 0.8s ease forwards;
  }
`;

const OrbTop = styled.div`
  position: absolute;
  top: -30px;
  right: -30px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.2), transparent 70%);
  pointer-events: none;
`;

const OrbBottom = styled.div`
  position: absolute;
  bottom: -20px;
  left: -20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.15), transparent 70%);
  pointer-events: none;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 14px;
  align-items: flex-start;
  position: relative;
  z-index: 1;
`;

const ImageWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
`;

const ImageRing = styled.div`
  position: absolute;
  inset: -3px;
  border-radius: 14px;
  background: linear-gradient(135deg, #6366f1, #06b6d4, #8b5cf6);
  background-size: 300% 300%;
  animation: ${borderFlow} 3s ease infinite;
  z-index: 0;
`;

const Image = styled.img`
  height: 58px;
  width: 58px;
  border-radius: 12px;
  object-fit: cover;
  position: relative;
  z-index: 1;
  border: 2px solid rgba(10, 10, 30, 0.8);
  transition: all 0.4s ease;

  ${CardOuter}:hover & {
    transform: scale(1.08) rotate(3deg);
  }

  @media only screen and (max-width: 768px) {
    height: 44px;
    width: 44px;
  }
`;

const StatusDot = styled.div`
  position: absolute;
  bottom: -3px;
  right: -3px;
  width: 13px;
  height: 13px;
  background: radial-gradient(circle, #4ade80, #22c55e);
  border-radius: 50%;
  border: 2px solid rgba(10, 10, 30, 0.9);
  z-index: 2;
  animation: ${dotPulse} 2s ease-in-out infinite;
  box-shadow: 0 0 8px rgba(34, 197, 94, 0.6);
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Role = styled.div`
  font-size: 17px;
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff 0%, #c4b5fd 60%, #67e8f9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.3px;
  line-height: 1.3;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Company = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #a5b4fc;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const DateBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: rgba(99, 102, 241, 0.12);
  border: 1px solid rgba(99, 102, 241, 0.35);
  border-radius: 20px;
  padding: 3px 12px;
  width: fit-content;
  font-size: 11px;
  font-weight: 500;
  color: #a5b4fc;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(99, 102, 241, 0.6) 30%,
    rgba(6, 182, 212, 0.6) 70%,
    transparent 100%
  );
  position: relative;
  z-index: 1;

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

const Description = styled.div`
  width: 100%;
  font-size: 13.5px;
  font-weight: 400;
  color: rgba(200, 210, 255, 0.75);
  line-height: 1.75;
  position: relative;
  z-index: 1;
  border-left: 2px solid rgba(99, 102, 241, 0.4);
  padding-left: 12px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  z-index: 1;
`;

const SkillsLabel = styled.div`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: linear-gradient(135deg, #6366f1, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SkillBadge = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(99, 102, 241, 0.08);
  border: 1px solid rgba(99, 102, 241, 0.25);
  border-radius: 20px;
  padding: 4px 12px;
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    background: rgba(99, 102, 241, 0.2);
    border-color: rgba(99, 102, 241, 0.6);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
  }

  @media only screen and (max-width: 768px) {
    font-size: 11px;
    padding: 3px 10px;
  }
`;

// ============ COMPONENT ============

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={experience?.company}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={experience?.img}
        />
      }
      contentStyle={{
        background: "transparent",
        boxShadow: "none",
        border: "none",
        padding: "0",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(99, 102, 241, 0.6)",
      }}
      date={experience?.date}
    >
      <CardOuter>
        <SpinRing />

        {/* Twinkling stars */}
        <Star top="10%" right="8%" duration="2.5s" delay="0s" />
        <Star top="60%" right="5%" duration="3s" delay="0.5s" />
        <Star top="35%" right="12%" duration="2s" delay="1s" />

        <CardInner>
          <OrbTop />
          <OrbBottom />

          {/* Top section */}
          <Top>
            <ImageWrapper>
              <ImageRing />
              <Image src={experience?.img} alt={experience?.company} />
              <StatusDot />
            </ImageWrapper>
            <Body>
              <Role>{experience?.role}</Role>
              <Company>🏢 {experience?.company}</Company>
              <DateBadge>📅 {experience?.date}</DateBadge>
            </Body>
          </Top>

          <Divider />

          {/* Description */}
          {experience?.desc && (
            <Description>{experience.desc}</Description>
          )}

          {/* Skills */}
          {experience?.skills && (
            <SkillsSection>
              <SkillsLabel>⚡ Tech Stack</SkillsLabel>
              <SkillsWrapper>
                {experience.skills.map((skill, index) => (
                  <SkillBadge key={index}>{skill}</SkillBadge>
                ))}
              </SkillsWrapper>
            </SkillsSection>
          )}
        </CardInner>
      </CardOuter>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
