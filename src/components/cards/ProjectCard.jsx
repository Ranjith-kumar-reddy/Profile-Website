import React from "react";
import styled, { keyframes } from "styled-components";

// ============ ANIMATIONS ============

const borderFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const shimmerSlide = keyframes`
  0% { transform: translateX(-100%) skewX(-15deg); }
  100% { transform: translateX(300%) skewX(-15deg); }
`;

const rotateSlow = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 8px rgba(99,102,241,0.3); }
  50% { box-shadow: 0 0 20px rgba(99,102,241,0.7); }
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
  width: 320px;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 25px 60px rgba(99, 102, 241, 0.4), 0 0 50px rgba(6, 182, 212, 0.2);
  }

  @media (max-width: 768px) {
    width: 280px;
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

const CardInner = styled.div`
  background: linear-gradient(
    135deg,
    rgba(10, 10, 30, 0.97) 0%,
    rgba(20, 15, 50, 0.97) 50%,
    rgba(10, 20, 40, 0.97) 100%
  );
  border-radius: 18px;
  display: flex;
  flex-direction: column;
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
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent);
  }

  ${CardOuter}:hover &::after {
    animation: ${shimmerSlide} 0.8s ease forwards;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 16px 16px 0 0;
  border-bottom: 1px solid rgba(99, 102, 241, 0.2);
`;

const NoImage = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 16px 16px 0 0;
  background: linear-gradient(135deg, rgba(99,102,241,0.2), rgba(6,182,212,0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  border-bottom: 1px solid rgba(99, 102, 241, 0.2);
`;

const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const OrbTop = styled.div`
  position: absolute;
  top: -30px;
  right: -30px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.2), transparent 70%);
  pointer-events: none;
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
`;

const Tag = styled.div`
  font-size: 11px;
  font-weight: 600;
  color: #a5b4fc;
  background: rgba(99, 102, 241, 0.12);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 20px;
  padding: 3px 10px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff 0%, #c4b5fd 60%, #67e8f9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const DateText = styled.div`
  font-size: 11px;
  font-weight: 500;
  color: rgba(165, 180, 252, 0.6);
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(99, 102, 241, 0.4),
    rgba(6, 182, 212, 0.4),
    transparent
  );
`;

const Description = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: rgba(200, 210, 255, 0.7);
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  border-left: 2px solid rgba(99, 102, 241, 0.4);
  padding-left: 10px;
`;

const GithubButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: relative;
  border-radius: 14px;
  padding: 2px;
  background: linear-gradient(270deg, #6366f1, #8b5cf6, #06b6d4, #6366f1);
  background-size: 300% 300%;
  animation: ${borderFlow} 4s ease infinite;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: 4px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.5);
  }
`;

const GithubButtonInner = styled.div`
  width: 100%;
  background: rgba(10, 10, 30, 0.9);
  border-radius: 12px;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 700;
  color: #a5b4fc;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;

  ${GithubButton}:hover & {
    background: rgba(99, 102, 241, 0.2);
    color: #ffffff;
  }
`;

// ============ COMPONENT ============

const ProjectCard = ({ project }) => {
  return (
    <CardOuter>
      <SpinRing />
      <CardInner>
        <OrbTop />

        {project.image ? (
          <Image src={project.image} alt={project.title} />
        ) : (
          <NoImage>💻</NoImage>
        )}

        <Content>
          {/* Tags */}
          {project.tags && (
            <Tags>
              {project.tags.map((tag, index) => (
                <Tag key={index}>#{tag}</Tag>
              ))}
            </Tags>
          )}

          {/* Title & Date */}
          <Title>{project.title}</Title>
          {project.date && <DateText>📅 {project.date}</DateText>}

          <Divider />

          {/* Description */}
          <Description>{project.description}</Description>

          {/* Source Code Button Only */}
          <GithubButton href={project.github} target="_blank">
            <GithubButtonInner>
              🐙 View Source Code
            </GithubButtonInner>
          </GithubButton>
        </Content>
      </CardInner>
    </CardOuter>
  );
};

export default ProjectCard;
