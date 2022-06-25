import logo from './logo.svg';
import './App.css';

const cooks = [

  { dishes: "kimchi",
    image: 
    "https://cdn.imweb.me/upload/S201905105cd4e5325582d/0b667240284bd.jpg",
},

    { dishes: "tamagoyaki",
      image: "https://daebakkitchen.hk/wp-content/uploads/2021/03/%EA%B3%84%EB%9E%80%EB%A7%90%EC%9D%B4.jpg",
},


{  dishes: "medamayaki",
image: 
"https://t1.daumcdn.net/cfile/tistory/99EB093A5C7289111F",
},


{  dishes: "zouni",
image: 
"https://stat.ameba.jp/user_images/20100101/15/koichi-shoot/d1/13/j/o0600045010360906737.jpg?caw=800",
}


]

function Snacks({name, image}){
  return <div> <h2> My granny cooked very well. It was {name}. </h2>

  See it. <img src= {image} /> 
  
  </div>
  }

function App() {
  return (
    <div>
    <h1> Hi. </h1>
    {cooks.map(map => 
    <Snacks name={map.dishes} image={map.image}/>
    )}

  </div>
  );
}


export default App;
