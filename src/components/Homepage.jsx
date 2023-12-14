import { useState } from 'react';
import { GoSearch } from "react-icons/go";
import menu from "../assets/menu.svg";
import task from "../assets/task.svg";
import inbox from "../assets/inbox.svg";
import activeTask from "../assets/active-task.svg";
import activeInbox from "../assets/active-inbox.svg";
import eclipse from "../assets/eclipse.svg";
import Inbox from './Inbox';
import Task from './Task'; // Import your Task.jsx here

export default function Homepage() {
  const [showButtons, setShowButtons] = useState(false);
  const [isInboxActive, setIsInboxActive] = useState(false);
  const [isTaskActive, setIsTaskActive] = useState(false);

  const handleMenuClick = () => {
    setShowButtons(current => !current);
    setIsInboxActive(false);
    setIsTaskActive(false);
  };

  const handleInboxClick = () => {
    setIsInboxActive(current => !current);
    setIsTaskActive(false);
  };

  const handleTaskClick = () => {
    setIsTaskActive(current => !current);
    setIsInboxActive(false);
  };

  const isAnyButtonActive = isInboxActive || isTaskActive;

  return (
    <div className="w-full h-screen bg-[#333333] flex">
      <div className="w-[15%] h-screen border-r-2 border-white"></div>
      <div className="w-[85%] flex flex-col">
        <div className="w-full h-8 bg-[#4F4F4F] px-4 py-2">
          <GoSearch color="white" />
        </div>
        <div className="flex-grow">
          {isInboxActive && <Inbox />}
          {isTaskActive && <Task />}
        </div>
        <div className="absolute bottom-5 right-5 flex gap-4 items-center">
          {showButtons && (
            <>
                  {!isTaskActive && (
                    <button className="pb-5" onClick={handleTaskClick}>
                      <img src={task} alt="task" />
                    </button>
                  )}
              {!isInboxActive && (
                <button className='pb-5' onClick={handleInboxClick}>
                  <img src={inbox} alt="inbox" />
                </button>
              )}
              {isInboxActive && (
                <button className='pb-2 z-50' onClick={handleInboxClick}>
                  <img src={activeInbox} alt="inbox" />
                  <img src={eclipse} alt="eclipse" className="absolute bottom-[27px] -left-[-70px] -z-10" />
                </button>
              )}
              {isTaskActive && (
                <button className="z-50" onClick={handleTaskClick}>
                  <img src={activeTask} alt="task" />
                  <img src={eclipse} alt="eclipse" className="absolute bottom-[27px] -left-[-74px] -z-10" />
                </button>
              )}
            </>
          )}
          {!isAnyButtonActive && (
            <button onClick={handleMenuClick}>
              <img src={menu} alt="menu" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
