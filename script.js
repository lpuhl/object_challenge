var locations = []; // this array will hold your objects

// object constructor

function State(state, revenue, locationCount) {
	this.state = state;
	this.revenue = revenue;
	this.locationCount = locationCount;
	this.averageRevenue = function(){
		return revenue / locationCount;
	}
}

// object instances

var illinois = new State("IL", 5000, 12);

var minnesota = new State("MN", 300, 3);

var nevada = new State("NV", 25000, 1);

// push object instances to locations array

locations.push(illinois, minnesota, nevada);


// DO NOT MODIFY THIS CODE
$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});



/*
["IL", 5000, 12]
["MN", 300, 3]
["NV", 25000, 1]

Pizza For People wants to use your object knowledge to

• display their locations as a list
• display the average amount of revenue per location for each chain

Create an object constructor for each state (probably named something like State or Region). The object properties should include state, revenue, locationCount).
Create a function, within the constructor, that calculates and returns the average revenue. Name this function averageRevenue.
Create an instance of each object using the provided data.

*/