function Hero(position){
    this.x = position[0];
    this.y = position[1];
    this.perso = document.createElement("img");
    this.perso.id = "hero";
}

Hero.prototype.print = function (){
    let map = document.getElementById("map");

    this.perso.style.top = this.y + "px";
    this.perso.style.left = this.x + "px";

    map.append(this.perso);
}

Hero.prototype.chooseImg = function (img){
    this.perso.src = "./sprite/walk/" + img;
    this.print();
}

Hero.prototype.walk = function (){
    let _this = this
    window.addEventListener("keydown",function (event){
        let posTimer = 0;
        if(event.key === "ArrowUp"){
            _this.chooseImg("up/walk.gif")
            let move = true;
            function timer(){
                window.setTimeout(function (){
                    if(move){
                        if(posTimer < 10)
                        {
                            if(_this.y > 0){
                                _this.y -= 2;
                                _this.print();
                                posTimer++;
                                timer();
                            }

                        }
                        else{
                            move = false;
                            _this.chooseImg("up/fix.png");
                        }
                    }

                },100)
            }
            timer()
        }

    })
}

export {Hero}