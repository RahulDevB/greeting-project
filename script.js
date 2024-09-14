        const greet = document.querySelector(".greet");
        const main = document.querySelector(".main");
        const hours = new Date().getHours();

        if(hours >= 5 && hours <= 12){
            greet.textContent = "Morning";
            main.style.backgroundImage = `url("images/wp11352103-extraordinary-attorney-woo-wallpapers.jpg")`;
        } else if (hours > 12 && hours <= 18){
            greet.textContent = "Afternoon";
            main.style.backgroundImage = `url( "images/wp11352138-extraordinary-attorney-woo-wallpapers.jpg")`;
        } else {
            greet.textContent = "Evening";
            main.style.backgroundImage = `url("images/wp11352115-extraordinary-attorney-woo-wallpapers.jpg")`;
        };