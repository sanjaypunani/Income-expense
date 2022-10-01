import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useSelector } from "react-redux";
import { calculateTotalAmount } from "../../utils/helper";
import { IMAGES } from "../../utils/images";
import { COLORS } from "../../utils/theme";

export const AppHeader = () => {
  const navigation = useNavigation();
  const { ieData } = useSelector((state) => state.home);

  return (
    <View style={styles.mainContainer}>
      <Text
        style={{
          ...styles.amountText,
          color:
            calculateTotalAmount(ieData) >= 0 ? COLORS.primary : COLORS.red,
        }}
      >
        ${calculateTotalAmount(ieData)}
      </Text>
      <Text style={styles.titleText}>Income/expense</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("IncomExpenseDetails")}
        activeOpacity={0.8}
        style={styles.addButton}
      >
        <Image source={IMAGES.plus} style={styles.addIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    flexDirection: "row",
    padding: 22,
    justifyContent: "space-between",
    shadowColor: COLORS.black,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  amountText: {
    fontSize: 14,
    color: COLORS.gray,
  },
  titleText: {
    fontSize: 16,
    color: COLORS.black,
    fontWeight: "600",
  },
  addButton: {
    height: 30,
    width: 30,
    borderRadius: 35,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  addIcon: {
    height: 16,
    width: 16,
    tintColor: COLORS.white,
    resizeMode: "contain",
  },
});
