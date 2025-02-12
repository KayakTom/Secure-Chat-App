import './styles.css';
import './App.css';

function SendButton(){
    return(
        <button name = "sendMessage" className = "message">SEND</button>
    );
}

function ChatBox(){
    return(
        <input name = "userMessage" type = "text" className = "message" placeholder = "Enter Message Here..."></input>
    );
}

function ChatMessage(){
    return(
        <p>message</p>
    );

}

function chatInterface(){
    return(
    <>
        <div className = "title">
            <h1>Secure Chat App</h1>
            <div className = "creator">
                <h2>By: Tom Cowan</h2>
            </div>
        </div>
        <div className = "message">
            <ChatBox />
                <SendButton />
        </div>

        <div className = "chat">
            <ChatMessage />
        </div>
    </>
    );
}

export default chatInterface;
