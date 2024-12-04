import { useState, useEffect, useCallback } from "react";
import Loading from "./components/Loading";
import Champions from "./components/Champions";
import Search from "./components/Search";
import DetailsPreview from "./components/DetailsPreview";
import Details from "./components/Details";
import BackToTop from "./components/BackToTop";

function App() {
  const [loading, setLoading] = useState(true);

  const [champions, setChampions] = useState([]);
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

  const [showPreview, setShowPreview] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [delay, setDelay] = useState(true);

  const [showBackToTop, setShowBackToTop] = useState(false);

  const [page, setPage] = useState(1);
  const [searchField, setSearchField] = useState("");

  const fetchChampions = async (searchText) => {
    if (page == 1) {
      setChampions([])
    }
    
    const url = "https://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json";

    await fetch(url, {
      method: "GET",
    }).then((res) => {
      console.log("here 4")
      return res.json()
    }).then((json) => {
      let data = Object.values(json.data);

      if (searchText && searchText.length) {
        let filterText = searchText.charAt(0).toUpperCase() + searchText.slice(1);

        data = data.filter(
          champ => {
            return (
              champ.name.toLowerCase().includes(filterText.toLowerCase()) || champ.tags.includes(filterText)
            )
          }
        );
      }
      let resultArray = [];

      let start = (page - 1) * 30;
      let stop = (30 * page) < data.length ? (30 * page) : data.length;

      for (let i = start; i < stop; i++) {
        resultArray.push(data[i]);
      }

      setChampions((prev) => [...prev, ...resultArray])
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

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 400
    ) {

      setPage((prev) => prev + 1);
    }

    setShowBackToTop(window.scrollY > 600);
  }, []);

  useEffect(() => {
    fetchChampions(searchField)
  }, [page, searchField])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Loading loading={loading} />
      <div className="container">
        <div className="left">
          <Search setSearchField={setSearchField} setPage={setPage} />
          {champions && <Champions handleClick={handleClick} champions={champions} />}
        </div>
        <div className="right">
          <DetailsPreview showPreview={showPreview} />
          <Details selectChampion={selectChampion} showDetails={showDetails} delay={delay} />
          <BackToTop showBackToTop={showBackToTop} />
        </div>
      </div>
    </div>
  );
}

export default App;
