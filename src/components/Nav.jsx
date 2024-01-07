import { IoSearch } from "react-icons/io5";

const nav = () => {
  return (
    <nav className="flex justify-between items-center px-[6rem] py-[20px] shadow-md h-[75px]">
      <a href="./index.html">
        <h1 className="font-bold text-xl">Imperial Quantifiers</h1>
      </a>
      <div id="nav-util" className="flex items-center gap-x-10">
        <form className="relative" action="">
          <label className="absolute left-[-9999px]" htmlFor="search">
            Search
          </label>
          <input
            className=" border rounded-2xl px-3 pl-9 py-1 w-64"
            type="text"
            id="search"
            placeholder="Search student..."
          />
          <IoSearch className="absolute left-3 top-2 text-gray-400" />
        </form>
      </div>
    </nav>
  );
};

export default nav;
