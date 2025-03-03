import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="flex justify-center">
      <input type="checkbox" />
      <button 
        type="submit"
        className="px-4 py-2 bg-red-100 cursor-pointer rounded-md"
      >
        Log in
      </button>
    </div>
  );
};

export default Footer;