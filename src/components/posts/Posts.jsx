import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../globalContext/context";
import { addPost, delPost, findPost } from "../../requests/requests";
import { AllCards, Card, Spinner } from "./style";
import { BeatLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Posts() {
  const [loading, setLoading] = useState(true);
  const { postsList, setPostsList } = useContext(Context);
  const [localPostsList, setLocalPostsList] = useState([]);

  useEffect(() => {
    updatePostList();
    setLoading(false);
  }, [postsList]);

  const updatePostList = async () => {
    await setLocalPostsList(postsList);
  };

  const removePost = async (id) => {
    await delPost(id);
    acionaToastify();
  };

  const acionaToastify = () => {
    toast.success("Post removido com sucesso", {
      theme: "colored",
      className: "toastifySize",
    });
  };

  const buscaPost = async (title) =>{
    const resp = await findPost(title)
    console.log(resp);
    // setLocalPostsList(resp)
  }
  return (
    <AllCards className="mt-3">
      {loading ? (
        <Spinner>
          <BeatLoader color="#ffffff" />
        </Spinner>
      ) : (
        <>
          {localPostsList?.map((post) => {
            return (
              <Card key={post.id} className="card mb-5 align-self-center" array={localPostsList}>
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
          })}
        </>
      )}
      <ToastContainer autoClose={2000} />
    </AllCards>
  );
}
