import { WhatsappIcon } from "../assets/svg/whatsapp";

export const WhatsButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?1=pt_BR&phone=5511986487996"
      target="_blank"
      className="fixed bottom-4 right-4 w-12 h-12 lg:w-20 lg:h-20 w-xlg:bottom-4 xlg:right-8 "
    >
      <WhatsappIcon />
    </a>
  );
};
