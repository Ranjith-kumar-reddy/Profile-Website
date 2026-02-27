import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { skills } from "../../data/constants";
import { Tilt } from "react-tilt";

// Animations
const borderFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
`;

const glowPulse = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
`;

const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px;
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

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const TitleTag = styled.div`
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  background: linear-gradient(135deg, #6366f1, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 800;
  margin-top: 8px;
  background: linear-gradient(135deg, #ffffff 0%, #a5b4fc 50%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 17px;
  text-align: center;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 600px;
  line-height: 1.6;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 32px;
  justify-content: center;
`;

// Animated gradient border wrapper
const SkillCardBorder = styled.div`
  position: relative;
  border-radius: 20px;
  padding: 2px;
  background: linear-gradient(
    270deg,
    #6366f1,
    #06b6d4,
    #8b5cf6,
    #ec4899,
    #6366f1
  );
  background-size: 400% 400%;
  animation: ${borderFlow} 5s ease infinite;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 500px;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 60px rgba(99, 102, 241, 0.4),
      0 0 40px rgba(6, 182, 212, 0.2);
  }

  @media (max-width: 768px) {
    max-width: 400px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
  }
`;

const Skill = styled.div`
  width: 100%;
  background: linear-gradient(
    135deg,
    rgba(15, 23, 42, 0.95) 0%,
    rgba(30, 27, 75, 0.95) 50%,
    rgba(15, 23, 42, 0.95) 100%
  );
  backdrop-filter: blur(20px);
  border-radius: 18px;
  padding: 24px 32px;
  position: relative;
  overflow: hidden;

  /* Glass shine effect */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 60%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.04),
      transparent
    );
    transition: left 0.6s ease;
  }
  &:hover::before {
    left: 150%;
  }

  @media (max-width: 768px) {
    padding: 16px 24px;
  }
`;

const CornerDecor = styled.div`
  position: absolute;
  top: -20px;
  right: -20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(99, 102, 241, 0.3),
    transparent 70%
  );
  animation: ${glowPulse} 3s ease-in-out infinite;
`;

const SkillTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const SkillTitleIcon = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1, #06b6d4);
  animation: ${glowPulse} 2s ease-in-out infinite;
`;

const SkillTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  background: linear-gradient(135deg, #ffffff, #a5b4fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.5px;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
`;

const SkillItem = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(99, 102, 241, 0.08);
  border: 1px solid rgba(99, 102, 241, 0.25);
  border-radius: 30px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: default;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(99, 102, 241, 0.2);
    border-color: rgba(99, 102, 241, 0.6);
    color: #ffffff;
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.3);
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 22px;
  height: 22px;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  transition: transform 0.3s ease;
  ${SkillItem}:hover & {
    transform: rotate(10deg) scale(1.2);
  }
`;

const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <TitleWrapper>
          <TitleTag>— What I Know —</TitleTag>
          <Title>Skills & Expertise</Title>
          <Desc style={{ marginBottom: "20px" }}>
            This are the Skills on Which i been working form last 1 year.
          </Desc>
        </TitleWrapper>

        <SkillsContainer>
          {skills.map((skill, index) => (
            <Tilt
              key={`skill-${index}`}
              options={{
                max: 10,
                scale: 1.02,
                speed: 400,
                glare: true,
                "max-glare": 0.1,
              }}
            >
              <SkillCardBorder>
                <Skill>
                  <CornerDecor />
                  <SkillTitleWrapper>
                    <SkillTitleIcon />
                    <SkillTitle>{skill.title}</SkillTitle>
                    <SkillTitleIcon />
                  </SkillTitleWrapper>
                  <SkillList>
                    {skill.skills.map((item, index_x) => (
                      <SkillItem key={`skill-x-${index_x}`}>
                        <SkillImage src={item.image} alt={item.name} />
                        {item.name}
                      </SkillItem>
                    ))}
                  </SkillList>
                </Skill>
              </SkillCardBorder>
            </Tilt>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
