import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <div className="flex flex-wrap justify-center lg:float-right lg:pr-1 lg:pt-5 pt-5 pb-5 lg:pb-5 lg:bg-slate-800 bg-slate-800 lg:rounded-bl-[20px] lg:rounded-tl-none rounded-tl-[20px] lg:rounded-tr-[20px] rounded-tr-[20px] lg:text-[1rem] text-[1rem] mt-60 lg:mt-0 lg:w-auto">
      <Link className="lg:ml-8 ml-10" to={"/"}>
        Home
      </Link>
      <Link className="lg:ml-14 ml-14" to={"/Skills"}>
        Skills
      </Link>
      <Link className="lg:ml-14 ml-14" to={"/Projects"}>
        Projects
      </Link>
      <Link className="lg:ml-14 ml-14 lg:mr-5 mr-5" to={"/Contact"}>
        Contact
      </Link>
    </div>
  );
};

export default MainNav;
