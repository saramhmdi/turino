import { BiEditAlt } from "react-icons/bi";

function ShowInformation({
  title,
  data,
  containerClass = "",
  titleClass = "",
  showAdd,
  dataClass = "",
  clickHandler,
}) {
  return (
    <>
      <div
        className={`relative flex flex-col p-4 rounded-lg border border-gray-200 ${containerClass}`}
      >
        <button
          onClick={clickHandler}
          className="absolute top-2 left-4 flex text-complementary"
        >
          <BiEditAlt className=" w-5 h-5 " />
          {showAdd ? "افزودن" : "ویرایش اطلاعات"}
        </button>
        <p className={`text-lg font-semibold mb-4 `}>{title}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {data.map((item, index) => (
            <div key={index} className="flex">
              <span className={`text-sm text-gray-500 `}>{item.label}:</span>
              <span className="text-base font-medium text-gray-800 ml-2">
                {item.data}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShowInformation;
