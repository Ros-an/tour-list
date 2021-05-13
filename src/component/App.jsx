import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import axios from "axios";
import "./index.css";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  //***  USING AXIOS GET ***
  async function fetchToursData() {
    try {
      const response = await axios.get(url);
      setTours(response.data);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true); //for security purspose, what if you haven't set it to true
    fetchToursData();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
}

export default App;

// STEPS TO FOLLOW
/**
 * 1- set state for Loading
 * 2- set state for Tours, data which you get by request to API
 * 3- set separate return, one for loading component and one for when not loading i.e for Tours component
 */

//***  USING FETCH ***
// async function fetchToursData() {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
//   setLoading(false);
// }
