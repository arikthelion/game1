class avatar {

    constructor(id, type, image, x, y, size){ // constructs avatar
        this.id = id;
        this.image = image;
        this.x = x;
        this.y = y;
        this.size = size;
        this.type = type;
        this.dob = new Date();
    }

    getId() { // gets id
        return this.id;
    }

    render(element) { 
        this.area = element; // remember the area of the avatars
        this.el = element.appendChild(shapes.drawShape("target", this.size, this.size)); // draw the avatar and put it in the area
        shapes.position(this, this.x, this.y); // sets the avatars position
    }

    setSpeed(speedX, speedY) { 
        this.speedY = speedY;
        this.speedX = speedX;
    }

    refresh() {   
        let box = this.area.getBoundingClientRect(); //  gets the dimensions of the area's boundary
        if (this.x < 0-this.size || this.y < 0-this.size || this.x > box.width || this.y > box.height) // if its outside of the area 
            return false; // kill
        let now = new Date(); // get the current date
        let timePassed = now - this.lastMove; // get time passed since last move
        this.lastMove = now; // reset latest move
        this.y += this.speedY*timePassed/100; // adds distance based on time and speed
        this.x += this.speedX*timePassed/100;
        this.inTransition = true;
        shapes.position(this, this.x, this.y); // sets new postion
        return true;
    }

    formatDate(d) {
        return `${d.getMonth()}/${d.getDate()}/${d.getFullYear()}`;
    }

    remove() {
        console.log(`R.I.P ${this.id} ${this.formatDate(this.dob)} - ${this.formatDate(new Date())}`);
        this.area.removeChild(this.el);
    }

   
}
