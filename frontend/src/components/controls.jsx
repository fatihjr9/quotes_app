import { Input } from "antd"
import { Link } from "react-router-dom"

function Controls() {
  return (
    <div>
        <div className="mx-auto flex text-center -translate-y-14 bg-white drop-shadow-sm ring-1 ring-slate-100 p-2 w-fit rounded-md">
            <Input className="p-2 w-80 border-none focus:ring-0 placeholder:text-base text-base" placeholder="Search Quote by Author"/>
            <Link to="/add-quote" className="p-2 bg-indigo-600 text-white rounded-md">Add Quote</Link>
        </div>
    </div>
  )
}

export default Controls