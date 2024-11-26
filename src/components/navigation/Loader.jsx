import "./loader.css";
import ZummpathLogo from "../assets/images/heroImages/zummpath-bioinformatics-logo.png";
const Loader = ({ isVisible }) => {
  return (
    <div
      className={`loader-container flex flex-col gap-20 ${
        isVisible ? "fade-in" : "fade-out"
      }`}
    >
      <img
        className='block h-auto w-full max-w-60'
        src={ZummpathLogo}
        alt='zummpath-logo'
      />
      <div className='loader'></div>
    </div>
  );
};

export default Loader;
