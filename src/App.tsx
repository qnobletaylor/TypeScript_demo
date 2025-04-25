import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

let items = ["New York", "Boston", "Berlin", "Tokyo", "Austin"];
const handleSelectItem = (item: string) => {
	console.log(item);
};

function App() {
	const [alertVisible, setVisibility] = useState(false);
	const handleBtnClick = () => {
		setVisibility(true);
	};
	return (
		<>
			<ListGroup
				items={items}
				heading="Cities"
				onSelectItem={handleSelectItem}
			></ListGroup>
			{alertVisible && (
				<Alert onClick={() => setVisibility(false)}>Hello World</Alert>
			)}
			<Button color="danger" onClick={handleBtnClick}>
				Test Button
			</Button>
		</>
	);
}

export default App;
