import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import BenzeneImage from "../assets/images/careerImages/benzene.png";
import emailjs from "emailjs-com";
const nameRegex = /^[A-Za-z\s]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^\+?[1-9]\d{1,14}$/;
const ContactPage = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    message: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handlePhoneChange = (value) => {
    setFormData((prevData) => ({ ...prevData, phone: value }));
  };
  const validateForm = () => {
    const isValid =
      nameRegex.test(formData.from_name) &&
      emailRegex.test(formData.from_email) &&
      phoneRegex.test(formData.phone) &&
      formData.message.trim() !== "";
    setIsFormValid(isValid);
  };
  useEffect(() => {
    validateForm();
  }, [formData]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = {
      ...formData,
      subject: "Zummpath Bioinformatics Query",
    };
    emailjs
      .send(
        "service_wv4e51v",
        "template_57aj9o8",
        dataToSend,
        "Tjxl8Vi15weJhGFl_"
      )
      .then((response) => {
        console.log("Message sent successfully", response);
        toast.success("Message sent successfully!");
        setFormData({ from_name: "", from_email: "", phone: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending message", error);
        toast.error("Error sending message, please try again.");
      });
  };
  return (
    <section className='contact relative z-[1] min-h-dvh bg-offWhite grid place-items-center py-20 overflow-hidden'>
      <img
        className='absolute -z-[1] max-w-52 w-full h-auto top-16 -left-10'
        src={BenzeneImage}
        alt='benzene'
      />
      <img
        className='absolute -z-[1] max-w-52 w-full h-auto bot-16 -right-20'
        src={BenzeneImage}
        alt='benzene'
      />
      <div className='wrapper'>
        <div className='contact-content'>
          <h2 className='md:text-6xl mediumSmall:text-5xl text-4xl font-semibold text-center text-gray-800 md:mb-24 mb-16'>
            Contact Us
          </h2>
          <div className='contact-content__paragraph flex flex-col gap-4 mb-8'>
            <p className='md:text-xl text-lg'>
              Want to get in touch with us? We'd love to hear from you! Whether
              you have questions about our 6-month bioinformatics training
              program for <strong>₹59,999/- (Excl. GST)</strong>, are interested
              in a potential role as a Research Assistant, or need assistance
              with our services, our team is here to help. We're committed to
              providing insightful solutions and tailored support for all your
              needs.
            </p>
            <p className='md:text-xl text-lg'>
              Fill out the contact form below with your details, and a member of
              our team will get back to you promptly. Please include as much
              information as possible so we can direct your inquiry to the right
              person. We value open communication and look forward to helping
              you achieve your goals.
            </p>
            <p className='md:text-xl text-lg'>
              For direct assistance, feel free to email us at{" "}
              <a
                href='mailto:Info.zummpath@zummitlabs.com'
                className='text-royalGreen font-medium underline hover:text-gray-700'
              >
                Info.zummpath@zummitlabs.com
              </a>
              . Your inquiries are important to us, and we aim to provide you
              with a seamless and informative experience. Thank you for
              considering us, and we can't wait to connect!
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className='block w-full md:max-w-[50%] bg-offWhite'
          >
            <div className='mb-4'>
              <label className='block font-medium md:text-lg text-md text-gray-700 mb-1'>
                Your Name
              </label>
              <input
                type='text'
                name='from_name'
                className='block md:text-lg bg-offWhite text-md w-full p-3 border border-solid border-royalGreen rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800'
                placeholder='Your Name'
                value={formData.from_name}
                onChange={handleChange}
                required
              />
              {!nameRegex.test(formData.from_name) && formData.from_name && (
                <p className='text-red-500 text-xs'>
                  Name should only contain letters and spaces.
                </p>
              )}
            </div>

            <div className='mb-4'>
              <label className='block font-medium md:text-lg text-md text-gray-700 mb-1'>
                Your Email
              </label>
              <input
                type='email'
                name='from_email'
                className='block md:text-lg bg-offWhite text-md w-full p-3 border border-solid border-royalGreen rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800'
                placeholder='Your Email'
                value={formData.from_email}
                onChange={handleChange}
                required
              />
              {!emailRegex.test(formData.from_email) && formData.from_email && (
                <p className='text-red-500 text-xs'>
                  Please enter a valid email address.
                </p>
              )}
            </div>

            <div className='mb-4'>
              <label className='block font-medium md:text-lg text-md text-gray-700 mb-1'>
                Your Phone Number
              </label>
              <PhoneInput
                defaultCountry='IN'
                value={formData.phone}
                onChange={handlePhoneChange}
                required
                international
                className='w-full md:text-lg text-md p-3 border border-solid border-royalGreen rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800'
              />
              {!phoneRegex.test(formData.phone) && formData.phone && (
                <p className='text-red-500 text-xs'>
                  Please enter a valid phone number.
                </p>
              )}
            </div>

            <div className='mb-4'>
              <label className='block font-medium md:text-lg text-md text-gray-700 mb-1'>
                Your Message
              </label>
              <textarea
                name='message'
                className='block bg-offWhite md:text-lg text-md w-full p-3 border border-solid border-royalGreen rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800'
                placeholder='Your Message'
                value={formData.message}
                onChange={handleChange}
                required
                rows={8}
              />
            </div>

            <button
              type='submit'
              disabled={!isFormValid}
              className={`block md:text-lg text-md mediumSmall:w-fit w-full py-3 px-4 rounded-lg font-semibold ${
                isFormValid
                  ? "bg-royalGreen text-offWhite hover:bg-gray-700"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ContactPage;
