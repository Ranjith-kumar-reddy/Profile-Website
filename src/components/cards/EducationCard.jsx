import React, { useState } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled, { keyframes } from "styled-components";

// Animations
const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 8px rgba(23, 92, 230, 0.4), 0 0 20px rgba(23, 92, 230, 0.2); }
  50% { box-shadow: 0 0 16px rgba(23, 92, 230, 0.8), 0 0 40px rgba(23, 92, 230, 0.4); }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

const borderFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Card wrapper with animated border
const CardWrapper = styled.div`
  position: relative;
  border-radius: 16px;
  padding: 2px;
  background: linear-gradient(
    270deg,
    #1756e8,
    #8b5cf6,
    #06b6d4,
    #1756e8
  );
  background-size: 400% 400%;
  animation: ${borderFlow} 6s ease infinite;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-4px);
  }
`;

const CardInner = styled.div`
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
  border-radius: 14px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  animation: ${slideIn} 0.5s ease;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 14px;
  align-items: flex-start;
`;

const ImageWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
`;

const Image = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 14px;
  object-fit: cover;
  border: 2px solid rgba(99, 102, 241, 0.5);
  transition: all 0.3s ease;
  animation: ${glowPulse} 3s ease-in-out infinite;
  &:hover {
    transform: scale(1.1) rotate(3deg);
    border-color: #6366f1;
  }
  @media only screen and (max-width: 768px) {
    height: 44px;
    width: 44px;
  }
`;

const StatusDot = styled.div`
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 12px;
  height: 12px;
  background: #22c55e;
  border-radius: 50%;
  border: 2px solid #0f172a;
  animation: ${glowPulse} 2s ease-in-out infinite;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const School = styled.div`
  font-size: 17px;
  font-weight: 700;
  background: linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.3px;
  line-height: 1.3;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Degree = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #a5b4fc;
  font-style: italic;
  @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

const DateBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: rgba(99, 102, 241, 0.15);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 20px;
  padding: 3px 10px;
  width: fit-content;
  font-size: 11px;
  font-weight: 500;
  color: #a5b4fc;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
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
`;

const StatsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const GradeBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(16, 185, 129, 0.1));
  border: 1px solid rgba(34, 197, 94, 0.4);
  border-radius: 20px;
  padding: 5px 14px;
  font-size: 13px;
  font-weight: 600;
  color: #86efac;
  @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

const TypeBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(99, 102, 241, 0.1));
  border: 1px solid rgba(139, 92, 246, 0.4);
  border-radius: 20px;
  padding: 5px 14px;
  font-size: 12px;
  font-weight: 500;
  color: #c4b5fd;
  @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 13.5px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.7;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ReadMore = styled.span`
  background: linear-gradient(135deg, #6366f1, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  margin-left: 4px;
  &:hover {
    text-decoration: underline;
  }
`;

const EducationCard = ({ education }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={education?.school}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={education?.img}
        />
      }
      contentStyle={{
        background: "transparent",
        boxShadow: "none",
        border: "none",
        padding: "0",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(99, 102, 241, 0.5)",
      }}
      date={education?.date}
    >
      <CardWrapper>
        <CardInner>
          <Top>
            <ImageWrapper>
              <Image src={education?.img} alt={education?.school} />
              <StatusDot />
            </ImageWrapper>
            <Body>
              <School>{education?.school}</School>
              <Degree>{education?.degree}</Degree>
              <DateBadge>📅 {education?.date}</DateBadge>
            </Body>
          </Top>

          <Divider />

          <StatsRow>
            <GradeBadge>🎓 Grade: {education?.grade}</GradeBadge>
            <TypeBadge>🏫 Education</TypeBadge>
          </StatsRow>

          <Description>
            {education?.desc && (
              <>
                <Span style={{ WebkitLineClamp: expanded ? "unset" : 3 }}>
                  {education.desc}
                </Span>
                {education.desc.length > 150 && (
                  <ReadMore onClick={() => setExpanded(!expanded)}>
                    {expanded ? " Show Less ▲" : " Read More ▼"}
                  </ReadMore>
                )}
              </>
            )}
          </Description>
        </CardInner>
      </CardWrapper>
    </VerticalTimelineElement>
  );
};

export default EducationCard;
