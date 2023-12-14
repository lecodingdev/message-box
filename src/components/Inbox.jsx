import { useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import userpic from "../assets/user.svg";
import fastSupport from "../assets/fastSupport.svg";
import loading from "../assets/loading.gif";
import Message from "./Message";

export default function Inbox() {
  const [isLoading, setIsLoading] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="bg-white w-[65%] lg:w-[45%] h-[55%] md:h-[65%] absolute right-[25px] top-[177px] md:top-[205px] lg:top-[132px] tv:top-[291px] z-10">
        <div className="flex justify-between items-center border border-black m-5 px-10 rounded">
          <div>Search</div>
          <div>
            <GoSearch />
          </div>
          </div>
          <div className="flex flex-col justify-center items-center absolute top-0 bottom-0 right-0 left-0">
            <img src={loading} alt="Loading Chats..." />
            <p>Loading Chats...</p>
        </div>
      </div>
    );
  }

  if (showMessage) {
    return <Message />;
  }

  return (
    <div className="bg-white w-[65%] lg:w-[45%] h-[55%] md:h-[65%] absolute right-[25px] top-[177px] md:top-[205px] lg:top-[132px] tv:top-[291px] z-10">
      <div className="flex justify-between items-center border border-black m-5 px-10 rounded">
        <div>Search</div>
        <div>
          <GoSearch />
        </div>
      </div>
      <div className="flex gap-5 m-5 items-center border-b border-black pb-8">
        <img src={userpic} alt="" />
        <div className="flex flex-col">
          <div className="flex gap-5">
            <button onClick={handleClick} className="font-bold text-primary text-xs">
              109220-Naturalization
            </button>
            <p className="text-secondary text-xs">January 1,2021, 19:10</p>
          </div>
          <p className="text-secondary text-xs font-bold">Cameron Phillips :</p>
          <p className="text-secondary text-xs">Please check this out!</p>
        </div>
      </div>
      <div className="flex gap-5 m-5 items-center border-b border-black pb-8">
        <img src={userpic} alt="" />
        <div className="flex flex-col">
          <div className="flex gap-5">
            <button onClick={handleClick} className="font-bold text-primary text-xs w-[350px] text-left">
              Jeannette Moraima Guaman Chamba (Hutto I-589) [Hutto Follow
              Up-Brief Service]
            </button>
            <p className="text-secondary text-xs">02/06/2021 10:45</p>
          </div>
          <p className="text-secondary text-xs font-bold">Ellen :</p>
          <p className="text-secondary text-xs">Hey, please read.</p>
        </div>
      </div>
      <div className="flex gap-5 m-5 items-center border-b border-black pb-8">
        <img src={userpic} alt="" />
        <div className="flex flex-col">
          <div className="flex gap-5">
            <button onClick={handleClick} className="font-bold text-primary text-xs">
              8405-Diana SALAZAR MUNGUIA
            </button>
            <p className="text-secondary text-xs">01/06/2021 12:19</p>
          </div>
          <p className="text-secondary text-xs font-bold">Cameron Phillips :</p>
          <p className="text-secondary text-xs">
            I understand your initial concerns and thats very valid, Elizabeth.
            But you ...
          </p>
        </div>
      </div>
      <div className="flex gap-5 m-5 pl-4 items-center ">
        <img src={fastSupport} alt="" />
        <div className="flex flex-col">
          <div className="flex gap-5">
            <button onClick={handleClick} className="font-bold text-primary text-xs">FastVisa Support</button>
            <p className="text-secondary text-xs">01/06/2021 12:19</p>
          </div>
          <p className="text-secondary text-xs">
            Hey there! Welcome to your inbox.
          </p>
        </div>
      </div>
    </div>
  );
}
