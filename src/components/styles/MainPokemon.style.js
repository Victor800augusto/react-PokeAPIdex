import styled from "styled-components";

export const StyledMain = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 40px 50px 5px 50px;
  max-width: 1650px;
  width: 100%;
  @media (max-width: 650px) {
    padding: 20px 25px;
  }
  @media (max-width: 470px) {
    min-width: 300px;
    padding: 20px 10px;
  }
`;

export const ContainerTools = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 550px) {
    flex-direction: column;
    gap: 25px;
  }
`;
