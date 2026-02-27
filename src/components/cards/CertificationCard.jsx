import React from "react";
import styled, { keyframes } from "styled-components";

const borderFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;
const twinkle = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.3; transform: scale(0.6); }
`;
const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;
const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 6px rgba(100, 200, 255, 0.6); }
  50% { box-shadow: 0 0 18px rgba(100, 200, 255, 1); }
`;
const floatUp = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
`;
const badgeGlow = keyframes`
  0%, 100% { box-shadow: 0 0 8px rgba(139, 92, 246, 0.5); }
  50% { box-shadow: 0 0 20px rgba(139, 92, 246, 1); }
`;

const CardWrapper = styled.div`
  position: relative;
  padding: 2px;
  border-radius: 18px;
  background: linear-gradient(270deg, #8b5cf6, #06b6d4, #ec4899, #8b5cf6);
  background-size: 300% 300%;
  animation: ${borderFlow} 4s ease infinite, ${floatUp} 5s ease-in-out infinite;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 60px rgba(139, 92, 246, 0.4);
  }
`;
const Star = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: white;
  animation: ${twinkle} ${({ delay }) => delay || "2s"} ease-in-out infinite;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
`;
const Card = styled.div`
  background: linear-gradient(135deg, rgba(13, 17, 35, 0.97) 0%, rgba(25, 15, 50, 0.97) 100%);
  border-radius: 16px;
  padding: 22px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 30% 20%, rgba(139, 92, 246, 0.06) 0%, transparent 60%),
                radial-gradient(circle at 70% 80%, rgba(6, 182, 212, 0.06) 0%, transparent 60%);
    pointer-events: none;
  }
`;
const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;
const LogoWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
`;
const LogoBorder = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 14px;
  padding: 2px;
  background: linear-gradient(270deg, #8b5cf6, #06b6d4, #ec4899);
  background-size: 300% 300%;
  animation: ${borderFlow} 3s ease infinite;
`;
const Logo = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
  display: block;
`;
const GreenDot = styled.div`
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #22c55e;
  border: 2px solid #0d1123;
  animation: ${pulse} 2s ease-in-out infinite;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;
const CourseName = styled.div`
  font-size: 16px;
  font-weight: 700;
  background: linear-gradient(90deg, #fff 0%, #c084fc 50%, #06b6d4 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shimmer} 3s linear infinite;
`;
const Platform = styled.div`
  font-size: 13px;
  color: rgba(200, 200, 255, 0.75);
  display: flex;
  align-items: center;
  gap: 5px;
`;
const PlatformBadge = styled.span`
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.25), rgba(6, 182, 212, 0.25));
  border: 1px solid rgba(139, 92, 246, 0.4);
  border-radius: 6px;
  padding: 2px 8px;
  font-size: 11px;
  font-weight: 600;
  color: #c084fc;
  animation: ${badgeGlow} 2.5s ease-in-out infinite;
`;
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), rgba(6, 182, 212, 0.5), transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &::after {
    content: '✦';
    position: absolute;
    font-size: 10px;
    color: #c084fc;
    background: #0d1123;
    padding: 0 6px;
  }
`;
const SkillsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
const SkillBadge = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: rgba(200, 220, 255, 0.85);
  border: 1px solid rgba(139, 92, 246, 0.35);
  border-radius: 20px;
  padding: 4px 12px;
  background: rgba(139, 92, 246, 0.1);
  transition: all 0.3s ease;
  &:hover {
    background: rgba(139, 92, 246, 0.25);
    border-color: rgba(139, 92, 246, 0.7);
    color: #c084fc;
    transform: scale(1.05);
  }
`;
const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const DateBadge = styled.div`
  font-size: 11px;
  color: rgba(160, 180, 220, 0.7);
  display: flex;
  align-items: center;
  gap: 4px;
`;
const ViewButton = styled.a`
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(90deg, #8b5cf6, #06b6d4);
  border-radius: 20px;
  padding: 5px 14px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.85;
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.5);
  }
`;

const CertificationCard = ({ certification }) => {
  return (
    <CardWrapper>
      <Star top="8%" left="10%" delay="1.5s" />
      <Star top="15%" right="12%" delay="2.5s" />
      <Star top="75%" left="85%" delay="1s" />
      <Card>
        <TopRow>
          <LogoWrapper>
            <LogoBorder>
              <Logo src={certification?.img} alt={certification?.title} />
            </LogoBorder>
            <GreenDot />
          </LogoWrapper>
          <Info>
            <CourseName>{certification?.title}</CourseName>
            <Platform>
              <PlatformBadge>{certification?.platform || "NxtWave"}</PlatformBadge>
              {certification?.field && (
                <span style={{ color: "rgba(180,180,220,0.6)", fontSize: "12px" }}>
                  • {certification?.field}
                </span>
              )}
            </Platform>
          </Info>
        </TopRow>

        <Divider />

        {certification?.skills && certification.skills.length > 0 && (
          <SkillsRow>
            {certification.skills.map((skill, i) => (
              <SkillBadge key={i}>⚡ {skill}</SkillBadge>
            ))}
          </SkillsRow>
        )}

        <BottomRow>
          <DateBadge>📅 {certification?.date || "2023"}</DateBadge>
          {/* ✅ View Certificate button — opens your certificate link */}
          {certification?.link && certification.link !== "YOUR_CERTIFICATE_LINK_HERE" ? (
            <ViewButton href={certification.link} target="_blank" rel="noopener noreferrer">
              🏆 View Certificate
            </ViewButton>
          ) : (
            <DateBadge style={{ color: "#22c55e" }}>✅ Certified</DateBadge>
          )}
        </BottomRow>
      </Card>
    </CardWrapper>
  );
};

export default CertificationCard;
