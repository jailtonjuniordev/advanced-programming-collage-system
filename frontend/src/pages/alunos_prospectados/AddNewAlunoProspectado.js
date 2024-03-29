import React, { useState, useEffect } from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import InputMask from 'react-input-mask';
import {getLeads, inserirDadosLead } from "../../service"

function AddNewAlunoProspectado() {
  
  let navigate = useNavigate();

  const [lead, setLead] = useState({
    nomeCompleto: "",
    telefone: "",
    dataCadastro: "",
    status_2: "",
    dataNovoContato: "",
    observacao: "",
  });

  const { nomeCompleto, telefone, dataCadastro, status_2, dataNovoContato, observacao } = lead; 

  const onInputChange = (e) => {
    e.preventDefault();
    setLead({ ...lead, [e.target.id]: e.target.value });
  };

  const onSubmit = () => {
    inserirDadosLead(lead);
    getLeads(setLead);
    navigate('/alunos_prospectados');
  }
  
  return (
    <div className="conteudo">
      <h1 className='page-title'>Adicionar Novo Aluno Prospectado</h1>
      <hr className='dashline'/>

      <form onSubmit={(e) => onSubmit(e)}>
        <div className='row'>
          <div className='col-3'>
            <label htmlFor="idTurma">ID do Lead</label>
            <input type="number" className="form-control" id="id_Lead" value={0} placeholder="ID lead" disabled required/>
          </div>
          <div className='col-3'>
            <label htmlFor="status_2">Status</label>
            <select id="status_2" onChange={e => onInputChange(e)} className="form-control">
              <option value="contactado">Contactado</option>
              <option value="contactado">Desistente</option>
              <option value="contactado">Pensativo</option>
              <option value="contactado">Efetivado</option>
            </select>
          </div>
          <div className='col-3'>
            <label htmlFor="telefone">Telefone</label>
            <InputMask mask={"(99)9 9999-9999"} className="form-control" id="telefone" onChange={(e) => onInputChange(e)} placeholder="Telefone" required/>
          </div>
          <div className="col-3">
            <label htmlFor="dataCadastro">Data de Cadastro</label>
            <input className="form-control" onChange={(e) => onInputChange(e)} type="date" id="dataCadastro" required/>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-3">
            <label htmlFor="dataNovoContato">Data novo Contato</label>
            <input className="form-control" onChange={(e) => onInputChange(e)} type="date" id="dataNovoContato" required/>
          </div>
          <div className="col-6">
            <label htmlFor="nomeCompleto">Nome Completo</label>
            <input className="form-control" onChange={(e) => onInputChange(e)} type="text" id="nomeCompleto" required/>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-6">
            <label htmlFor="observacao">Observações</label>
            <textarea onChange={(e) => onInputChange(e)} placeholder="Observações" className="form-control" id="observacao"/>
          </div>  
        </div>
        <button type="submit" className="btn btn-addAluno">Registrar Lead</button>
        <Link to="/alunos_prospectados" className="btn btn-cancelarAdd">Cancelar</Link>
      </form>
    </div>
  )
}

export default AddNewAlunoProspectado