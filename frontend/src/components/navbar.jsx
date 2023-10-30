
function Navbar() {
  return (
    <div className="py-4 border-b bg-white drop-shadow-sm px-8 md:px-20">
        <div className="flex flex-row items-center justify-between">
            <h5 className="text-xl font-bold">SQ</h5>
            <a href="https://github.com/fatihjr9/quotes_app" target="_blank" className="px-4 py-2 hover:px-6 flex items-center gap-x-2 transition-all duration-300 bg-black text-white font-medium rounded-md" rel="noreferrer">
                <h5>See Repository</h5>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                </svg>
            </a>
        </div>
    </div>
  )
}

export default Navbar