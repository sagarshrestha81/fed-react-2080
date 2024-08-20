import axios, { all } from "axios";
import { useEffect, useState } from "react";
export default function HookTm() {
  let [num, setNum] = useState(null);
  let [allDog, setAllDog] = useState([]);
  let [dogImageSrc, setDogImageSrc] = useState(null);

  const getData = async () => {
    const options = {
      method: "GET",
      url: "https://dog.ceo/api/breeds/list/all",
    };
    const res = await axios.request(options);
    setAllDog(res.data.message);
  };
  const getDogImage = async (dogName) => {
    const options = {
      method: "GET",
      url: `https://dog.ceo/api/breed/${dogName}/images/random`,
    };
    const resRandom = await axios.request(options);
    console.log(resRandom.data.message);
    setDogImageSrc(resRandom.data.message);
  };

  useEffect(() => {
    getData();
  }, []);

  const DataList = () => {
    return (
      <>
        {Object.keys(allDog).map((data, idx) => {
          return (
            <div className="col-sm-4" key={idx}>
              <div
                className="card-single card p-2 mb-2"
                onClick={() => {
                  getDogImage(data);
                }}
              >
                <h3 className="card-title">{data}</h3>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="row">{DataList()}</div>
          </div>
          <div className="col-4">
            {dogImageSrc && <img src={dogImageSrc} alt="image" />}
          </div>
        </div>
      </div>
    </>
  );
}
