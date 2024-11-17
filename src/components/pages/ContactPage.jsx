import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import BenzeneImage from "../assets/images/careerImages/benzene.png";
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isFormComplete, setIsFormComplete] = useState(false);

  useEffect(() => {
    const { from_name, from_email, phone, message } = formData;
    const isComplete =
      from_name.trim() !== "" &&
      from_email.trim() !== "" &&
      phone.trim() !== "" &&
      message.trim() !== "" &&
      validateEmail(from_email) &&
      validatePhoneNumber(phone);
    setIsFormComplete(isComplete);
  }, [formData]);

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePhoneNumber = (phone) => {
    const phonePattern = /^\+?\d{1,4}[-\s]?\d{1,14}$/;
    return phonePattern.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "from_email" && !validateEmail(value)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
    if (!validatePhoneNumber(value)) {
      setErrors((prev) => ({ ...prev, phone: "Invalid phone number" }));
    } else {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormComplete) {
      toast.error("Please fix the errors before submitting.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/send-email",
        formData
      );
      toast.success("Email sent successfully!");
      setFormData({ from_name: "", from_email: "", phone: "", message: "" });
    } catch (error) {
      toast.error("Error sending email, please try again.");
    }
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
              program for <strong>₹59,999</strong>, are interested in a
              potential role as a Research Assistant, or need assistance with
              our services, our team is here to help. We're committed to
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
              {errors.email && (
                <span className='text-red-500'>{errors.email}</span>
              )}
            </div>
            <div className='mb-4'>
              <label className='block font-medium md:text-lg text-md text-gray-700 mb-1'>
                Your Phone Number
              </label>
              <PhoneInput
                placeholder='Enter phone number'
                value={formData.phone}
                onChange={handlePhoneChange}
                defaultCountry='IN'
                required
                international
                className='w-full md:text-lg text-md p-3 border border-solid border-royalGreen rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800'
              />
              {errors.phone && (
                <span className='text-red-500'>{errors.phone}</span>
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
                rows={6}
              />
            </div>
            <button
              type='submit'
              className={`block md:text-lg text-md mediumSmall:w-fit w-full bg-royalGreen text-offWhite py-3 px-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200 ${
                isFormComplete ? "" : "opacity-50 cursor-not-allowed"
              }`}
              disabled={!isFormComplete}
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
