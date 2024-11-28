import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import Octicons from "react-native-vector-icons/Octicons";

// import Global style sheets
import GlobalStyle from "../../styles/GlobalStyle";

// demo data for gallery
const galleryData = [
  {
    id: 1,
    name: "laughing",
    url: "https://s3-alpha-sig.figma.com/img/16ed/13d6/d052de1179830e302e9e344897216100?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C8KEDVqszidgItPVjOAPJP4nqdRimncG69kHuqgCWPuJwgLe2clK485WSd5LiQNh4UWrdk-J8S~vOxn6wutmbuZaUkywn60UGag1ctMmFRYU9UTugzP1fxCVkfYsE3JB0jydxtbNDi6s2AIRuSA3kGMNkum64LH1SDbIr9XmUWrrBTMaBtoZaySiV~ZdNNec4IFVrcYzu2-QsIrfnBnW6LrUR3tlQvuBof-yaT-Le70sdU58UU3W1QFhlC4yVxFUwnWcUUaSUqqqywcFFUrIOrucRQP2G9GqRcUsmM2di2BXsVDlPdCnc9ZF9kv5UUT9JmWQEnIRRrPRk-jxiJBVGw__",
  },
  {
    id: 2,
    name: "pepe",
    url: "https://s3-alpha-sig.figma.com/img/7146/fdea/2e01f9d08a2854e81e39446677ec642b?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HXgjWe9l7XnoEjpqAVtVby4qdUZdXdsfAFi25IBjdkiEUsuZpAO-Ge2CDkXMciIKtg3-8ukhXP3MUnyoZaZTYeJVY49H5eyRIwt~6VCGl-xyO6C5tdbBEa8PYH0~lpusw3a9O8YkLV2cA4Gjr~WOz4aLUB6fEjRE3vDHnB6xwaITMrhCVJxFiemUPsBoHUbc0mmEsgThVwrarmVNFq1pe0w5hFAPV5TKwj9tLT2rfnDFCuaHyp3db5zjfH0iDkQy4WWAwoNHixXc8f8pGndjQpifMty44bHUa8DTEEsYoYOYhbrjNj5Unz2W4rIeFa4jZQkrjPHx9gLda7pcXlX1Og__",
  },
  {
    id: 3,
    name: "meme",
    url: "https://s3-alpha-sig.figma.com/img/bfb1/3647/2ce987e6710abaa92bc948e865b7f26c?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bhrqXAt3cHogwtGVi7tpQkf9sZmTCAdLaBFlaJh3RUnkWJKATt9u1BPvMryg1HeDoLzdK~BWVbbUb1wTTkH5rnN-CaK1YWFwekUmpaddjrBxjVlyvVLLVKmfygg0PnuozpucC31pjnSqEK0KCSAG7mJl22OfvV-UX044Vyy--diyNOp2mcvyFjCXEmDZpq-BM1Fz1p9gBc1XHikbYzfI49muwlIb17tFHZ-UsLaTYTxdemMZXMLQjFeC2uC9B-tvg2ei6neWr7M5W4bzi3ssGQjO9EychPDnCjx4s-N~VYUoQMwUrLu9uRK5qLdRLxeUTrsfELyMoXWLutDm2ZuZNw__",
  },
  {
    id: 4,
    name: "poo",
    url: "https://s3-alpha-sig.figma.com/img/b0c3/5ddb/07f21dd1bb0f551ea9353492cd4f4472?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WSkViQQFty2863b82nLyXehJN4gdGAbA2btn9Twd5nuHCUqEBmrkn9KR5HMFGWC114euOJsmqidrWqEG1r7A9QWp-psSsQwn5SfW1HjGeqw4yQgqLB8bzMl3kqCxzkrBchopk21DaiBQpWwpwlcAQBndVg6fPhJac3Xt0JF33nvbwpxXJTZGL3ZLlNt3yXN1wygcdFo1nu5hyAsrnTOCiS7KXVCiRFjjXKClKYv4HM-z1I-aetapizSR1gBiT4psF-zv-ZMuXuJAoFFXSyl5iagsX48nJwccAIU3K-Vdm61Glsch~sBFTnhM-O3loUoGUllO8oJZvISQ08i2xCW-Dg__",
  },
  {
    id: 5,
    name: "gentle man",
    url: "https://s3-alpha-sig.figma.com/img/0965/105c/e41d4d203442623ac3b7527fb8622a7f?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qpkg0La8onZiuslT4dO1P08C73fZsQjI710HjZFcKuufTdcEk8FfZEAPigVug9V~0DOIS3vYDtkxvIhvX8tQvnZDUiYtErZvIQIpx22Pn8JIFrKom188UiCejedEJNMX0ngNmn5g5K0bzk0xm9yNwV2aFcwo8JT1DbjHRMlGesWwG9cPXj-GavtnDC8ILXJEiOCjZ7gI7VP6fNihP1y2DVo16sGRuABio2TFYmmSe8vdXcr5mCgzBv7nVVEn0yI0hE2J0kOTqlR3EwyMduyRrmqn8rasTgWqHJMOcIGw75dvH9L4dDcd2JVIEslWYa9VnRutETCU4SC2M1vZATgo5w__",
  },
  {
    id: 6,
    name: "alone girl",
    url: "https://s3-alpha-sig.figma.com/img/3c2f/10ae/3ad6e783cb9bc5978836f66eed1caf2e?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bKefpLWaHhKV~L581AWqSfnzQLTS-~Z-1a2dQ~JUIeuSxo18roVWZMzYIEHAHt7RNYXL3JptHE8XIyOWxwdZpPe~54z1RFrmKRqUko7Ol0yHIn7kEeTnKKtBDdorhkqTa6ijlkHbIA90dan7AF4w9SGHt7nOXbeJX5WQd6H29cQg6WWqR9IoQfdB9jzD0fqyqvu3XG82-2z3JwZlhTxV0nzCPiXAWJE9zza-8l2pPy8ZixgHogV234Z6FtATSR6Azbmxse8JAyAJJi-KEj7t33CmrT4DbxkJGQO4uC4bS4WYPalXAaEYwSA4Mq9MJ5StuA1VDgD24jvrlNjn8GLiGA__",
  },
];

const screenWitdth = Dimensions.get("window").width;

const MemeGallery = () => {
  const [searchGalleryText, setSearchGalleryText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.textInput}
          placeholder="MemeZee Gallery"
          placeholderTextColor={GlobalStyle.color.primary}
          onChangeText={setSearchGalleryText}
          value={searchGalleryText}
        />
        <Octicons name="search" size={24} color={GlobalStyle.color.white} />
      </View>
      <View style={styles.gallerySection}>
        {galleryData.map((value, index) => (
          <TouchableOpacity style={styles.galleryItem} key={index}>
            <Image source={{ uri: value.url }} style={styles.galleryImage} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyle.backgroundColor.gallery,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  searchSection: {
    width: "100%",
    paddingBottom: 10,
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    color: GlobalStyle.color.primary,
    fontSize: 14,
    paddingRight: 30,
    flex: 1,
  },
  gallerySection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
  },
  galleryItem: {
    borderRadius: 10,
    paddingTop: (screenWitdth - 40) * 0.3 + 20,
    position: "relative",
    width: (screenWitdth - 40) * 0.3,
  },
  galleryImage: {
    position: "absolute",
    width: "100%",
    height: (screenWitdth - 40) * 0.3,
    borderRadius: 10,
  },
});

export default MemeGallery;
