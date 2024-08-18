import { matches } from "../../utils/Matches";

const Ticker = () => {
  return (
    <div className="fixed mx-auto justify-center z-30 bg-[#21201F] p-6 w-full rounded-xl">
      <div className="flex rounded-lg shadow-md items-center bg-[#1c1c1c]">
        <div className="w-20 bg-[#1c1c1c] text-white rounded-lg p-1 m-2 text-center border">
          <img src="/logo/core.png" alt="ITHL" />
        </div>
        <div className="w-20 bg-[#1c1c1c] text-white rounded-lg p-1 m-2 text-center border">
          <img src="/logo/rammer.png" alt="ITHL" />
        </div>
        <div className="w-20 bg-[#1c1c1c] text-white rounded-lg p-1 m-2 text-center border">
          <img src="/logo/sweat.png" alt="ITHL" />
        </div>
        <div className="w-20 bg-[#1c1c1c] text-white rounded-lg p-1 m-2 text-center border">
          <img src="/logo/elite.png" alt="ITHL" />
        </div>
      </div>
    </div>
  );
};

export default Ticker;
