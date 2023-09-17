export default function UserProfile(props){
    let {name,age,occupation}=props; //Destructuring of object
    // props.name="Changed Name" // Will throw error

    return(
        <>
        {/* <h3>Name: {param.name}, Age: {param.age},Occupation: {param.occupation} </h3> */}
        {/* <h3>Age: {param.age}</h3>
        <h3>Occupation: {param.occupation} </h3> */}
        <h3>Name:{name},Age: {age}, Occupation: {occupation} </h3>
        </>
    );
}