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
        const greet = document.querySelector(".greet");
        const container = document.querySelector(".container");
        const main = document.querySelector(".main");
        const aboutBtn = document.querySelector(".about-btn");
        const hours = new Date().getHours();
        let isGreeting = true;

        const setgreetingMessage = () => {
            if(hours >= 5 && hours <= 12){
                greet.textContent = "Morning";
                main.style.backgroundImage = `url("images/wp11352103-extraordinary-attorney-woo-wallpapers.jpg")`;
            } else if (hours > 12 && hours <= 18){
                greet.textContent = "Afternoon";
                main.style.backgroundImage = `url( "images/wp11352138-extraordinary-attorney-woo-wallpapers.jpg")`;
            } else {
                greet.textContent = "Evening";
                main.style.backgroundImage = `url("images/wp11352115-extraordinary-attorney-woo-wallpapers.jpg")`;
            }
        };

        setgreetingMessage();
        
        aboutBtn.addEventListener("click", () => {
            if(isGreeting){
                container.innerHTML = '<h3 class="about-her">A character played by Park Eun-Bin in the Kdrama named "Extraordinary Attorney Woo".It follows Woo Young-woo, who diagnosed with autism spectrum disorder, 27-year-old Woo Young Woo graduated at the top of her class from the prestigious Seoul National University for both college and law school due to her high IQ of 164, impressive memory, and creative thought process. Working as a lawyer, she finds herself struggling when it comes to social interactions</h3>';
                aboutBtn.innerHTML = `<i class="fa-solid fa-arrow-left fa-lg"></i>`
            } else {
                container.innerHTML = '<h1 class="greeting">Good <span class="greet"></span> Attorney Woo Young Woo</h1>';
                setgreetingMessage();
                aboutBtn.innerHTML = `About her`;
            }
            isGreeting = !isGreeting;
        });