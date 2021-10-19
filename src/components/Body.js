import styled from "styled-components";

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex: 1 0 auto;
`;

const LeftContainer = styled.div`
  display: flex;
  flex: 0.42;
`;

const MiddleContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1.68;
  align-items: flex-start;
  gap: 10px;
`;

const RightContainer = styled.div`
  display: flex;
  flex: 0.42;
`;

const MainTitle = styled.div`
  font-size: 10vw;
  font-weight: bold;
`;

const SubTitle = styled.div`
  font-size: 5vw;
  font-weight: normal;
  align-self: center;
`;

const SubText = styled.div`
  font-size: 2.5vw;
  font-weight: light;
  align-self: center;
  font-style: italic;
`;

const Body = ({pages, index}) => {

  return (
    <BodyContainer>
      <LeftContainer></LeftContainer>
      <MiddleContainer>
        <MainTitle>{pages[index].maintitle}</MainTitle>
        <SubTitle>{pages[index].subtitle}</SubTitle>
        <SubText>{pages[index].subtext}</SubText>
      </MiddleContainer>
      <RightContainer></RightContainer>
    </BodyContainer>
  );
};

export default Body;
