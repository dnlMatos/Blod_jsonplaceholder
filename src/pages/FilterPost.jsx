import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AllCards, Card, Response, Result, ResultDiv, Spinner } from "./styled";
import { BeatLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { Context } from "../globalContext/context";
import Header from "../components/header/Header";
import { delPost } from "../requests/requests";

export default function FilterPost() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const { postsList, setPostsList } = useContext(Context);
  const novoParams = Number(params.id.replace(":", ""));

  useEffect(() => {
    setLoading(false);
  }, [params]);

  const acionaToastify = () => {
    toast.success("Post removido com sucesso", {
      theme: "colored",
      className: "toastifySize",
    });
  };

  const removePost = async (id) => {
    await delPost(id);
    acionaToastify();
  };

  const filtra = () => {
    const resp = postsList.filter((post) => post.userId === novoParams);
    return resp;
  };

  const nova = filtra();

  return (
    <>
      <Header />
      <ResultDiv className="container-fluid">
        <Result className="p-2 text-start container">Resultado da busca</Result>
      </ResultDiv>
      <AllCards className="mt-5">
        {loading ? (
          <Spinner>
            <BeatLoader color="#ffffff" />
          </Spinner>
        ) : (
          <>
            {nova.length != 0 ? (
              <>
                {postsList
                  .filter((post) => {
                    return post.userId === novoParams;
                  })
                  .map((resp) => {
                    return (
                      <Card
                        key={resp.id}
                        className="card mb-5 align-self-center"
                      >
                        <div className="card-body">
                          <h5 className="card-title">{resp.title}</h5>
                          <p className="card-text">{resp.body}</p>
                          <button
                            type="button"
                            class="card-link btn btn-danger float-end"
                            onClick={() => {
                              removePost(resp.id);
                            }}
                          >
                            Excluir
                          </button>
                        </div>
                      </Card>
                    );
                  })}
              </>
            ) : (
              <Response className="mt-5">Não existe post para esse ID</Response>
            )}
          </>
        )}
        <ToastContainer autoClose={2000} />
      </AllCards>
    </>
  );
}
