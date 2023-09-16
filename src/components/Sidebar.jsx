import {NavLink} from "react-router-dom";


import "../assets/scss/sidebar.scss";


export default function Sidebar(props){


	return (
		<nav id="movie-sidebar">
		   <div className="container">
		    <div className="brand-name"><span>MovieUnbox</span></div>
		    <NavLink className="nav-link"  exact="true" to="/"><span className="fa fa-home"></span><span>Home</span></NavLink>
		 <NavLink className="nav-link active"  exact="true"  to="."><span className="fa fa-film"></span><span>Movies</span></NavLink>

		<NavLink className="nav-link"  exact="true" to="/nocontent" ><span className="fa fa-tv"></span><span>TV series</span></NavLink>
		<div className="movie-quiz">
		 <p>Play movie quizes and earn free tickets <br /><span>50K people are playing now </span>
		</p>
		 <button type="button">Start playing</button></div>
		<button type="button" className="log-out"><span className="fa fa-sign-out"></span><span>Log out</span></button>

		  </div>{/*container*/}
		</nav>
	);
}
