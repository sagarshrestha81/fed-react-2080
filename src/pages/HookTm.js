import { useEffect, useState } from "react";
export default function HookTm() {
  // let num =5;
  let [num, setNum] = useState(null);

//   const increase = () => {
//     setNum(num + 1);
//   };

useEffect(()=>{
console.log("responce")
setNum(2)

},[])


  return (
    <>
      <p>im from Hook page {num}</p>
      <button onClick={()=>setNum(num + 1)}>click me</button>
    </>
  );
}
