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
      <input type="text" placeholder="dddd" className="ring-1" />
      {
        showQuote.map((item) => (
          <div key={item.id}>
            <h5>{item.author}</h5>
          </div>
        ))
      }
    </Layout>
  );
}

export default App;