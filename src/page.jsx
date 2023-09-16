import {Link,useLocation,Outlet,useParams} from "react-router-dom";


export function Home(){
	const params = useParams();
	console.log(params);
	return (<>
		<ul>
		<li><Link exact to="about">about</Link>
		<ul>
		  <li><Link exact to="about/services">services</Link></li>
		  <li><Link exact to="about/history">history</Link></li>
		</ul>

		</li>
		<li><Link exact to="login">Login</Link></li>

		</ul>
		<h1>Home page</h1>
	     </>);
	
}


export function About(){
	return (<>

		<h1>About page</h1>
		<Outlet />
	       </>);
}


export function Login(){
	return (<h1>Login page</h1>);
}

	

export function NotFound404(){
	const location = useLocation();
	console.log(location);

	return <h1> the page at {location.pathname} not found</h1>;
}

export function Services(){
	return (<h1> About services we offer </h1>);
}

export function History(){
	return (<h1> About our history </h1>);
}



export function Company(){
	return (<h1> About company </h1>);
}



