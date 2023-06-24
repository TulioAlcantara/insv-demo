import "./Header.scss";
import { Stack } from "react-bootstrap";
import { BoxArrowRight } from "react-bootstrap-icons";

export default function Header() {
  const clientName = "André Silva";
  const companyName = "Confiança";

  return (
    <Stack className="header" direction="horizontal">
      <h1 className="header__title">CSAT Cliente</h1>
      <Stack direction="horizontal" className="header__info ms-auto" gap={3}>
        <span>
          Olá <b>{clientName}</b>, da empresa <b>{companyName}</b>
        </span>
        <span className="vr" />
        <b>Sair</b>
        <BoxArrowRight className="header__info__logoutIcon" />
      </Stack>
    </Stack>
  );
}
