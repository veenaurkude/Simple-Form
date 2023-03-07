// import logo from './logo.svg';
import './App.css';
import Heading from './Components/Heading';
import Input from './Components/Input';
import Button from './Components/Button';

function App() {
  return (
    // 1st Challenge :- 

    // <div style={{paddingLeft:"45%"}}>
    //   <h1>Register Here ...</h1>
    //   <input type="number" name='mobile' placeholder='Mobile ...' />
    //   <br /><br />
    //   <input type="password" name='password' placeholder='Password ...' />
    //   <br /><br />
    //   <button>Submit</button>
    // </div>


    // 2nd Challenge :-

    <div className='form'>
      <Heading heading="Register Here ..."></Heading>
      <Input></Input>
      <Button btn="Submit"></Button>
    </div>
  );
};

export default App;
