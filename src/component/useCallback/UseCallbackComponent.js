import { useState, useEffect, useCallback } from "react";

const UseCallbackChild1 = ({ parentInformation }) => {
	useEffect(() => {
		parentInformation();
		console.log("parent info call changed");
	}, [parentInformation]);

	return (
		<div>
			<h5>useCallback child 1</h5>
		</div>
	);
};

const parentInfo = (country = "India") => {
	console.log("function initialized.");
	console.log(`country: ${country}`);
};

const UseCallbackComponent = () => {
	console.log("------------------------");
	console.log("component rendered.");
	const [counter, setCounter] = useState(0);
	const [country, setCountry] = useState("India");

	const increaseCount = () => {
		setCounter(counter + 1);
	};
	const changeCountry = () => {
		setCountry("India " + counter);
	};

	// const parentInformation = () => parentInfo(country);
	const parentInformation = useCallback(() => parentInfo(country), [country]);
	// const parentInformation = useCallback(() => {
	// 	console.log(`country: ${country}`);
	// }, [country]);

	return (
		<div>
			<h2>useCallback()</h2>
			<h5>count is {counter}</h5>
			<button onClick={increaseCount}>increase count</button>
			<button onClick={changeCountry}>change country</button>
			<UseCallbackChild1 parentInformation={parentInformation}></UseCallbackChild1>
		</div>
	);
};

export default UseCallbackComponent;
