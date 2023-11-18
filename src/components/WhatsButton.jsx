import { WhatsappIcon } from "../assets/svg/whatsapp";

export const WhatsButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?1=pt_BR&phone=5511986487996"
      target="_blank"
      className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 "
    >
      <WhatsappIcon />
    </a>
  );
};
