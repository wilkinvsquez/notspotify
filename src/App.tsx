import { Routes, Route } from "react-router-dom"; //Route
import Home from "./pages/Home"; //Home
import "./App.css";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />}></Route>
		</Routes>
	);
}

export default App;
