import {useState, useEffect ,useLayoutEffect} from "react";
import {Link} from "react-router-dom";
import Loader from "./Loader.jsx";
import "../assets/scss/featuredmovies.scss";
import Img from "./Img.jsx";
import MovieCard from "./MovieCard.jsx";
import imdb from "/imdb.svg";
import chevonRightArrow from "/chevon-right-arrow.svg";
import Navbar from "./Navbar.jsx";
import playIcon from "/Play.svg";

const linkStyle = {textDecoration:"none",color:"rgba(223,14,13)"};
const apiKey = import.meta.env.VITE_API_KEY;
const readAccessToken = import.meta.env.VITE_READ_ACCESS_TOKEN;
const url= `https://api.themoviedb.org/3/movie/top_rated`;
const url2= `https://api.themoviedb.org/3/movie/popular`;
const url3 = `https://api.themoviedb.org/3/discover/movie`;






export default function Card(props){
	const [data,setData] = useState(null);

	useEffect(()=>{
		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				Authorization: `Bearer ${readAccessToken}`,
			}
		}

		async function fetchData(){

			let res = await fetch(url,options);
			let data = await res.json();
		         //console.log(data);
			let genres = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`,options); 
			let genreNamesIdMapping = await genres.json();
	  let result = data.results.slice(0,12).map(movie=>{
		  let ids = movie.genre_ids;
		  let matchedGenres = ids.map(id=>{
			let matchedObj =  genreNamesIdMapping.genres.find(obj=>obj.id === id);
			  return matchedObj.name;
		  });
		  return {...movie ,genres:matchedGenres};





	   });
	//	console.log("result",result);
			setData(result);

		}
		fetchData();


	//	console.log(data);




	},[]);
	const imgBasePath = 'https://image.tmdb.org/t/p/original';
	const randIndex = Math.ceil(Math.random()*10);

	return (<>
		<Navbar movieid={data?data[randIndex].id:null} title={data?data[randIndex].original_title:"...loading"} overview={data?data[randIndex].overview:"...loading"} bgSrc={data?imgBasePath+data[randIndex].backdrop_path:"...loading"} />
                <header style={{display:"flex",
		      alignItems: "center",
		      justifyContent: "space-between",
		padding: ".5rem"}}><h1>Featured Movie</h1><Link to="nocontent" style={linkStyle}><small>see more &raquo;</small></Link></header>
		<div id="featuredMovies">
		{data?data.map((movie,i)=><MovieCard details={{title:movie.original_title,genres:movie.genres}} key={i}><Link className="link" exact="true" to={"movies/"+movie.id}><Img src={imgBasePath+movie.poster_path} alt={movie.original_title} caption={movie.release_date} /></Link></MovieCard>):<Loader />}

		</div>

		</>
	);
}


