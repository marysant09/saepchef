
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>Receitas</h1>
      </div>

      <nav className="header-nav">
        <a href="/">Início</a>
        <a href="/receitas">Receitas</a>
        <a href="/favoritos">Favoritos</a>
      </nav>

      <div className="header-buttons">
        <a href="/login" className="btn-login">
          Entrar
        </a>

        <a href="/cadastro" className="btn-cadastro">
          Cadastrar
        </a>
      </div>
    </header>
  );
}

export default Header;