import axios, { all } from "axios";
import { useEffect, useState } from "react";
export default function HookTm() {
  let [num, setNum] = useState(null);
  let [allDog, setAllDog] = useState([]);

  const getData = async () => {
    const options = {
      method: "GET",
      url: "https://dog.ceo/api/breeds/list/all",
    };
    const res = await axios.request(options);
    setAllDog(res.data.message);
  };
  const getDogImage = async (dogName) => {
    // console.log(dogName);

    const options = {
      method: "GET",
      url: "https://dog.ceo/api/breed/affenpinscher/images/random",
    };
    const resRandom = await axios.request(options);
    console.log(resRandom);

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
      {/* <p>im from Hook page {num}</p>
      <button onClick={() => setNum(num + 1)}>click me</button> */}
      <div className="container">
        <div className="row">{DataList()}</div>
      </div>
    </>
  );
}
