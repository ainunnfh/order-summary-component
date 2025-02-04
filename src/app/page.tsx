export default function Home() {
  return (
    <div className="absolute flex flex-col items-center h-screen bg-[#e0e8ff] md:w-full">
      <div className="p-6 m-auto w-fit">
        <div>
          <img
            src="illustration-hero.svg"
            alt=""
            className="rounded-t-md object-cover"
          />
        </div>
        <div className="bg-white rounded-b-md flex flex-col items-center gap-5 py-4">
          <div className="text-center">
            <h1 className="font-bold text-2xl">Order Summary</h1>
            <p className="mt-5">
              You can now listen to millions of <br />
              songs, audiobooks, and podcasts on <br />
              any device anywhere you like!
            </p>
          </div>

          <div className="flex bg-[#f5f7ff] rounded-md py-1.5 gap-4 items-center justify-center w-3/4">
            <img src="icon-music.svg" alt="" />
            <div>
              <div className="font-bold">Annual Plan</div>
              <div>$59.99/year</div>
            </div>
            <div className="text-sm hover:text-[#3829e0] hover:cursor-pointer hover:underline">
              Change
            </div>
          </div>

          <div className="flex flex-col gap-4 w-3/4">
            <button className="bg-[#3829e0] py-2.5  cursor-pointer text-white font-bold rounded-lg hover:shadow-lg hover:shadow-[#3829e0]/50 hover:bg-[#3829e0]">
              Proceed to Payment
            </button>
            <button className="py-2 rounded-lg font-bold text-gray-600 hover:text-black">
              Cancel Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
