/* eslint-disable react/prop-types */
import {PrettyChatWindow} from "react-chat-engine-pretty"

const ChatPages = (props) => {
document.title = 'Chats'

return<div className="background">
  <PrettyChatWindow
  projectId= {import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
  username={props.user.username}
  secret={props.user.secret}
  /></div>
}

export default ChatPages