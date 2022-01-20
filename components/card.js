export default function Card({ title, content, btn, link  }) {
  return (
    <div className="flex w-[300px] h-[250px] relative m-2 px-8 pt-8 items-center flex-col bg-[#202231] rounded-lg">
      <h1 className="text-white font-['NexaTextBold'] text-center">{title}</h1>
      <h1 className="text-white text-sm mt-2 text-center font-['NexaTextLight']">
        {content}
      </h1>
      <a href={link} className="bg-[#10D281] absolute bottom-0 mb-2 mt-4 py-2 px-3 rounded-lg text-black font-['NexaTextBlack'] mx-2">
        {btn}
      </a>
    </div>
  );
}
