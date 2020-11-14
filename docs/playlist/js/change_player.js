        function imagefun() {
            var Image_Id = document.getElementById('getImage');
            if (Image_Id.src.match("../img/player/player.jpg")) {
                Image_Id.src = "../img/player/player.gif";
            }
            else {
                Image_Id.src = "../img/player/player.jpg";
            }
        } 