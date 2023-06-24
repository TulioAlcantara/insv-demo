import { Stack, Form, Button } from "react-bootstrap";
import "./DateFilter.scss";
import { Calendar, ArrowCounterclockwise } from "react-bootstrap-icons";
import { useState } from "react";

export default function DateFilter() {
  const [filterByCycle, setFilterByCycle] = useState<Boolean>(true);

  const changeFilterType = () => {
    setFilterByCycle(!filterByCycle);
  };

  return (
    <Stack direction="horizontal" className="dateFilter card">
      <Stack direction="horizontal" className="dateFilter-changeType">
        <button
          className={`dateFilter-changeType__btn ${
            filterByCycle && "dateFilter-changeType__btn--active"
          }`}
          onClick={changeFilterType}
        >
          <ArrowCounterclockwise className="dateFilter-changeType__btn__icon"></ArrowCounterclockwise>
        </button>
        <button
          className={`dateFilter-changeType__btn ${
            !filterByCycle && "dateFilter-changeType__btn--active"
          }`}
          onClick={changeFilterType}
        >
          <Calendar className="dateFilter-changeType__btn__icon"></Calendar>
        </button>
        <span className="dateFilter-changeType__label">
          Filtrar por {filterByCycle ? "Ciclo" : "Data"}
        </span>
      </Stack>

      {filterByCycle ? (
        <Stack direction="horizontal" className="dateFilter-byCycle">
          <Form.Group>
            <Form.Label>Ciclo</Form.Label>
            <Form.Select size="sm">
              <option value="1">Janeiro</option>
              <option value="2">Fevereiro</option>
              <option value="3">Marco</option>
            </Form.Select>
          </Form.Group>
          <Form>
            <Form.Label>Comparar ciclos</Form.Label>
            <div className="dateFilter-byCycle__compareBox">
              <Form.Check
                name="group1"
                inline={true}
                type="radio"
                label="Desativar"
              />
              <Form.Check
                name="group1"
                inline={true}
                type="radio"
                label="Ativar"
                checked
                className="me-0"
              />
            </div>
          </Form>
        </Stack>
      ) : (
        <Stack direction="horizontal" className="dateFilter-byDate">
          <Form.Group>
            <Form.Label>Data inicial</Form.Label>
            <Form.Control type="date" size="sm" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Data final</Form.Label>
            <Form.Control type="date" size="sm" />
          </Form.Group>
        </Stack>
      )}
      <Button variant="danger" className="dateFilter__searchBtn ms-auto">
        Pesquisar
      </Button>
    </Stack>
  );
}
