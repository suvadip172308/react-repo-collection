import { ChatMessage, chatSocketConnection, EventType } from "./chat";
import "./App.css";
import { useEffectOnce } from "./hooks";
import { useContext, useState } from "react";
import { THEME, ThemeContext } from "./main";

export default function App() {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const themeContext = useContext(ThemeContext);

  useEffectOnce(() => {
    const socket = chatSocketConnection();
    socket.on(EventType.ChatMessage, (data: ChatMessage) => {
      console.log(data);
      setChatMessages((prevChats) => [ ...prevChats, data]);
    });
  }, []);

  const handleMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    
    if(isChecked) {
      themeContext.setThemeStyle(THEME.dark);
    } else {
      themeContext.setThemeStyle(THEME.light);
    }
  }

  return (
    <div className={`w-screen h-screen flex flex-col p-2`}>
      <h1 className="text-red-500 text-2xl">Magic Chat App</h1>
      <div className="px-4 py-2">
        <span>Color blind mode</span>
        <input type="checkbox" className="mx-3 border-2 p-2" onChange={handleMode}/>
      </div>
      <div className={`
          shadow-lg px-4 py-8 h-4/5 w-2/5 overflow-auto rounded-lg 
          ${themeContext.themeStyle.backgroundColor} ${themeContext.themeStyle.textColor}
        `}>
        <ul>
          {
            chatMessages?.map((message, index) => {
              return(
                <li key={index}>
                  <span className="mx-2" style={{color: message.user.color}}>{message.user.username}</span>:
                  <span>{message.body}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}
