import React from "react";
import { View, StyleSheet } from "react-native";

// import components
import VideoSection from "./VideoSection";
import ChatSection from "./ChatSection";

// import global style sheet
import GlobalStyle from "../styles/GlobalStyle"; // Adjust the path as necessary

const Home = () => {
  return (
    <View style={styles.container}>
      <VideoSection />
      <ChatSection />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.backgroundColor.primary,
  },
});

export default Home;
