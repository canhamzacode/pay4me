import Image from 'next/image';
import React from 'react';
import './ourWhy.css';
import { SectionTitle } from '../SectionTitle';

const OurWhy = () => {
  return (
    <div className="w-full bg-[#f9faff] py-10">
      <div className="w-full max-w-[1194px] mx-auto md:px-0 px-5 mt-16">
        <SectionTitle text='Why We Built the Pay4me App' />

        <div className="mt-20 grid tablet:grid-cols-[0.6fr,1fr] grid-cols-1 gap-4 px-6">
          {/* First Section: Global Education Payments */}
          <div className="bg-[#ECE8521A] max-w-[400px] mx-auto rounded-t-[40px] border border-[#00000033] pt-11 px-10 flex flex-col gap-10 justify-between">
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl font-bold max-w-[302px]">To Facilitate Global Education Payments</h3>
              <p className="text-[#111827CC] max-w-[413px]">
                Pay4Me empowers international students to easily fund their educational pursuits by offering a diverse range of payment options, including visa fees, tuition, and other essential educational expenses.
              </p>
            </div>
            <div className="w-full h-auto">
              <Image src="/images/globalPayment.png" width={473} height={530} alt="global payment illustration" className="w-full h-full" />
            </div>
          </div>

          {/* Second Section: Grid Layout Items */}
          <div className="grid-container">
            {/* Item 1: "To Foster Financial Inclusion" */}
            <div className="grid-item" style={{ gridArea: 'item1' }}>
              <div className="bg-[#F56C2C1A] rounded-[40px] border border-[#00000033] h-full pt-11 flex flex-col justify-between gap-2 max-w-[400px] mx-auto">
                <div className="flex flex-col gap-3 px-5">
                  <h3 className="text-2xl font-bold max-w-[302px]">To Foster Financial Inclusion</h3>
                  <p className="text-[#111827CC] text-sm max-w-[413px]">
                    Pay4Me App makes international payments more accessible to individuals who may not have access to traditional banking services.
                  </p>
                </div>
                <div className="px-5">
                  <Image src="/images/tranfer.png" width={382} height={288} alt="financial inclusion illustration" className="w-full h-full" />
                </div>
              </div>
            </div>

            {/* Item 2: "To Improve Convenience and Accessibility" */}
            <div className="grid-item" style={{ gridArea: 'item2' }}>
              <div className="bg-[#29DA6B1A] rounded-[40px] border border-[#00000033] pt-11 flex flex-col gap-2 justify-between max-w-[400px] mx-auto">
                <div className="flex flex-col gap-4 px-5">
                  <h3 className="text-2xl font-bold max-w-[302px]">To Improve Convenience and Accessibility</h3>
                  <p className="text-[#111827CC] text-sm max-w-[413px]">
                    Pay4Me App provides access to payment services anytime, anywhere, making it convenient for users across different time zones.
                  </p>
                </div>
                <div className="flex items-end justify-end rounded-[40px]">
                  <Image src="/images/atom.png" width={178} height={201} className="rounded-[40px]" alt="atom illustration" />
                </div>
              </div>
            </div>

            {/* Item 3: "Bridging Geographical Boundaries" */}
            <div className="grid-item" style={{ gridArea: 'item3' }}>
              <div className="bg-[#E3F0AF1A] rounded-[40px] border border-[#00000033] pt-11 px-5 flex flex-col gap-2 max-w-[400px] mx-auto">
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-bold max-w-[302px]">Bridging Geographical Boundaries</h3>
                  <p className="text-[#111827CC] text-sm max-w-[413px]">
                    Pay4Me app connects students and institutions across borders, enabling seamless payment flows regardless of location.
                  </p>
                </div>
                <div className="">
                  <Image src="/images/globe.png" width={382} height={288} alt="security illustration" className="w-full h-full" />
                </div>
              </div>
            </div>

            {/* Item 4: "To Enhance Security and Transparency" */}
            <div className="grid-item" style={{ gridArea: 'item4' }}>
              <div className="bg-[#F9F8EE] rounded-[40px] border border-[#00000033] pt-11 px-5 flex flex-col gap-2 max-w-[400px] mx-auto">
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-bold max-w-[302px]">To Enhance Security and Transparency</h3>
                  <p className="text-[#111827CC] text-sm max-w-[413px]">
                    Pay4Me app prioritizes user security by integrating with industry-leading payment gateways like Stripe and PayPal. These gateways employ robust security measures, including encryption, tokenization, and sophisticated fraud detection systems.
                  </p>
                </div>
                <div className="flex justify-end items-end">
                  <Image src="/images/security.png" width={271} height={288} alt="security illustration" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWhy;