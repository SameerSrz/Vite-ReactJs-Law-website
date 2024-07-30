import React from 'react'
import PropTypes from "prop-types";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";


const year = new Date().getFullYear();
const Footer = ({ title, description, socials, menus, copyright }) => {
  return (
    <footer className="relative px-4 pt-8 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <h4 className="text-3xl font-semibold mb-4 text-gray-900">{title}</h4>
            <p className="text-base font-normal text-gray-500 lg:w-4/5">
              {description}
            </p>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              <a href="https://www.facebook.com/hafizlastc" target="_blank"><FaFacebook /></a>
              <a href="https://www.instagram.com/h_lastc" target="_blank"><FaInstagram /></a>
              <a href="https://www.linkedin.com/" target="_blank"><FaLinkedin /></a>
            </div>
          </div>
          <div className="mx-auto mt-12 right-0 grid w-max grid-cols-2 gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <p className="text-sm font-medium uppercase text-black mb-2">{name}</p>
                <ul className="mt-3 space-y-2">
                  {items.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        className="text-base font-normal text-gray-500 hover:text-gray-700"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <p className="text-base font-normal text-gray-500">
              {copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
    title: "Hafiz Legal Solutions",
    description:
      "Providing expert tax advice and strategic planning to help individuals and businesses navigate complex tax regulations and optimize their financial outcomes. Our goal is to ensure compliance, minimize liabilities, and achieve financial peace of mind through personalized legal solutions.",
    menus: [
        {
            // name: "useful links",
            items: [
              { name: "", path: "" },
              { name: "", path: "" },
              {
                name: "",
                path: "",
              },
              {
                name: " ",
                path: "",
              },
            ],
          },
      {
        name: "other resources",
        items: [
          {
            name: "Privacy Policy",
            // path: "/privacy-policy",
          },
          {
            name: "Terms of Service",
            // path: "/terms-of-service",
          },
          {
            name: "Contact Us",
            // path: "/contact-us",
          },
          {
            name: "FAQ",
            // path: "/faq",
          },
        ],
      },
    ],
    copyright: (
      <>
        Copyright © {year} Hafiz Legal Solutions{" "}
      </>
    ),
  };
  
  Footer.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    socials: PropTypes.arrayOf(PropTypes.object),
    menus: PropTypes.arrayOf(PropTypes.object),
    copyright: PropTypes.node,
  };
  

export default Footer
