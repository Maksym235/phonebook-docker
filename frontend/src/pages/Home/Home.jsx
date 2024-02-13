import { Conteiner, ImgBg } from "./Home.styled";
import { HomeInfo } from "../../components/HomeInfo/HomeInfo";
export default function Home() {
  return (
    <Conteiner>
      <HomeInfo />
      <ImgBg></ImgBg>
    </Conteiner>
  );
}
