import "./styles.css";
import {useState} from 'react';

const intstudent = {
  name:'',
  std:'',
  age:'',
  add:'',
  ismale:''

};


export default function App() {
  const [student,setStudent] = useState(intstudent);
  const {name,std,age,add} = student;
  
  const schange =(e)=>{
  const {type,name,value,checked}=e.target;
  // console.log(name,type,checked);
  type==='checkbox'? setStudent({
    ...student,
    [name]:checked
  }): setStudent({
    ...student,
    [name]:value
  })
};
  return (
    <div className="App">
    <input type='text' name='name' placeholder='enter your name' value={name} onChange={schange}/><br/>

    <input type='text' name='std' placeholder='enter your class' value={std} onChange={schange}/>
    <br/>

    <input type='text' name='age' placeholder='enter your age' value={age} onChange={schange}/>
    <br/>

    <input type='text' name='add' placeholder='enter your add' value={add} onChange={schange}/>
    <br/>

    <input onchange={schange} name='ismale' type='checkbox'/>

    <button onClick={() =>{
      console.log(student);
    }}>click</button>


    </div>
 )
}