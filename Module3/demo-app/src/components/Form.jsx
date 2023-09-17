import { useState } from "react"

export default function Form() {
    let [firstName, setFirstName] = useState("");
    let handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }

    let [lastName, setLastName] = useState("");
    let handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }
    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log(firstName,lastName)
    }
    return (
        <>
            <form onSubmit={handleSubmit} >
                <div>
                    <input onChange={handleFirstNameChange} placeholder="First Name" type="text" value={firstName} />
                </div>
                <div>
                    <input onChange={handleLastNameChange} placeholder="Last Name" type="text" value={lastName} />
                </div>
                <button onClick={handleSubmit} type="submit">Submit</button>
            </form>
        </>
    )
}