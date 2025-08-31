import React, { useState } from "react";
import "../styles/Cadastro.scss";
import { useNavigate } from "react-router-dom";
export default function Cadastro() {
  const navigate = useNavigate();
  // estados dos campos
  const [nome, setNome] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // evita reload da página

    const dados = { nome, titulo, descricao, data };
    console.log("Dados enviados:", dados);

    // limpa os campos depois do envio
    setNome("");
    setTitulo("");
    setDescricao("");
    setData("");
  }
  function handleRedirect() {
    navigate(`/`);
  }
  return (
    <div className="cadastro">
      <h2 className="text-2xl font-semibold mb-4">Formulário de Cadastro</h2>

      <form onSubmit={handleSubmit} className="formulario">
        <div>
          <label className="block text-sm font-medium mb-1">Nome: </label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="input-formulario"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Título: </label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="input-formulario"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Descrição: </label>
          <input
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="input-formulario"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Data: </label>
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="input-formulario"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Cadastrar
        </button>
      </form>
      <button
        onClick={() => handleRedirect()}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Voltar
      </button>
    </div>
  );
}
