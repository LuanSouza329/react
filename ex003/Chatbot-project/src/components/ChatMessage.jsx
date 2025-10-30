
import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/user.png";
import "./ChatMessage.css";

export function ChatMessage({ message, sender }) /*Desestruturação diretamente na chamada*/ {
    /*const { message, sender } = props;*/

    /* if (sender === "robot") {
      return (
        <div>
          <img src="robot.png" width="50" />
          {message}
        </div>
      );
    }*/

    return (
        /*If curto: Sender igual "robot" então faça <img src="robot.png">*/

        <div className={sender === "user"
            ? "chat-message-user"
            : "chat-message-robot"
        }>
            {sender === "robot" && <img src={RobotProfileImage} className="chat-message-profile" />}
            <div className="chat-message-text">
                {message}
            </div>
            {sender === "user" && <img src={UserProfileImage} className="chat-message-profile" />}
        </div>
    );
}

