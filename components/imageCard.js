import Image from "next/image";

export default function ImageCard({ title, content, content1, src }) {
  return (
    <div className="flex flex-col items-center w-[260px] h-[250px] py-8 bg-[#202231] m-2 rounded-lg">
      <div>
        <Image src={src} alt="wallet" width={120} height={120} />
      </div>
      <h1 className="text-white font-['NexaTextBlack'] text-center text-3xl">
        {title}
      </h1>
      <h1 className="text-white font-['NexaTextLight'] text-sm mt-2 text-center">
        {content}
      </h1>
      <h1 className="text-white font-['NexaTextLight'] text-sm text-center">
        {content1}
      </h1>
    </div>
  );
}
