    const TeaPic = document.getElementById('teaPic');
    TeaPic.addEventListener("mouseover",teaFunction);
    TeaPic.addEventListener("mouseout",teaFunction2);

    function teaFunction(){
      document.getElementById("Tea").innerHTML = "One of the first HTML & CSS Projects I did";
    }

    function teaFunction2(){
      document.getElementById("Tea").innerHTML = "Tea Cozy";
    }

    const ShopPic = document.getElementById('shopPic');
    ShopPic.addEventListener("mouseover",shopFunction);
    ShopPic.addEventListener("mouseout",shopFunction2);

    function shopFunction(){
      document.getElementById("myShop").innerHTML = "My first project playing around with a bit of JavaScript on top of HTML & CSS !";
    }

    function shopFunction2(){
      document.getElementById("myShop").innerHTML = "My Arts & Crafts Shop";
    }

    const AnimalPic = document.getElementById('animalPic');
    AnimalPic.addEventListener("mouseover",animalFunction);
    AnimalPic.addEventListener("mouseout",animalFunction2);

    function animalFunction(){
      document.getElementById("Animal").innerHTML = "Project involving a lot more JavaScript and manipulating the DOM";
    }

    function animalFunction2(){
      document.getElementById("Animal").innerHTML = "Fun Animal Facts";
    }

    const GamePic = document.getElementById('gamePic');
    GamePic.addEventListener("mouseover",gameFunction);
    GamePic.addEventListener("mouseout",gameFunction2);

    function gameFunction(){
      document.getElementById("myGame").innerHTML = "A collection of Javascript Games I have done. New games constantly added";
    }

    function gameFunction2(){
      document.getElementById("myGame").innerHTML = "Gilbert's Game Room";
    }