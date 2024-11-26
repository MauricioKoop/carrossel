import { useState, useEffect, useRef } from "react";
import React from "react";
import { motion } from "framer-motion";
import "./App.css";

import images1 from "../src/images/img1.png";
import images2 from "../src/images/img2.png";
import images3 from "../src/images/img3.png";
import images4 from "../src/images/img4.png";


const images = [images1, images2, images3, images4];

function App() {
	const carousel = useRef();
	const [width, setWidth] = useState(0);

	useEffect(() => {
		setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
	}, [])

	return(
		<div className="App">
			<motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
				<motion.div
					className="inner"
					drag="x"
					dragConstraints={{ right: 0, left: -width }}
					initial={{ x: 100 }}
					animate={{ x: 0 }}
					transition={{ duration: 0.8 }}
				>
					
					{images.map(image => (
						<motion.div className="item" key={image}>
							<img src={image} alt="texto alternativo" />
						</motion.div>
					))}

				</motion.div>
			</motion.div>
		</div>
	)
}

export default App;
