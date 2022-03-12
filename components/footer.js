import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#161522] py-20 flex justify-center flex-col sm:flex-row">
      <div className="flex flex-col m-6">
        <div className="flex items-center">
          <div>
            <Image
              src="/assets/logo.png"
              alt="Vercel Logo"
              width={40}
              height={40}
            />
          </div>
          <h1 className="mx-2 text-white">ChampagneSwap</h1>
        </div>
        <h1 className="text-white font-['NexaTextLight'] mt-3">
          ChampagneSwap is the home of DeFi.
        </h1>
        <h1 className="text-white font-['NexaTextLight']">
          Our community is the foremost
        </h1>
        <h1 className="text-white font-['NexaTextLight']">
          technologically beneficial platform for the
        </h1>
        <h1 className="text-white font-['NexaTextLight']">future of DeFi!</h1>
        <h1 className="text-white font-['NexaTextLight']">Join us!</h1>
        <div className="mt-4 flex">
          <a href="https://github.com/champagneswap/"><div className="flex items-center">
            <Image
              src="/assets/Vector4.png"
              alt="Vector4"
              width={24}
              height={24}
            />
          </div></a>
          <a href="https://medium.com/@champagneswap"> <div className="flex items-center ml-6">
            <Image
              src="/assets/Vector1.png"
              alt="Vector(1)"
              width={20}
              height={20}
            />
          </div></a>
          <a href="https://github.com/champagneswap/">  <div className="flex items-center ml-6">
            <Image
              src="/assets/Vector2.png"
              alt="Vector(1)"
              width={20}
              height={20}
            />
          </div></a>
        </div>
      </div>
      <div className="flex flex-col m-6">
        <h1 className="text-white mt-2">PRODUCTS</h1>
        <a href="https://champagne.network/pool"><h1 className="text-white font-['NexaTextLight'] mt-4">
          ChampagneSwap AMM
        </h1></a>
        <a href="https://champagne.network/lend"><h1 className="text-white font-['NexaTextLight'] mt-4">Cellar Dapps</h1></a>
        <a href="https://champagne.network/lend"> <h1 className="text-white font-['NexaTextLight'] mt-4">
          Grape Lending
        </h1></a>
        <h1 className="text-white font-['NexaTextLight'] mt-4">
          API(Coming Soon)
        </h1>
      </div>
      <div className="flex flex-col m-6">
        <h1 className="text-white mt-2">SUPPORT</h1>
        <a href="https://docs.champagneswap.com"> <h1 className="text-white font-['NexaTextLight'] mt-4">Tutorials</h1></a>
        <a href="https://docs.champagneswap.com"> <h1 className="text-white font-['NexaTextLight'] mt-4">
          Documentation
        </h1></a>
        <a href="https://discord.gg/BUPB2xKYmn/"> <h1 className="text-white font-['NexaTextLight'] mt-4">Discord</h1></a>
      </div>
      <div className="flex flex-col m-6">
        <h1 className="text-white mt-2">PROTOCOL</h1>
        <h1 className="text-white font-['NexaTextLight'] mt-4">Vote (Coming Soon)</h1>
        <a href="https://champagne.network/add/ETH">  <h1 className="text-white font-['NexaTextLight'] mt-4">
          Create a Pair
        </h1></a>
      </div>
    </footer>
  );
}
