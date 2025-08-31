import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AUDIENCIAS_CONSTANTS from "../constants/audiencias.constants";
import { useNavigate } from "react-router-dom";
import "../styles/Detalhe.scss"

export default function Detalhe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dados, setDados] = useState([]);
  
  function handleRedirect() {
    navigate(`/`);
  }

  useEffect(() => {
    setTimeout(() => {
      // Simulando dados recebidos da "API"
      setDados(AUDIENCIAS_CONSTANTS.Dados.find((objeto) => objeto.id == id));
    }, 1000);
  }); // 3 segundos

  return (
    <div>
      <h2>Detalhes da Audiencia</h2>
      <div style={estiloColuna}>
        <label>Titulo: {dados.titulo}</label>
        <label>Sobre: {dados.descricao}</label>
        <label>Data: {dados.data}</label>
        <label>Nome: {dados.notificado}</label>
        <label>{dados.status}</label>
      </div>
      <button
        onClick={() => handleRedirect()}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Voltar
      </button>
    </div>
  );
}

const estiloColuna = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  marginBottom: "20px",
};
