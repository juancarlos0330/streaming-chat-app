import React, { useRef, useState } from "react";
import { Video } from "expo-av"; // video module from react native cli
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Modal,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

// import components
import BundleDescription from "./video/BundleDescription";

// import global style sheet
import GlobalStyle from "../styles/GlobalStyle";

const VideoSection = () => {
  const streamVideoRef = useRef(null); // ref variable for stream video
  const [videoFlag, setVideoFlag] = useState(false);
  const [followFlag, setFollowFlag] = useState(false);
  const [isDetailModalVisible, setDetailModalVisible] = useState(false);
  const [isRewardModalVisible, setRewardModalVisible] = useState(false);

  const toggleVideoSection = (flag) => {
    setVideoFlag(flag);
  };

  const toggleDetailModal = () => {
    setDetailModalVisible(!isDetailModalVisible);
  };

  const toggleRewardModal = () => {
    setRewardModalVisible(!isRewardModalVisible);
  };

  return (
    <View style={videoFlag ? styles.videoSectionActive : styles.videoSection}>
      {videoFlag ? (
        <View style={styles.headerSection}>
          <View style={styles.liveSection}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => toggleVideoSection(false)}
            >
              <Entypo
                name="chevron-thin-left"
                size={14}
                color={GlobalStyle.color.white}
              />
            </TouchableOpacity>
            <View style={styles.liveBtn}>
              <Text style={styles.liveText}>LIVE</Text>
            </View>
            <View style={styles.viewBtn}>
              <Text style={styles.viewText}>
                <AntDesign
                  name="eyeo"
                  size={12}
                  color={GlobalStyle.color.white}
                />
                128730
              </Text>
            </View>
          </View>
          <View style={styles.shareSection}>
            <TouchableOpacity style={styles.backBtn}>
              <Feather
                name="share-2"
                size={18}
                color={GlobalStyle.color.white}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.backBtn}>
              <Ionicons
                name="ellipsis-horizontal-circle-outline"
                size={24}
                color={GlobalStyle.color.white}
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.streamVideoBtn}
        onPress={() => toggleVideoSection(true)}
      >
        <Video
          ref={streamVideoRef}
          style={styles.streamVideo}
          source={require("../assets/video/streaming.mp4")}
          useNativeControls
          resizeMode="contain"
        />
      </TouchableOpacity>

      {videoFlag ? (
        <View style={styles.followSection}>
          <View style={styles.descSection}>
            <View style={styles.avatarSection}>
              <Image
                style={styles.avatar}
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/d048/6e69/975ccacdb78175099c4f2b9565000222?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lgFUUPZOFwoY~-Zveo4cSAxCwVfxUeQHWoIe4Z5n~YAjporN8mpI~Lr54GNBN22OJdd5RqYmPstUK6~EFtyFwvoMT~WTTvYRGXc4t8sFWaNzT-x-jHXsopaeRuPOazyI~rncisXofP6JDSt7EQgPvptumMH5u8zBdj-13yIYNCQ6cokf7~mlvBqVfn0d~8-MC8GuJCEXtCXpMhVpsOEmh~R5QVibArmhNLUz2HbaZwsCEHpS2wJ84ZA4kBaCG6-pVzLcZxzI2L-U882zKy10Bo-7-oqUwNjpKm9OnLRUW2afo4VI9EWja3Gqz9D57khml1QtaueAmeT30Hqej6mRIQ__",
                }}
              />
            </View>
            <View style={styles.descContent}>
              <Text style={styles.descTitleText}>Mark Knoll</Text>
              <Text style={styles.descText}>
                N32 WARRIOR HC/ GNOMER TODAY - !morladim !charge !corpsemaker !r
              </Text>
              <View style={styles.descTypeGroup}>
                <Text style={styles.descType}>WOW</Text>
                <Text style={styles.descType}>ENGLISH</Text>
                <Text style={styles.descType}>PVP</Text>
                <Text style={styles.descType}>PVE</Text>
              </View>
            </View>
          </View>
          <View style={styles.followBtwSection}>
            <TouchableOpacity
              style={followFlag ? styles.followBtnActive : styles.followBtn}
              onPress={() => setFollowFlag(!followFlag)}
            >
              <Text
                style={
                  followFlag ? styles.followBtnTextActive : styles.followBtnText
                }
              >
                {followFlag ? "UnFollow" : "Follow"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.seemoreBtn}
              onPress={toggleDetailModal}
            >
              <Text style={styles.seeMoreBtnText}>See more</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}

      {videoFlag ? (
        <View style={styles.rewardSection}>
          <TouchableOpacity
            style={styles.rewardBtn}
            onPress={toggleRewardModal}
          >
            <View style={styles.rewardTextSection}>
              <Text style={styles.rewardText}>
                Collect 1000 Zeez and win SUPER NFT reward.
              </Text>
            </View>
            <View style={styles.progressSection}>
              <View style={styles.progressBar}>
                <LinearGradient
                  colors={["#F289C0", "#FFC978", "#FFC978", "#C8FC6B"]}
                  locations={[0, 0.7, 0.7374, 1]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.currentProgressBar}
                ></LinearGradient>
              </View>
              <Text style={styles.progressText}>21m 27s</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : null}

      <Modal
        visible={isRewardModalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalRewardContainer}>
          <View style={styles.modalRewardContent}>
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={toggleRewardModal}
            >
              <Text style={styles.closeText}></Text>
            </TouchableOpacity>
            <ScrollView>
              <View style={styles.challengeSection}>
                <Text style={styles.challengeTitle}>Challenge Details</Text>
                <Text style={styles.challengeDesc}>
                  Short description of the challenge that can goes in 10 rows.
                  Short description of the challenge that can goes in 10 rows.
                </Text>
              </View>
              <View style={styles.challengeSection}>
                <Text style={styles.challengeTitle}>
                  Challenge Duration & Rules
                </Text>
                <Text style={styles.challengeDesc}>
                  Short description of the challenge that can goes in 10 rows.
                  Short description of the challenge that can goes in 10 rows.
                </Text>
              </View>
              <BundleDescription />
              <BundleDescription />
              <BundleDescription />
            </ScrollView>
          </View>
        </View>
      </Modal>

      <Modal
        visible={isDetailModalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalDetailContainer}>
          <View style={styles.modalDetailContent}>
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={toggleDetailModal}
            >
              <Text style={styles.closeText}></Text>
            </TouchableOpacity>
            <View style={styles.followModalSection}>
              <View style={styles.descSection}>
                <View style={styles.avatarSection}>
                  <Image
                    style={styles.avatar}
                    source={{
                      uri: "https://s3-alpha-sig.figma.com/img/d048/6e69/975ccacdb78175099c4f2b9565000222?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lgFUUPZOFwoY~-Zveo4cSAxCwVfxUeQHWoIe4Z5n~YAjporN8mpI~Lr54GNBN22OJdd5RqYmPstUK6~EFtyFwvoMT~WTTvYRGXc4t8sFWaNzT-x-jHXsopaeRuPOazyI~rncisXofP6JDSt7EQgPvptumMH5u8zBdj-13yIYNCQ6cokf7~mlvBqVfn0d~8-MC8GuJCEXtCXpMhVpsOEmh~R5QVibArmhNLUz2HbaZwsCEHpS2wJ84ZA4kBaCG6-pVzLcZxzI2L-U882zKy10Bo-7-oqUwNjpKm9OnLRUW2afo4VI9EWja3Gqz9D57khml1QtaueAmeT30Hqej6mRIQ__",
                    }}
                  />
                </View>
                <View style={styles.descContent}>
                  <Text style={styles.descTitleText}>Mark Knoll</Text>
                  <Text style={styles.descText}>
                    N32 WARRIOR HC/ GNOMER TODAY - !morladim !charge
                    !corpsemaker !r
                  </Text>
                  <View style={styles.descTypeGroup}>
                    <Text style={styles.descType}>WOW</Text>
                    <Text style={styles.descType}>ENGLISH</Text>
                    <Text style={styles.descType}>PVP</Text>
                    <Text style={styles.descType}>PVE</Text>
                  </View>
                </View>
              </View>
              <View style={styles.followBtwSection}>
                <TouchableOpacity
                  style={followFlag ? styles.followBtnActive : styles.followBtn}
                  onPress={() => setFollowFlag(!followFlag)}
                >
                  <Text
                    style={
                      followFlag
                        ? styles.followBtnTextActive
                        : styles.followBtnText
                    }
                  >
                    {followFlag ? "UnFollow" : "Follow"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView style={styles.scrollContainer}>
              <View style={styles.detailSection}>
                <Text style={styles.detailTitle}>ABOUT MARK</Text>
                <Text style={styles.commonText}>
                  THE GRIND DONT STOP AYOOOO 😎🤖
                </Text>
                <Text style={styles.commonText}>
                  BEST FEMALE KBM PLAYER ON MEMEZEE // Content Creator for 12am
                </Text>
                <Text style={styles.commonText}>
                  Partnered with Aussie Broadband! get your discount !aussiebb
                </Text>
                <Text style={styles.commonText}>
                  If you wanna join the supporter family use this exclusive
                  link: htttps://www.memezee.com/becomesupporter/MarkKnoll/
                </Text>
                <Text style={styles.commonText}>
                  If you wanna join the supporter family use this exclusive
                  link: htttps://www.memezee.com/becomesupporter/MarkKnoll/
                </Text>
                <Text style={styles.commonText}>
                  If you wanna join the supporter family use this exclusive
                  link: htttps://www.memezee.com/becomesupporter/MarkKnoll/
                </Text>
                <Text style={styles.commonText}>
                  If you wanna join the supporter family use this exclusive
                  link: htttps://www.memezee.com/becomesupporter/MarkKnoll/
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  videoSection: {
    height: "auto",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  videoSectionActive: {
    height: "auto",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  streamVideoBtn: {
    width: "100%",
    height: 220,
  },
  streamVideo: {
    width: "100%",
    height: "100%",
  },
  headerSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  liveSection: {
    flexDirection: "row",
    gap: 10,
  },
  liveBtn: {
    backgroundColor: GlobalStyle.backgroundColor.vipPrimary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  liveText: {
    color: GlobalStyle.color.black,
    fontSize: 12,
  },
  backBtn: {
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  viewBtn: {
    backgroundColor: GlobalStyle.backgroundColor.live,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  viewText: {
    color: GlobalStyle.color.white,
    fontSize: 12,
  },
  shareSection: {
    flexDirection: "row",
    gap: 10,
  },
  followSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: GlobalStyle.borderColor.header,
    borderStyle: "solid",
    borderBottomWidth: 4,
  },
  followModalSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
  descSection: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 10,
    flex: 1,
  },
  avatarSection: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  descContent: {
    flexDirection: "column",
    flex: 1,
  },
  descTitleText: {
    color: GlobalStyle.color.white,
    fontWeight: "bold",
  },
  descText: {
    color: GlobalStyle.color.white,
    fontSize: 12,
    marginBottom: 10,
  },
  descTypeGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  descType: {
    color: GlobalStyle.color.header,
    fontSize: 10,
    borderWidth: 1,
    borderColor: GlobalStyle.color.header,
    borderStyle: "solid",
    borderRadius: 40,
    paddingHorizontal: 6,
    paddingVertical: 1,
  },
  followBtwSection: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  followBtn: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 50,
    borderColor: GlobalStyle.color.vipPrimary,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: GlobalStyle.backgroundColor.vipPrimary,
  },
  followBtnActive: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 50,
    borderColor: GlobalStyle.color.vipPrimary,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: GlobalStyle.backgroundColor.transparent,
  },
  followBtnText: {
    color: GlobalStyle.color.black,
    fontWeight: "bold",
  },
  followBtnTextActive: {
    color: GlobalStyle.color.white,
    fontWeight: "bold",
  },
  seemoreBtn: {},
  seeMoreBtnText: {
    color: GlobalStyle.color.seemore,
    fontSize: 16,
  },
  modalDetailContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalDetailContent: {
    width: "100%",
    height: "80%",
    backgroundColor: GlobalStyle.backgroundColor.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  modalRewardContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalRewardContent: {
    width: "100%",
    height: "90%",
    backgroundColor: GlobalStyle.backgroundColor.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  closeBtn: {
    paddingBottom: 20,
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
  scrollContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },
  detailSection: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 10,
    width: "100%",
  },
  detailTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: GlobalStyle.color.white,
  },
  commonText: {
    color: GlobalStyle.color.common,
    marginBottom: 10,
    lineHeight: 20,
  },
  rewardSection: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  rewardBtn: {
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: GlobalStyle.borderColor.vipPrimary,
    paddingHorizontal: 15,
    paddingVertical: 8,
    gap: 5,
  },
  rewardTextSection: {
    flexDirection: "row",
  },
  rewardText: {
    color: GlobalStyle.color.white,
    fontSize: 12,
    fontWeight: "bold",
  },
  progressSection: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressText: {
    color: GlobalStyle.color.vipPrimary,
    fontSize: 12,
    marginLeft: 20,
  },
  progressBar: {
    flex: 1,
    backgroundColor: GlobalStyle.backgroundColor.reward,
    height: 10,
    borderRadius: 50,
  },
  currentProgressBar: {
    width: "80%",
    height: 10,
    borderRadius: 50,
  },
  challengeSection: {
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 10,
  },
  challengeTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: GlobalStyle.color.white,
    textTransform: "uppercase",
  },
  challengeDesc: {
    fontSize: 16,
    color: GlobalStyle.color.primary,
    lineHeight: 24,
  },
});

export default VideoSection;
