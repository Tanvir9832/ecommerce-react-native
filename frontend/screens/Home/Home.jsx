import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle } from "../../styles/styles";
import Header from "../../components/Header/Header";
import { Avatar, Button } from "react-native-paper";
import SearchModal from "../../components/SearchModal/SearchModal";

const Home = () => {
  const [catego, setCateg] = useState("");
  const [acticeSearch, setActiveSearch] = useState(false);
  const [serachQuery, setSearchQuery] = useState("");

  const categories = [
    { category: "T-Shirt", _id: "iuahgli" },
    { category: "Toy", _id: "iuaadsdfhgli" },
    { category: "Mobile", _id: "iuasfhasdfhgli" },
    { category: "Watch", _id: "iuasfhssdfhgli" },
    { category: "Food", _id: "iuaasaqrsfhssdfhgli" },
  ];
  const products = [];
  const cateGoryButtonHandler = (id) => {
    setCateg(id);
  };

  return (
    <>
      {acticeSearch && (
        <SearchModal
          serachQuery={serachQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}
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
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
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
          }}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: "center",
            }}
          >
            {categories.map((category, id) => {
              return (
                <Button
                  key={category._id}
                  textColor={catego === category._id ? colors.color2 : "grey"}
                  style={{
                    backgroundColor:
                      catego === category._id ? colors.color1 : colors.color5,
                    color: colors.color1,
                    borderRadius: 50,
                    margin: 5,
                  }}
                  onPress={() => cateGoryButtonHandler(category._id)}
                >
                  {category.category}
                </Button>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default Home;
