import MainNav from "./MainNav";
import mainimg from "../img/my.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  faGraduationCap,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCss3Alt,
  faGithub,
  faHtml5,
  faJs,
  faLinkedin,
  faReact,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const NotFound = () => {
  return (
    <div className="lg:flex lg:flex-row lg:ml-40 lg:mr-40 lg:pt-20">
      <div className="lg:text-slate-100 lg:w-1/4 lg:border lg:mr-7 lg:rounded-[20px] lg:mb-10 lg:h-full lg:sticky lg:top-20">
        <img
          src={mainimg}
          alt="Not Found"
          className="lg:flex lg:justify-center lg:items-center lg:h-36 lg:w-32 lg:m-auto lg:mt-12 lg:rounded-[10px]"
        />
        <br />
        <h2 className="lg:w-40 lg:text-xl lg:m-auto lg:text-center">
          Himayat Ullah
        </h2>
        <h2 className="lg:w-40 lg:rounded lg:text-sm lg:bg-slate-800 lg:m-auto lg:text-center lg:mt-3">
          Frontend Developer
        </h2>
        <hr className="lg:w-48 lg:text-xl lg:m-auto lg:text-center lg:mt-7 lg:mb-7 lg:border-slate-800 lg:border" />
        <div className="lg:flex lg:w-48 lg:text-sm lg:m-auto">
          <div className=" lg:fa-xl">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "#EA9023" }}
              className="lg:bg-slate-800 lg:p-3 lg:rounded-[10px]"
            />
          </div>
          <div className="lg:ml-2">
            <p className="lg:text-slate-500">EMAIL</p>
            <p>himayat.ali01@gamil.com</p>
          </div>
        </div>
        <br />
        <div className="lg:flex lg:w-48 lg:text-sm lg:m-auto">
          <div className=" lg:fa-xl">
            <FontAwesomeIcon
              icon={faPhone}
              style={{ color: "#EA9023" }}
              className="lg:bg-slate-800 lg:p-3 lg:rounded-[10px]"
            />
          </div>
          <div className="lg:ml-2">
            <p className="lg:text-slate-500">PHONE</p>
            <p>0092-342-4429893</p>
          </div>
        </div>
        <br />
        <div className="lg:flex lg:w-48 lg:text-sm lg:m-auto">
          <div className=" lg:fa-xl">
            <FontAwesomeIcon
              icon={faWhatsapp}
              style={{ color: "#EA9023" }}
              className="lg:bg-slate-800 lg:p-3 lg:rounded-[10px]"
            />
          </div>
          <div className="lg:ml-2">
            <p className="lg:text-slate-500">WHATSAPP</p>
            <p>03424429893</p>
          </div>
        </div>
        <br />
        <div className="lg:flex lg:w-48 lg:text-sm lg:m-auto">
          <div className=" lg:fa-xl">
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#EA9023" }}
              className="lg:bg-slate-800 lg:p-3 lg:rounded-[10px]"
            />
          </div>
          <div className="lg:ml-2">
            <p className="lg:text-slate-500">LOCATION</p>
            <p>Lahore, Pakistan</p>
          </div>
        </div>
        <div className="lg:w-20 lg:text-center lg:m-auto lg:flex lg:mt-5">
          <FontAwesomeIcon icon={faGraduationCap} className="lg:basis-1/3" />
          <FontAwesomeIcon icon={faLinkedin} className="lg:basis-1/3" />
          <FontAwesomeIcon icon={faGithub} className="lg:basis-1/3" />
        </div>
        <div className="lg:w-48 lg:m-auto lg:text-center lg:mt-5 lg:mb-5 lg:text-[#EA9023]">
          <h4 className="mr-5">All Reserved | HIMAYAT </h4>
        </div>
      </div>
      <div className="lg:rounded-[20px] lg:border lg:text-gray-100 lg:w-3/4 lg:mb-10">
        <MainNav />
        <div className="lg:ml-8 lg:mr-8 lg:select-none">
          <p className="lg:text-3xl lg:font-bold lg:mt-16"></p>
          {/* <hr className="lg:w-12 lg:rounded lg:border-4 lg:font-extrabold lg:mt-5 lg:mb-5 lg:border-[#EA9023]" /> */}
          <div className="text-4xl mt-72 font-bold m-auto flex items-center justify-center">
            <h2>Sorry! Page not found.</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
