/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import Controls from "../components/controls"
import useStore from "../../store"
import Cards from "../components/cards"

function Home() {
    const { fetchQuote, showQuote } = useStore()
    useEffect(()=>{
      fetchQuote()
    },[])
  return (
    <>
        <Controls/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {
              showQuote.map((item) => (
                <Cards key={item.id} quote={item.quote} author={item.author}/>
              ))
            }
      </div>
    </>
  )
}

export default Home