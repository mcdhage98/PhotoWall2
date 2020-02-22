import React from 'react';
import ReactDom from 'react-dom';


const tasks=["get","set","go"];

const element=<ol>
<li>{tasks[0]}</li>
<li>{tasks[1]}</li>
<li>{tasks[2]}</li>

</ol>;

ReactDom.render(element,document.getElementById("root"));


