import NavTab from "./NavTab";

const Main = () => {
  return (
    <main className="container-xl relative px-[6rem] py-[3rem] mx-auto">
      <div id="class-info" className="mt-8 flex items-center justify-start gap-[3rem]">
        <div className="logo">
          <div className="bg-blue-500 w-[9rem] h-[9rem] rounded-full flex items-center justify-center">
            <h1 className="text-5xl font-bold">IM</h1>
          </div>
        </div>
        <div className="class-info flex flex-col gap-2">
          <div className="name flex">
            <h2 className="text-lg font-bold">Name:</h2>
            <p className="text-xl ml-2">Imperial Quantifiers</p>
          </div>
          <div className="population flex">
            <h2 className="text-lg font-bold">Population:</h2>
            <p className="text-xl ml-2">121</p>
          </div>
          <div className="level flex">
            <h2 className="text-lg font-bold">Level of Study:</h2>
            <p className="text-xl ml-2">500 lvl</p>
          </div>
        </div>
      </div>
      <div id="tabs" className="absolute inset-0 mt-[16rem] w-full h-12">
        <NavTab />
      </div>
    </main>
  );
};

export default Main;
