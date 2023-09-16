import ImdbLogo from '/imdb.svg';
import "../assets/scss/moviecard.scss";



export default function MovieCard(props){
	const {children,details} = props;

	return (
		<div id="trendingMoviesContainer">
		 <div className="poster-img">{children}</div>
		 <div className="info-con">
			
		  <div data-testid="movie-title" className="title">{details.title}</div>
		  <div data-testid="misc" className="tmdbLogo"><object type="image/svg+xml" data={ImdbLogo}></object></div>
		  <div  className="genres">{details.genres.map((item,i)=><span key={i}>{item}</span>)}</div>
		</div>
	        </div>
	);
}
		  


