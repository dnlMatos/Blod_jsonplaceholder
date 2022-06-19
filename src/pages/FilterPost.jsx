import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AllCards, Card, Spinner } from "./styled";
import { BeatLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { Context } from "../globalContext/context";
import Header from "../components/header/Header";
import { delPost, findPost } from "../requests/requests";

export default function FilterPost() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const { postsList, setPostsList } = useContext(Context);
  const [localPostsList, setLocalPostsList] = useState([]);

  useEffect(() => {
    startFilter()
    setLoading(false);
  }, []);

  const startFilter = async() =>{
    const novoParams = params.id.replace(':','')
    const res = await postsList.filter((resp) => {
      return(
        resp.userId == novoParams
      )
    })
    console.log(res);
  }

  const acionaToastify = () => {
    toast.success("Post removido com sucesso", {
      theme: "colored",
      className: "toastifySize",
    });
  };

  return (
    <>
      <Header />
      <AllCards className="mt-3">
        {loading ? (
          <Spinner>
            <BeatLoader color="#ffffff" />
          </Spinner>
        ) : (
          <>
            {/* {localPostsList
              .filter((post) => {
                return post.userId === novoParams;
              })
              .map((resp) => {
                return (
                  <Card
                    key={resp.id}
                    className="card mb-5 align-self-center"
                    array={localPostsList}
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
              })} */}

            {/* {localPostsList?.map((post) => {
              return (
                <Card
                  key={post.id}
                  className="card mb-5 align-self-center"
                  array={localPostsList}
                >
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                    <button
                      type="button"
                      class="card-link btn btn-danger float-end"
                      onClick={() => {
                        removePost(post.id);
                      }}
                    >
                      Excluir
                    </button>
                  </div>
                </Card>
              );
            })} */}
          </>
        )}
        <ToastContainer autoClose={2000} />
      </AllCards>
    </>
  );
}
