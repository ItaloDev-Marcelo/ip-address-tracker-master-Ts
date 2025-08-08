import React from "react";
import { IoIosArrowForward } from "react-icons/io";

interface FormProps {
    submitIp: (e: React.FormEvent<HTMLFormElement>) =>void,
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}


const Form = ({submitIp,handleInput}:FormProps) => {
  return (
    <form
      onSubmit={submitIp}
      className="w-[100%] md:w-[50%] lg:w-[35%] h-[45px] pl-4 flex bg-white rounded-[10px]"
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
