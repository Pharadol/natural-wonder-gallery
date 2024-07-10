function Card(props) {
  const { InfoEachCard, onImgClick } = props;

  return (
    <div className="border-2 shadow-md bg-white">
      <img
        src={InfoEachCard.url}
        alt=""
        className="w-full h-5/6 hover:opacity-70 cursor-pointer transition duration-300"
        onClick={() => {
          onImgClick(InfoEachCard);
        }}
      />
      <h3 className="text-sm font-bold pt-2 pl-4">{InfoEachCard.title}</h3>
    </div>
  );
}
export default Card;
