var pulse = {};
var timeSlice = 1;

function main() {


    let element=document.getElementById("screen");    // gets the screen element
    let box = element.getBoundingClientRect();        // gets the dimensions of the element 
    element.style.marginTop = 10 * box.height/100;    // sets the top margin boundry(cannot use css for height%)
    element.style.marginBottom = 11.9 * box.height/100  // sets the bottom margin boundry
    let a1 = new avatar("target1", "target", "img/target1.png", box.width*0.8, box.height*.57, 80);  //creates avatars
    let a2 = new avatar("target2", "target", "img/target1.png", box.width*0.8, box.height*.36, 80); 
    let a3 = new avatar("target3", "target", "img/target1.png", box.width*0.8, box.height*.20, 80);
    a1.render(element); // renders avatars
    a2.render(element);
    a3.render(element);
    a1.setSpeed(0, 40); // sets x and y speeds
    a2.setSpeed(0, 20);
    a3.setSpeed(-50, 0);

    let aList = new avatarList(); // creates am empty list of all the avatars
    aList.add(a1); // adds avatars to the list
    aList.add(a2);
    aList.add(a3);
    element.appendChild(shapes.drawShape("crossHair", 20, 20));
    
    setInterval(tick, timeSlice, aList); // sets tick intervals for avatar movement
}

function tick(aList) { // every tick refreshes all the avatars on the list
    aList.refresh();
}
