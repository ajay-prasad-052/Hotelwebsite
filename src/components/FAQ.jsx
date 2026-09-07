import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import { hotel } from "../data/hotel";

function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-600">
            FAQ
          </p>

          <h2 className="mt-3 text-4xl font-light">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="divide-y border-y">
          {hotel.faqs.map((faq, index) => (
            <div key={faq.question}>
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="flex w-full items-center justify-between py-6 text-left"
              >
                <span className="font-medium">{faq.question}</span>

                {active === index ? <Minus size={20} /> : <Plus size={20} />}
              </button>

              {active === index && (
                <p className="pb-6 leading-7 text-gray-500">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
