import {Link} from "react-router-dom";

export default function NoContent(){
	 return (
	        <div style={{
        	height: "80vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: "red",
	 }}>
		  
		 <header>
		  <h1>Page under construction</h1>
		   <h5>No vex. <Link exact="true" to="/">Go watch movie trailer</Link></h5>
		 </header>

		</div>
	 );
}
