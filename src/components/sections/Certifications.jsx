import React from "react";
import styled, { keyframes } from "styled-components";
import CertificationCard from "../cards/CertificationCard";

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;
const twinkle = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.2; transform: scale(0.5); }
`;
const floatBlob = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(20px, -20px) scale(1.05); }
  66% { transform: translate(-15px, 10px) scale(0.95); }
`;
const slideUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 60px 20px;
  overflow: hidden;
  animation: ${slideUp} 0.8s ease forwards;
`;
const Blob = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.12;
  animation: ${floatBlob} ${({ dur }) => dur || "8s"} ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
  &.left { width: 400px; height: 400px; background: #8b5cf6; top: 5%; left: -10%; }
  &.right { width: 350px; height: 350px; background: #06b6d4; bottom: 10%; right: -8%; animation-delay: -3s; }
  &.center { width: 300px; height: 300px; background: #7c3aed; top: 50%; left: 50%; transform: translate(-50%, -50%); animation-delay: -5s; }
`;
const Star = styled.div`
  position: absolute;
  width: ${({ size }) => size || "3px"};
  height: ${({ size }) => size || "3px"};
  border-radius: 50%;
  background: white;
  animation: ${twinkle} ${({ delay }) => delay || "2s"} ease-in-out infinite;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  z-index: 0;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 16px;
  z-index: 1;
`;
const TagLabel = styled.div`
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: linear-gradient(90deg, #8b5cf6, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 20px;
  padding: 4px 16px;
`;
const Title = styled.div`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  background: linear-gradient(90deg, #fff 0%, #c084fc 40%, #06b6d4 70%, #fff 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shimmer} 4s linear infinite;
  @media (max-width: 768px) { font-size: 32px; }
`;
const Underline = styled.div`
  width: 120px;
  height: 3px;
  border-radius: 4px;
  background: linear-gradient(90deg, #8b5cf6, #06b6d4, #ec4899);
  margin-top: -8px;
`;
const Desc = styled.div`
  font-size: 17px;
  text-align: center;
  color: rgba(200, 210, 240, 0.75);
  max-width: 600px;
  margin-bottom: 24px;
  line-height: 1.6;
  @media (max-width: 768px) { font-size: 14px; }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  width: 100%;
  @media (max-width: 500px) { grid-template-columns: 1fr; }
`;

// ================================================================
// ✏️  EDIT YOUR CERTIFICATIONS BELOW — JUST CHANGE THE VALUES!
// ================================================================
const NXTWAVE_LOGO = "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-logo.png";

