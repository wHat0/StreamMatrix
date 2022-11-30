import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import FontAwesome from "react-native-vector-icons/FontAwesome";

interface Props {
  name: string;
  colors: string;
  icon?: string | null;
  phase?: boolean;
  onPress: () => void;
}
const CategoryRow: React.FC<Props> = ({
  name,
  colors,
  icon,
  onPress,
  phase,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: colors,
        width: "45%",
        height: 60,
        borderRadius: 25,
        // padding: 10,
        borderWidth: 0.5,
        borderColor: "white",
        alignItems: "center",
        flexDirection: "row",
        marginHorizontal: 6,
        overflow: "hidden",
      }}
    >
      <View
        style={{
          width: icon ? "70%" : "100%",
          alignItems: "center",
        }}
      >
        <Text style={[styles.Title, { color: phase ? "#ffff" : "#001219" }]}>
          {name}
        </Text>
      </View>
      {icon && (
        <View
          style={{
            backgroundColor: "#e9d8a6",
            borderRadius: 20,
            width: 40,
            height: 40,
            justifyContent: "center",
          }}
        >
          <FontAwesome
            name={icon}
            color={"black"}
            style={{
              alignSelf: "center",
            }}
            size={25}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CategoryRow;

const entireScreenWidth = Dimensions.get("window").height;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const styles = EStyleSheet.create({
  Title: {
    fontSize: "7.5rem",
    fontWeight: "700",
    fontFamily: "Nunito-Regular",
  },
});
