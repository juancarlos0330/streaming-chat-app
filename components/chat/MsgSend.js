import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

// import components
import MemeGallery from "./MemeGallery";

// import Global style sheets
import GlobalStyle from "../../styles/GlobalStyle";

const MsgSend = (props) => {
  const [message, setMessage] = useState("");
  const [isLongMsgVisible, setLongMsgVisible] = useState(false);
  const [isGalleryVisible, setGalleryVisible] = useState(false);

  const handleSetMessage = (e) => {
    e.trim().length > 0 ? setLongMsgVisible(true) : setLongMsgVisible(false);
    setMessage(e.trim());
  };

  const toggleGalleryVisible = () => {
    setGalleryVisible(!isGalleryVisible);
  };

  return (
    <>
      {!isLongMsgVisible ? (
        <View style={styles.msgContent}>
          <TouchableOpacity
            style={styles.msgBtn}
            onPress={() => props.toggleHideChatSectionFlag()}
          >
            <Entypo
              name="chevron-thin-up"
              size={20}
              color={GlobalStyle.color.white}
              style={!props.hideChatSectionFlag ? styles.chevronIcon : null}
            />
          </TouchableOpacity>
          <View style={styles.msgInput}>
            <TextInput
              style={styles.textInput}
              placeholder="A message..."
              placeholderTextColor={GlobalStyle.color.primary}
              onChangeText={(e) => handleSetMessage(e)}
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
          <TouchableOpacity
            style={styles.msgBtn}
            onPress={() => toggleGalleryVisible()}
          >
            <MaterialCommunityIcons
              name="sticker-emoji"
              size={20}
              color={GlobalStyle.color.primary}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.msgBtnActive}>
            <Text style={styles.msgText}>Z</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.msgContent}>
          <View style={styles.msgBtn}>
            <Image
              source={{
                uri: "https://s3-alpha-sig.figma.com/img/c5dc/d1d1/3cddff1f356a74503a8b889871f3e425?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HErlGpVGC7NisQXCLsDFENX75-ACsOOLp1VKOUnYuY6z5p~xbDbIapoQ4QlnymlN9i82E8PEPjZjAVabN6Pv-cr8Fg24W-fBRTAn7yWzajaitbe2ADHy4opGNnor0VdqkteR9VY-JVzgLQkwpNtUk4-edNrzLbC1lN4-nS1w7QoPlY84cvN0dWCZImZcG2uDDV1hQoeCHsmfPuhaWjgaTsNH-pCxLgursobebYAOwMg0yrmPWZ~nL2IcBPDN-kYhNHhcKZbCFX5qQTmpmRCFg64vcrnyLL0KINoRcKirLDo-JQMfB3r8ue8kzcdE2hEpW1FjzRGOXFDth23efOyHwA__",
              }}
              style={styles.msgSendAvatar}
            />
          </View>
          <View style={styles.msgLongInput}>
            <TextInput
              style={styles.textLongInput}
              placeholder="A message..."
              placeholderTextColor={GlobalStyle.color.primary}
              onChangeText={(e) => handleSetMessage(e)}
              value={message}
            />
            <TouchableOpacity style={styles.msgZBtn}>
              <Text style={styles.msgZText}>Z</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.msgSendBtn}>
            <FontAwesome
              name="send-o"
              size={20}
              color={GlobalStyle.color.black}
            />
          </TouchableOpacity>
        </View>
      )}
      {isGalleryVisible ? (
        <MemeGallery toggleGalleryVisible={toggleGalleryVisible} />
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  msgContent: {
    flexDirection: "row",
    borderStyle: "solid",
    borderTopColor: GlobalStyle.borderColor.primary,
    borderTopWidth: 1,
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
  msgSendAvatar: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  msgLongInput: {
    backgroundColor: GlobalStyle.backgroundColor.message,
    flex: 1,
    height: 45,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 15,
    position: "relative",
  },
  msgZBtn: {
    borderRadius: 50,
    backgroundColor: GlobalStyle.backgroundColor.message,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderColor: GlobalStyle.borderColor.vipPrimary,
    borderStyle: "solid",
    borderWidth: 1,
    position: "absolute",
    right: 10,
  },
  msgZText: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyle.color.vipPrimary,
  },
  textLongInput: {
    color: GlobalStyle.color.primary,
    fontSize: 14,
    paddingRight: 30,
  },
  msgSendBtn: {
    borderRadius: 50,
    backgroundColor: GlobalStyle.backgroundColor.vipPrimary,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "transparent",
    borderStyle: "solid",
    borderWidth: 1,
  },
});

export default MsgSend;
