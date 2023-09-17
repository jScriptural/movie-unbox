

import "../assets/scss/movie.scss";


export default function Movie(props){
	const {movieSrc,title,releaseYear,runtime,genres,overview,director,writers,stars}  = props;

	return (
		<div id="supremeContainer">
		 <div className="iframe-container"><iframe src={movieSrc} allowFullScreen frameBorder="0"></iframe></div>
		<div className="brief-info"><span className="title" data-testid="movie-title">{title}</span><span data-testid="movie-release-date" className="release-year">{releaseYear}</span><span className="pg"> PG-13</span><span data-testid="movie-runtime" className="runtime">{runtime}</span> <span className="genres">{genres}</span></div>
		<div className="overview"><p data-testid="movie-overview">{overview}</p><div className="crew"><ul><li>Director: <span>{director}</span></li><li>Writers: <span> {writers}</span></li><li>Stars: <span>{stars}</span></li></ul></div></div>




           </div>

	);
}




