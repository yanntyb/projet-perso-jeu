function Map(width,height){
    this.width = width;
    this.height = height;
}

Map.prototype.initMap = function (){
    this.map = document.createElement("div");

    this.map.id = "map";

    this.map.style.width = this.width + "px";
    this.map.style.height = this.height + "px";

    document.body.append(this.map)
}


export {Map}