import React from "react";
// import { createChatBotMessage } from "react-chatbot-kit";

const ActionProvider = ({ setState, children }) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          action: {},
        });
      })}
    </div>
  );
};

export default ActionProvider;
