import React, { useState } from 'react';
import { SectionTitle } from '../SectionTitle';
import { FaqItem } from '../FaqItem';

interface Faq {
  question: string;
  answer: string;
}

const Faqs = () => {
  const faqs: Faq[] = [
    {
      question: 'What is the Pay4Me App?',
      answer:
        'Pay4Me App is a platform that helps people across Africa complete cross-border payment services. Our core payment industry includes helping with payments to government and immigration agencies, colleges, universities, businesses, and organizations abroad.',
    },
    {
      question: 'How secure is Pay4Me?',
      answer:
        'Pay4Me ensures all transactions are encrypted and comply with the highest security standards, ensuring your financial data is safe.',
    },
    {
      question: 'Can I use Pay4Me outside of Africa?',
      answer:
        'Yes, Pay4Me services are accessible globally, allowing users to make payments from anywhere in the world.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Toggle function
  const toggleFaq = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="w-full bg-[#f9faff] py-16">
      <div className="w-full max-w-[768px] mx-auto md:px-0 px-5 mt-16">
        <SectionTitle text="FAQs" />
        <div className="w-full flex flex-col gap-6 mt-24">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleFaq(index)}
            />
          ))}
        </div>
        <div className='mt-6 text-center'>
            <p className='text-2xl font-medium'>Have more questions? <span className='underline text-primary'>See the full FAQ</span></p>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
