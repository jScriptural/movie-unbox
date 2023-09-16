import {Link} from "react-router-dom";
import "../assets/scss/footer.scss";





export default function Footer(){
	 
	return (
		<footer id="footer">
		 <div className="socials">
		  <a href="#" target="_black" title="facebook page"><span className="fa fa-facebook-square"></span></a>
		  <a href="#" target="_black" title="instagram page"><span className="fa fa-instagram"></span></a>
		  <a href="#" target="_black" title="twitter page"><span className="fa fa-twitter"></span></a>
		  <a href="#" target="_black" title="youtube channel"><span className="fa fa-youtube-square"></span></a>
		</div>
		<div className="policy-and-announcement">
		<Link to="nocontent" className="footer-link"><span>Conditions of use</span> </Link>
		<Link to="nocontent" className="footer-link"><span>Privacy & Policy</span></Link>
		<Link to="nocontent" className="footer-link"><span>Press Room</span></Link>
		</div>
		<div to="nocontent"  className="credits"><span>&copy; 2023</span><span> MovieUnbox by Isonguyojohn</span></div>
		  
		</footer>
	);
}


