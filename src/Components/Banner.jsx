const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[40vh] gap-10">
      <h2 className="xs:text-sm sm:text-lg md:text-3xl lg:text-5xl font-semibold">
        I Grow By Helping People In Need
      </h2>
      <div className="flex flex-center join" id="coupon_field">
        <input
          className=" w-11/12 input input-bordered rounded-md join-item"
          id="get_pass"
          placeholder="Search here...."
        />
        <button
          className="w-2/6 btn join-item rounded-r-md bg-primary_clr text-neutral-100"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
