import {Link} from "react-router-dom";
import imdbLogo from '/imdb.svg';
import searchIcon  from '/Search.svg';
import "../assets/scss/navbar.scss";




export default function Navbar(props){
	const {bgSrc,title,overview,movieid} = props;

console.log(movieid);

	return (
		<nav id="navbar" style={{backgroundImage: `url(${bgSrc}`}}>
		<div className="container">
		 <div className="brand">
		{/*<object className="brand-logo" type="image/svg+xml" data={imdbLogo}></object>*/}<span className="brand-name">movieUnbox</span>
		 </div>
		<div className="search">
		  <form className="searchForm">
		  <input type="search" name="search" id="searchBox" placeholder="Wetin you want watch?" className="search-input-control"/><span  className="fa fa-search"></span>
		 </form>
		</div>

		<div className="sign-in"><a href="#">Sign in</a></div>
		</div>


		<div className="block-buster">
		<h1 className="title" data-testid="title">{title}</h1>
		<div className="misc"><div className="logo"><object type="image/svg+xml" data={imdbLogo}></object><span></span></div></div>
		<div className="overview"><p>{overview.slice(0,100)+"... "}</p></div>
		<div className="btn-container"><Link to={"movies/"+movieid}><button type="button" className="btn"><span className="fa fa-play"></span><span>WATCH TRAILER</span></button></Link></div>
		</div>
	 

		 </nav>
	);



}
