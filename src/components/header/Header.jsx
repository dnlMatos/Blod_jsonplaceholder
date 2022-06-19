import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { goToHome, goToNewPost } from "../../controllers/coodinator";
import { NavElements, Cabecalho, Menu } from "./style";
import { findPost } from "../../requests/requests";

export default function Header() {
  const [search, setSearch] = useState("");
  const history = useHistory();

  const atualizaInput = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const filtraPost = (Id) => {
    findPost(Id);
    history.push(`/posts/userId:${Id}`);
  };

  return (
    <Cabecalho>
      <Menu className="d-flex justify-content-between">
        <nav className="navbar navbar-expand-lg bg-light container-fluid ">
          <NavElements className="gap-3 container-fluid d-flex justify-content-between">
            <h1 className="col-3">Our Blog</h1>
            <form
              className="d-flex col-6"
              role="search"
              onSubmit={() => filtraPost(search)}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Informe o ID do usuário"
                value={search}
                onChange={atualizaInput}
                aria-label="Search"
              />
              <button
                className="btn btn-outline-primary"
                type="submit"
                onClick={() => filtraPost(history)}
              >
                Buscar
              </button>
            </form>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="d-flex justify-content-evenly container-fluid navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" onClick={() => goToHome(history)}>
                  <a
                    className="d-flex nav-link active text-primary "
                    aria-current="page"
                    href=""
                  >
                    <span class="material-symbols-outlined me-1">home</span>
                    Home
                  </a>
                </li>
                <li className="nav-item" onClick={() => goToNewPost(history)}>
                  <a className="d-flex nav-link text-primary" href="">
                    <span class="material-symbols-outlined me-1">add_box</span>
                    Criar Post
                  </a>
                </li>
                <li className="nav-item dropdown"></li>
              </ul>
            </div>
          </NavElements>
        </nav>
      </Menu>
    </Cabecalho>
  );
}
