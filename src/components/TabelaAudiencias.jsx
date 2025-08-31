import React from "react";
import { useNavigate } from "react-router-dom";

export default function TabelaAudiencias({dados}) {
  const navigate = useNavigate();
  function handleRedirect(item) {
    console.log(item.id)
    navigate(`/detalhe/${item.id}`);
  }
  return (
    <div style={{ padding: "20px" }}>
      <h2>📋 Lista de Audiências</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#666eff",color:"#ffffff" }}>
            <th style={estiloCelula}>Título</th>
            <th style={estiloCelula}>Descrição</th>
            <th style={estiloCelula}>Data da Audiência</th>
            <th style={estiloCelula}>Notificado (nome)</th>
            <th style={estiloCelula}>Status</th>
            <th style={estiloCelula}>Detalhes</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              <td style={estiloCelula}>{item.titulo}</td>
              <td style={estiloCelula}>{item.descricao}</td>
              <td style={estiloCelula}>{item.data}</td>
              <td style={estiloCelula}>{item.notificado}</td>
              <td style={estiloCelula}>{item.status}</td>
              <td style={estiloCelula}>
                <button
                  onClick={()=>handleRedirect(item)}
                  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
                >  

                  Ver detalhes
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const estiloCelula = {
  border: "1px solid #ccc",
  padding: "8px",
  textAlign: "left",
};
