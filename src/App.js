
import {  NavLink, Outlet } from 'react-router-dom';
import './App.css';
// import Content from './q3/Content';
// import Parent from './q4/Parent';
import Child from './q4/Child';
import Map from './q5/map';
import Parent from './q6/Parent';
import Life from './q7/LifeCycle';
import Fruits from './q8/Arr';
import Arrays from './q9/Arrays';
import Content from './q10/Content';
import Form from './q11/form';
// import Counter from './q1/Counter';




function App() {
  return (
    <div >
      {/* <h2>THis ia appp</h2> */}
     {/* <Counter count={5}/> */}
    {/* <ul class="nav justify-content-center  ">
        <li class="nav-item">
          <NavLink to='/home'className={'nav-link '}>home</NavLink>
        </li>
        <li class="nav-item">
           <NavLink to='/about' className={'nav-link active'}>ABout</NavLink>
           <Outlet/>
        </li>
        
    </ul>  Question 2 */}



    {/* {for Queston 3 Todo} */}
    {/* <Content/> */}
    {/* For QUestion 4 */}
    {/* <Parent/> */}
    {/* For question 5 */}
    {/* <Map/> */}
    {/* for question 6 */}
    {/* <Parent/> */}
    {/* For Questioh 7 */}
    {/* <Life/> */}
    {/* For Question 8 */}
    {/* <Fruits/> */}
    {/* for Question 9 */}
    {/* <Arrays/> */}
    {/* For Question 10 */}
    {/* <Content/> */}
    {/* for last question 11 */}
    <Form/>
    </div>
    
    
    
  );
}

export default App;
