import React from 'react'
import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
import Mountain3 from "../assets/8.jpg"
import Mountain4 from "../assets/4.jpg"
import "./DestinationStyles.css"
import DestinationData from './DestinationData'

const Destination = () => {
  return (
    <div className='destination'>
      <h1>Polular Destination</h1>
      <p>Tour give you the opportunity to see a lot, within a time frame.</p>
      <DestinationData
       className="first-des"
       heading="Patratu Valley (Ranchi)"
       text="Patratu Valley is a scenic attraction located in Ranchi, Jharkhand, India. It is situated approximately 35-40 kilometers from the city center, offering a serene getaway from the urban hustle and bustle. The valley is characterized by its zig-zag roads, lush greenery, and scenic views of hills across the way."
       img1={Mountain1}
       img2={Mountain2}
      />

       <DestinationData
       className="first-des-reverse"
       heading="Parasnath Hills (Hazaribagh)"
       text="Parasnath is an ancient mountain peak and in the Parasnath hill Range. It is located towards the eastern end of the Chota Nagpur Plateau in the Giridih district of Jharkhand. The hill is named after Parshvanatha, the 23rd Jain Tirthankara who got salvation here.In this connection there is Jain pilgrimage Shikharji on the top of hill. The hill is also known as Marang Buru."
       img1={Mountain3}
       img2={Mountain4}
      />
    </div>
  )
}

export default Destination
