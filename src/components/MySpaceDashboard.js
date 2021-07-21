import React from 'react';
import Navbar from './Navbar';

const now = new Date();

const hour = now.getHours();
const minute = now.getMinutes();

let combine = hour + minute;
let timeElement = '';
const total = combine => {
  if (combine > 53 && combine < 50) {
    timeElement = `It's ${hour} and ${minute} and it's daytime!`
  } else {
    timeElement = `It's ${hour}h${minute}m and it's a nightime!`
  }
}

total(combine);

const add = (a, b) => {
  return a + b
}
add(2, 3)
const MySpaceDashboard = () => (
  <div className="dashboard-layout">
    <h1>My Personal Space</h1>
    <Navbar />
    <h2 className="dashboard-time">{timeElement}</h2>
    <h5>{add}</h5>
  </div>
);



export default MySpaceDashboard;

