import TabelaAudiencias from "../components/TabelaAudiencias";
import AUDIENCIAS_CONSTANTS from "../constants/audiencias.constants";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();
  function handleRedirect() {
    navigate(`/cadastro`);
  }
  return (
    <div>
      <TabelaAudiencias dados={AUDIENCIAS_CONSTANTS.Dados} />
      <button
        onClick={() => handleRedirect()}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Cadastro
      </button>
    </div>
  );
}
