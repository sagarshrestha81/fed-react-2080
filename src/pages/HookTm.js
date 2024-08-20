import axios, { all } from "axios";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
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


    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });


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
