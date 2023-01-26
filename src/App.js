import './App.css';
import {useState} from 'react';
import Axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [university, setUniversity] = useState('');
  const [mastersdegree, setMastersdegree] = useState('');
  const [mastersterm, setMastersterm] = useState('Fall 2022');
  const handleSubmit = (e) => {
    e.preventDefault();
    const details = { name, university, mastersdegree, mastersterm };
    console.log(details);
    Axios.post('/', details)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
  }

  return (
    <div className="create">
      <h2>Create own SOP</h2>
      <form onSubmit={handleSubmit}> 
        <label>Enter Full Name</label>
        <input type="text" 
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}/>
        <label>Enter Desired University</label>
        <input type="text" 
          required 
          value={university}
          onChange={(e) => setUniversity(e.target.value)}/>
        <label>Enter Desired Masters Degree</label>
        <input type="text" 
          required 
          value={mastersdegree}
          onChange={(e) => setMastersdegree(e.target.value)}/>
        <label>Enter Masters Term</label>
        <select
        value={mastersterm}
        onChange={(e) => setMastersterm(e.target.value)}>
          <option value="Fall 2022">Fall 2022</option>
          <option value="Spring 2023">Spring 2023</option>
          <option value="Summer 2022">Summer 2022</option>
        </select>
        <label>Enter Achievements</label>
        <textarea > 
         
        </textarea>
        <button> Submit </button>
      </form>
    </div>
  );
}

export default App;
