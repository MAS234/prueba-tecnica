import RegisterC from "../components/register/RegisterC";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <section className="bg-[#48D390] w-full h-[100vh]">
      <div className="w-8 p-7">
        <Link to={"/"}>
          <BsFillArrowLeftCircleFill className="text-4xl duration-200  text-white hover:text-[#2ca76c]" />
        </Link>
      </div>
      <div className="flex justify-center items-center ">
        <RegisterC />
      </div>
    </section>
  );
}
