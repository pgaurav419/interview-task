import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const CityList = () => {
    const navigate = useNavigate()

    const [cityName, setCityName] = useState("")
    const [cityList, setCityList] = useState([])

    const handleAddCity = (e) => {
        e.preventDefault()

        if (cityList.includes(cityName.trim())) {
            alert("City already exists!")
            return
        }

        setCityList([...cityList, cityName.trim()])
        setCityName("")
    }

    const handleDeleteCity = (cityToDelete) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this city?")
        if (confirmDelete) {
            const updatedList = cityList.filter(city => city !== cityToDelete)
            setCityList(updatedList)
        }
    }

    // console.log(cityList,"cityList");

    return (
        <div>
            <button onClick={() => navigate(-1)}>Go to State List</button>
            <form onSubmit={handleAddCity}>
                <label>City name</label>
                <input
                    value={cityName}
                    // onChange={(e) => setCityName(e.target.value)}
                    onChange={(e) => {
                        const value = e.target.value;
                        if (value.startsWith(" ")) return;
                        setCityName(value);
                    }}
                    required
                />
                <button type="submit">Add City</button>
            </form>

            {cityList.length > 0 && (
                <table border="1">
                    <thead>
                        <tr>
                            <th>S No</th>
                            <th>City Name</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cityList.map((city, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{city}</td>
                                <td>
                                    <button onClick={() => handleDeleteCity(city)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default CityList
