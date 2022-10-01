import { View, StyleSheet, TextInput, Text } from "react-native";
import { COLORS } from "../../utils/theme";

export const Input = ({
  onChange,
  value,
  placeholder,
  keyboardType = "default",
  error,
}) => {
  return (
    <View style={styles.parentView}>
      <View
        style={{
          ...styles.mainContainer,
          borderColor: error ? COLORS.red : COLORS.gray,
        }}
      >
        <TextInput
          keyboardType={keyboardType}
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    // flex: 1,
    height: 68,
    width: "100%",
  },
  mainContainer: {
    width: "100%",
    paddingLeft: 12,
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 16,
  },
  errorText: {
    color: COLORS.red,
    fontSize: 12,
    fontWeight: "600",
  },
});
