import React from "react";
import MainNav from "./MainNav";
import mainimg from "../img/my.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  faAngleDown,
  faAngleUp,
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
import { useState } from "react";
import { FaFreeCodeCamp } from "react-icons/fa";

// const Home = () => {};

const Skills = () => {
  const [show, setShow] = useState(false);
  const NavHandle = () => {
    setShow(!show);
  };
  return (
    <div className="lg:flex caret-transparent lg:pb-16 pb-16 lg:flex-row lg:ml-40 lg:mr-40 lg:pt-20 pt-5">
      <div className="lg:text-slate-100 lg:w-1/4 lg:border lg:mr-7 lg:rounded-[20px] lg:mb-10 lg:h-full lg:sticky lg:top-20 lg:ml-0 border rounded-[10px] ml-10 mr-10 h-full">
        <div className="lg:flex lg:flex-col flex flex-row lg:ml-0 ml-8 mr-5">
          <img
            src={mainimg}
            alt="Not Found"
            className="lg:flex lg:justify-center lg:items-center lg:h-36 lg:w-32 lg:m-auto lg:mt-12 lg:rounded-[10px] w-24 h-24 mt-2 mb-2 rounded-[10px]"
          />
          <br />
          <div className="flex flex-col lg:ml-0 ml-10 justify-center">
            <h2 className="lg:w-40 lg:text-xl lg:m-auto lg:text-center text-2xl font-bold lg:text-[#EA9023] text-[#EA9023]">
              Himayat Ullah
            </h2>
            <h2 className="lg:w-40 lg:rounded lg:text-sm lg:bg-slate-800 lg:m-auto lg:text-center lg:mt-3 text-slate-100 rounded bg-slate-800 text-center mt-0">
              Frontend Developer
            </h2>
          </div>
          {show ? (
            <FontAwesomeIcon
              icon={faAngleUp}
              style={{ background: "#EA9023" }}
              onClick={NavHandle}
              className="text-slate-100 w-16 ml-auto mr-[-20px] border h-7 rounded-tr-lg rounded-bl-lg lg:hidden place-items-end"
            />
          ) : (
            <FontAwesomeIcon
              icon={faAngleDown}
              onClick={NavHandle}
              style={{ background: "#EA9023" }}
              className="text-slate-100 w-16 ml-auto mr-[-20px] border h-7 rounded-tr-lg rounded-bl-lg lg:hidden place-items-end"
            />
          )}
        </div>

        {show ? (
          <div className="lg:block block">
            <hr className="lg:w-48 w-[95%] m-auto lg:block lg:text-xl lg:m-auto lg:text-center lg:mt-7 lg:mb-7 lg:border-slate-800 lg:border border-slate-800 border" />
            <div className="lg:flex lg:w-48 lg:text-sm lg:m-auto flex flex-row w-full m-auto text-slate-100">
              <div className=" lg:fa-xl">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#EA9023" }}
                  className="lg:bg-slate-800 lg:p-3 lg:rounded-[10px] p-3"
                />
              </div>
              <div className="lg:ml-2 ml-2">
                <p className="lg:text-slate-500">EMAIL</p>
                <p>himayat.ali01@gamil.com</p>
              </div>
            </div>
            <br />
            <div className="lg:flex lg:w-48 lg:text-sm lg:m-auto flex flex-row w-full m-auto text-slate-100 ">
              <div className=" lg:fa-xl">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ color: "#EA9023" }}
                  className="lg:bg-slate-800 lg:p-3 lg:rounded-[10px] p-3"
                />
              </div>
              <div className="lg:ml-2 ml-2">
                <p className="lg:text-slate-500">PHONE</p>
                <p>0092-342-4429893</p>
              </div>
            </div>
            <br />
            <div className="lg:flex lg:w-48 lg:text-sm lg:m-auto flex flex-row w-full m-auto text-slate-100 ">
              <div className=" lg:fa-xl">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ color: "#EA9023" }}
                  className="lg:bg-slate-800 lg:p-3 lg:rounded-[10px] p-3"
                />
              </div>
              <div className="lg:ml-2 ml-2">
                <p className="lg:text-slate-500">WHATSAPP</p>
                <p>0342-4429893</p>
              </div>
            </div>
            <br />
            <div className="lg:flex lg:w-48 lg:text-sm lg:m-auto flex flex-row w-full m-auto text-slate-100 ">
              <div className=" lg:fa-xl">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#EA9023" }}
                  className="lg:bg-slate-800 lg:p-3 lg:rounded-[10px] p-3"
                />
              </div>
              <div className="lg:ml-2 ml-2">
                <p className="lg:text-slate-500">LOCATION</p>
                <p>Lahore, Pakistan</p>
              </div>
            </div>
            <hr className="lg:hidden w-[95%] m-auto border-slate-800 border" />
            <div className="lg:w-20 lg:text-center lg:m-auto lg:flex lg:mt-5 text-slate-100 w-40 m-auto">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="lg:basis-1/3 lg:p-0 p-4"
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="lg:basis-1/3 lg:p-0 p-4"
              />
              <FontAwesomeIcon
                icon={faGithub}
                className="lg:basis-1/3 lg:p-0 p-4"
              />
            </div>
            <div className="lg:w-48 lg:m-auto lg:text-center lg:mt-5 lg:mb-5 lg:text-[#EA9023] hidden lg:block">
              <h4 className="mr-5">All Reserved | HIMAYAT </h4>
            </div>
          </div>
        ) : (
          <div className="lg:block hidden">
            <hr className="lg:w-48 w-[95%] m-auto lg:block lg:text-xl lg:m-auto lg:text-center lg:mt-7 lg:mb-7 lg:border-slate-800 lg:border" />
            <div className="lg:flex lg:w-48 lg:text-sm lg:m-auto flex flex-row w-full m-auto text-slate-100">
              <div className=" lg:fa-xl">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#EA9023" }}
                  className="lg:bg-slate-800 lg:p-3 lg:rounded-[10px] p-3"
                />
              </div>
              <div className="lg:ml-2 ml-2">
                <p className="lg:text-slate-500">EMAIL</p>
                <p>himayat.ali01@gamil.com</p>
              </div>
            </div>
            <br />
            <div className="lg:flex lg:w-48 lg:text-sm lg:m-auto flex flex-row w-full m-auto text-slate-100 ">
              <div className=" lg:fa-xl">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ color: "#EA9023" }}
                  className="lg:bg-slate-800 lg:p-3 lg:rounded-[10px] p-3"
                />
              </div>
              <div className="lg:ml-2 ml-2">
                <p className="lg:text-slate-500">PHONE</p>
                <p>0092-342-4429893</p>
              </div>
            </div>
            <br />
            <div className="lg:flex lg:w-48 lg:text-sm lg:m-auto flex flex-row w-full m-auto text-slate-100 ">
              <div className=" lg:fa-xl">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ color: "#EA9023" }}
                  className="lg:bg-slate-800 lg:p-3 lg:rounded-[10px] p-3"
                />
              </div>
              <div className="lg:ml-2 ml-2">
                <p className="lg:text-slate-500">WHATSAPP</p>
                <p>0342-4429893</p>
              </div>
            </div>
            <br />
            <div className="lg:flex lg:w-48 lg:text-sm lg:m-auto flex flex-row w-full m-auto text-slate-100 ">
              <div className=" lg:fa-xl">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#EA9023" }}
                  className="lg:bg-slate-800 lg:p-3 lg:rounded-[10px] p-3"
                />
              </div>
              <div className="lg:ml-2 ml-2">
                <p className="lg:text-slate-500">LOCATION</p>
                <p>Lahore, Pakistan</p>
              </div>
            </div>
            <div className="lg:w-20 lg:text-center lg:m-auto lg:flex lg:mt-5 text-slate-100 w-40 m-auto">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="lg:basis-1/3 lg:p-0 p-4"
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="lg:basis-1/3 lg:p-0 p-4"
              />
              <FontAwesomeIcon
                icon={faGithub}
                className="lg:basis-1/3 lg:p-0 p-4"
              />
            </div>
            <div className="lg:w-48 lg:m-auto lg:text-center lg:mt-5 lg:mb-5 lg:text-[#EA9023] hidden lg:block">
              <h4 className="mr-5">All Reserved | HIMAYAT </h4>
            </div>
          </div>
        )}
      </div>
      <div className="lg:rounded-[20px] rounded-[20px] lg:border lg:text-gray-100 text-gray-100 lg:w-3/4 w-auto lg:mb-10 mb-10">
        <div className="lg:static w-full fixed bottom-0">
          <MainNav />
        </div>
        <div className="lg:ml-8 lg:mr-8 lg:select-none select-none border lg:border-0 rounded-[10px] ml-10 mr-10 pl-5 pr-5 h-full mt-5">
          <p className="lg:text-3xl lg:font-bold lg:mt-16 text-3xl font-bold mt-5">
            Skills
          </p>
          <hr className="lg:w-12 w-12 lg:rounded rounded lg:border-4 border-2 lg:font-extrabold font-extrabold lg:mt-5 mt-5 lg:mb-5 mb-5 lg:border-[#EA9023] border-[#EA9023]" />
          {/* <p className="lg:mb-10 ">
              I'm a proactive and detail-oriented Frontend Developer with a
              strong foundation in React.js, combined with expertise in HTML,
              CSS, JavaScript, and modern styling frameworks like Tailwind CSS.
              With hands-on experience in building and optimizing dynamic,
              interactive user interfaces, I leverage React Redux for state
              management and React Router for seamless navigation, ensuring
              smooth and responsive user experiences. <br />
              <br /> I’m passionate about crafting efficient and scalable
              applications that not only meet functional requirements but also
              enhance usability and visual appeal. My approach focuses on clean,
              maintainable code, ensuring flexibility for future updates and
              features. I’m also dedicated to staying up-to-date with the latest
              web technologies, libraries, and frameworks, continuously
              expanding my knowledge to deliver top-notch, cutting-edge
              solutions. <br />
              <br /> Whether collaborating with cross-functional teams or
              tackling individual projects, I bring a mix of technical
              expertise, creativity, and problem-solving skills to each task. I
              strive to make meaningful contributions to any project, pushing
              myself to improve the user experience, and adapt designs with
              precision and attention to detail.
            </p> */}
          {/* <p className="lg:text-2xl lg:font-bold">My Top Skills</p> */}
          <div className="lg:flex flex flex-wrap lg:flex-wrap  lg:mb-10 mt-5 lg:mt-5 mb-10">
            {/* <div>
                <div className="lg:w-52 lg:h-40 lg:ml-7 lg:mb-5 lg:mt-5 lg:mr-3 lg:flex lg:justify-center lg:items-center lg:rounded-[10px] lg:bg-slate-800">
                  <FontAwesomeIcon
                    icon={faReact}
                    alt="Notfound"
                    className="lg:w-32 lg:h-32 lg:rounded-full lg:m-auto"
                  />
                </div>
                <p className="lg:w-52 lg:ml-7 lg:m-auto lg:text-center">
                  React JS
                </p>
              </div> */}
            <div>
              <div className="lg:w-52 w-52 lg:h-40 h-40 lg:ml-7 ml-10 mb-5 lg:mb-5 lg:mt-5 lg:mr-3 mt-5 mr-3 flex lg:flex lg:justify-center lg:items-center justify-center items-center lg:rounded-[10px] rounded-[10px] lg:bg-slate-800 bg-slate-800">
                <FontAwesomeIcon
                  icon={faReact}
                  alt="Notfound"
                  className="lg:w-32 w-32 h-32 founded-full m-auto lg:h-32 lg:rounded-full lg:m-auto"
                />
              </div>
              <p className="lg:w-52 lg:h-10 h-10 w-40 ml-7 m-auto text-center lg:ml-7 lg:m-auto lg:text-center">
                React JS
              </p>
            </div>
            <div>
              <div className="lg:w-52 w-52 lg:h-40 h-40 lg:ml-7 ml-10 mb-5 lg:mb-5 lg:mt-5 lg:mr-3 mt-5 mr-3 flex lg:flex lg:justify-center lg:items-center justify-center items-center lg:rounded-[10px] rounded-[10px] lg:bg-slate-800 bg-slate-800">
                <FontAwesomeIcon
                  icon={faJs}
                  alt="Notfound"
                  className="lg:w-32 w-32 h-32 founded-full m-auto lg:h-32 lg:rounded-full lg:m-auto"
                />
              </div>
              <p className="lg:w-52 lg:h-10 h-10 w-40 ml-7 m-auto text-center lg:ml-7 lg:m-auto lg:text-center">
                JavaScript
              </p>
            </div>
            {/* <div>
                <div className="lg:w-52 lg:h-40 lg:ml-7 lg:mb-5 lg:mt-5 lg:mr-3 lg:flex lg:justify-center lg:items-center lg:rounded-[10px] lg:bg-slate-800">
                  <FontAwesomeIcon
                    icon={faJs}
                    alt="Notfound"
                    className="lg:w-32 lg:h-32 lg:rounded-full lg:m-auto"
                  />
                </div>
                <p className="lg:w-52 lg:ml-7 lg:m-auto lg:text-center">
                  JavaScript
                </p>
              </div> */}
            <div>
              <div className="lg:w-52 w-52 lg:h-40 h-40 lg:ml-7 ml-10 mb-5 lg:mb-5 lg:mt-5 lg:mr-3 mt-5 mr-3 flex lg:flex lg:justify-center lg:items-center justify-center items-center lg:rounded-[10px] rounded-[10px] lg:bg-slate-800 bg-slate-800">
                <RiTailwindCssFill
                  alt="Notfound"
                  className="lg:w-32 w-32 h-32 founded-full m-auto lg:h-32 lg:rounded-full lg:m-auto"
                />
              </div>
              <p className="lg:w-52 lg:h-10 h-10 w-40 ml-7 m-auto text-center lg:ml-7 lg:m-auto lg:text-center">
                Tailwind
              </p>
            </div>
            {/* <div>
                <div className="lg:w-52 lg:h-40 lg:ml-7 lg:mb-5 lg:mt-5 lg:mr-3 lg:flex lg:justify-center lg:items-center lg:rounded-[10px] lg:bg-slate-800">
                  <RiTailwindCssFill
                    alt="Notfound"
                    className="lg:w-32 lg:h-32 lg:rounded-full lg:m-auto"
                  />
                </div>
                <p className="lg:w-52 lg:ml-7 lg:m-auto lg:text-center">
                  Tailwind
                </p>
              </div> */}
            <div>
              <div className="lg:w-52 w-52 lg:h-40 h-40 lg:ml-7 ml-10 mb-5 lg:mb-5 lg:mt-5 lg:mr-3 mt-5 mr-3 flex lg:flex lg:justify-center lg:items-center justify-center items-center lg:rounded-[10px] rounded-[10px] lg:bg-slate-800 bg-slate-800">
                <FontAwesomeIcon
                  icon={faHtml5}
                  alt="Notfound"
                  className="lg:w-32 w-32 h-32 founded-full m-auto lg:h-32 lg:rounded-full lg:m-auto"
                />
              </div>
              <p className="lg:w-52 lg:h-10 h-10 w-40 ml-7 m-auto text-center lg:ml-7 lg:m-auto lg:text-center">
                HTML
              </p>
            </div>
            {/* <div>
                <div className="lg:w-52 lg:h-40 lg:ml-7 lg:mb-5 lg:mt-5 lg:mr-3 lg:flex lg:justify-center lg:items-center lg:rounded-[10px] lg:bg-slate-800">
                  <FontAwesomeIcon
                    icon={faHtml5}
                    alt="Notfound"
                    className="lg:w-32 lg:h-32 lg:rounded-full lg:m-auto"
                  />
                </div>
                <p className="lg:w-52 lg:ml-7 lg:m-auto lg:text-center">HTML</p>
              </div> */}
            <div>
              <div className="lg:w-52 w-52 lg:h-40 h-40 lg:ml-7 ml-10 mb-5 lg:mb-5 lg:mt-5 lg:mr-3 mt-5 mr-3 flex lg:flex lg:justify-center lg:items-center justify-center items-center lg:rounded-[10px] rounded-[10px] lg:bg-slate-800 bg-slate-800">
                <FontAwesomeIcon
                  icon={faCss3Alt}
                  alt="Notfound"
                  className="lg:w-32 w-32 h-32 founded-full m-auto lg:h-32 lg:rounded-full lg:m-auto"
                />
              </div>
              <p className="lg:w-52 lg:h-10 h-10 w-40 ml-7 m-auto text-center lg:ml-7 lg:m-auto lg:text-center">
                CSS
              </p>
            </div>
            {/* <div>
                <div className="lg:w-52 lg:h-40 lg:ml-7 lg:mb-5 lg:mt-5 lg:mr-3 lg:flex lg:justify-center lg:items-center lg:rounded-[10px] lg:bg-slate-800">
                  <FontAwesomeIcon
                    icon={faCss3Alt}
                    alt="Notfound"
                    className="lg:w-32 lg:h-32 lg:rounded-full lg:m-auto"
                  />
                </div>
                <p className="lg:w-52 lg:ml-7 lg:m-auto lg:text-center">CSS</p>
              </div> */}
            {/* <div>
              <div className="lg:w-52 lg:h-40 lg:ml-7 lg:mb-5 lg:mt-5 lg:mr-3 lg:flex lg:justify-center lg:items-center lg:rounded-[10px] lg:bg-slate-800">
                <img
                  src={mainimg}
                  alt="Notfound"
                  className="lg:w-32 lg:h-32 lg:rounded-full lg:m-auto"
                />
              </div>
              <p className="lg:w-52 lg:ml-7 lg:m-auto lg:text-center">HTML</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
