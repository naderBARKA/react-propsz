import Profile from './Profile/Profile';
import './App.css';

function App() {
  const FullName="Nader Barka"
  const Bio="Genie Mecanique"
  const profession="Technisien Mecanique"
  
  
    function HundleName(name) {
      alert(`Hello my name is ${name}`);
    }
   
 return (
    <div>
      <Profile 
      Name={FullName}
      Bio={Bio}
      Tech={profession}
     HundleName={HundleName}
      >
      <img src='./images/zoro.jpg ' alt='' style={{width:"250px"}} ></img>


      </Profile>

</div>
    
  );
}
export default App;
