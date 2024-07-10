function ImagePost(props) {
  const { selected, onBgClick } = props;
  return (
    <div className="flex justify-center items-center fixed z-10 top-0 left-0 right-0 bottom-0">
      <div
        className="absolute cursor-pointer top-0 left-0 bottom-0 right-0 bg-black bg-opacity-70 flex justify-center items-center md:items-start"
        onClick={onBgClick}
      >
        <div className="h-full flex flex-col items-center justify-center px-3 md:px-0">
          <img
            src={selected.url}
            alt={selected.title}
            className="block md:w-3/5 w-full z-30 cursor-default"
            onClick={(e)=> {e.stopPropagation();}}
          />
          <h3 className="bg-black w-full mx-auto text-white text-center text-xl  z-30 bottom-0 md:w-3/5 cursor-default">
            {selected.title}
          </h3>
        </div>
      </div>
    </div>
  );
}
export default ImagePost;
