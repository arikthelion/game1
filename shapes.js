class shapes {

    drawShape(type, width, height) {

        let svg = [`<svg class="shape shape_${type}" style="visibility:hidden;" width=${width} height="${height}">`];
        switch (type) {
            case("target"):
                let radius = Math.round(Math.min(height, width)*5)/10;
                for (let r = radius, color = "red" ; r>0; r -= radius/7){
                    svg.push(`<circle cx="${radius}" cy="${radius}" r="${Math.round(r*10)/10}" stroke-width="0" fill="${color}"/>`);
                    color = (color === "red")? "white": "red";
                }
                break;
            case("crossHair"):
                svg.push(`<line x1="0" y1="${height/2}" x2="${width*0.4}" y2="${height/2}" stroke-width="3" stroke-color="black"/>`);        
                break; 
        }
        svg.push(`</svg>`);
        let container = document.createElement("div"); // creates the div 
        container.innerHTML = svg.join("\n"); // put the svg inside the div
        return container.firstElementChild; // returns the
    }
    
    static position(shape, x, y){ // sets the avatars x and y position within the area
        shape.y = y; 
        shape.x = x;
        shape.el.style.transform = `translate3d(${this.x}px, ${this.y}px, 0px)`; // moving the avatar to the newly defined location
        shape.el.style.visibility = "visible"; // makes it visible
        shape.lastMove = new Date(); // record the time of the last postioining
    }

}