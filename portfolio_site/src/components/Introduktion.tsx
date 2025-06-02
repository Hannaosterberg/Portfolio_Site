import hannaImg from "../assets/IMG_3908.jpeg"
export default function Introduktion() {
    return(
        <>
        <img src={hannaImg} alt="" 
            className="w-50 h-50 border-small radius-50"/>
            <h1>Hanna Österberg</h1>
            <h2>Fullstack Developer</h2>
        </>
    )
}