import pool from "../config/db.js";

const listarUsuarios = async () => {
  const resultado = await pool.query(
    "SELECT id, nome, email FROM usuarios ORDER BY id"
  );

  return resultado.rows;
};

const obterUsuario = async (id) => {
  const resultado = await pool.query(
    "SELECT id, nome, email FROM usuarios WHERE id = $1",
    [id]
  );

  return resultado.rows[0];
};

const buscarPorEmail = async (email) => {
  const resultado = await pool.query(
    "SELECT * FROM usuarios WHERE email = $1",
    [email]
  );

  return resultado.rows[0];
};

const cadastrarUsuario = async (nome, email, senha) => {
  const resultado = await pool.query(
    `INSERT INTO usuarios (nome, email, senha)
     VALUES ($1, $2, $3)
     RETURNING id, nome, email`,
    [nome, email, senha]
  );

  return resultado.rows[0];
};

const atualizarUsuario = async (id, nome, email) => {
  const resultado = await pool.query(
    `UPDATE usuarios
     SET nome = $1, email = $2
     WHERE id = $3
     RETURNING id, nome, email`,
    [nome, email, id]
  );

  return resultado.rows[0];
};

const excluirUsuario = async (id) => {
  const resultado = await pool.query(
    "DELETE FROM usuarios WHERE id = $1 RETURNING id",
    [id]
  );

  return resultado.rows[0];
};

const obterTotalUsuarios = async () => {
  const resultado = await pool.query(
    "SELECT COUNT(*) AS total FROM usuarios"
  );

  return Number(resultado.rows[0].total);
};

export default {
  listarUsuarios,
  obterUsuario,
  buscarPorEmail,
  cadastrarUsuario,
  atualizarUsuario,
  excluirUsuario,
  obterTotalUsuarios,
};