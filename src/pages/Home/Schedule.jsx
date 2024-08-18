import React from "react";

const Schedule = () => {
  const matchData = [
    {
      date: "Friday, July 21",
      matches: [
        {
          time: "10:10 AM",
          team1Logo: "/logo/elite.png",
          team1color: "#0523c5",
          team2Logo: "/logo/rammer.png",
          team2color: "#f67516",
          position: "LTP",
        },
        {
          time: "12:30 PM",
          team1Logo: "/logo/core.png",
          team1color: "#a1681d",
          team2Logo: "/logo/elite.png",
          team2color: "#0523c5",
          position: "D",
        },
        {
          time: "3:45 PM",
          team1Logo: "/logo/elite.png",
          team1color: "#0523c5",
          team2Logo: "/logo/sweat.png",
          team2color: "#b0080e",
          position: "R",
        },
      ],
    },
    {
      date: "Friday, July 22",
      matches: [
        {
          time: "3:45 PM",
          team1Logo: "/logo/rammer.png",
          team1color: "#f67516",
          team2Logo: "/logo/core.png",
          team2color: "#a1681d",
          position: "R",
        },
      ],
    },
    {
      date: "Friday, July 24",
      matches: [
        {
          time: "10:10 AM",
          team1Logo: "/logo/sweat.png",
          team1color: "#b0080e",
          team2Logo: "/logo/rammer.png",
          team2color: "#f67516",
          position: "LTP",
        },
        {
          time: "12:30 PM",
          team1Logo: "/logo/sweat.png",
          team1color: "#b0080e",
          team2Logo: "/logo/core.png",
          team2color: "#a1681d",
          position: "D",
        },
        {
          time: "3:45 PM",
          team1Logo: "/logo/rammer.png",
          team1color: "#f67516",
          team2Logo: "/logo/core.png",
          team2color: "#a1681d",
          position: "R",
        },
      ],
    },
  ];

  return (
    <div className="p-5 shadow-xl bg-[#21201f2e] border border-[#2d2d2d] rounded-xl">
      {matchData.map((day, dayIndex) => (
        <div key={dayIndex} className="mb-10 text-center">
          <div className="text-white text-xl mb-4">{day.date}</div>
          <div className="w-full flex justify-center">
            <div className="w-1/2 h-[1px] bg-zinc-200 text-center"></div>
          </div>
          {day.matches.map((match, matchIndex) => (
            <div
              key={matchIndex}
              className=" opacity-50 hover:opacity-100 my-4  text-white border rounded-lg p-4 flex items-center justify-between w-full max-w-xl mx-auto"
              style={{
                background: `linear-gradient(to right, ${match.team1color}, black,black,black, ${match.team2color})`,
              }}
            >
              <div className="flex items-center space-x-10">
                <div className="w-12 h-12 opacity-60 rounded-lg border">
                  <img src={match.team1Logo} alt="Team 1 Logo" />
                </div>
                <div className="flex text-1xl py-1 px-3 bg-[#4a8dcb] rounded-lg">
                  <div className="flex items-center">
                    <p className="text-sm text-white w-16">{match.time}</p>
                  </div>
                </div>
                <div className="w-12 h-12 opacity-60 rounded-lg border">
                  <img src={match.team2Logo} alt="Team 2 Logo" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Schedule;
