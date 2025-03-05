import React, { useState } from "react"
import { useNavigate, } from "react-router-dom"

const StateList = () => {
    const navigate = useNavigate()

    const [stateName, setStateName] = useState("")
    const [stateList, setStateList] = useState([])

    const handleAddState = (e) => {
        e.preventDefault()

        if (stateList.includes(stateName.trim())) {
            alert("State already exists!")
            return
        }

        setStateList([...stateList, stateName.trim()])
        setStateName("")
    }

    const handleDeleteState = (stateToDelete) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this state?")
        if (confirmDelete) {
            const updatedList = stateList.filter(state => state !== stateToDelete)
            setStateList(updatedList)
        }
    }

    const handleNavigateToCity = (stateIndex) => {
        navigate(`/city/${stateIndex}`)
    }


    return (
        <div>
            <button onClick={() => navigate("/")}>Go to Country List</button>

            <form onSubmit={handleAddState}>
                <label>State name</label>
                <input
                    value={stateName}
                    onChange={(e) => {
                        const value = e.target.value;
                        if (value.startsWith(" ")) return;
                        setStateName(value);
                    }}
                    required

                />
                <button type="submit">Add State</button>
            </form>

            {stateList.length > 0 && (
                <table border="1">
                    <thead>
                        <tr>
                            <th>S No</th>
                            <th>State Name</th>
                            <th>Delete</th>
                            <th>Manage Cities</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stateList.map((state, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{state}</td>
                                <td>
                                    <button onClick={() => handleDeleteState(state)}>Delete</button>
                                </td>
                                <td>
                                    <button onClick={() => handleNavigateToCity(index)}>Manage Cities</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default StateList
