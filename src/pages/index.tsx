import { Route, Routes } from 'react-router-dom'
import MainPage from './MainPage'

const Routing = () => {
  return (
	<Routes>
		<Route path='/' element={<MainPage />}/>
	</Routes>
  )
}

export default Routing