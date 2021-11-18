
const faqs = [
    {
      id: 1,
      question: "How do I integrate data into my smart contract?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        id: 2,
        question: "What networks do you support?",
        answer:
          "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
      },
      {
        id: 3,
        question: "Can I use your data in my Dapp without smart contract integration?",
        answer:
          "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
      },
      {
        id: 4,
        question: "What data can I get access to?",
        answer:
          "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
      }
    // More questions...
  ]
  
  export default function Faq() {
    return (
      <div className="bg-red-700">
        <div className="max-w-7xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
          <div className="mt-8">
            <dl className="divide-y divide-gray-200">
              {faqs.map((faq) => (
                <div key={faq.id} className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                  <dt className="text-base font-medium text-white md:col-span-5">{faq.question}</dt>
                  <dd className="mt-2 md:mt-0 md:col-span-7">
                    <p className="text-base text-white">{faq.answer}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  