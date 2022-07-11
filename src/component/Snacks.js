import style from "./Snacks.module.css"

function showName (name){
  console.log(name);

}
function showText(e){
    console.log(e.target.value);
     
}

function Snacks({name, image}){
    return <div> <h2 style = {{color : '#f00'}}> My granny cooked very well. It was {name}. </h2>
  
    See it. <img className={style.box} src= {image} /> 
    <button onClick={()=>{
        showName(name)
    }}>showname</button>
    <input type="text" onChange={showText}/>
    </div>
    }

    export default Snacks;