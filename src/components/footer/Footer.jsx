import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import QuantumzymeLogoFooter from "../assets/images/navigationImages/quantumzyme-logo-footer.png";
import ZummitLogo from "../assets/images/navigationImages/zummit_logo.png";
import "./footer.css";
const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: faFacebook,
      url: "https://www.facebook.com/Zummitinfolabs/",
      label: "Facebook",
    },
    {
      id: 2,
      icon: faInstagram,
      url: "https://www.instagram.com/zummitinfolabs/",
      label: "Instagram",
    },
    {
      id: 3,
      icon: faXTwitter,
      url: "https://x.com/ZummitI",
      label: "X",
    },
    {
      id: 4,
      icon: faLinkedin,
      url: "https://www.linkedin.com/company/zummit-infolabs-dna/",
      label: "LinkedIn",
    },
  ];
  const footerSections = [
    {
      title: "Quantumzyme",
      links: [
        { id: 1, name: "About Us", href: "/About" },
        { id: 2, name: "Contact", href: "/Contact" },
        { id: 3, name: "FAQs", href: "/Faq" },
      ],
    },
    {
      title: "Resources",
      links: [
        { id: 4, name: "Blog", href: "/Blog" },
        { id: 5, name: "Case Studies", href: "/Case-studies" },
        { id: 6, name: "White Papers", href: "/White-papers" },
      ],
    },
    {
      title: "Support",
      links: [
        { id: 8, name: "Help Center", href: "/Help-center" },
        { id: 9, name: "Privacy Policy", href: "/Privacy-policy" },
      ],
    },
  ];
  return (
    <footer className='footer'>
      <div className='footer-quantumzyme bg-lightGray w-full py-12'>
        <div className='wrapper'>
          <div className='footer-quantumzume__content flex md:flex-row flex-col md:justify-between items-center'>
            <div className='quantumzyme-logo flex md:items-start items-center flex-col gap-2 md:mb-0 mb-10'>
              <Link
                to='https://www.quantumzyme.com/'
                className='block'
                target='_blank'
              >
                <img
                  className='h-auto w-full md:max-w-52 max-w-40'
                  src={QuantumzymeLogoFooter}
                  alt='quantumzyme-logo'
                />
              </Link>
              <h3 className='font-semibold text-gray-800 md:text-sm text-xs'>
                © {new Date().getFullYear()} Quantumzyme. All rights reserved.
              </h3>
            </div>
            <div className='footer-links flex md:flex-row flex-col md:gap-14 gap-gap-4'>
              {footerSections.map((section, index) => (
                <div
                  key={index}
                  className='footer-section text-gray-800 md:text-left text-center'
                >
                  <h4 className='font-semibold mediumSmall:text-xl text-md mb-4'>
                    {section.title}
                  </h4>
                  <ul className='flex flex-col gap-1 md:items-start items-center'>
                    {section.links.map((link) => (
                      <li key={link.id}>
                        <Link
                          className='footer-link w-fit block mediumSmall:text-lg text-md'
                          to={link.href}
                          target='_blank'
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='footer-zummit bg-secondGray py-2'>
        <div className='wrapper'>
          <div className='flex items-center w-full justify-between md:flex-row flex-col gap-4'>
            <Link to='https://www.zummitlabs.com/' className='block'>
              <img
                className='h-auto w-full md:max-w-36 max-w-28'
                src={ZummitLogo}
                alt='zummit-logo'
              />
            </Link>
            <h3 className='font-semibold md:text-sm text-xs text-gray-800'>
              © {new Date().getFullYear()} Zummit Infolabs. All rights reserved.
            </h3>
            <div className='social-icons flex gap-4'>
              {socialLinks.map((social) => (
                <a
                  className='block'
                  key={social.id}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.label}
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    className='block text-gray-800 hover:text-royalGreen text-2xl'
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
