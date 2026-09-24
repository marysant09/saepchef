
import * as usuarioService from "../services/usuarioService.js";

export async function listar(req, res) {
  try {
    const usuarios = await usuarioService.listarUsuarios();
    res.status(200).json(usuarios);
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
}

export async function buscar(req, res) {
  try {
    const usuario = await usuarioService.obterUsuario(req.params.id);
    res.status(200).json(usuario);
  } catch (erro) {
    res.status(404).json({ erro: erro.message });
  }
}

export async function criar(req, res) {
  try {
    const usuario = await usuarioService.cadastrarUsuario(req.body);
    res.status(201).json(usuario);
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
}

export async function atualizar(req, res) {
  try {
    const usuario = await usuarioService.atualizarUsuario(
      req.params.id,
      req.body
    );

    res.status(200).json(usuario);
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
}

export async function excluir(req, res) {
  try {
    await usuarioService.excluirUsuario(req.params.id);

    res.status(200).json({
      mensagem: "Usuário excluído com sucesso.",
    });
  } catch (erro) {
    res.status(404).json({ erro: erro.message });
  }
}

export async function login(req, res) {
  try {
    const usuario = await usuarioService.fazerLogin(
      req.body.email,
      req.body.senha
    );

    res.status(200).json({
      mensagem: "Login realizado com sucesso.",
      usuario,
    });
  } catch (erro) {
    res.status(401).json({ erro: erro.message });
  }
}

export async function dashboard(req, res) {
  try {
    const total = await usuarioService.obterTotalUsuarios();

    res.status(200).json({
      totalUsuarios: total,
    });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
}