import React from 'react';
import Navbar from './Navbar';

const now = new Date();

const hour = now.getHours();
const minute = now.getMinutes();

let combine = hour + minute;
let timeElement = '';
const total = combine => {
  if (combine > 53 && combine < 50) {
    timeElement = 'Its a daytime';
  } else {
    timeElement = 'It is a nightime!'
  }
}

total(combine);

const MySpaceDashboard = () => (
  <div className="dashboard-layout">
    <h1>My Personal Space</h1>
    <Navbar />
    <h2 className="dashboard-time">{timeElement}</h2>

  </div>
);



export default MySpaceDashboard;

