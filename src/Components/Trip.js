import "./TripStyle.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg"
import Trip2 from "../assets/4.jpg"
import Trip3 from "../assets/12.jpg"

function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destination using Google Map.</p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading = "Trip in Goa"
                text="Goa, a tiny emerald on the west coast of India, with its natural Scenic beauty, abundant greenery, attractive beaches, historical temples and churches, colourful feasts and festivals, and above all warm and hospitable people with a rich cultural milieu, has today emerged as an ideal tourist destination worldwide"
                />
                <TripData
                image={Trip2}
                heading = "Trip in Himalyas"
                text="The Himalayas include the highest mountains in the world, and are known for their soaring heights, steep-sided jagged peaks, valleys, and alpine glaciers, deep river gorges, and a series of elevational belts that display different ecological associations of flora, fauna, and climate."
                />
                <TripData
                image={Trip3}
                heading = "Trip in Ladakh"
                text="Ladakh is a cold desert in India. It lies in the Great Himalayas, on the eastern side of Jammu and Kashmir. It has the mighty Karakoram Range in the North and in the south, it is bound by the Zanskar mountains. Several rivers flow through Ladakh"
                />
            </div>
        </div>
    );
}

export default Trip;

