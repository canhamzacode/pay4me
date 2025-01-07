import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// Data for Footer Sections
const footerData = [
  {
    title: "Company",
    links: ["About", "Blog", "FAQs", "Support"],
  },
  {
    title: "Legal",
    links: [
      "Terms of Service",
      "Order Cancellation Policy",
      "Privacy Policy",
      "KYC/AML Policy",
    ],
  },
  {
    title: "Resources",
    links: ["Android Reviews", "IOS Reviews", "Jobs", "Testimonials.to"],
  },
];

// Data for Social Media
const socialMedia = [
  { name: "Facebook", icon: <FaFacebookF />, link: "https://facebook.com" },
  { name: "Twitter", icon: <FaTwitter />, link: "https://twitter.com" },
  { name: "Instagram", icon: <FaInstagram />, link: "https://instagram.com" },
  { name: "LinkedIn", icon: <FaLinkedinIn />, link: "https://linkedin.com" },
];

const Footer = () => {
  return (
    <div className="w-full pt-14">
        <div className="w-full max-w-[1142px] mx-auto">
            {/* Disclaimer */}
            <div className="w-full py-10 px-5 border-b border-b-[#1118270D]">
            <p className="text-center text-[#111827]">
                Pay4Me facilitates quick and easy tuition and fee payments for
                international students and immigrants through partnerships with
                licensed financial institutions. All mentioned brands are trademarks
                of their respective owners and do not imply endorsement.
            </p>
            </div>

            {/* Footer Content */}
            <div className="flex gap-x-20 gap-y-10 py-10 sm:justify-between flex-wrap px-5 items-center">
            {/* Logo and Socials */}
            <div className="flex flex-col gap-5 max-w-[243px] items-center text-center">
                <div>
                <div className="tablet:w-[224px] tablet:h-[84px] w-[112px] h-[42px]">
                    <Image src="/images/logo.png" width={224} height={84} alt="logo" />
                </div>
                <p>© 2020 - 2024 Pay4Me, Inc</p>
                </div>

                {/* Social Media */}
                <div className="flex flex-col gap-3">
                <p>Follow us to stay updated!</p>
                <div className="flex items-center gap-2 justify-center">
                    {socialMedia.map((social, index) => (
                    <Link key={index} href={social.link} target="_blank">
                        <div className="w-[28px] h-[28px] rounded-[28px] border border-black flex items-center justify-center text-black hover:bg-primary hover:text-white transition-colors">
                        {social.icon}
                        </div>
                    </Link>
                    ))}
                </div>
                </div>
            </div>

            {/* Footer Links */}
            {footerData.map((section, index) => (
                <div key={index} className="flex flex-col gap-3">
                <h4 className="text-2xl font-medium text-black">{section.title}</h4>
                {section.links.map((link, linkIndex) => (
                    <Link key={linkIndex} href={`/${link.toLowerCase().replace(/ /g, "-")}`}>
                    <p className="cursor-pointer hover:text-primary transition-colors">
                        {link}
                    </p>
                    </Link>
                ))}
                </div>
            ))}
            </div>
        </div>
        <div className="w-full ">
            <Image src="/images/pills.svg" width={1520} height={194} alt="footer wave" className="w-full" />
        </div>
    </div>
  );
};

export default Footer;
