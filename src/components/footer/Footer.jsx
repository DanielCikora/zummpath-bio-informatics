import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import ZummpathLogo from "../assets/images/heroImages/zummpath-logo.png";
import ZummitLogo from "../assets/images/navigationImages/zummit-logo.png";
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
      title: "Zummpath",
      links: [
        { id: 1, name: "Learn More", href: "/LearnMore" },
        { id: 2, name: "Contact", href: "/Contact" },
        { id: 3, name: "FAQs", href: "/Faq" },
      ],
    },
    {
      title: "Resources",
      links: [
        { id: 4, name: "White Paper", href: "/WhitePaper" },
        { id: 5, name: "Blog", href: "/BlogPage" },
      ],
    },
    {
      title: "Support",
      links: [{ id: 6, name: "Privacy Policy", href: "/PrivacyPolicy" }],
    },
  ];
  return (
    <footer className='footer'>
      <div className='footer-zummitlabs bg-lightGray w-full py-12'>
        <div className='wrapper'>
          <div className='footer-quantumzume__content flex md:flex-row flex-col md:justify-between items-center'>
            <div className='quantumzyme-logo flex md:items-start items-center flex-col gap-2 md:mb-0 mb-10'>
              <Link
                to='https://www.zummitlabs.com/'
                className='block'
                target='_blank'
              >
                <img
                  className='h-auto w-full md:max-w-52 max-w-40'
                  src={ZummpathLogo}
                  alt='zummpath-logo'
                />
              </Link>
              <h3 className='font-semibold text-gray-800 md:text-sm text-xs'>
                © {new Date().getFullYear()} Zummpath. All rights reserved.
              </h3>
            </div>
            <div className='footer-links flex md:flex-row flex-col md:gap-14 gap-gap-4'>
              {footerSections.map((section, index) => (
                <div
                  key={index}
                  className='footer-section text-gray-800 md:text-left text-center'
                >
                  <h4 className='font-semibold mediumSmall:text-2xl text-xl mb-4'>
                    {section.title}
                  </h4>
                  <ul className='flex flex-col gap-1 md:items-start items-center'>
                    {section.links.map((link) => (
                      <li key={link.id}>
                        <Link
                          className='footer-link w-fit block mediumSmall:text-lg text-md'
                          to={link.href}
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
      <div className='footer-zummit bg-lightGreen py-2'>
        <div className='wrapper'>
          <div className='flex items-center w-full justify-between md:flex-row flex-col gap-4'>
            <Link to='https://www.zummitlabs.com/' className='block'>
              <img
                className='h-auto w-full md:max-w-40 max-w-36'
                src={ZummitLogo}
                alt='zummit-logo'
              />
            </Link>
            <h3 className='font-semibold md:text-sm text-xs text-gray-800'>
              © {new Date().getFullYear()} . Zummit Infolabs All rights
              reserved.
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
