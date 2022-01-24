export default function GainCard() {
  return (
    <div className="flex flex-col items-center w-full mx-2 mt-2 md:w-[500px] py-5 bg-[#10D281] rounded-lg">
      <h1 className="text-5xl font-['NexaTextBlack'] text-center mt-4">Gain</h1>
      <h1 className="text-5xl font-bold text-center mt-8">
        <span className="font-['NexaTextBlack']">0.05%</span>
      </h1>
      <h1 className="font-['NexaTextBlack'] text-center">
        Per Trade in Cristal Coins
      </h1>
        <a href="https://champagne.network/pool">
        <button className="bg-black text-white rounded-md font-bold text-sm mt-8 mb-4 py-2 px-5">
            Launching Soon
      </button></a>
    </div>
  );
}
