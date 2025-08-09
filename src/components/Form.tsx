import { IoIosArrowForward } from "react-icons/io";
import type { Form } from "./types/Form";

const Form = ({submitIp,handleInput}:Form) => {
  return (
    <form
      onSubmit={submitIp}
      className="w-[100%] mt-[-2em] md:w-[50%] lg:w-[35%] h-[45px] pl-4 flex bg-white rounded-[10px]"
    >
      <input
        type="text"
        name="search"
        placeholder="Search for any IP addressr domain"
        onChange={handleInput}
        className="w-[90%] h-full"
      />
      <button
        type="submit"
        className="bg-black text-white w-[10%] rounded-r-[10px] pl-2"
      >
        <IoIosArrowForward size={27} />
      </button>
    </form>
  );
};

export default Form;
