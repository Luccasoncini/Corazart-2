import React from "react";
import instagramCards from "../assets/img/instagramcards.png";
import { useEffect } from "react";
import { useGifState } from "../hooks/useGifState";
import { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

export const Contact = () => {
  const { gifFinished, setGifFinished } = useGifState();
  const [isSendingForm, setIsSendingForm] = useState();
  const [name, setName] = useState();
  const [tel, setTel] = useState();
  const [email, setEmail] = useState();
  const [work, setWork] = useState();

  useEffect(() => {
    setGifFinished(true);
  }, []);

  useEffect(() => {
    document.title = "Coraz`art | Contato";
  });

  async function sendEmail(e) {
    e.preventDefault();

    setIsSendingForm(true);

    await emailjs
      .sendForm(
        "service_4qp1d8a",
        "template_ri0jkm5",
        "#formulario",
        "JrIE7wiz4vMgFHg_B"
      )
      .then((res) => {
        setName("");
        setTel("");
        setEmail("");
        setWork("");
        toast.success("Seu formulário foi enviado!");
      })
      .catch((err) => {
        toast.error("Erro ao enviar o formulário, tente novamente mais tarde");
        console.log(err);
      });

    setIsSendingForm(false);
  }

  return (
    <main className="w-full relative">
      <section className="flex flex-wrap justify-center items-start lg:pb-8 xl:pb-0">
        <div className="flex flex-col justify-center items-start w-full mt-8 lg:mt-17 lg:w-1/2 px-4 lg:pl-20 lg:pr-0">
          <h3 className="text-purple-900 text-4xl font-bold text-center tracking-tighter w-full mb-8 lg:text-5xl lg:text-left">
            Tire seu projeto do papel
          </h3>
          <form
            action=""
            id="formulario"
            className="flex flex-col justify-center items-end w-full gap-4 lg:max-w-[650px]"
            onSubmit={sendEmail}
          >
            <input
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Nome"
              className="rounded-3xl bg-gray_50 text-gray_800 border-gray_400 border-[1px] pl-4 py-2 w-full "
            />
            <input
              name="tel"
              required
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              type="tel"
              placeholder="Telefone"
              className="rounded-3xl bg-gray_50 text-gray_800 border-gray_400 border-[1px] pl-4 py-2 w-full "
            />
            <input
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="rounded-3xl bg-gray_50 text-gray_800 border-gray_400 border-[1px] pl-4 py-2 w-full "
            />
            <input
              name="work"
              required
              value={work}
              onChange={(e) => setWork(e.target.value)}
              type="text"
              placeholder="Com o que você trabalha?"
              className="rounded-3xl bg-gray_50 text-gray_800 border-gray_400 border-[1px] pl-4 py-2 w-full "
            />
            {isSendingForm ? (
              <button
                type="submit"
                className="bg-purple-900 text-white px-[75px] py-2 rounded-3xl font-bold"
              >
                Enviando
              </button>
            ) : (
              <button
                type="submit"
                className="bg-purple-900 text-white px-[75px] py-2 rounded-3xl font-bold"
              >
                Enviar
              </button>
            )}
          </form>
          <span className="text-gray_700 text-2xl leading-8 block mt-8 mb-14">
            Ou: <br />
            <b className="text-purple_900">
              <a href="mailto:contato@corazart.com" target="_blank">
                contato@corazart.com
              </a>
            </b>{" "}
            <br />
            Whatsapp:{" "}
            <a
              href="https://api.whatsapp.com/send?1=pt_BR&phone=5511986487996"
              target="_blank"
              className="text-purple_900"
            >
              (11) 98648-7996
            </a>
          </span>
          <p className="text-2xl text-gray_700">
            Há estatisticas de que o <br />
            investimento em marketing <br />
            pode <span className="text-purple_900">
              aumentar em até 12%
            </span>{" "}
            <br />
            <b className="text-purple_900">o crescimento de uma empresa</b>{" "}
            <br />
            no ano!
          </p>
        </div>
        <div className=" hidden w-full h-full lg:w-3/6 lg:order-2 lg:flex lg:justify-end">
          <img
            src={instagramCards}
            alt="Cards do instagram com trabalhos do Corazart"
            className="w-full h-full lg:w-[94.6%]"
          />
        </div>
      </section>
    </main>
  );
};
