import "./Sidebar.scss";
import Logo from "../../assets/logo.svg";
import { Stack } from "react-bootstrap";
import {
  Database,
  ChatLeftDots,
  Building,
  Collection,
  CaretDownFill,
} from "react-bootstrap-icons";

export default function Sidebar() {
  const empresaLinks = [
    {
      name: "CSAT Cliente",
      link: "#",
    },
    {
      name: "NPS Cliente",
      link: "#",
    },
    {
      name: "Ranking Cliente CSAT",
      link: "#",
    },
    {
      name: "Ranking Cliente NPS",
      link: "#",
    },
    {
      name: "CSAT Concorrentes",
      link: "#",
    },
    {
      name: "NPS Concorrentes",
      link: "#",
    },
  ];
  const gruposLinks = [
    {
      name: "Info Grupo",
      link: "#",
    },
    {
      name: "Ranking CSAT",
      link: "#",
    },
    {
      name: "Ranking NPS",
      link: "#",
    },
    {
      name: "Indicadores",
      link: "#",
    },
    {
      name: "Fragilidade",
      link: "#",
    },
    {
      name: "SWOT",
      link: "#",
    },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar__logo ">
        <img src={Logo} alt="INSV Logo"></img>
      </div>
      <Stack className="sidebar__links">
        <a className="sidebar__links__item" href="#">
          <span>
            <Database className="sidebar__links__item__icon" />
            Base de Dados
          </span>
        </a>
        <details className="sidebar__links__details">
          <summary className="sidebar__links__item sidebar__links__item--summary active">
            <Building className="sidebar__links__item__icon" />
            Empresa
            <CaretDownFill className="sidebar__links__item__icon--caret" />
          </summary>
          <Stack className="sidebar__links__detailsContainer">
            {empresaLinks.map((link) => (
              <a
                key={link.name}
                className={`sidebar__links__item sidebar__links__item--details ${
                  link.name === "CSAT Cliente" && "active"
                }`}
                href={link.link}
              >
                {link.name}
              </a>
            ))}
          </Stack>
        </details>
        <details className="sidebar__links__details">
          <summary className="sidebar__links__item sidebar__links__item--summary">
            <Collection className="sidebar__links__item__icon" />
            Grupos
            <CaretDownFill className="sidebar__links__item__icon--caret" />
          </summary>
          <Stack className="sidebar__links__detailsContainer">
            {gruposLinks.map((link) => (
              <a
                key={link.name}
                className="sidebar__links__item sidebar__links__item--details"
                href={link.link}
              >
                {link.name}
              </a>
            ))}
          </Stack>
        </details>
        <a className="sidebar__links__item" href="#">
          <ChatLeftDots className="sidebar__links__item__icon" />
          Comentários
        </a>
      </Stack>
    </div>
  );
}
