import axios from "axios";
import { useEffect, useState } from "react";
export default function HookTm() {
  // let num =5;
  let [num, setNum] = useState(null);

  //   const increase = () => {
  //     setNum(num + 1);
  //   };

  const options = {
    method: 'GET',
    url: 'https://dog.ceo/api/breeds/list/all',
  };
  

  const getData =async ()=>{

    const responce=await axios.request(options);
    console.log(responce)
  
  }

  useEffect(() => {
    // console.log("responce");
    // setNum(2);
    getData();
  }, []);

  let arr = [1, 2, 3, 4, 5];





  const DataList = () => {
    return (
      <>
        {arr.map((data, idx) => {
          return (
            <div className="col-sm-4">
              <div className="card-single card p-2">
                <h3 className="card-title">Ram</h3>
                <p>Roll No. {data}</p>
                <p>Kathmandu,Nepal</p>
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
