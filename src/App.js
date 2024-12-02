// App.js
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Champions from "./components/Champions";
import Search from "./components/Search";
import DetailsPreview from "./components/DetailsPreview";
import Details from "./components/Details";

function App() {
  const [loading, setLoading] = useState(true);
  const [champions, setChampions] = useState([]);

  const [showPreview, setShowPreview] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [delay, setDelay] = useState(true);

  // const [selectID, setSelectID] = useState();
  const [selectChampion, setSelectChampion] = useState({
    image: {
      full: ""
    },
    ket: "",
    name: "",
    blurb: "",
    tag: {},
    info: {},
    stats: {},
    shortenedBlurb: "",
  });

  const fetchChampions = async () => {
    const url = "https://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json";

    await fetch(url, {
      method: "GET",
    }).then((res) => {
      return res.json()
    }).then((json) => {
      // TODO IMPLEMENT PAGINATION
      const dataArr = Object.values(json.data)
      // console.log(dataArr)
      setChampions(dataArr)
      setLoading(false);
    })
  }

  const handleClick = (key) => {
    if (showPreview === true) { // preview is currently showing
      setShowPreview(false);
      setShowDetails(true);

      setTimeout(() => {
        setDelay(false);
        fetchChampion(key);
      }, 500)
    } else { // preview is already hidden, a champ's details is showing
      setShowDetails(false);

      setTimeout(() => {
        setShowDetails(true);
        fetchChampion(key);
      }, 1000)
    }
  }

  const fetchChampion = (key) => {
    setSelectChampion(champions.filter((champ) => champ.key == key)[0]);
  }

  const searchChampion = () => {
    // TODO: fetch API for Champions matching search text
  }

  useEffect(() => {
    fetchChampions()
  }, [])

  return (
    <div>
      <Loading loading={loading} />
      <div className="container">
        <div className="left">
          <Search />
          {champions && <Champions handleClick={handleClick} champions={champions} />}
        </div>
        <div className="right">
          <DetailsPreview showPreview={showPreview} />
          <Details selectChampion={selectChampion} showDetails={showDetails} delay={delay} />
        </div>
      </div>
    </div>
  );
}

export default App;
