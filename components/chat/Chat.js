import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ChatItem from "./ChatItem";

const ChatItemList = [
  {
    chatid: 1,
    avatar:
      "https://s3-alpha-sig.figma.com/img/4be3/e85b/59e83b5255094eea5488c3f4e25f2da1?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S0GvdCyiltM1IPXqMBP0uEnE1NlrlnuZVUW3GbxWyhyNrxXKU3fZ9-beof64Uj3d02K9Pv-v2joTRcAat4dmbzxIdEqAKMZSWH~9wzLzrl6c2N8NNYlSRXa1okgUtvHKkPLS4RqLMYSS2xHqDlVw~pj80cbll3z1Vke9eTYwzvHBKV9Oh81AVhXSnViit5wxuPEB0SQLi5mrDcmZhfMgHsRoyyapRuqmz3LvpZ7rhp5IF2misWnwGR0yD5NswTy8pPP0Z9qGUZkfYCbBgp~Xh9dIlCI7njo5lxnsHLG3LG21PaWGkI1g41sPN83cmccoSxEszZUsGbP2SvhM-crduA__",
    username: "Streamernick93",
    title: "donated 785 Zeez!",
    createdDate: "2024-07-18 10:10:00",
    message: "Enjoying the stream 💣 🇮🇹 🇸🇮 It’s the bomb!!! ",
    attachment: [],
    replies: [
      {
        replyid: 1,
        avatar:
          "https://s3-alpha-sig.figma.com/img/4be3/e85b/59e83b5255094eea5488c3f4e25f2da1?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S0GvdCyiltM1IPXqMBP0uEnE1NlrlnuZVUW3GbxWyhyNrxXKU3fZ9-beof64Uj3d02K9Pv-v2joTRcAat4dmbzxIdEqAKMZSWH~9wzLzrl6c2N8NNYlSRXa1okgUtvHKkPLS4RqLMYSS2xHqDlVw~pj80cbll3z1Vke9eTYwzvHBKV9Oh81AVhXSnViit5wxuPEB0SQLi5mrDcmZhfMgHsRoyyapRuqmz3LvpZ7rhp5IF2misWnwGR0yD5NswTy8pPP0Z9qGUZkfYCbBgp~Xh9dIlCI7njo5lxnsHLG3LG21PaWGkI1g41sPN83cmccoSxEszZUsGbP2SvhM-crduA__",
        username: "kingcool0330",
        message: "Enjoying the stream 💣 🇮🇹 🇸🇮 It’s the bomb!!! ",
        attachment: [],
      },
      {
        replyid: 2,
        avatar:
          "https://s3-alpha-sig.figma.com/img/4be3/e85b/59e83b5255094eea5488c3f4e25f2da1?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S0GvdCyiltM1IPXqMBP0uEnE1NlrlnuZVUW3GbxWyhyNrxXKU3fZ9-beof64Uj3d02K9Pv-v2joTRcAat4dmbzxIdEqAKMZSWH~9wzLzrl6c2N8NNYlSRXa1okgUtvHKkPLS4RqLMYSS2xHqDlVw~pj80cbll3z1Vke9eTYwzvHBKV9Oh81AVhXSnViit5wxuPEB0SQLi5mrDcmZhfMgHsRoyyapRuqmz3LvpZ7rhp5IF2misWnwGR0yD5NswTy8pPP0Z9qGUZkfYCbBgp~Xh9dIlCI7njo5lxnsHLG3LG21PaWGkI1g41sPN83cmccoSxEszZUsGbP2SvhM-crduA__",
        username: "Streamernick93",
        message: "Enjoying the stream 💣 🇮🇹 🇸🇮 It’s the bomb!!! ",
        attachment: [],
      },
      {
        replyid: 3,
        avatar:
          "https://s3-alpha-sig.figma.com/img/4be3/e85b/59e83b5255094eea5488c3f4e25f2da1?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S0GvdCyiltM1IPXqMBP0uEnE1NlrlnuZVUW3GbxWyhyNrxXKU3fZ9-beof64Uj3d02K9Pv-v2joTRcAat4dmbzxIdEqAKMZSWH~9wzLzrl6c2N8NNYlSRXa1okgUtvHKkPLS4RqLMYSS2xHqDlVw~pj80cbll3z1Vke9eTYwzvHBKV9Oh81AVhXSnViit5wxuPEB0SQLi5mrDcmZhfMgHsRoyyapRuqmz3LvpZ7rhp5IF2misWnwGR0yD5NswTy8pPP0Z9qGUZkfYCbBgp~Xh9dIlCI7njo5lxnsHLG3LG21PaWGkI1g41sPN83cmccoSxEszZUsGbP2SvhM-crduA__",
        username: "Streamernick93",
        message: "Enjoying the stream 💣 🇮🇹 🇸🇮 It’s the bomb!!! ",
        attachment: [],
      },
      {
        replyid: 4,
        avatar:
          "https://s3-alpha-sig.figma.com/img/4be3/e85b/59e83b5255094eea5488c3f4e25f2da1?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S0GvdCyiltM1IPXqMBP0uEnE1NlrlnuZVUW3GbxWyhyNrxXKU3fZ9-beof64Uj3d02K9Pv-v2joTRcAat4dmbzxIdEqAKMZSWH~9wzLzrl6c2N8NNYlSRXa1okgUtvHKkPLS4RqLMYSS2xHqDlVw~pj80cbll3z1Vke9eTYwzvHBKV9Oh81AVhXSnViit5wxuPEB0SQLi5mrDcmZhfMgHsRoyyapRuqmz3LvpZ7rhp5IF2misWnwGR0yD5NswTy8pPP0Z9qGUZkfYCbBgp~Xh9dIlCI7njo5lxnsHLG3LG21PaWGkI1g41sPN83cmccoSxEszZUsGbP2SvhM-crduA__",
        username: "Streamernick93",
        message: "Enjoying the stream 💣 🇮🇹 🇸🇮 It’s the bomb!!! ",
        attachment: [],
      },
      {
        replyid: 5,
        avatar:
          "https://s3-alpha-sig.figma.com/img/4be3/e85b/59e83b5255094eea5488c3f4e25f2da1?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S0GvdCyiltM1IPXqMBP0uEnE1NlrlnuZVUW3GbxWyhyNrxXKU3fZ9-beof64Uj3d02K9Pv-v2joTRcAat4dmbzxIdEqAKMZSWH~9wzLzrl6c2N8NNYlSRXa1okgUtvHKkPLS4RqLMYSS2xHqDlVw~pj80cbll3z1Vke9eTYwzvHBKV9Oh81AVhXSnViit5wxuPEB0SQLi5mrDcmZhfMgHsRoyyapRuqmz3LvpZ7rhp5IF2misWnwGR0yD5NswTy8pPP0Z9qGUZkfYCbBgp~Xh9dIlCI7njo5lxnsHLG3LG21PaWGkI1g41sPN83cmccoSxEszZUsGbP2SvhM-crduA__",
        username: "Streamernick93",
        message: "Enjoying the stream 💣 🇮🇹 🇸🇮 It’s the bomb!!! ",
        attachment: [],
      },
    ],
    emojies: [],
  },
  {
    chatid: 2,
    avatar:
      "https://s3-alpha-sig.figma.com/img/4be3/e85b/59e83b5255094eea5488c3f4e25f2da1?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S0GvdCyiltM1IPXqMBP0uEnE1NlrlnuZVUW3GbxWyhyNrxXKU3fZ9-beof64Uj3d02K9Pv-v2joTRcAat4dmbzxIdEqAKMZSWH~9wzLzrl6c2N8NNYlSRXa1okgUtvHKkPLS4RqLMYSS2xHqDlVw~pj80cbll3z1Vke9eTYwzvHBKV9Oh81AVhXSnViit5wxuPEB0SQLi5mrDcmZhfMgHsRoyyapRuqmz3LvpZ7rhp5IF2misWnwGR0yD5NswTy8pPP0Z9qGUZkfYCbBgp~Xh9dIlCI7njo5lxnsHLG3LG21PaWGkI1g41sPN83cmccoSxEszZUsGbP2SvhM-crduA__",
    title: "",
    username: "KingCool0330",
    createdDate: "2024-07-18 10:10:00",
    message: "Enjoying the stream 💣 🇮🇹 🇸🇮 It’s the bomb!!! ",
    attachment: [],
    replies: [],
    emojies: [],
  },
  {
    chatid: 3,
    avatar:
      "https://s3-alpha-sig.figma.com/img/4be3/e85b/59e83b5255094eea5488c3f4e25f2da1?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S0GvdCyiltM1IPXqMBP0uEnE1NlrlnuZVUW3GbxWyhyNrxXKU3fZ9-beof64Uj3d02K9Pv-v2joTRcAat4dmbzxIdEqAKMZSWH~9wzLzrl6c2N8NNYlSRXa1okgUtvHKkPLS4RqLMYSS2xHqDlVw~pj80cbll3z1Vke9eTYwzvHBKV9Oh81AVhXSnViit5wxuPEB0SQLi5mrDcmZhfMgHsRoyyapRuqmz3LvpZ7rhp5IF2misWnwGR0yD5NswTy8pPP0Z9qGUZkfYCbBgp~Xh9dIlCI7njo5lxnsHLG3LG21PaWGkI1g41sPN83cmccoSxEszZUsGbP2SvhM-crduA__",
    title: "donated 785 Zeez!",
    username: "Stephen",
    createdDate: "2024-07-18 10:10:00",
    message: "Enjoying the stream 💣 🇮🇹 🇸🇮 It’s the bomb!!! ",
    attachment: [
      "https://s3-alpha-sig.figma.com/img/0965/105c/e41d4d203442623ac3b7527fb8622a7f?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YFEsBwb2rwLzdKYgpbhT9c6lz2XTbOpzESiAJwm4EBtg4uU9MptETcPMHMMfC2aN7M14yWBVLD3lVN2qQwsd~8n9RsjYPqhysN0fxIqbO8OZ0YZi4JZl1JTIdEK9XXu1GDTP1ks2UrFZCn6ik43wyxwGNWdCItkFbjsRrAe8lLU7S1qA6xzNQX30OR2wA9mdd-fa7bAJk-kCN8i4NgkQs5DMI7cAJXG4ZSjdC2PlUMB0fYxQemENg6wVVg8A4jliDJQHd488lP4N-VV7I~7RiODsy1HbjsvCGuW6hHU5Z8R-q4q2G0Se-xy2dljCIG1~QZCltoh2~7E3hlBYeB4p8Q__",
      "https://s3-alpha-sig.figma.com/img/0965/105c/e41d4d203442623ac3b7527fb8622a7f?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YFEsBwb2rwLzdKYgpbhT9c6lz2XTbOpzESiAJwm4EBtg4uU9MptETcPMHMMfC2aN7M14yWBVLD3lVN2qQwsd~8n9RsjYPqhysN0fxIqbO8OZ0YZi4JZl1JTIdEK9XXu1GDTP1ks2UrFZCn6ik43wyxwGNWdCItkFbjsRrAe8lLU7S1qA6xzNQX30OR2wA9mdd-fa7bAJk-kCN8i4NgkQs5DMI7cAJXG4ZSjdC2PlUMB0fYxQemENg6wVVg8A4jliDJQHd488lP4N-VV7I~7RiODsy1HbjsvCGuW6hHU5Z8R-q4q2G0Se-xy2dljCIG1~QZCltoh2~7E3hlBYeB4p8Q__",
    ],
    replies: [
      {
        replyid: 1,
        avatar:
          "https://s3-alpha-sig.figma.com/img/4be3/e85b/59e83b5255094eea5488c3f4e25f2da1?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S0GvdCyiltM1IPXqMBP0uEnE1NlrlnuZVUW3GbxWyhyNrxXKU3fZ9-beof64Uj3d02K9Pv-v2joTRcAat4dmbzxIdEqAKMZSWH~9wzLzrl6c2N8NNYlSRXa1okgUtvHKkPLS4RqLMYSS2xHqDlVw~pj80cbll3z1Vke9eTYwzvHBKV9Oh81AVhXSnViit5wxuPEB0SQLi5mrDcmZhfMgHsRoyyapRuqmz3LvpZ7rhp5IF2misWnwGR0yD5NswTy8pPP0Z9qGUZkfYCbBgp~Xh9dIlCI7njo5lxnsHLG3LG21PaWGkI1g41sPN83cmccoSxEszZUsGbP2SvhM-crduA__",
        username: "Streamernick93",
        message: "Enjoying the stream 💣 🇮🇹 🇸🇮 It’s the bomb!!! ",
        attachment: [],
      },
      {
        replyid: 2,
        avatar:
          "https://s3-alpha-sig.figma.com/img/4be3/e85b/59e83b5255094eea5488c3f4e25f2da1?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S0GvdCyiltM1IPXqMBP0uEnE1NlrlnuZVUW3GbxWyhyNrxXKU3fZ9-beof64Uj3d02K9Pv-v2joTRcAat4dmbzxIdEqAKMZSWH~9wzLzrl6c2N8NNYlSRXa1okgUtvHKkPLS4RqLMYSS2xHqDlVw~pj80cbll3z1Vke9eTYwzvHBKV9Oh81AVhXSnViit5wxuPEB0SQLi5mrDcmZhfMgHsRoyyapRuqmz3LvpZ7rhp5IF2misWnwGR0yD5NswTy8pPP0Z9qGUZkfYCbBgp~Xh9dIlCI7njo5lxnsHLG3LG21PaWGkI1g41sPN83cmccoSxEszZUsGbP2SvhM-crduA__",
        username: "Streamernick93",
        message: "Enjoying the stream 💣 🇮🇹 🇸🇮 It’s the bomb!!! ",
        attachment: [],
      },
    ],
    emojies: [
      {
        text: "😚",
        count: 3,
      },
      {
        text: "🇦🇨",
        count: 3,
      },
    ],
  },
  {
    chatid: 4,
    avatar:
      "https://s3-alpha-sig.figma.com/img/4be3/e85b/59e83b5255094eea5488c3f4e25f2da1?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S0GvdCyiltM1IPXqMBP0uEnE1NlrlnuZVUW3GbxWyhyNrxXKU3fZ9-beof64Uj3d02K9Pv-v2joTRcAat4dmbzxIdEqAKMZSWH~9wzLzrl6c2N8NNYlSRXa1okgUtvHKkPLS4RqLMYSS2xHqDlVw~pj80cbll3z1Vke9eTYwzvHBKV9Oh81AVhXSnViit5wxuPEB0SQLi5mrDcmZhfMgHsRoyyapRuqmz3LvpZ7rhp5IF2misWnwGR0yD5NswTy8pPP0Z9qGUZkfYCbBgp~Xh9dIlCI7njo5lxnsHLG3LG21PaWGkI1g41sPN83cmccoSxEszZUsGbP2SvhM-crduA__",
    username: "Ekaterina",
    title: "785",
    createdDate: "2024-07-18 10:10:00",
    message: "Enjoying the stream 💣 🇮🇹 🇸🇮 It’s the bomb!!! ",
    attachment: [],
    replies: [],
    emojies: [],
  },
];

const Chat = () => {
  return (
    <ScrollView style={styles.chatContentScrollView}>
      <View style={styles.container}>
        {ChatItemList.map((value, key) => {
          return <ChatItem key={key} item={value} />;
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  chatContentScrollView: {
    paddingHorizontal: 20,
  },
});

export default Chat;
