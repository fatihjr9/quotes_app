import PropTypes from "prop-types";

function Cards({quote, author}) {
  return (
    <div className="flex flex-col gap-y-2 border p-2.5 rounded-md">
        <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-20 rounded-md"></div>
        <div className="flex flex-col">
            <h5 className="text-lg font-medium truncate">{quote}</h5>
            <p className="text-sm text-gray-400 font-normal">{author}</p>
        </div>
        <hr />
        <div className="my-2 grid grid-cols-2 gap-2">
            <button className="bg-orange-400 rounded-md py-1 text-white">Edit</button>
            <button className="bg-red-400 rounded-md py-1 text-white">Delete</button>
        </div>
    </div>
  )
}
Cards.propTypes = {
    quote: PropTypes.string,
    author: PropTypes.string,
};
export default Cards