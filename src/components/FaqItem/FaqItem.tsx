import { FaqItemProps } from '@/types';
import React from 'react'
import { FiMinusCircle } from 'react-icons/fi';
import { GoPlusCircle,  } from 'react-icons/go'



const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onToggle }) => (
    <div className="p-6 bg-white border border-[#EAEAEA] rounded-lg">
      <div className="flex items-center justify-between gap-6">
        <h4 className="tablet:text-xl text-base text-[#111827]">{question}</h4>
        <button onClick={onToggle} className="text-2xl">
          {isOpen ? <FiMinusCircle /> : <GoPlusCircle />}
        </button>
      </div>
      {isOpen && (
        <div className="mt-6">
          <p className="text-[#6B7280]">{answer}</p>
        </div>
      )}
    </div>
);
export default FaqItem