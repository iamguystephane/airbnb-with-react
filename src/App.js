import './App.css'
import './JS/all'
import AirbnbImg from './images/airbnb.png'
import airbnb1 from './images/airbnb1.jpg'
import airbnb2 from './images/airbnb2.jpg'
import airbnb3 from './images/airbnb3.jpg'
import meditation from './images/meditation.jpg'
import violinist from './images/violinist.png'
import cardComponents from './card'

let cardItems = cardComponents.map(item =>{
  return <Card 
    key = {item.id} //unique identifier of each Card component.
    item = {item}
  />
})

function Nav(){
  return(
    <nav>
      <img src = {AirbnbImg} alt="airbnb logo" width = "50px"></img>
      <h3> airbnb </h3>
    </nav>
  );
}

function Airbnb(){
  return(
    <>
      <section className="image-section">
        <div>
          <img src = {airbnb2} alt="airbnb logo" width="185px" height="185px" className="upImage"></img>
        </div>
        <div className="sub-image-section1">
          <img src = {airbnb3} alt="airbnb logo" width="185px" height="185px" className="upImage"></img>
          <img src = {airbnb1} alt="airbnb logo" width="185px" height="185px" className="downImage"></img>
        </div>
        <div className="sub-image-section2">
          <img src = {airbnb3} alt="airbnb logo" width="185px" height="185px" className="upImage"></img>
          <img src = {airbnb1} alt="airbnb logo" width="185px" height="185px" className="downImage"></img>
        </div>
        <div className="sub-image-section3">
          <img src = {violinist} alt="airbnb logo" width="185px" height="185px" className="upImage"></img>
          <img src = {meditation} alt="airbnb logo" width="185px" height="185px" className="downImage"></img>
        </div>
        <div className="sub-image-section4">
          <img src = {violinist} alt="airbnb logo" width="185px" height="185px" className="upImage"></img>
          <img src = {meditation} alt="airbnb logo" width="185px" height="185px" className="downImage"></img>
        </div>
      </section>
      <div></div>
      <h1 className="exp"> Online Experiences </h1>
      <p className="p-exp"> Join unique interactive activities led by one-of-a-kind hosts all without leaving home </p>
    </>
  );
}

function Card(props){
  let text
  if(props.item.onlineSpots != 0){
    if(props.item.location === "Online"){
      text = 'ONLINE'
    }
    else if(props.item.location === "Offline"){
      text = 'OFFLINE'
    }
    else{
      text = ""
    }
  }
  else{
    text = "SOLD OUT"
  }
  return(
    <section className="general-card-section">
      <div className="card card1">
        {text && <h4> {text} </h4>}
        <img src = {props.item.coverImg} alt="airbnb logo" width="250px" height="270px" />
        <div className="star-text">
          <i className="fa-solid fa-star"></i>
          <p>{props.item.stats.rating}</p>
          &nbsp;
          <p>{props.item.stats.viewCount}</p>
          &nbsp;
          <p>{props.item.location}</p>
        </div>
        <p> {props.item.Name}</p>
        <p> <strong>From ${props.item.price}</strong> / person</p>
      </div>
    </section>
  );
}



export default function MainPage(){
  return(
    <>
      <header>
        <Nav />
        <Airbnb />
      </header>
      <main>
         {cardItems}
      </main>
    </>
  );
}