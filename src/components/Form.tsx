import { IoIosArrowForward } from "react-icons/io";
import type { FormType } from "./types/Form";

const Form = ({submitIp,handleInput}:FormType) => {
  return (
    <form
      onSubmit={submitIp}
      className="w-[100%] mt-[-2em] md:w-[50%] lg:w-[35%] h-[50px] pl-4 flex bg-white rounded-[10px]"
    >
      <input
        type="text"
        name="search"
        placeholder="Search for any IP addressr domain"
        onChange={handleInput}
        className="w-[85%] h-full cursor-pointer"
      />
      <button
        type="submit"
        className="bg-gray-950 hover:bg-gray-400 text-white w-[15%]
         rounded-r-[10px] pl-3 tb:pl-2 lg:pl-5 cursor-pointer"
      >
        <IoIosArrowForward size={27} />
      </button>
    </form>
  );
};

export default Form;
