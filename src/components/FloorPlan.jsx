import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"
import Bath from "./Bath"
import Kitchen from "./Kitchen"

function FloorPlan(){


    return(
        <div id="floorPlan">
            <div id="row-1">
                <Bedroom className="bedroom" bedNum="1" />
                <Bath className="Bath" size="Full" />
                <LivingRoom />
                <Kitchen />
            </div>
            <div id="row-2">
                <Bedroom className="bedroom" bedNum="2" />
                <Bath className="Bath" size="Half" />
                 <Bedroom className="bedroom" bedNum="3" />
            </div>
        </div>
    )
}
export default FloorPlan