import { VscGithub } from "react-icons/vsc";

const Footer = () => {
  return (
    <footer className="py-2 mt-auto font-text flex flex-col items-center">
      <p className="text-lg sm:text-2xl">
        Developed by <span className="font-bold">Iván</span>
      </p>
      <div className="flex items-center">
        <p className="text-sm mx-2">Follow me on </p>
        <a href="https://github.com/ivanrs99" target="_blank" rel="noreferrer">
          <VscGithub size="2vw" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
