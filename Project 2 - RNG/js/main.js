// The 2 Arrays below are used when combining names together. Ex: nameList1 + nameList2 when names are generated.
var nameList1 =
[
	"Julius", "Aquafina", "Fiji", "Zephyrhills", "Reserve", "Relaxed", "Unknown", "Jaybird", "Razer", "Hyper", "Movado", "Neo", "Sennheiser", "Express", "Zara", "Zappo", "Jack", "Charlotte", "Olivia", "Mia", "Ava", "Amelia", "Isla", "Sophia", "Burnie", "John", "Tim"
];

var nameList2 =
[
	"Sydney", "Duke", "Waffle", "Peter", "Ryan", "Sharp", "Frank", "Dom", "Sinatra", "King", "Artic", "James", "Hayze", "Coco", "Florida", "California", "Mike", "Gavin", "Ellie", "Yang", "Nvidia", "Intel", "Corsair", "Musk", "Elon", "Jaid"
];

function random1(userEnter)
{
	//var icantdothisAnymore is what takes what the user types into the textfield created on line 13 in the HTML file.
		var icantdothisAnymore = parseInt(document.querySelector(".entrance").value);
		/* When the user types in how many results they want into icantdothisAnymore, the for loop keeps incrementing it until "i" is greater than what the user inputted, which means the for loop will keep giving results until "i" is passed. */
		for (var i = 0; i < icantdothisAnymore; i++) 
		{
			/* the math.random takes a random element from the nameLists and outputs it using the querySelector. The variables are concatinated with a line break to split each result. The .length after nameList takes into account how many items are in those arrays, making it a more flexible way than just typing: nameList2.26 */
			var tested1 =  nameList1[Math.floor(Math.random() * nameList1.length)];
			var tested2 =  nameList2[Math.floor(Math.random() * nameList2.length)];
			// testerdown is a class referenced from index.html file line 11
			document.querySelector(".testerdown").innerHTML += "<br>" + tested1 + " " + tested2;
		}
}