import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import "./ChatInput.css"

    
export function ChatInput({ chatMessages, setChatMessages }) {
      const [inputText, setInputText] = useState("");

      function sendMessagaWithEnter(event) {
        if (event.key === "Enter") {
          sendMessage();
        }

        if (event.key === "Escape") {
          setInputText("");
        }
      }


      function saveInputText(event) {
        setInputText(event.target.value);
      }

      async function sendMessage() {

        setInputText('');

        const newChatMessages = [
          ...chatMessages,
          {
            message: inputText,
            sender: "user",
            id: crypto.randomUUID()
          },
        ]

        setChatMessages([
          ...newChatMessages,
          // This creates a temporary Loading... message.
          // Because we don't save this message in newChatMessages,
          // it will be remove later, when we add the response.
          {
            message: 'Loading...',
            sender: 'robot',
            id: crypto.randomUUID()
          }
        ]);


        const response = await Chatbot.getResponseAsync(inputText);

        setChatMessages([
          ...newChatMessages,
          {
            message: response,
            sender: "robot",
            id: crypto.randomUUID()
          },

        ]);

      }

      return (
        <div className="chat-input-container">
          <input placeholder="Envie a sua mensagem" size="30"
            onChange={saveInputText}
            onKeyDown={sendMessagaWithEnter}
            value={inputText}
            className="chat-input"
          />
          <button
            onClick={sendMessage}
            className="send-button"
            id="send-button">
            Send</button>
        </div>
      );
    }