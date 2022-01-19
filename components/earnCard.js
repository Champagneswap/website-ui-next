export default function EarnCard() {
    return (
      <div className="flex flex-col items-center w-full mx-2 mt-2 md:w-[500px] py-5 bg-fuchsia-800 rounded-lg">
        <h1 className="text-5xl font-['NexaTextBlack'] text-center mt-4">Earn</h1>
        <h1 className="text-5xl font-bold text-center mt-8">
          <span className="font-['NexaTextBlack']">0.25%</span>
        </h1>
        <h1 className="font-['NexaTextBold'] text-center">Per Trade</h1>
        <button className="bg-black text-white rounded-md font-bold text-sm mt-8 mb-4 py-2 px-5">
          Add Liquidity
        </button>
      </div>
    );
  }