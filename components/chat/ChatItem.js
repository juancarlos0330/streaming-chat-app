import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
  Modal,
} from "react-native";
import EmojiSelector, { Categories } from "react-native-emoji-selector";

// import components
import ReplyModal from "./ReplyModal";
import isEmpty from "../../utils/is-empty";

// import global style sheets
import GlobalStyle from "../../styles/GlobalStyle";

const ChatItem = (props) => {
  const [replyFlag, setReplyFlag] = useState(false);
  const [isEmojiModalVisible, setEmojiModalVisible] = useState(false);
  const [isReplyModalVisible, setReplyModalVisible] = useState(false);

  const toggleEmojiModal = () => {
    setEmojiModalVisible(!isEmojiModalVisible);
  };

  const toggleReplyModal = () => {
    setReplyModalVisible(!isReplyModalVisible);
  };

  const handleEmojiSelected = (emoji) => {
    toggleEmojiModal();
  };

  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <View style={styles.avatarSection}>
          <Image style={styles.avatar} source={{ uri: props.item.avatar }} />
        </View>
        <TouchableOpacity
          style={styles.itemSection}
          onPress={() => setReplyFlag(!replyFlag)}
        >
          <View style={styles.titleSection}>
            <Text style={styles.username}>{props.item.username}:</Text>
            <Text style={styles.title}>{props.item.title}</Text>
          </View>
          <View style={styles.msgSection}>
            <Text style={styles.msg}>{props.item.message}</Text>
          </View>
          {!isEmpty(props.item.attachment) ? (
            <View style={styles.attachmentSection}>
              {props.item.attachment.map((value, key) => {
                return (
                  <Image
                    key={key}
                    style={styles.attachmentImage}
                    source={{ uri: value }}
                  />
                );
              })}
            </View>
          ) : null}
        </TouchableOpacity>
      </View>
      {!isEmpty(props.item.emojies) || replyFlag ? (
        <View style={styles.emojiSection}>
          {replyFlag ? (
            <View style={styles.replySection}>
              <Text style={styles.createDate}>
                {new Date(props.item.createdDate).getMinutes()}m
              </Text>
              <TouchableOpacity onPress={toggleEmojiModal}>
                <Text style={styles.replyText}>React</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleReplyModal}>
                <Text style={styles.replyText}>Reply</Text>
              </TouchableOpacity>
            </View>
          ) : null}
          {!isEmpty(props.item.emojies) ? (
            <View style={styles.emojiContent}>
              {props.item.emojies.map((value, key) => {
                return (
                  <TouchableOpacity style={styles.emojiItem} key={key}>
                    <Text style={styles.emoji}>{value.text}</Text>
                    <Text style={styles.count}>{value.count}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>
      ) : null}

      <ReplyModal
        isReplyModalVisible={isReplyModalVisible}
        item={props.item}
        toggleReplyModal={toggleReplyModal}
      />

      <Modal
        visible={isEmojiModalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalEmojiContainer}>
          <View style={styles.modalEmojiContent}>
            <EmojiSelector
              category={Categories.all}
              onEmojiSelected={handleEmojiSelected}
              showSearchBar={false}
              showTabs={true}
              columns={8}
            />
            <Button title="Close" onPress={toggleEmojiModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
    gap: 5,
  },
  chatContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 10,
  },
  avatarSection: {
    borderRadius: 50,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  itemSection: {
    flex: 1,
    backgroundColor: GlobalStyle.backgroundColor.chatItem,
    paddingHorizontal: 18,
    paddingVertical: 15,
    borderRadius: 16,
    flexDirection: "column",
    gap: 7,
  },
  titleSection: {
    flexDirection: "row",
  },
  username: {
    color: GlobalStyle.color.white,
    fontWeight: "bold",
    marginRight: 5,
  },
  title: {
    color: GlobalStyle.color.vipPrimary,
    fontWeight: "bold",
  },
  msgSection: {
    flexDirection: "row",
  },
  msg: {
    color: GlobalStyle.color.white,
    lineHeight: 18,
  },
  attachmentSection: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  attachmentImage: {
    width: 100,
    height: 100,
  },
  emojiSection: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
  replySection: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 45,
    gap: 10,
  },
  createDate: {
    color: GlobalStyle.color.initPrimary,
  },
  replyText: {
    color: GlobalStyle.color.primary,
  },
  emojiContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  emojiItem: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: GlobalStyle.borderColor.emojiPrimary,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 50,
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: GlobalStyle.backgroundColor.chatItem,
  },
  emoji: {
    fontSize: 12,
  },
  count: {
    color: GlobalStyle.color.primary,
    fontSize: 12,
  },
  modalEmojiContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalEmojiContent: {
    width: "90%",
    height: "60%",
    backgroundColor: GlobalStyle.backgroundColor.primary,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
});

export default ChatItem;
