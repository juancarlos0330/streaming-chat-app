import React, { useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
} from "react-native";
import EmojiSelector, { Categories } from "react-native-emoji-selector";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// import components
import isEmpty from "../../utils/is-empty";

// import global style sheets
import GlobalStyle from "../../styles/GlobalStyle";
import ReplyChatItem from "./ReplyChatItem";

const ReplyModal = (props) => {
  const [message, setMessage] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleEmojiSelected = (emoji) => {
    setMessage(message + emoji);
    toggleModal();
  };

  return (
    <Modal
      visible={props.isReplyModalVisible}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.modalReplyContainer}>
        <View style={styles.modalReplyContent}>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => props.toggleReplyModal()}
          >
            <Text style={styles.closeText}></Text>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>
            Replying to {props.item.username}
          </Text>
          <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
              <View style={styles.chatContent}>
                <View style={styles.avatarSection}>
                  <Image
                    style={styles.avatar}
                    source={{ uri: props.item.avatar }}
                  />
                </View>
                <View style={styles.itemSection}>
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
                </View>
              </View>

              {!isEmpty(props.item.emojies) ? (
                <View style={styles.emojiSection}>
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
            {!isEmpty(props.item.replies)
              ? props.item.replies.map((value, key) => {
                  return <ReplyChatItem key={key} item={value} />;
                })
              : null}
          </ScrollView>
          <View style={styles.msgContent}>
            <View style={styles.msgInput}>
              <TextInput
                style={styles.textInput}
                placeholder="Write a reply"
                placeholderTextColor={GlobalStyle.color.primary}
                onChangeText={setMessage}
                value={message}
              />
            </View>
            <TouchableOpacity style={styles.msgBtn}>
              <Feather
                name="camera"
                size={20}
                color={GlobalStyle.color.primary}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.msgBtn} onPress={toggleModal}>
              <MaterialCommunityIcons
                name="sticker-emoji"
                size={20}
                color={GlobalStyle.color.primary}
              />
            </TouchableOpacity>

            <Modal
              visible={isModalVisible}
              animationType="slide"
              transparent={true}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <EmojiSelector
                    category={Categories.all}
                    onEmojiSelected={handleEmojiSelected}
                    showSearchBar={false}
                    showTabs={true}
                    columns={8}
                  />
                  <Button title="Close" onPress={toggleModal} />
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalReplyContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalReplyContent: {
    width: "100%",
    height: "90%",
    backgroundColor: GlobalStyle.backgroundColor.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  closeBtn: {
    paddingBottom: 25,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  closeText: {
    width: 50,
    height: 5,
    borderRadius: 50,
    backgroundColor: GlobalStyle.backgroundColor.vipPrimary,
  },
  modalTitle: {
    color: GlobalStyle.color.white,
    fontSize: 16,
    marginBottom: 30,
  },
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: 20,
    gap: 5,
  },
  chatContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 10,
    width: "100%",
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
  msgContent: {
    flexDirection: "row",
    borderStyle: "solid",
    borderTopColor: GlobalStyle.borderColor.primary,
    borderWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  msgInput: {
    backgroundColor: GlobalStyle.backgroundColor.message,
    flex: 1,
    height: 45,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 15,
  },
  textInput: {
    color: GlobalStyle.color.primary,
    fontSize: 14,
  },
  msgBtn: {
    borderRadius: 50,
    backgroundColor: GlobalStyle.backgroundColor.message,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "transparent",
    borderStyle: "solid",
    borderWidth: 1,
  },
  chevronIcon: {
    transform: [{ rotate: "180deg" }],
  },
  msgBtnActive: {
    borderRadius: 50,
    backgroundColor: GlobalStyle.backgroundColor.message,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderColor: GlobalStyle.borderColor.vipPrimary,
    borderStyle: "solid",
    borderWidth: 1,
  },
  msgText: {
    fontSize: 20,
    fontWeight: "bold",
    color: GlobalStyle.color.vipPrimary,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    height: "60%",
    backgroundColor: GlobalStyle.backgroundColor.primary,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
});

export default ReplyModal;
