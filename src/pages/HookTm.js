import axios, { all } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
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

    Swal.fire({
      imageUrl: resRandom.data.message,
      imageHeight: 400,
      imageAlt: "A tall image",
    });
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
              <div className="card-single card p-2 mb-2">
                <h3 className="card-title">
                  {data}

                  <div className="d-flex">
                    <button
                      onClick={() => {
                        getDogImage(data);
                      }}
                      className="btn btn-primary btn-sm"
                    >
                      Popup
                    </button>
                    <Link to={`/single-gallery/${data}`} className="btn btn-success btn-sm">
                    Gallery
                    </Link>
                  </div>
                </h3>
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
