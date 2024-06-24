
import Login from "./Login"
import Users from "./Users";
// FUNCTION COMPONENTS
function App(){
  const baseUrl = process.env.REACT_APP_BASE_URL;
  console.log({baseUrl});
  return(
    <div>
      <Login/>
      <Users/>    
      </div>
    
  )
 

}

export default App;