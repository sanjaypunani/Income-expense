import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { IE_TYPES } from "../utils/constants";
import { getIeIconFromCategory } from "../utils/helper";
import { IMAGES } from "../utils/images";
import { COLORS } from "../utils/theme";

export const HomeItem = ({ data }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("IncomExpenseDetails", { data })}
      style={styles.mainContainer}
    >
      <View style={styles.subRowView}>
        <Image
          source={getIeIconFromCategory(data?.category)}
          style={styles.itemImage}
        />
        <View style={styles.contentColumn}>
          <Text style={styles.titleText}>{data?.title}</Text>
          <Text style={styles.titleText}>
            {moment(data?.date).format("DD/MM/YYYY")}
          </Text>
        </View>
      </View>
      <Text
        style={{
          ...styles.amountText,
          color: data?.type === IE_TYPES.INCOME ? COLORS.primary : COLORS.red,
        }}
      >
        $ {data?.amount}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: COLORS.gray,
    paddingBottom: 12,
    paddingTop: 12,
    borderBottomWidth: 1,
  },
  itemImage: {
    height: 32,
    width: 32,
    resizeMode: "contain",
  },
  subRowView: {
    flexDirection: "row",
    alignItems: "center",
  },
  contentColumn: {
    flexDirection: "column",
    marginLeft: 12,
  },
  titleText: {
    fontSize: 16,
    color: COLORS.gray,
  },
  amountText: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.primary,
  },
});
