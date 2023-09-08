import { View, Text, TouchableOpacity } from "react-native";
import { colors } from "../../styles/styles";
import { Avatar } from "react-native-paper";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const Header = ({ back , emptyCart = false}) => {
  const navigate = useNavigation();
   const route = useRoute();
  const emptyCartHandler =()=>{
    console.log("first");
  }
  return (
    <View>
      {back && (
        <TouchableOpacity
          style={{ position: "absolute", left: -20, top: 5, zIndex: 10 }}
          onPress={() => navigate.goBack()}
        >
          <Avatar.Icon
            style={{ backgroundColor: colors.color4 }}
            color={route.name ==="productdetails" ? colors.color2 : colors.color3}
            icon={"arrow-left"}
          />
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={{ position: "absolute", right: 0, top: 5, zIndex: 10 }}
        onPress={emptyCart ?  emptyCartHandler :  () => navigate.navigate("cart")}
      >
        <Avatar.Icon
          style={{ backgroundColor: colors.color4 ,}}
          color={route.name ==="productdetails" ? colors.color2 : colors.color3}
          icon={emptyCart ? "delete-outline" :  "cart-outline"}
        />
      </TouchableOpacity>
      
    </View>
  );
};

export default Header;
