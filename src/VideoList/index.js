import { useState, useEffect, useRef } from "react";
import Videoitem from "../VideoItem";
import axios from "axios";
const KEY = process.env.REACT_APP_API_KEY;

const Videolist = ({ setFind, find }) => {
  const [results, setResults] = useState([]);
  const [title, setTitle] = useState([]);
  const [des, setDes] = useState([]);
  const [img, setImg] = useState([]);
  let counter = useRef(0);
  var URL =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&key=" +
    KEY +
    "&type=video&q=" +
    find +
    "&maxResults=5";
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        console.log(response);
        const results = response.data.items.map(
          (obj) => "https://www.youtube.com/embed/" + obj.id.videoId
        );
        setResults(results);

        let newTittles = response.data.items.map((obj) => obj.snippet.title);
        setTitle(newTittles);

        let newDescription = response.data.items.map(
          (obj) => obj.snippet.description
        );
        setDes(newDescription);

        let newImage = response.data.items.map(
          (obj) => obj.snippet.thumbnails.default.url
        );
        setImg(newImage);
      })

      .catch((error) => console.error(error));
    console.log(find);
  }, [find]);
  const onClick = (tit) => {
    setFind(tit);
  };
  return (
    <div>
      {" "}
      {results.map((url, i) => {
        return (
          <div>
            <div className="video-list">
              <Videoitem
                key={i}
                url={url}
                id={counter}
                img={img[i]}
                tit={title[i]}
                des={des[i]}
                onClick={onClick}
                counter={i}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Videolist;
