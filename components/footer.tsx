import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="absolute bottom-0 w-screen justify-center flex flex-row gap-x-7 bg-black bg-opacity-50 py-5">
        <div className="transition duration-0 hover:duration-300 ease-in-out">
          <FaGithub className="" color="white" size="2.5rem" />
        </div>
        <div className="transition duration-0 hover:duration-300 ease-in-out">
          <FaLinkedin
            className=""
            color="white"
            size="2.5rem"
          />
        </div>
      </div>
    </>
  );
}
