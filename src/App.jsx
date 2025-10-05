import "./App.css";
import menus from "./components/06_Tree-view/data";
import StarRating from "./components/03_Star_Rating/StarRating";
import ImageSlider from "./components/04_Image-Slider/ImageSlider";
import LoadMoreData from "./components/05_Load_More_Data/LoadMoreData";
import TreeView from "./components/06_Tree-view/TreeView";
import RandomColor from "./components/02_RandomColor/Simplified";
import QRCodeGenerator from "./components/07_QR_Generator/QRCodeGenerator";
import LightDarkMode from "./components/08_Light_Dark_Mode/LightDarkMode";
import WithoutUsedefine from "./components/08_Light_Dark_Mode/WithoutUsedefine";
//import RandomeColor from "./components/2_RandomColor";
// import Index from "./components/1_accordian";

function App() {
  return (
    <>
      {/* <RandomeColor /> */}
      {/* <RandomColor/> */}
      {/* <StarRating /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* <LoadMoreData /> */}
      {/* <TreeView menus={menus} /> */}
      {/* <QRCodeGenerator /> */}
      <LightDarkMode />
      {/* <WithoutUsedefine /> */}
    </>
  );
}

export default App;
