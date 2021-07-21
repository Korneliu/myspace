import React from 'react';
import Navbar from './Navbar';


const now = new Date();

const hour = now.getHours();
const minute = now.getMinutes();

let combine = hour + minute;
let timeElement = '';
const total = combine => {
  if (combine > 53 && combine < 50) {
    timeElement = `and it's daytime!`
  } else {
    timeElement = ` and it's a nightime!`
  }
}
total(combine);



const MySpaceDashboard = () => (
  <div className="dashboard-layout">
    <h1>My Personal Space</h1>
    <Navbar />
    <h2 className="dashboard-time">`It is {new Date().toLocaleString()}{timeElement}`</h2>

  </div>
);


export default MySpaceDashboard;

