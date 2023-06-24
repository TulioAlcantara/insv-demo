import { Stack } from "react-bootstrap";
import ClientProjectFilter from "../../components/ClientProjectFilter/ClientProjectFilter";
import DateFilter from "../../components/DateFilter/DateFilter";
import GraphData from "../../components/Graph/GraphData";
import GraphInfo from "../../components/Graph/GraphInfo";

export default function CSATCliente() {
  return (
    <Stack gap={3} className="py-3">
      <ClientProjectFilter></ClientProjectFilter>
      <DateFilter></DateFilter>
      <GraphData></GraphData>
      <GraphInfo></GraphInfo>
    </Stack>
  );
}
