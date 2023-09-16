



export default function Img(props){
	const {src,alt,caption,styles,key} = props

	return (
		<figure key={key} style={styles}>
		 <img src={src} style={{width:"100%"}}alt={alt}/>
		<figcaption style={{color:"rgba(225,225,225,0.8"}}>{caption}</figcaption>
		</figure>
	);
}

		 
