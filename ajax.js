// Access-Control-Allow-Origin = "Access-Control-Allow-Origin";// ":" origin-list-or-null | "*"

let req;

const loopBadge = (response) => {
    response = JSON.parse(response);

    let main = document.querySelector('.main--badges');

    for(let i = 0; i < response.length; i++)
    {
        let badge = document.createElement('div');
        badge.classList.add('div--badges');
        main.appendChild(badge);

        let title = document.createElement('header');
        title.innerText = response[i].name;;
        badge.appendChild(title);

        let area = document.createElement('a');
        area.href = response[i].badge_uri;
        badge.appendChild(area);

        let img = document.createElement('img');
        img.src = response[i].image;
        area.appendChild(img);

    
    }

};


window.load = new function(){

    req = new XMLHttpRequest();
    // req.onload = function(e){console.log('onload' + e);};

    // req.onprogress = function(e){ console.log('onprogress' + e);};
    // req.onerror = function(e){ console.log('onerror' + e);};
    // req.onloadend = function(e){console.log('onloaded' + e);};

    req.onreadystatechange = function(e){
        if(this.readyState === XMLHttpRequest.DONE && this.status === 200)
        {
            loopBadge(this.response);
        }
    };

    req.open('get', "https://inside.becode.org/api/v1/badges", true);
    req.send("*");
};

