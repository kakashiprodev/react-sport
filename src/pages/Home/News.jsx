import React from "react";

const News = () => {
  const cards = [
    {
      username: "Empires Limited",
      date: "8/14/2024",
      message:
        "Hey! Want to try your luck? Just click to flip the coin. I heard EL did a clean job on the new site.",
      imageUrl: "/logo/core.png",
    },
    {
      username: "mjolnir",
      date: "8/14/2024",
      message:
        "Hey! Want to try your luck? Just click to flip the coin. I heard EL did a clean job on the new site.",
      imageUrl: "/logo/core.png",
    },
    {
      username: "imperial",
      date: "8/14/2024",
      message:
        "Hey! Want to try your luck? Just click to flip the coin. I heard EL did a clean job on the new site.",
      imageUrl: "/logo/core.png",
    },
    {
      username: "equity",
      date: "8/14/2024",
      message:
        "Hey! Want to try your luck? Just click to flip the coin. I heard EL did a clean job on the new site.",
      imageUrl: "/logo/core.png",
    },
    {
      username: "Empires Limited",
      date: "8/14/2024",
      message:
        "Hey! Want to try your luck? Just click to flip the coin. I heard EL did a clean job on the new site.",
      imageUrl: "/logo/core.png",
    },
    {
      username: "pnc",
      date: "8/14/2024",
      message:
        "Hey! Want to try your luck? Just click to flip the coin. I heard EL did a clean job on the new site.",
      imageUrl: "/logo/core.png",
    },
    {
      username: "sal",
      date: "8/14/2024",
      message:
        "Hey! Want to try your luck? Just click to flip the coin. I heard EL did a clean job on the new site.",
      imageUrl: "/logo/core.png",
    },
  ];

  return (
    <div className="flex justify-start">
      <div className="w-1/2  bg-[#21201f] shadow-lg rounded-xl">
        <div className="p-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#21201f] rounded-lg p-4 mb-4 shadow-md flex items-start border"
            >
              <img
                src={card.imageUrl}
                alt={card.username}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-white font-semibold">{card.username}</h4>
                  <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                    {card.date}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{card.message}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4">
          <div className="bg-[#21201f] rounded-full p-4 flex items-center justify-between shadow-md">
            <input
              type="text"
              placeholder="Send a message"
              className="bg-transparent outline-none text-white w-full"
            />
            <button className="text-white ml-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10l9-6 9 6-9 6-9-6z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 10l-9 6-9-6"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 10l-9-6-9 6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
