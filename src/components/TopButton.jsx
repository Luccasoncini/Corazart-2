export const TopButton = () => {
  function voltarParaOTopo() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <section className="flex justify-center items-center px-4 py-10">
      <button
        className="text-white bg-blue_900 text-xl w-full py-3 rounded-xl lg:text-2xl lg:px-[125px] lg:w-auto"
        onClick={() => voltarParaOTopo()}
      >
        Voltar ao Topo
      </button>
    </section>
  );
};
