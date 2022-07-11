import logo from './logo.svg';
import './App.css';
import Snacks from './component/Snacks'
import Foods from './component/Foods';
import Floor from './component/Floor';


const snacks = [

  { dishes: "kimchi",
    image: 
    "https://cdn.imweb.me/upload/S201905105cd4e5325582d/0b667240284bd.jpg",
},

    { dishes: "tamagoyaki",
      image: "https://daebakkitchen.hk/wp-content/uploads/2021/03/%EA%B3%84%EB%9E%80%EB%A7%90%EC%9D%B4.jpg",
}
]
const foods = [
{  dishes: "medamayaki",
image: 
"https://t1.daumcdn.net/cfile/tistory/99EB093A5C7289111F",
},


{  dishes: "zouni",
image: 
"https://stat.ameba.jp/user_images/20100101/15/koichi-shoot/d1/13/j/o0600045010360906737.jpg?caw=800",
}


]



function App() {
  return <div><div><h1>더큰내일</h1><Floor level="1st"/><Floor level="2st"/><Floor level="3st"/></div>
  

    <div>
    <h1> Snacks </h1>
    {snacks.map(map => 
    <Snacks name={map.dishes} image={map.image}/>
    )}
    <h1> Foods </h1>
    {foods.map(map => 
    <Foods name={map.dishes} image={map.image}/>
    )}
    </div>

  </div>
  
}


export default App;
