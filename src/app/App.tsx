import { BrowserRouter } from "react-router-dom"
import Routing from "../pages"
import './App.css'

export const App = () => {
	return (
		<BrowserRouter>
			<Routing/>
		</BrowserRouter>
	)
}