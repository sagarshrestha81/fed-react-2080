import axios from "axios";
import { useEffect, useState } from "react";
export default function HookTm() {
  let [num, setNum] = useState(null);
  let [allDog,setAllDog] = useState([]);

  
  const getData =async ()=>{
    const options = {
      method: 'GET',
      url: 'https://dog.ceo/api/breeds/list/all',
    };  
    const responce=await axios.request(options);
    // console.log(responce.data.message)
    setAllDog(responce.data.message)
  
  }

  useEffect(() => {
    getData();
  }, []);

  let arr = [1, 2, 3, 4, 5];





  const DataList = () => {

    console.log(allDog)
    
    return (
      <>
        {/* {allDog.map((data, idx) => {
          return (
            <div className="col-sm-4">
              <div className="card-single card p-2">
                <h3 className="card-title">Ram</h3>
                <p>Roll No. {data}</p>
                <p>Kathmandu,Nepal</p>
              </div>
            </div>
          );
        })} */}
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
