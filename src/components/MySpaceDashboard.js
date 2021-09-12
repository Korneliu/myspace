import React from 'react';
import Navbar from './Navbar';


const now = new Date();
const hour = now.getHours();
const minute = now.getMinutes();
let timeElement = '';
const timeChecker = time => {
  if (time > 5 && time < 20) {
    timeElement = ` and it's daytime!`
  } else {
    timeElement = ` and it's a nightime!`
  }
}
timeChecker(hour);

<h2 className="dashboard-time">`It is {new Date().toLocaleString()}{timeElement}`</h2>


const MySpaceDashboard = () => (
  <div className="dashboard-layout">
    <h1>My Personal Space</h1>
    <Navbar />

  </div>
);


export default MySpaceDashboard;

