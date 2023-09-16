


export default function Loader(){
	return (
		<div style={{
			display: "flex",
			flexFlow: "column nowrap",
			justifyContent: "center",
			alignItems: "center",
			fontSize: "2rem",
			width: "100%",
			position: "absolute",
			minHeight: "100vh",
			zIndex: 100,
		        background: "transparent",
			backdropFilter: "blur(10px) grayscale(70%)",

		 }}>
		<span  className="fa fa-spinner fa-spin"></span>
		<p>...loading</p>
		<p style={{fontSize: "10px"}}>No vex</p>
		
		 </div>


	);
}
