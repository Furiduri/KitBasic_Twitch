window.onload = () =>{
    const content = document.getElementById('content');
    const client = new tmi.Client({
        //https://www.twitch.tv/furiduri
        channels: [ 'furiduri' ]
    });
    
    
    client.connect().catch(console.error);
    
    client.on('message', (channel, tags, message, self) => {
        if(self) return;


        
    });

}