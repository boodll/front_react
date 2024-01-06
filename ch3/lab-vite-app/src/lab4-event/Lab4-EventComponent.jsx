import EventBinding from "./Test1-EventBinding";
import AsyncStateChange from "./Test2-AsyncStateChange";
import ControlledComponent from "./Test3-controlledComponent";
import UncontrolledComponent from "./Test4-Uncontrolled-Component";



const EventComponent = () => {
  return (
    <div>
      <EventBinding />
      <AsyncStateChange />
      <ControlledComponent />
      <UncontrolledComponent />
    </div>
  )
}

export default EventComponent