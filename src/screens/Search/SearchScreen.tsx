import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../config/colors";
import CategoryRow from "../../components/CategoryRow";
import { TextInput } from "react-native-paper";

export default function SearchScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
      <TouchableOpacity
        // onPress={() => {
        //   console.log("CLIKED");
        //   // navigation.navigate("PostScreen");
        // }}
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "90%",
          alignSelf: "center",
          zIndex: 999999,
          backgroundColor: colors.secondary,
          padding: 12,
          marginVertical: 20,
          borderRadius: 40,
        }}
      >
        <TextInput
          placeholder={"Search"}
          placeholderTextColor={colors.white}
          keyboardType={"default"}
          // editable={false}
          style={{
            width: "100%",
            backgroundColor: colors.secondary,
            fontSize: 14,
            textTransform: "lowercase",
          }}
        />
        {/* <Image
          source={imagePath.icons.header.image}
          resizeMode="contain"
          style={{ width: fontSize.headerIcon, height: fontSize.headerIcon }}
        /> */}
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          marginVertical: "4%",
          alignItems: "center",
          width: "96%",
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <CategoryRow
          name={"Movies"}
          colors={colors.primary}
          onPress={() => console.log("Movies")}
          phase={true}
        />
        <CategoryRow
          name={"Cartoon"}
          colors={"lightgray"}
          onPress={() => console.log("Cartoon")}
          phase={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
