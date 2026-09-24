import express from "express";
import usuarioController from "../controllers/usuarioController.js";

const router = express.Router();


router.get("/", usuarioController.listarUsuarios);

router.getAll("/dashboard", usuarioController.obterTotalUsuarios);

router.post("/login", usuarioController.fazerLogin);

router.get("/:id", usuarioController.obterUsuario);

router.post("/", usuarioController.cadastrarUsuario);

router.put("/:id", usuarioController.atualizarUsuario);

router.delete("/:id", usuarioController.excluirUsuario);

export default router;