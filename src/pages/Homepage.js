import About from "../component/About";
import FounderMessage from "../component/FounderMessage";
import Header from "../component/layout/Header";
import SmallBanner from "../component/SmallBanner";

export default function Home(props) {   
  return (
    <>
     <Header/>
     <About/>
     <SmallBanner/>
     <FounderMessage/>
    </>
  );
}