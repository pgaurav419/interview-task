import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'

const CountryList = () => {
    const navigate = useNavigate();
    const [countryName, setCountryName] = useState("")
    const [countryList, setCountryList] = useState([])
    const [isFormOpen, setIsFormOpen] = useState(false)

    const handleAddCountry = (e) => {
        e.preventDefault()

        if (countryList.includes(countryName.trim())) {
            alert("Country already exists!")
            return
        }

        setCountryList([...countryList, countryName.trim()])
        setCountryName("")
        setIsFormOpen(false)
    }

    const handleDeleteCountry = (countryName) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this country?")
        if (confirmDelete) {
            const filteredList = countryList.filter(country => country !== countryName)
            setCountryList(filteredList)
        }
    }

    const handleNavigateToState = (countryIndex) => {
        navigate(`/state/${countryIndex}`)
    }

    return (
        <div>
            {!isFormOpen && <button onClick={() => setIsFormOpen(true)}>Add Country</button>}
            {isFormOpen &&
                <form onSubmit={handleAddCountry}>
                    <label>Country name</label>
                    <input
                        value={countryName}
                        // onChange={(e) => setCountryName(e.target.value)}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (value.startsWith(" ")) return;
                            setCountryName(value);
                        }}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            }

            {countryList.length > 0 && (
                <table border="1">
                    <thead>
                        <tr>
                            <th>S No</th>
                            <th>Country Name</th>
                            <th>Delete</th>
                            <th>States</th>
                        </tr>
                    </thead>
                    <tbody>
                        {countryList.map((country, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{country}</td>
                                <td>
                                    <button onClick={() => handleDeleteCountry(country)}>Delete</button>
                                </td>
                                <td>
                                    <button onClick={() => handleNavigateToState(index)}>Manage States</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default CountryList
