import style from "./Floor.module.css"

export default function Floor ({level}){
    return <div className={style.floorSize}><h1>{level}</h1></div>
}