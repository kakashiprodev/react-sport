import React from "react";

const ChatBox = () => {
  const messages = [
    { id: 1, user: "akshara", message: "keep it up" },
    {
      id: 2,
      user: "Artitkongchana",
      message:
        "Sony never knew. Plus I'd bet on all bonus games and they could pay",
    },
    {
      id: 3,
      user: "Seminc11",
      message: "Did over 500 spins and no bonus.. swear I get Goodmed 😢",
    },
    { id: 4, user: "sixunselffish", message: "is casinorandom on twitch guys" },
    {
      id: 5,
      user: "shah1122",
      message: "Nah no worries join im your sugar daddy remember that",
    },
    { id: 6, user: "xXParkerXx", message: "oh shit nice marc" },
    { id: 7, user: "Jezusek1996", message: "Boring" },
    { id: 8, user: "Jezusek1996", message: "Know" },
    { id: 9, user: "6645ib0si", message: "i have no money i lost" },
  ];

  return (
    <div className=" mt-64 m-10 w-2/5 text-white  p-4 shadow-xl  rounded-2xl">
      <div className="flex items-center justify-between bg-[#4a8dcb9f] p-2 rounded-full w-full max-w-sm mx-auto my-3">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <div className="w-8 h-8 bg-[#1c1b1b] rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                />
              </svg>
            </div>
          </div>
          <span className="text-sm text-gray-300">54 online</span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="w-6 h-6 bg-[#1c1b1b] rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="overflow-y-auto h-full space-y-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="flex items-start space-x-2 border-b p-2"
          >
            <div className="flex-shrink-0 w-8 h-8 bg-[#4a8dcb] rounded-full mx-1 flex items-center justify-center">
              <span className="text-sm font-bold">
                {msg.user.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <div className="text-sm font-semibold">{msg.user}</div>
              <div className="text-sm">{msg.message}</div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Please login to use the chat!"
          className="w-full p-2 text-sm text-white rounded-lg bg-[#4a8dcb2d] border outline-none"
        />
      </div>
    </div>
  );
};

export default ChatBox;
