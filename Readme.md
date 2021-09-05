# Tiwtch KitBasico
Un kit de cosas echas en HTML, para poder usar en tu Stream.

# Chat
Muestra en tiempo real lo que escrie el chat.

![Chat](/assets/chat01.jpg)

## Configuracion
En el archivo `js/chat.js`, encontrar un apartado en donde podras configurarlo a tu gusto.

```js 
const config = {
  //Aqui va tu canal
	channels: ["Furiduri"],
	//Quitar o no, los mensajes despues de cierto tiempo
	static: {
    available: true,
		// en segundos
		time: 60
	},
  //Separador entre nombre de usuario y mensaje
  colon: ': ',
  //Usa las clases Css de esta libreria de animaciones https://www.minimamente.com/project/magic/
  animation: { 
    In:"slideLeftReturn",
    Out: "slideLeft"
  },
  //Configura si quieres que se vea la hora del comentario, asi como los Badges que tiene el usuario en tu canal
  Show: {
    TimeSpan: true,
    Badges: true
  },
  //Modo testeo, entra a calanes random y muestra sus mensajes
  testing: true
}
```

## Estilos
Para modificar los estilos del Chat, esta el archivo `css/Chat.css`, la estructura HTML usada en cada mensaje es la siguiente.
```html
<div class="chat-line visible" channel="furiduri" message-id="ca430f16-b522-4fb9-b899-fba6a902b78c" user-id="35848670" channel-id="35848670" username="furiduri">
    <div class="chat-line-inner">
        <span class="badges">
            <img src="https://static-cdn.jtvnw.net/badges/v1/{badgeID}/1"
            badgetype="broadcaster" alt="broadcaster" class="badge">
        </span>
        <span></span>
        <span class="user-name">
            {Usuario}
        </span>
        <span class="message-colon">
            {config.colon}
        </span>
        <span class="message">
            {Mensaje}
        </span>
    </div>
    <span class="timespan">{hora 24hrs}:{minuto}</span>
</div>
```

# Creditos

El chat usado como base fue creado por **Jacob Foster** puedes encontrar el codigo sin modificaciones en [CodePen.io](https://codepen.io/Alca/pen/zzomog).

Buscame en mis demas redes: 

[
![Icono Twitch - Furiduri](assets/twitch.png "Twitch")
](https://www.twitch.tv/furiduri) 
[
![Icono Twitter - Furiduri](assets/twitter.png "Twitter")
](https://twitter.com/Furiduri)
