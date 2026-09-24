import { useState } from "react";
import "./CadastroUsuario.css";

function CadastroUsuario() {
  const [form, setForm] = useState({
    nome: "",
    nome_usuario: "",
    email: "",
    senha: "",
    imagem_usuario: "",
    tipo: "comum",
  });

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Usuário cadastrado:", form);
    alert("Cadastro realizado com sucesso!");

    setForm({
      nome: "",
      nome_usuario: "",
      email: "",
      senha: "",
      imagem_usuario: "",
      tipo: "comum",
    });
  }

  return (
    <div className="cadastro-container">
      <form className="cadastro-form" onSubmit={handleSubmit}>
        <h1>Criar conta</h1>
        <p>Preencha os dados para se cadastrar no SAEPchef.</p>

        <label>Nome completo</label>
        <input
          name="nome"
          value={form.nome}
          onChange={handleChange}
          required
          placeholder="Digite seu nome"
        />

        <label>Nome de usuário</label>
        <input
          name="nome_usuario"
          value={form.nome_usuario}
          onChange={handleChange}
          required
          placeholder="Escolha um nome de usuário"
        />

        <label>E-mail</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="Digite seu e-mail"
        />

        <label>Senha</label>
        <input
          type="password"
          name="senha"
          value={form.senha}
          onChange={handleChange}
          required
          minLength={6}
          placeholder="Mínimo de 6 caracteres"
        />

        <label>Imagem do usuário</label>
        <input
          name="imagem_usuario"
          value={form.imagem_usuario}
          onChange={handleChange}
          placeholder="Ex: usuario1.jpg"
        />

        <label>Tipo de usuário</label>
        <select
          name="tipo"
          value={form.tipo}
          onChange={handleChange}
        >
          <option value="comum">Usuário comum</option>
          <option value="chef">Chef</option>
        </select>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroUsuario;