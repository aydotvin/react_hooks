import useGreeting from "./useGreeting";

const CustomHookComponent = () => {
	const [greeting, setNewGreeting] = useGreeting("john");

	const getNewGreeting = (e) => {
		setNewGreeting(e.target.value);
	};

	return (
		<div>
			<h2>custom hook</h2>
			<h5>{greeting}</h5>
			<input type="text" onChange={getNewGreeting} />
		</div>
	);
};

export default CustomHookComponent;
