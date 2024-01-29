import { Dancing_Script } from "next/font/google";
const DancingSpiritFont = Dancing_Script({ subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className=" text-center">
      <p>
        developed by{" "}
        <a
          href="https://github.com/Azox-sudo"
          className={DancingSpiritFont.className + " text-theme-blue  text-2xl"}
        >
          AzoxSudo
        </a>
      </p>
    </footer>
  );
};

export default Footer;
