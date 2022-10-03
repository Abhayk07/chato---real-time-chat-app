# chato---real-time-chat-app
Real-time chat application - chato
This is an extensible real-time chat application that provides an interface for multiple users to chat at the same time. Front-end technology - HTML, CSS
BackEnd Technologies - JavaScript, Node.js
The Socket.io module is used for a two-way connection between the client and the server.  FrontEnd includes a navigation bar, chat window, and a form submit button to send messages. HTML is used to prepare the application structure. CSS is used to style the application.  Added client-side JavaScript to play with DOM elements. The first is to store all  DOM elements in a corresponding JS variable.  Used an audio file (ting.mp3) to notify when a message is received. Whenever a new user tries to join, ask for their name first  and let the server know.  If a new user joins, get the event from the server using eventListner.  Receive message from server using receive function.  If the user leaves the chat, notify all  other users that this user has left the chat. The server-side JavaScript will handle  Socket IO connections.  If a new user joins, notify other users connected to the server. If someone sends a message, spread it to others. If someone leaves the chat, let the other person know. Application run process
run node server /index.js
Install live server extension  for Code Vs. Extension ID - ritwickdey.liveserver
Once the extension is installed, navigate to index.html and open it for editing. Right-click anywhere in the index.html file  and from the menu that appears select Open with Live Server
A version of the application will appear in the browser.  Copy the url from the address bar and open another instance in another tab or incognito mode or in  another browser.
 
