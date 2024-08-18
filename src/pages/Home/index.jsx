import ChatBox from "../../components/Layout/ChatBox";
import News from "./News";
import NewsSlide from "./NewsSlide";
import Schedule from "./Schedule";

const Home = () => {
  return (
    <div className="flex pt-64 px-5  w-full justify-center gap-5">
      {/* <Schedule /> */}
      <NewsSlide />
      {/* <News /> */}
    </div>
    
  );
};

export default Home;
