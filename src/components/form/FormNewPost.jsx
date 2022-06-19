import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../../constants/base_url";
import { useForm } from "../../hooks/Form/useForm";
import { Container, Form } from "./style";
import { ToastContainer, toast } from "react-toastify";

export default function FormNewPost() {
  const { form, onChange, limpaCampos } = useForm({
    title: "",
    body: "",
    userId: Number,
  });

  const sucessToastify = () => {
    toast.success("Post criado com sucesso", {
      theme: "colored",
      className: "toastifySize",
    });
  };

  const alertToastify = () => {
    toast.warning("Algum campo em branco", {
      theme: "colored",
      className: "toastifySize",
    });
  };

  //ENDPOINT DE ADIÇÃO DO POST
  const createNewPost = () => {
    if (form.title != "" && form.body != "" && form.userId != 0) {
      axios
        .post(
          `${BASE_URL}/posts`,
          {
            title: form.title,
            body: form.body,
            userId: form.userId,
          },
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        )
        .then((resp) => {
          if (resp.status == 201) {
            sucessToastify();
          }
        })
        .catch((error) => console.log(error));
    } else {
      alertToastify();
    }
  };

  return (
    <Container className="container">
      <Form className="mt-3 p-5 text-start">
        <div class="mb-4">
          <label for="exampleInputEmail1" class="form-label">
            Título do post
          </label>
          <input
            type="text"
            name={"title"}
            value={form.title}
            onChange={onChange}
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Id do usuário
          </label>
          <input
            type="number"
            name={"userId"}
            value={form.userId}
            onChange={onChange}
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Mensagem
          </label>
          <textarea
            type={"text"}
            name={"body"}
            value={form.body}
            onChange={onChange}
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          onClick={() => createNewPost()}
        >
          Criar
        </button>
      </Form>
      <ToastContainer autoClose={2000} />
    </Container>
  );
}
