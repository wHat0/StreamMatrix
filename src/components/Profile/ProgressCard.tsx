import React from "react";
import { Text, View } from "react-native";
import PercentageCircle from "react-native-latest-percentage-circle";
import colors from "../../config/colors";
import useOrientation from "../../config/useOrientation";

interface Props {
  title: string;
  doneTask: number;
  Time: any | null;
}

const ProgressCard: React.FC<Props> = ({ title, doneTask, Time }) => {
  const percentage = Time ? (Time / (60 * 12)) * 100 : (doneTask / 10) * 100;
  // console.log(percentage);
  const fontScale = useOrientation().width;
  const height = useOrientation().height;

  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "white",
        borderRadius: 29,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.6,
        paddingVertical: "30%",
        // marginVertical: 10,
        shadowRadius: 1.61,
        elevation: 8,
        // marginRight: 20,
      }}
    >
      <Text
        style={{
          color: colors.primary,
          fontSize: height * 0.025 > 20 ? 20 : height * 0.022,
          fontWeight: "normal",
          position: "absolute",
          paddingHorizontal: 10,
          top: 20,
          textAlign: "center",
        }}
      >
        {title}
        {"\n"}
        {Time && (
          <Text
            style={{
              color: colors.primary,
              fontSize: height * 0.025 > 20 ? 14 : height * 0.017,
            }}
          >
            {Time} min
          </Text>
        )}
      </Text>

      <View
        style={{
          marginTop: "20%",
          // paddingVertical: Time ? 20 : 20,
        }}
      >
        <PercentageCircle
          radius={fontScale * 0.1}
          borderWidth={10}
          percent={Number(percentage.toFixed(0))}
          color={colors.secondary}
          bgcolor={colors.primary}
        />
      </View>
      {/* <Text
        style={{
          color: 'black',
          fontSize: 18,
          fontWeight: 'normal',
          textAlign: 'center',
          bottom: 8,
          position: 'absolute',
        }}>
        {doneTask}/10
      </Text> */}
    </View>
  );
};

export default ProgressCard;
