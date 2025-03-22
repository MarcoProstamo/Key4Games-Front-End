import { useParams } from "react-router-dom";

export default function ShowPage() {
  const { id } = useParams();
  return `Sono la Show di ${id}`;
}
