import { useState } from "react";
import "./Login.css";

function LoginUsuario() {
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

    console.log("Usuário logado:", form);
    alert("Login realizado com sucesso!");

    setForm({
      nome: "",
      nome_usuario: "",
      email: "",
      senha: "",
      imagem_usuario: "",
      tipo: "comum",
    });
  }}