import usuarioRepository from "../repositories/usuarioRepository.js";

const listarUsuarios = async () => {
  return await usuarioRepository.listarUsuarios();
};

const obterUsuario = async (id) => {
  return await usuarioRepository.obterUsuario(id);
};

const cadastrarUsuario = async (nome, email, senha) => {
  if (!nome || !email || !senha) {
    throw new Error("Nome, email e senha são obrigatórios.");
  }

  const usuarioExistente = await usuarioRepository.buscarPorEmail(email);

  if (usuarioExistente) {
    throw new Error("Este email já está cadastrado.");
  }

  return await usuarioRepository.cadastrarUsuario(nome, email, senha);
};

const atualizarUsuario = async (id, nome, email) => {
  if (!nome || !email) {
    throw new Error("Nome e email são obrigatórios.");
  }

  return await usuarioRepository.atualizarUsuario(id, nome, email);
};

const excluirUsuario = async (id) => {
  return await usuarioRepository.excluirUsuario(id);
};

const fazerLogin = async (email, senha) => {
  if (!email || !senha) {
    throw new Error("Email e senha são obrigatórios.");
  }

  const usuario = await usuarioRepository.buscarPorEmail(email);

  if (!usuario || usuario.senha !== senha) {
    throw new Error("Email ou senha incorretos.");
  }

  return {
    id: usuario.id,
    nome: usuario.nome,
    email: usuario.email,
  };
};

const obterTotalUsuarios = async () => {
  return await usuarioRepository.obterTotalUsuarios();
};

export default {
  listarUsuarios,
  obterUsuario,
  cadastrarUsuario,
  atualizarUsuario,
  excluirUsuario,
  fazerLogin,
  obterTotalUsuarios,
};