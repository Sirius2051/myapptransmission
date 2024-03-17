"use client"
import { FaReact } from "react-icons/fa";
import React from "react";
import styled, { keyframes, css } from "styled-components";

const Slider = () => {
  const row1 = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/800px-React.svg.png",
    "https://discoverthreejs.com/images/app-logos/forum.png",
    "https://repository-images.githubusercontent.com/2561582/2b93f700-a724-11ea-89af-e780fd85245b",
    // "https://spin.atomicobject.com/wp-content/uploads/gsap-logo.jpg",
    "https://bugfender.com/wp-content/uploads/2023/02/32.png",
    "https://th.bing.com/th/id/OIP._6ooq0R60ba3UT5c-QVemAHaDm?rs=1&pid=ImgDetMain",
  ];

  return (
    <AppContainer>
      <Wrapper>
        <Text>Creamos este proyecto para la CODICON2024</Text>
        <Note>Utilizando grandes tecnologias</Note>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
};

export default Slider;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #FFF;
`;

const Note = styled.div`
  font-size: 25px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(5rem, 1rem + 30vmin, 10rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 10px 20px;
  box-shadow: rgba(99, 99, 99, 0.5) 0px 2px 8px 0px;
`;
