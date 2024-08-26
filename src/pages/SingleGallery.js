import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleGallery(props) {
  const [dogGallery, setDogGallery] = useState([]);
  const { dogName } = useParams();

  const getData = async () => {
    const options = {
      method: "GET",
      url: "https://dog.ceo/api/breed/hound/images",
    };
    const res = await axios.request(options);
    console.log(res);
    setDogGallery(res.data.message);
  };

  useEffect(() => {
    getData();
  });

  // console.log(params)

  return (
    <>
      <h1>SingleGallery of {dogName}</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="card">
              <img
                src="https://images.dog.ceo/breeds/hound-english/n02089973_3933.jpg"
                alt="dog"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
