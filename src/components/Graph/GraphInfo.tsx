import { FileEarmarkText } from "react-bootstrap-icons";
export default function GraphInfo() {
  return (
    <div className="card">
      <h2 className="card__title">
        <FileEarmarkText className="card__title__icon" />
        Análise Gráfica - Cliente 1
      </h2>
      <p className="card__content">
        Esta tabela apresenta uma análise detalhada dos dados. Com base nos
        dados apresentados, podem ser identificadas tendências, padrões e áreas
        de melhoria para ajudar a orientar suas decisões e estratégias futuras.
        As regiões fazem uma comparação clara dos grupos de loja.
      </p>
    </div>
  );
}
