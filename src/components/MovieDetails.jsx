import {useLocation} from "react-router-dom";
import Loader from "./Loader.jsx";
import {useState,useEffect} from "react";
import Sidebar from "./Sidebar.jsx";
import Movie from "./Movie.jsx";
import Img from "./Img.jsx";
import "../assets/scss/moviedetails.scss";
const apiKey = import.meta.env.VITE_API_KEY;      const readAccessToken = import.meta.env.VITE_READ_ACCESS_TOKEN;

const options = {                                         method: "GET",                                    headers: {                                                accept: "application/json",                                                                         Authorization: `Bearer ${readAccessToken}`,                                                 }                                         }
const url = `https://api.themoviedb.org/3/movie/`

export default function(props){
	const location = useLocation();
	const [details,setDetails] = useState(null);
	const [crew,setCrew] = useState(null);
	const [cast,setCast] = useState(null);
	const [trailer,setTrailer] = useState({});

	const movieId = location.pathname.slice(7); 
	//console.log(movieId);

	useEffect(()=>{

		async function fetchDetails(){
		  const req = await fetch(url+movieId+`?api_key=${apiKey}`,options);
		  const data = await req.json();
			setDetails(data);
			//console.log("dat",data);
		  const res = await fetch(url+movieId+`/videos?api_key=${apiKey}`,options);                           const videos = await res.json();                     let trail= videos.results.find(vid=>vid.type === "Trailer");
			setTrailer(trail);
			//console.log("t",trail);

		  const request = await fetch(url+movieId+`/credits?api_key=${apiKey}`,options);
		  const requestData = await request.json();
			setCrew(requestData.crew);
			setCast(requestData.cast.slice(0,3));
		console.log("req",requestData.crew.filter(c=>c.department=="Writing"));

	}
	fetchDetails();
	//console.log(trailer);

	},[]);







	return (<>
		
		<div id="movieContainer">
		<Sidebar />
		{details?<Movie  movieSrc={`https://www.youtube.com/embed/${trailer.key}`} title={details.original_title}  releaseYear={details.release_date.slice(0,4)} runtime={`${Math.trunc(details.runtime/60)}h ${Math.round(((details.runtime/60)-Math.trunc(details.runtime/60))*60)}m`} genres={details.genres.map((genre,i)=><span key={i}>{genre.name}</span>)} overview={details.overview} stars={cast?.map((c)=>c.original_name).join(", ")} director={crew?.find(c=>c.job=="Director").original_name}  writers={crew?.filter(c=>c.department=="Writing").map(c=>c.original_name).join(", ")}/>:<Loader /> }

		</div>
	
	</>)
}
