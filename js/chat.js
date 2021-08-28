const config = {
    animates: {
        In: "animate__fadeInLeft",
        Out: "animate__fadeOutLeft"
    },
    Static: {
        Is: true,
        Time: 5000
    }
}

window.onload = () =>{
    const content = document.getElementById('content');
    const client = new tmi.Client({
        //https://www.twitch.tv/furiduri
        channels: [ 'furiduri' ]
    });
    
    
    client.connect().catch(console.error);
    
    client.on('message', (channel, tags, message, self) => {
        if(self) return;
        console.log(tags);
        AddMenssage(tags, message);
    });

    if(!config.Static.Is)
        window.setInterval(()=>{
            if(content.firstChild) 
                if(content.firstChild.classList){
                    content.firstChild.classList.add(config.animates.Out);
                    window.setTimeout(()=>{content.removeChild( content.firstChild);}, 1000);            
                }else{
                    content.removeChild( content.firstChild);
                }
        },config.Static.Time);
    
        
    function DeleteOldMensage(){
        if(content.clientHeight > 550){
            if(content.firstChild){            
                content.removeChild( content.firstChild);
            }
        }        
    }
 
    function AddMenssage(tags, message) {
        if (content.lastChild)
            if (content.lastChild.classList)
                content.lastChild.classList.remove(config.animates.In);
    
        content.innerHTML += `<div id="${tags.id}" class="box is-light  is-block message animate__animated ${config.animates.In}">
                                    <p class="text">
                                        <span class="time">${GetTime()}</span>
                                        <span class="name" style="color: ${tags.color}">
                                        ${tags["display-name"]}::
                                        </span>
                                        <span class="msg">
                                         ${getMessageHTML(message, tags, 1)}
                                        </span>
                                    </p>
                                </div>`;
        DeleteOldMensage();
    }
};

