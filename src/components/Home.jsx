import { GoPeople } from "react-icons/go";
import { LiaTransgenderSolid } from "react-icons/lia";
import { GiNigeria } from "react-icons/gi";
import { IoCalendarNumberOutline } from "react-icons/io5";
import "./home.css";


  const GlanceItem = ({ icon, title, description }) => {
    return (
      <div className="flex flex-col justify-center gap-2 border rounded-lg py-7 px-5 w-[13rem] h-[13rem] shadow-md hover:border-blue-300 transition-all duration-500 glance-item">
        {icon}
        <h3 className="text-lg font-bold mb-[-4px]">{title}</h3>
        <p className="text-gray-500 text-sm font-[400]">{description}</p>
      </div>
    );
  };

    import PropTypes from 'prop-types';

    GlanceItem.propTypes = {
      icon: PropTypes.element.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    };



  const Main = () => {
    return (
      <>
        <main className="wrapper px-[6rem] py-[3rem] mx-auto">
          <div className="main-content">
            <h1 className="text-5xl font-[900] mt-[8rem] text-[#ffffff]">
              Welcome to the <br /> Imperial Quantifiers. <br /> Class of 2024
            </h1>
            <p className="text-white text-xl max-w-md mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              consequuntur? Impedit, in.
            </p>
            <button className=" z-10 bg-blue-600 py-3 px-4 rounded-lg mt-10 mr-4 text-white font-bold hover:text-[#213547]">
              See students
            </button>
            <button className=" z-10 outline outline-2 py-3 px-4 rounded-lg mt-10 text-white font-bold hover:text-[#213547]">
              See media
            </button>
          </div>
        </main>
        <div className="container mx-auto w-full mt-10 py-[3rem]">
          <h2 className="text-[2.2rem] font-bold text-center mx-auto mb-14">
            The Imperials at a glance
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 hover:border-blue-300 transition-all duration-500 glance-items cursor-default">
            <GlanceItem
              icon={<GoPeople className="text-[1.5rem] mb-1 stroke-1" />}
              title="Population"
              description="Boast a Population of over 125 students"
            />
            <GlanceItem
              icon={
                <LiaTransgenderSolid className="text-[1.5rem] mb-1 stroke-1" />
              }
              title="Inclusive Background"
              description="36% Women, 64% Men"
            />
            <GlanceItem
              icon={<GiNigeria className="text-[1.5rem] mb-1 stroke-1" />}
              title="National Representation"
              description="students from over 23 states"
            />
            <GlanceItem
              icon={
                <IoCalendarNumberOutline className="text-[1.5rem] mb-1 stroke-2" />
              }
              title="Age Range: 22-45"
              description="Lorem ipsum dolor sit ametrum atque odit?"
            />
          </div>
        </div>
      </>
    );
  };


export default Main;
