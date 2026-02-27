import React, { useState } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled, { keyframes } from "styled-components";
import { experiences } from "../../data/constants";
import ExperienceCard from "../cards/ExperienceCard";

// ============ ANIMATIONS ============

const borderFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const glowPulse = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
`;

const twinkle = keyframes`
  0%, 100% { opacity: 0.2; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.3); }
`;

const floatY = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const rotateSlow = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const shimmerMove = keyframes`
  0% { background-position: -400% 0; }
  100% { background-position: 400% 0; }
`;

const countUp = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

// ============ STYLED COMPONENTS ============

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0;
  overflow: hidden;
`;

// Animated background blobs
const BlobLeft = styled.div`
  position: absolute;
  top: 10%;
  left: -100px;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.12), transparent 70%);
  animation: ${floatY} 6s ease-in-out infinite;
  pointer-events: none;
`;

const BlobRight = styled.div`
  position: absolute;
  bottom: 10%;
  right: -100px;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.1), transparent 70%);
  animation: ${floatY} 8s ease-in-out infinite reverse;
  pointer-events: none;
`;

const BlobCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.05), transparent 70%);
  pointer-events: none;
`;

// Star decorations
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

// Header section
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: relative;
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

const TitleWrapper = styled.div`
  position: relative;
  display: inline-block;
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
  width: 80%;
  height: 3px;
  margin: 6px auto 0;
  background: linear-gradient(90deg, transparent, #6366f1, #06b6d4, #8b5cf6, transparent);
  border-radius: 2px;
  background-size: 200% auto;
  animation: ${shimmerMove} 3s linear infinite;
`;

const Desc = styled.div`
  font-size: 17px;
  text-align: center;
  font-weight: 400;
  color: rgba(200, 210, 255, 0.7);
  max-width: 600px;
  line-height: 1.7;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

// Stats bar
const StatsBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
  margin: 10px 0 30px;
  animation: ${countUp} 0.8s ease 0.3s both;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    right: -16px;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 30px;
    background: rgba(99, 102, 241, 0.3);
  }

  &:last-child::after {
    display: none;
  }
`;

const StatNumber = styled.div`
  font-size: 28px;
  font-weight: 800;
  background: linear-gradient(135deg, #6366f1, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const StatLabel = styled.div`
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(165, 180, 252, 0.7);
`;

// Decorative spinning ring for section
const SectionRing = styled.div`
  position: absolute;
  top: -10px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px dashed rgba(99, 102, 241, 0.3);
  animation: ${rotateSlow} 10s linear infinite;
  pointer-events: none;
`;

// Timeline wrapper override
const TimelineWrapper = styled.div`
  width: 100%;

  .vertical-timeline::before {
    background: linear-gradient(
      180deg,
      transparent,
      rgba(99, 102, 241, 0.5),
      rgba(6, 182, 212, 0.5),
      rgba(139, 92, 246, 0.5),
      transparent
    ) !important;
    width: 3px !important;
  }
`;

const Experience = () => {
  return (
    <Container id="Experience">
      {/* Background decorations */}
      <BlobLeft />
      <BlobRight />
      <BlobCenter />

      {/* Twinkling stars */}
      <Star top="5%" left="5%" size="5px" color="#c4b5fd" duration="2.5s" delay="0s" />
      <Star top="15%" left="15%" size="3px" color="#67e8f9" duration="3s" delay="0.5s" />
      <Star top="8%" right="10%" size="4px" color="#a5b4fc" duration="2s" delay="1s" />
      <Star top="25%" right="5%" size="6px" color="#c4b5fd" duration="3.5s" delay="0.3s" />
      <Star top="60%" left="3%" size="3px" color="#67e8f9" duration="2.8s" delay="0.8s" />
      <Star top="80%" right="8%" size="5px" color="#a5b4fc" duration="3.2s" delay="1.2s" />

      <Wrapper>
        <HeaderWrapper>
          <SectionRing />
          <TopTag>— Career Journey —</TopTag>

          <TitleWrapper>
            <Title>Experience</Title>
            <TitleUnderline />
          </TitleWrapper>

          <Desc style={{ marginBottom: "10px" }}>
            My work experience as a software engineer, working on different
            companies and exciting projects.
          </Desc>

          {/* Stats */}
          <StatsBar>
            <StatItem>
              <StatNumber>{experiences.length}+</StatNumber>
              <StatLabel>Experiences</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>1+</StatNumber>
              <StatLabel>Years</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>5+</StatNumber>
              <StatLabel>Technologies</StatLabel>
            </StatItem>
          </StatsBar>
        </HeaderWrapper>

        <TimelineWrapper>
          <VerticalTimeline lineColor="transparent">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </TimelineWrapper>
      </Wrapper>
    </Container>
  );
};

export default Experience;
