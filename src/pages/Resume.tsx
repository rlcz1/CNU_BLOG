import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ResumeList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ResumeTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
  font-weight: 800;
`;

const ResumeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.2rem;
`;

const ResumeItemText = styled.p`
  margin: 0 0 0.3rem 0;
  &:first-of-type {
    font-size: 1.2rem;
    font-weight: 800;
  }
  &:nth-of-type(2) {
  color: rgb(50, 148, 248);
  }
`;

const Resume = () => {
  return (
    <Container>
      <ResumeTitle>Education 📚</ResumeTitle>
      <ResumeList>
        <ResumeItem>
          <ResumeItemText>충남대학교</ResumeItemText>
          <ResumeItemText>컴퓨터융합학부</ResumeItemText>
          <ResumeItemText>2021.03 ~ 2026.02(예정)</ResumeItemText>
        </ResumeItem>
        <ResumeItem>
          <ResumeItemText>CNU SW ACADEMY</ResumeItemText>
          <ResumeItemText>웹프론트엔드 트랙</ResumeItemText>
          <ResumeItemText>2023.07 ~ 2023.11</ResumeItemText>
        </ResumeItem>
        <ResumeItem>
          <ResumeItemText>멋쟁이사자처럼</ResumeItemText>
          <ResumeItemText>프론트엔드 트랙</ResumeItemText>
          <ResumeItemText>2024.02 ~ 2024.12</ResumeItemText>
        </ResumeItem>
      </ResumeList>
      <ResumeTitle>Projects 💫</ResumeTitle>
      <ResumeList>
        <ResumeItem>
          <ResumeItemText>SeeAndYouGo</ResumeItemText>
          <ResumeItemText>DE/FE</ResumeItemText>
          <ResumeItemText>2023.07 ~</ResumeItemText>
        </ResumeItem>
        <ResumeItem>
          <ResumeItemText>Blanck Master</ResumeItemText>
          <ResumeItemText>PM/DE/FE</ResumeItemText>
          <ResumeItemText>2023.03 ~ 2023.06</ResumeItemText>
        </ResumeItem>
      </ResumeList>
      <ResumeTitle>Awards 🏆</ResumeTitle>
      <ResumeList>
        <ResumeItem>
          <ResumeItemText>CNU 창의작품경진대회 주니어부문 대상</ResumeItemText>
          <ResumeItemText>DE/FE</ResumeItemText>
          <ResumeItemText>2023.06.23</ResumeItemText>
        </ResumeItem>
        <ResumeItem>
          <ResumeItemText>CNU SW 아카데미 프로젝트 경진대회 대상</ResumeItemText>
          <ResumeItemText>DE/FE</ResumeItemText>
          <ResumeItemText>2023.11.10</ResumeItemText>
        </ResumeItem>
      </ResumeList>
    </Container>
  );
};

export default Resume;
