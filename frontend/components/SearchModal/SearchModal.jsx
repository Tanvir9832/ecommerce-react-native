import {
  View,
  Text,
  Platform,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
  BackHandler,
} from "react-native";
import React, { useEffect } from "react";
import { Searchbar, TextInput } from "react-native-paper";
import { colors } from "../../styles/styles";
import { useNavigation } from "@react-navigation/native";

const backAction=()=>{
    setSearchQuery("");
    setActiveSearch(false);
    return true
}

useEffect(()=>{
    BackHandler.addEventListener('hardwareBackPress',backAction);

    return ()=>{
        BackHandler.removeEventListener('hardwareBackPress',backAction);
    }
},[])

const SearchModal = ({
  serachQuery,
  setSearchQuery,
  setActiveSearch,
  products,
}) => {
  const navigate = useNavigation();
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        zIndex: 1000,
        backgroundColor: colors.color2,
        padding: 35,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <SafeAreaView>
        <Searchbar
          placeholder="Search..."
          onChangeText={(query) => setSearchQuery(query)}
          value={serachQuery}
          style={{ marginTop: 20 }}
        />
        <SafeAreaView>
          <View style={{ paddingVertical: 40, paddingHorizontal: 10 }}>
            {products.map((item) => {
              return (
                <SearchItem
                  key={item._id}
                  imgSrc={item.images[0]?.url}
                  name={item.name}
                  price={item.price}
                  handle={() =>
                    navigate.navigate("productdetails", { id: item._id })
                  }
                />
              );
            })}
          </View>
        </SafeAreaView>
      </SafeAreaView>
    </View>
  );
};

const SreachItem = ({ imgSrc, name, price, handle }) => {
  <TouchableOpacity>
    <View
      style={{
        padding: 20,
        borderRadius: 10,
        backgroundColor: colors.color2,
        elevation: 5,
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "row",
        marginVertical: 30,
      }}
    >
      <Image
        source={{ uri: imgSrc }}
        style={{
          width: 80,
          height: 80,
          position: "absolute",
          resizeMode: "contain",
          top: -15,
          left: 10,
          borderTopLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      />
      <View>
        <Text numberOfLines={1}>{name}</Text>
        <Headline style={{fontWeight : "900"}}>${price}</Headline>
      </View>
    </View>
  </TouchableOpacity>;
};

export default SearchModal;
