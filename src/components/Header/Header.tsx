import "./Header.scss";
import { Stack } from "react-bootstrap";
import { BoxArrowRight } from "react-bootstrap-icons";

export default function Header() {
  return (
    <Stack className="header" direction="horizontal">
      <h1 className="header__title">CSAT Cliente</h1>
      <Stack direction="horizontal" className="header__info ms-auto" gap={3}>
        <span>
          Olá <b>André Silva</b>, da empresa <b>Confianca</b>
        </span>
        <span className="vr" />
        <b>Sair</b>
        <BoxArrowRight className="header__info__logoutIcon" />
      </Stack>
    </Stack>
  );
}
