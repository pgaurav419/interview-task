import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CountryList from './Country'
import StateList from './State'
import CityList from './City'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CountryList />} />
          <Route path="/state/:id" element={<StateList />} />
          <Route path="/city/:id" element={<CityList />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
