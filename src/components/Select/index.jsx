import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { COLORS } from "../../utils/theme";
import { Picker } from "@react-native-picker/picker";

export const Select = ({ onChange, value, placeholder, options }) => {
  return (
    <View style={styles.mainContainer}>
      <Picker
        selectedValue={value}
        placeholder={placeholder}
        style={styles.select}
        onValueChange={(itemValue) => {
          onChange(itemValue);
        }}
      >
        {options &&
          options?.map((item) => {
            return (
              <Picker.Item
                key={item.id}
                label={item.label}
                value={item.value}
              />
            );
          })}
      </Picker>
    </View>
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
  },
  select: {
    height: 52,
    width: "100%",
  },
});
