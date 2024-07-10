function ImagePost(props) {
  const { selected, onBgClick } = props;
  return (
    <div className="flex justify-center items-center fixed z-10 top-0 left-0 right-0 bottom-0">
      <div
        className="absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-70 flex justify-center items-center md:items-start "
        onClick={onBgClick}
      >
        <div className="relative flex justify-center px-3 md:px-0">
          <img
            src={selected.url}
            alt=""
            className="block mx-auto py-5 md:w-3/5 w-full z-20"
          />
          <h3 className="md:bg-black text-white text-center text-xl  z-30 absolute bottom-0 md:w-3/5 mr-3 ml-3 md:mx-0">
            {selected.title}
          </h3>
        </div>
      </div>
    </div>
  );
}
export default ImagePost;