const certifications = [
  {
    title: "React.js Development",       // ✏️ Your course name
    platform: "NxtWave",                 // ✏️ Platform name
    field: "Frontend",                   // ✏️ Field/Category
    date: "oct 2025",                        // ✏️ Completion date
    img:  "data:image/png;base64,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",                   // ✏️ Logo image URL
    link: "https://certificates.ccbp.in/intensive/react-js?id=ICHSODCELQ",  // ✏️ Paste your certificate URL here
    skills: ["React Hooks", "Components", "State Management", "JSX", "React Router"],
  },
  {
    title: "Node js",
    platform: "NxtWave",
    field: "Backend",
    date: "2023",
    img: "https://yt3.googleusercontent.com/mFIkzYPq6RfSy0if-b9eU2cfQbCC1aER3bxSxZr9Z1_H48qDgvpmjXQLHif-TI3zviRZmOsv_Q=s900-c-k-c0x00ffffff-no-rj",
    link: "https://certificates.ccbp.in/intensive/node-js?id=HJOOCOLNUO",  // ✏️ Paste your certificate URL here
    skills: ["REST APIs", "Express", "Middleware", "Authentication", "JWT"],
  },

  {
    title: "SQLite & Databases",
    platform: "NxtWave",
    field: "Database",
    date: "",
    img: "https://yt3.googleusercontent.com/mFIkzYPq6RfSy0if-b9eU2cfQbCC1aER3bxSxZr9Z1_H48qDgvpmjXQLHif-TI3zviRZmOsv_Q=s900-c-k-c0x00ffffff-no-rj",
    link: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=JVHVCKIFIY",  // ✏️ Paste your certificate URL here
    skills: ["SELECT Queries", "Joins", "Indexes", "Normalization", "SQLite"],
  },
  {
    title: "Python Programming",
    platform: "NxtWave",
    field: "Language",
    date: "July 2025",
    img: "https://yt3.googleusercontent.com/mFIkzYPq6RfSy0if-b9eU2cfQbCC1aER3bxSxZr9Z1_H48qDgvpmjXQLHif-TI3zviRZmOsv_Q=s900-c-k-c0x00ffffff-no-rj",
    link: "https://certificates.ccbp.in/intensive/programming-foundations?id=JXKEZOVGIB",  // ✏️ Paste your certificate URL here
    skills: ["OOP", "Functions", "File Handling", "Data Structures", "Libraries"],
  },
  {
    title: "Build Your Own Static Website",
    platform: "NxtWave",
    field: "Forntend",
    date: "oct 2024",
    img: "https://yt3.googleusercontent.com/mFIkzYPq6RfSy0if-b9eU2cfQbCC1aER3bxSxZr9Z1_H48qDgvpmjXQLHif-TI3zviRZmOsv_Q=s900-c-k-c0x00ffffff-no-rj",
    link: "https://certificates.ccbp.in/intensive/static-website?id=ATWOGDVPVZ",  // ✏️ Paste your certificate URL here
    skills: ["Html", "Css", "Bootstrap"],
    },
    {
        title: "Bulid Your Own Responsive Website",
        platform: "NxtWave",
        field: "Forntend",
        date: "oct 2024",
        img: "https://yt3.googleusercontent.com/mFIkzYPq6RfSy0if-b9eU2cfQbCC1aER3bxSxZr9Z1_H48qDgvpmjXQLHif-TI3zviRZmOsv_Q=s900-c-k-c0x00ffffff-no-rj",
        link: "https://certificates.ccbp.in/intensive/responsive-website?id=CTMAHLHIUD",  // ✏️ Paste your certificate URL here
        skills: ["Html", "Css", "Bootstrap"],
    },
    {
        title: "Developer Foundations",
        platform: "NxtWave",
        field: "Operating Systems",
        date: "July 2025",
        img: "https://yt3.googleusercontent.com/mFIkzYPq6RfSy0if-b9eU2cfQbCC1aER3bxSxZr9Z1_H48qDgvpmjXQLHif-TI3zviRZmOsv_Q=s900-c-k-c0x00ffffff-no-rj",
        link: "https://certificates.ccbp.in/intensive/developer-foundations?id=SSRGQNGLXX",  // ✏️ Paste your certificate URL here
        skills: ["Git", "command-line", "Github"],
    },
    {
        title: "Bulid Your Own Dynamic Web Application",
        platform: "NxtWave",
        field: "Web Application",
        date: "oct 2024",
        img: "https://yt3.googleusercontent.com/mFIkzYPq6RfSy0if-b9eU2cfQbCC1aER3bxSxZr9Z1_H48qDgvpmjXQLHif-TI3zviRZmOsv_Q=s900-c-k-c0x00ffffff-no-rj",
        link: "https://certificates.ccbp.in/intensive/dynamic-web-application?id=RGBCXEXBBV",  // ✏️ Paste your certificate URL here
        skills: ["Html", "Css", "JavaScript", "Bootstrap"],
    },
    {
        title: "JavaScript Essentials",
        platform: "NxtWave",
        field: "Web Application",
        date: "Aug 2025",
        img: "https://yt3.googleusercontent.com/mFIkzYPq6RfSy0if-b9eU2cfQbCC1aER3bxSxZr9Z1_H48qDgvpmjXQLHif-TI3zviRZmOsv_Q=s900-c-k-c0x00ffffff-no-rj",
        link: "https://certificates.ccbp.in/intensive/javascript-essentials?id=DHASTPKLBM",  // ✏️ Paste your certificate URL here
        skills: ["Events", "Hoisting", "Asyc", "Es6"],
    },
    {
        title: "Responsive Web Design using Flexbox",
        platform: "NxtWave",
        field: "Css Flex-box And Css Media queries",
        date: "Aug 2025",
        img: "https://yt3.googleusercontent.com/mFIkzYPq6RfSy0if-b9eU2cfQbCC1aER3bxSxZr9Z1_H48qDgvpmjXQLHif-TI3zviRZmOsv_Q=s900-c-k-c0x00ffffff-no-rj",
        link: "https://certificates.ccbp.in/intensive/flexbox?id=UFYZMGYLSI",  // ✏️ Paste your certificate URL here
        skills: ["Css media aueries", "Css flex-box ",],
    },


];
// ================================================================

const Certifications = () => {
  return (
    <Container id="Certifications">
      <Blob className="left" dur="9s" />
      <Blob className="right" dur="11s" />
      <Blob className="center" dur="13s" />
      <Star top="5%" left="8%" delay="1.2s" size="3px" />
      <Star top="12%" left="45%" delay="2.1s" size="2px" />
      <Star top="8%" right="10%" delay="1.7s" size="3px" />
      <Star top="55%" left="3%" delay="2.8s" size="2px" />
      <Star top="80%" left="20%" delay="1.5s" size="3px" />
      <Star top="70%" right="5%" delay="2.3s" size="2px" />
      <Star top="90%" left="60%" delay="1.1s" size="3px" />
      <Wrapper>
        <TagLabel>📜 Achievements</TagLabel>
        <Title>Certifications</Title>
        <Underline />
        <Desc>
          Courses completed and certified by{" "}
          <strong style={{ color: "#c084fc" }}>NxtWave Institute</strong> —
          building my skills in Full Stack MERN Development.
        </Desc>
        <Grid>
          {certifications.map((cert, index) => (
            <CertificationCard key={index} certification={cert} />
          ))}
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default Certifications;
