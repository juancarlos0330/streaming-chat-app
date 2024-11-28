import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

// import global style sheet
import GlobalStyle from "../../styles/GlobalStyle";

const BundleDescription = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.mainSection}>
          <View style={styles.main}>
            <AntDesign
              name="close"
              size={28}
              color={GlobalStyle.color.vipPrimary}
            />
            <View style={styles.mainContent}>
              <Text style={styles.mainTitle}>Bundle no 1</Text>
              <Text style={styles.mainDesc}>
                Short description of what bundle includes
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={isDropdownVisible ? styles.dropdown : styles.dropdownHidden}
            onPress={toggleDropdown}
          >
            <FontAwesome6
              name="chevron-down"
              size={24}
              color={GlobalStyle.color.white}
            />
          </TouchableOpacity>
        </View>
        {isDropdownVisible ? (
          <View style={styles.descSection}>
            <View style={styles.descView}>
              <View style={styles.descImage}>
                <Image
                  style={styles.descImageAvatar}
                  source={{
                    uri: "https://s3-alpha-sig.figma.com/img/07ad/9dc3/853bb3ba10b0d51613203458333de13a?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lo~36iq7XnL7S1TdZiEveZu0BHstJsA3olb2gYymPVBgK8xIBL70KHrZYMkREULRpjpctc3i4YjcDtZAOLMyu19RWomp86-9h-vdKxFMKFwx1CvtPELJuzpYM6aUeUL4wbwgkDz0pykZLkDVVuy71z6rkTJVB6jtdvPPntyKzUsTfO81VkAyw5zIooE5SpkJ2VCkAvuK5NLDAIdq2O8USzCM3OGANdPmUNCAjPqgDJxJaSufAU2VUXCVLTFtxUmhtbuHaAZdlrrsTzOcZajBSiD8wa--dNRs0uJUFEGZhqfPr0NbeNcagznqjmAjjIJunBJcMv4rERdfRKOrkX7yzw__",
                  }}
                />
              </View>
              <View style={styles.subRewardContent}>
                <Text style={styles.rewardTitle}>In-game reward</Text>
                <Text style={styles.rewardDescription}>
                  Additional benefit information in max two rows two rows
                </Text>
              </View>
            </View>
            <View style={styles.descView}>
              <View style={styles.descImage}>
                <Image
                  style={styles.descImageAvatar}
                  source={{
                    uri: "https://s3-alpha-sig.figma.com/img/07ad/9dc3/853bb3ba10b0d51613203458333de13a?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lo~36iq7XnL7S1TdZiEveZu0BHstJsA3olb2gYymPVBgK8xIBL70KHrZYMkREULRpjpctc3i4YjcDtZAOLMyu19RWomp86-9h-vdKxFMKFwx1CvtPELJuzpYM6aUeUL4wbwgkDz0pykZLkDVVuy71z6rkTJVB6jtdvPPntyKzUsTfO81VkAyw5zIooE5SpkJ2VCkAvuK5NLDAIdq2O8USzCM3OGANdPmUNCAjPqgDJxJaSufAU2VUXCVLTFtxUmhtbuHaAZdlrrsTzOcZajBSiD8wa--dNRs0uJUFEGZhqfPr0NbeNcagznqjmAjjIJunBJcMv4rERdfRKOrkX7yzw__",
                  }}
                />
              </View>
              <View style={styles.subRewardContent}>
                <Text style={styles.rewardTitle}>In-game reward</Text>
                <Text style={styles.rewardDescription}>
                  Additional benefit information in max two rows two rows
                </Text>
              </View>
            </View>
            <View style={styles.descView}>
              <View style={styles.descImage}>
                <Image
                  style={styles.descImageAvatar}
                  source={{
                    uri: "https://s3-alpha-sig.figma.com/img/07ad/9dc3/853bb3ba10b0d51613203458333de13a?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lo~36iq7XnL7S1TdZiEveZu0BHstJsA3olb2gYymPVBgK8xIBL70KHrZYMkREULRpjpctc3i4YjcDtZAOLMyu19RWomp86-9h-vdKxFMKFwx1CvtPELJuzpYM6aUeUL4wbwgkDz0pykZLkDVVuy71z6rkTJVB6jtdvPPntyKzUsTfO81VkAyw5zIooE5SpkJ2VCkAvuK5NLDAIdq2O8USzCM3OGANdPmUNCAjPqgDJxJaSufAU2VUXCVLTFtxUmhtbuHaAZdlrrsTzOcZajBSiD8wa--dNRs0uJUFEGZhqfPr0NbeNcagznqjmAjjIJunBJcMv4rERdfRKOrkX7yzw__",
                  }}
                />
              </View>
              <View style={styles.subRewardContent}>
                <Text style={styles.rewardTitle}>In-game reward</Text>
                <Text style={styles.rewardDescription}>
                  Additional benefit information in max two rows two rows
                </Text>
              </View>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  content: {
    flexDirection: "column",
    borderRadius: 5,
    borderColor: GlobalStyle.borderColor.bundle,
    borderWidth: 1,
    borderStyle: "solid",
    padding: 15,
    backgroundColor: GlobalStyle.backgroundColor.bundle,
  },
  mainSection: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  main: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
  },
  mainContent: {
    flexDirection: "column",
    gap: 10,
    flex: 1,
    marginBottom: 10,
  },
  mainTitle: {
    fontSize: 18,
    color: GlobalStyle.color.white,
    fontWeight: "bold",
  },
  mainDesc: {
    fontSize: 14,
    color: GlobalStyle.color.bundle,
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginLeft: 20,
  },
  dropdownHidden: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginLeft: 20,
    transform: [{ rotate: "180deg" }],
  },
  descSection: {
    flexDirection: "column",
    gap: 15,
  },
  descView: {
    width: "100%",
    padding: 15,
    borderRadius: 5,
    borderColor: GlobalStyle.borderColor.bundle,
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 15,
  },
  descImage: {
    width: 70,
    height: 70,
  },
  descImageAvatar: {
    width: 70,
    height: 70,
    borderRadius: 5,
  },
  subRewardContent: {
    flexDirection: "column",
    flex: 1,
    gap: 5,
  },
  rewardTitle: {
    fontSize: 18,
    color: GlobalStyle.color.white,
  },
  rewardDescription: {
    fontSize: 12,
    color: GlobalStyle.color.bundle,
  },
});

export default BundleDescription;
