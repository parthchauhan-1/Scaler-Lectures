export default function Footer(props){
    let {link}=props;
    return (
        <>
        <h1>I'm a footer button to</h1>
        {/* <a href={props.link}>Google</a> */}
        <a href={link}>Google</a>
        </>
    );
}