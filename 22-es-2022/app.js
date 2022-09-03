const print = (...stuff) => console.log(...stuff)
/*
Javascript Nuggets
ECMAScript 2022

at() - takes integer and returns the item at that index - string,array
*/

// importing
import fetchTabs from "./fetchTabs.js";

const tabs = await fetchTabs();
print(tabs);

// old way
const scores = [99, 90, 100, 150];
const oldLast = scores[scores.length - 1];
print(oldLast)

// new way using at()
const newLast = scores.at(2);
print(newLast)

const channel = 'Coding Addict';
print(channel.at(4))

// Top Level Await - Basic Example

const resp = await fetch('https://www.course-api.com/react-tabs-project');
const data = await resp.json();
print(data);
