import React from "react";
import Counter from "./counter";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-5">
			<Counter />
		</div>
	);
};

export default Home;
