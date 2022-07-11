import style from "./Foods.module.css"

function Foods({name, image}){
    return <div> <h2> My granny cooked very well. It was {name}. </h2>
  
    See it. <img className = {style.box} src= {image} /> 
    
    </div>
    }

    export default Foods;