window.onload = function() {
 
    var messages = []; // no messages at first
    var socket = io.connect('http://localhost:3700');
    var field = document.getElementById("field");
    var sendButton = document.getElementById("send");
    var content = document.getElementById("content");
    var name = document.getElementById("name");
 
    // displays the chat messages
    socket.on('message', function (data) {
        if(data.message) {
            messages.push(data);
            var html = '';
            for(var i=0; i<messages.length; i++) {
                html += '<b>' + (messages[i].username ? messages[i].username : 'Server') + ': </b>';
                html += messages[i].message + '<br />';
            }
            //scrolling... not supported in IE7
            content.innerHTML = html;
            content.scrollTop = content.scrollHeight;
        } else {
            console.log("There is a problem:", data);
        }
    });
 
    // sends the message to socket.io
    sendButton.onclick = sendMessage = function() { 
        if(name.value == "") {
            alert("Please type your name!");
        } else {
            var text = field.value;
            socket.emit('send', { message: text, username: name.value });
            field.value = "";
        }
    };
    // listens if the user presses the 'enter' button to submit a message
    $(document).ready(function() {
    $("#field").keyup(function(e) {
        if(e.keyCode == 13) {
            sendMessage(); // a.k.a sendButton.onclick
        }
    });
});
 
}