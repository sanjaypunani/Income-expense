import { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../utils/theme";
import DatePicker from "react-native-date-picker";
import moment from "moment/moment";

export const DateInput = ({ onChange, value, placeholder }) => {
  console.log("value: ", value);
  const [open, setOpen] = useState(false);
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => setOpen(true)}
      style={styles.mainContainer}
    >
      <Text>{moment(value).format("DD-MM-YYYY")}</Text>
      <DatePicker
        modal
        open={open}
        date={value}
        onConfirm={(date) => {
          setOpen(false);
          onChange(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    paddingLeft: 12,
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 16,
    justifyContent: "center",
    height: 52,
  },
});
