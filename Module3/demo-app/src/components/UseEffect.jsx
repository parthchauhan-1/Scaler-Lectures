import { useEffect, useState } from "react";

export default function UseEffect() {
    let handleIncrease = (e) => {
        setCount(count + 1);
    }
    let [count, setCount] = useState(0);

    let [text,setText]=useState("");
    let handleTextChange=(e)=>{
        setText(e.target.value);
    }

    let [age,setAge]=useState(0);
    let handleAge=(e)=>{
        setAge(e.target.value);
    }


    // useEffect(()=>{
    //     console.log("Inside useEffect")
    //     document.title= `Browser Count: ${count}`;

    // },[]) //empty dependency -> it is making sure that cb we have run only once i.e. on mounting
    
        // useEffect(() => {
        //     console.log("Inside useEffect")
        //         document.title= `Browser Count: ${count}`;
    
        // }, [count]) //whenever count changes, run the cb + on mounting

    useEffect(() => {
        console.log("Inside useEffect")
            document.title= `Browser Count: ${count}`;

    }) //this will run in mounting as well as updation phase

    useEffect(()=>{
        console.log("Form has been filled");
    },[text,age]) // this will run only when text or age gets updated

    return (
        <>
            <div>
                <h1>This is my count: {count}</h1>
            </div>
            <div>
                <button onClick={handleIncrease}>Increase Count</button>
                <input type="text" onChange={handleTextChange} value={text} />
                <div><h3>{text}</h3></div>
                <input type="number" onChange={handleAge} value={age} />
            </div>
        </>
    )
}