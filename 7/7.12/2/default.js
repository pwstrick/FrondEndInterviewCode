var obj = {
    name: "strick",
    getName: function() {
        console.log(this.name); 	//"strick"
    }
};
obj.getName();