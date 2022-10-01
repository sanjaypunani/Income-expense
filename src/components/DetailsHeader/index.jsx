import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecord } from "../../redux/reducers/homeSlice";
import { calculateTotalAmount } from "../../utils/helper";
import { IMAGES } from "../../utils/images";
import { COLORS } from "../../utils/theme";

export const DetailsHeader = ({ title, data, isInEdit }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onDeleteItem = () => {
    dispatch(deleteRecord(data));
    navigation.goBack();
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}
        style={styles.addButton}
      >
        <Image source={IMAGES.back} style={styles.back} />
      </TouchableOpacity>
      <Text style={styles.titleText}>{title}</Text>
      {isInEdit ? (
        <TouchableOpacity
          onPress={() => onDeleteItem()}
          activeOpacity={0.8}
          style={styles.addButton}
        >
          <Image source={IMAGES.delete} style={styles.addIcon} />
        </TouchableOpacity>
      ) : (
        <View />
      )}
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
    justifyContent: "center",
    alignItems: "center",
  },
  addIcon: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
  back: {
    height: 18,
    width: 18,
    resizeMode: "contain",
  },
});
