import { FaArrowLeft } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from 'react';
import Inbox from './Inbox';

export default function Message() {
    const [showInbox, setShowInbox] = useState(false);

  const handleBackToInbox = () => {
    setShowInbox(true);
  };

  if (showInbox) {
    return <Inbox />; // Render the Inbox component when showInbox is true
  }
  return (
    <div className="bg-white w-[65%] lg:w-[45%] h-[55%] md:h-[65%] absolute right-[25px] top-[177px] md:top-[205px] lg:top-[132px] tv:top-[291px] z-10">
        <div className="flex justify-between items-center border-b border-black m-5 pb-10">
            <div className="flex gap-4">
                <button onClick={handleBackToInbox}><FaArrowLeft size={20} color="gray" /></button>
                <div className="flex flex-col">
                <p className="text-primary">I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]</p>
                <p className="text-secondary text-xs">3 Participants</p>
                </div>
            </div>
            <button onClick={handleBackToInbox}><ImCross color="gray" /></button>
        </div>
    </div>
  )
}
