import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md"

export default function Task() {
  const [isListVisible, setIsListVisible] = useState(false);

  const toggleList = () => {
    setIsListVisible(current => !current);
  };

  return (
    <div className="bg-white w-[65%] lg:w-[45%] h-[55%] md:h-[65%] absolute right-[25px] top-[177px] md:top-[205px] lg:top-[132px] tv:top-[291px] z-10">
      <div className="flex justify-between m-5 px-2">
        <div>
          <button className="flex items-center gap-2 py-2 px-4 ml-16 mb-2 bg-white border border-black rounded" onClick={toggleList}>
            My Tasks <MdOutlineKeyboardArrowDown />
          </button>
          <ul className={`${isListVisible ? 'block' : 'hidden'}`}>
          <li className="border border-black p-2 rounded w-[250px]">Personal Errands</li>
          <li className="border border-black p-2 rounded w-[250px]">Urgent To-Do</li>
          </ul>
        </div>

        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded absolute right-6">
          New Task
        </button>
      </div>
      <div></div>
    </div>
  );
}
