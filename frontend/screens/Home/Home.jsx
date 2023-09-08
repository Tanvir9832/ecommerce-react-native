import {
  View,
  Text, 
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { colors, defaultStyle } from "../../styles/styles";
import Header from "../../components/Header/Header";
import { Avatar, Button } from "react-native-paper";

const Home = () => {
  const categories = [
    { category: "T-Shirt", _id: "iuahgli" },
    { category: "Toy", _id: "iuaadsdfhgli" },
    { category: "Mobile", _id: "iuasfhasdfhgli" },
    { category: "Watch", _id: "iuasfhssdfhgli" },
    { category: "Food", _id: "iuaasaqrsfhssdfhgli" },
  ]; //"", "", "", "", ""
  return (
    <View style={{ ...defaultStyle }}>
      <Header back={true} />
      <View
        style={{
          paddingTop: 70,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ fontSize: 25 }}>Our</Text>
          <Text style={{ fontSize: 25, fontWeight: "900" }}>Products</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Avatar.Icon
              icon={"magnify"}
              color={"gray"}
              style={{
                backgroundColor: colors.color2,
                elevation: 12,
                width: 50,
                height: 50,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          height: 80,
          backgroundColor: colors.color1,
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category, id) => {
            return (
              <Button
                key={category._id}
                style={{
                  backgroundColor: colors.color5,
                  borderRadius: 100,
                  margin: 5,
                }}
              >
                {category.category}
              </Button>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
