const ClassInfo = () => {
  return (
    <section className="mt-6 px-2 flex flex-col gap-5">
      <div className="name flex">
        <h2 className="text-md font-bold">Part Adviser:</h2>
        <p className="text-lg ml-2">Dr. O. Alao</p>
      </div>
      <div className="name flex">
        <h2 className="text-md font-bold">Class Representatives:</h2>
        <p className="text-lg ml-2">
          <a href="#">Frank, </a>
          <a href="#">Lucas</a>
        </p>
      </div>
      <div className="name flex">
        <h2 className="text-md font-bold">Other Committee members:</h2>
        <p className="text-lg ml-2">
          <a href="#">Habeeb, </a>
          <a href="#">Victoria, </a>
          <a href="#">Sam, </a>
          <a href="#">Joy, </a>
          <a href="#">Odunayo</a>
        </p>
      </div>
      <h4 className="font-bold text-xl underline text-center mt-10">Class Awards</h4>
      <div className="name flex">
        <h2 className="text-md font-bold">Best Looking [Male]:</h2>
        <p className="text-lg ml-2">
          <a href="#">Almond</a>
        </p>
      </div>
      <div className="name flex">
        <h2 className="text-md font-bold">Best Looking [Female]:</h2>
        <p className="text-lg ml-2">
          <a href="#">Kamilat</a>
        </p>
      </div>
      <div className="name flex">
        <h2 className="text-md font-bold">Most Generous [Male]:</h2>
        <p className="text-lg ml-2">
          <a href="#">Tijesunimi</a>
        </p>
      </div>
      <div className="name flex">
        <h2 className="text-md font-bold">Most Generous [Female]:</h2>
        <p className="text-lg ml-2">
          <a href="#">xxxxx</a>
        </p>
      </div>
    </section>
  );
};

export default ClassInfo;
