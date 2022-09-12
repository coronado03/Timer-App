import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="absolute bottom-0 w-screen justify-center flex flex-row gap-x-7 bg-black bg-opacity-50 py-5">
        
        <div className="">
          <FaGithub className="transform hover:scale-150 transition duration-500 ease-in-out" color="white" size="2.5rem" />
        </div>
        <div className="">
          <FaLinkedin
            className="transform hover:scale-150 transition duration-500 ease-in-out"
            color="white"
            size="2.5rem"
          />
        </div>
      </div>
    </>
  );
}
