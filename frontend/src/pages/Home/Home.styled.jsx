import styled from "@emotion/styled";

export const Conteiner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  @media (min-width: 1280px) {
    justify-content: space-between;
  }
`;

export const ImgBg = styled.div`
  width: 350px;
  height: 365px;
  top: 0;
  right: -20px;
  border-radius: 20px 0 0 20px;
  position: absolute;
  background-color: #bcbff2;
  background-image: url("assets/mainMobile.png");
  background-size: 289px 198px;
  background-repeat: no-repeat;
  background-position: right 40%;
  @media (min-width: 768px) {
    top: -100px;
    width: 450px;
    height: 465px;
    background-size: 380px 290px;
    background-position: right center;
  }
  @media (min-width: 1280px) {
    top: -122px;
    right: -80px;
    width: 700px;
    height: 929px;
    border-radius: 50px 0px 0px 50px;
    background-color: #bcbff2;
    background-image: url("assets/mainIimg.png");
    background-size: 674px 661px;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;
