import State from "./State"
import Props from "./Props"
import Datapass from "./Datapass"
import Lists from "./Lists"
import Show from "./Show"
import ControlledComponent from "./controlledComponent"
import Counter from "./useEffect"
function App() {
  return (

    <div className="card" >
      <Datapass />
      <Props name="Devillers" age={44} show={true} />
      <Props name="Arul" age={23} />
      <Props name="Rocky" age={45} />
      <Show />
      <State />
      <Lists/>
      <ControlledComponent/>
      <Counter/>
     
    </div>
  );

}

export default App;
