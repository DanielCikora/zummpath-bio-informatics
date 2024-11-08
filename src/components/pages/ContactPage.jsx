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
  const [isFormComplete, setIsFormComplete] = useState(false);
  // Check if all fields are filled
  useEffect(() => {
    const { from_name, from_email, phone, message } = formData;
    setIsFormComplete(
      from_name.trim() !== "" &&
        from_email.trim() !== "" &&
        phone.trim() !== "" &&
        message.trim() !== ""
    );
  }, [formData]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };
  // Validate email format using regex
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    return emailPattern.test(email);
  };
  // Validate phone number
  const validatePhoneNumber = (phone) => {
    // Basic validation for the phone number.
    // Adjust the regex according to the expected phone number format.
    const phonePattern = /^\+?\d{1,4}[-\s]?\d{1,14}$/; // Example for international format
    return phonePattern.test(phone);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { from_name, from_email, phone, message } = formData;
    // Check if form fields are filled
    if (!from_name || !from_email || !phone || !message) {
      toast.error("Please fill in all the fields.");
      return;
    }
    // Send POST request to backend using Axios
    try {
      const response = await axios.post(
        "http://localhost:5000/send-email",
        formData
      );
      if (response.status === 200) {
        toast.success("Message sent successfully!");
        // Clear the form data
        setFormData({ from_name: "", from_email: "", phone: "", message: "" });
      } else {
        toast.error("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error sending message. Please try again.");
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
              program for ₹59,999, are interested in a potential role as a
              Research Assistant, or need assistance with our services, our team
              is here to help. We're committed to providing insightful solutions
              and tailored support for all your needs.
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
