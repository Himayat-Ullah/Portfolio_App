import React, { useState } from "react";
import MainNav from "./MainNav";
import mainimg from "../img/myImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import {
//   faGraduationCap,
//   faLocationDot,
//   faPhone,
// } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FaAngleDown, FaFreeCodeCamp } from "react-icons/fa";
// import MainNav from "./MainNav";
// import mainimg from "../img/my.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import { FaFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleDown,
  faAngleUp,
  faGraduationCap,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [show, setShow] = useState(false);
  const NavHandle = () => {
    setShow(!show);
  };
  // const NavHandleBack = () => {
  //   setShow(false);
  // };
  return (
    <div className="pb-20 caret-transparent lg:flex lg:flex-row lg:ml-40 lg:mr-40 lg:pt-20 pt-5">
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
            About Me
          </p>
          <hr className="lg:w-12 w-12 lg:rounded rounded lg:border-4 border-2 lg:font-extrabold font-extrabold lg:mt-5 mt-5 lg:mb-5 mb-5 lg:border-[#EA9023] border-[#EA9023]" />
          <section className=" h-[70%] dark:bg-gray-900 rounded-[10px]">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <form className="caret-white">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-slate-100 dark:bg-slate-800"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-slate-800 border border-gray-300 text-slate-100 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Email"
                    autoComplete="off"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-slate-100 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="block p-3 w-full text-sm text-slate-100 bg-slate-800 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-slate-100 dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-slate-100 bg-slate-800 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-slate-800 mt-8  sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Send message
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
