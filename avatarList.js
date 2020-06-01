class avatarList { // creates class for the avatar list

    constructor () { // creates the empty list
        this.list = {};
    }

    add(avatar){ 
        let id = avatar.getId(); // getting the avatars name/id
        if(this.list[id]){ // check if the id is a duplicate (checks the guest list)
            console.log("ERROR: duplicate avatar id " + id); // report duplicate 
            return; 
        }
        this.list[id] = avatar; // if no error add it to the list
    }

    remove(id){
        let avatar = this.list[id]; // assigning the avatar based on id
        avatar.remove(); // killing the avatar 
        delete this.list[id]; // removes from list 
    }    

    refresh() {
        for (let id in this.list) { // go throgh all the ids in the list
            let avatar = this.list[id]; // assigning the avatar based on id
            if (!avatar.refresh()) { // refresh then check the return code
                this.remove(id); // kills and removes if refresh says to (assasin for hire)
            };
        }
    }
}

