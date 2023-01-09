import './App.css';
import './normale.css';

function App() {
  return (
    <div className='App'>
      <aside className='sidemenu'>
        <div className='aside-menu-button'>
          <span>+</span>New Chat
        </div>
      </aside>
      <secttion className='chatbox'>
        <div className='chat-log'>
          <div className='chat-message'>
            <div className='chat-message-center'>
              <div className='avatar'>me</div>
              <div className='message'>Hello world</div>
            </div>
          </div>
          <div className='chat-message chatgpt'>
            <div className='chat-message-center'>
              <div className='avatar chatgpt'></div>
              <div className='message'>I am in </div>
            </div>
          </div>
        </div>
        <div className='chat-input-holder'>
          <textarea className='chat-input-textarea' rows='1'></textarea>
        </div>
      </secttion>
    </div>
  );
}

export default App;
