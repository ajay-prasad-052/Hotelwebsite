import { MessageCircle } from "lucide-react";
import { hotel } from "../data/hotel";

function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello, I would like to know more about booking a room.",
  );

  return (
    <a
      href={`https://wa.me/${hotel.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition hover:scale-110"
      aria-label="Contact hotel on WhatsApp"
    >
      <MessageCircle size={27} />
    </a>
  );
}

export default WhatsAppButton;
