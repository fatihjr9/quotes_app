/* eslint-disable react-hooks/exhaustive-deps */
import Layout from "./components/layout";
import useStore from "../store";
import { useEffect } from "react";

function App() {
  const { fetchQuote, showQuote } = useStore()
  useEffect(()=>{
    fetchQuote()
  },[])
  return (
    <Layout>
      <div className="mx-auto text-center -translate-y-12">
        <input type="text" placeholder="dddd" className="ring-1" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {
          showQuote.map((item) => (
            <div key={item.id} className="ring-1 ring-gray-500 p-2 rounded-md">
              <h5>{item.quote}</h5>
              <h5>{item.author}</h5>
            </div>
          ))
        }
      </div>
    </Layout>
  );
}

export default App;