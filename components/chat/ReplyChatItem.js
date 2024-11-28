import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

// import components
import isEmpty from "../../utils/is-empty";

// import global style sheets
import GlobalStyle from "../../styles/GlobalStyle";

const ReplyChatItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <View style={styles.avatarSection}>
          <Image style={styles.avatar} source={{ uri: props.item.avatar }} />
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
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: 20,
    marginLeft: 45,
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
});

export default ReplyChatItem;
