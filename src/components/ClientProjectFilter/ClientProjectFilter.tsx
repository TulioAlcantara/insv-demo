import { Stack, Form } from "react-bootstrap";
import "./ClientProjectFilter.scss";
import { Star } from "react-bootstrap-icons";

export default function ClientProjectFilter() {
  return (
    <Stack direction="horizontal" className="clientProjectFilter">
      <Stack direction="horizontal" className="clientProjectFilter-filters">
        <Form.Group as={Stack} direction="horizontal">
          <Form.Label className="me-1 my-auto">Projeto: </Form.Label>
          <Form.Select aria-label="Escolha o projeto" size="sm">
            <option value="1">Projeto 1</option>
            <option value="2">Projeto 2</option>
            <option value="3">Projeto 3</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Stack} direction="horizontal">
          <Form.Label className="me-1 my-auto">Cliente: </Form.Label>
          <Form.Select aria-label="Escolha o cliente" size="sm">
            <option value="1">Cliente 1</option>
            <option value="2">Cliente 2</option>
            <option value="3">Cliente 3</option>
          </Form.Select>
        </Form.Group>
      </Stack>

      <div className="clientProjectFilter-ratings ms-auto">
        <small>Número de avaliações:</small>
        <Star className="clientProjectFilter-ratings__starIcon" />
        <small className="clientProjectFilter-ratings__starCount">342</small>
      </div>
    </Stack>
  );
}
