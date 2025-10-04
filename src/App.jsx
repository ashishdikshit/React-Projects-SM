import "./App.css";
import StarRating from "./components/03_Star_Rating/StarRating";
import ImageSlider from "./components/04_Image-Slider/ImageSlider";
//import RandomeColor from "./components/2_RandomColor";
// import Index from "./components/1_accordian";

function App() {
  return (
    <>
      {/* <RandomeColor /> */}
      {/* <StarRating /> */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </>
  );
}

export default App;
