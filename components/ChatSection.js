import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// import global style
import GlobalStyle from "../styles/GlobalStyle";

// import components
import Chat from "./chat/Chat";
import Group from "./chat/Group";
import Vip from "./chat/Vip";
import MsgSend from "./chat/MsgSend";

const ChatSection = () => {
  const [hideChatSectionFlag, setHideChatSectionFlag] = useState(true);
  const [chatType, setChatType] = useState("chat");

  const handleSetChatType = (type) => {
    setChatType(type);
  };

  const toggleHideChatSectionFlag = () => {
    setHideChatSectionFlag(!hideChatSectionFlag);
  };

  return (
    <View style={styles.container}>
      {hideChatSectionFlag ? (
        <View style={styles.tapContent}>
          <TouchableOpacity
            style={styles.tapBtn}
            onPress={() => handleSetChatType("chat")}
          >
            <Text
              style={
                chatType === "chat" ? styles.tapTextActive : styles.tapText
              }
            >
              Chat
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tapBtn}
            onPress={() => handleSetChatType("group")}
          >
            <Text
              style={
                chatType === "group" ? styles.tapTextActive : styles.tapText
              }
            >
              Group
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tapBtn}
            onPress={() => handleSetChatType("vip")}
          >
            <Text
              style={chatType === "vip" ? styles.tapTextActive : styles.tapText}
            >
              Vip
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}

      {hideChatSectionFlag ? (
        chatType === "chat" ? (
          <Chat />
        ) : chatType === "group" ? (
          <Group />
        ) : (
          <Vip />
        )
      ) : null}

      <MsgSend
        hideChatSectionFlag={hideChatSectionFlag}
        toggleHideChatSectionFlag={toggleHideChatSectionFlag}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tapContent: {
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    gap: 25,
    paddingHorizontal: 20,
  },
  tapBtn: {
    alignItems: "center",
    justifyContent: "center",
  },
  tapTextActive: {
    fontSize: 18,
    color: GlobalStyle.color.white,
  },
  tapText: {
    fontSize: 18,
    color: GlobalStyle.color.primary,
  },
});

export default ChatSection;
