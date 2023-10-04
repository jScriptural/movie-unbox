import {Routes, Route} from "react-router-dom";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import MovieDetails from "./components/MovieDetails.jsx";
import Footer from "./components/Footer.jsx";
import NoContent from "./components/NoContent.jsx";

function App() {

  return (<>
	  <Routes>
	  <Route path="/" element={<Home />} />
	  <Route path="movies/:movieid" element={<MovieDetails />}/>
	  <Route path="nocontent" element={<NoContent />} />





	  </Routes>

  	<Footer />

	  </>) 

}

export default App
