import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { useDispatch } from "react-redux";
import { DateInput } from "../../components/DateInput";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { insertRecord, updateRecord } from "../../redux/reducers/homeSlice";
import {
  IE_CATEGORY,
  IE_CATEGORY_PICKER,
  IE_TYPES,
  IE_TYPES_PICKER,
} from "../../utils/constants";
import { styles } from "./styles";
import uuid from "react-native-uuid";
import { DetailsHeader } from "../../components/DetailsHeader";

export const IncomExpenseDetails = ({ route }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [showError, setShowError] = useState(false);
  const commonError = "Field is required!";

  const initialData = {
    date: new Date(),
    type: IE_TYPES.INCOME,
    category: IE_CATEGORY.ENTERTAINMENT,
    ...route.params?.data,
  };
  const isInEdit = route.params?.data ? true : false;
  const [ieFormData, setIeFormData] = useState(initialData);

  const handleChange = (key, value) => {
    setIeFormData({ ...ieFormData, [key]: value });
  };

  const checkFieldValidation = (key) => {
    if (ieFormData) {
      if (!ieFormData[key] || ieFormData[key] === "") {
        return false;
      }
      return true;
    }

    return false;
  };

  const validateForm = () => {
    if (checkFieldValidation("title") && checkFieldValidation("amount")) {
      setShowError(false);
      return true;
    }
    setShowError(true);
    return false;
  };

  const createNewIE = () => {
    if (validateForm()) {
      const submitData = {
        ...ieFormData,
        id: uuid.v4(),
      };
      dispatch(insertRecord(submitData));
      navigation.goBack();
    }
  };

  const onEditIE = () => {
    if (validateForm()) {
      dispatch(updateRecord(ieFormData));
      navigation.goBack();
    }
  };

  const handleSubmit = () => {
    if (!isInEdit) {
      createNewIE();
    } else {
      onEditIE();
    }
  };
  return (
    <View style={styles.mainContainer}>
      <DetailsHeader
        isInEdit={isInEdit}
        data={ieFormData}
        title={isInEdit ? "Edit Income/expense" : "Add Income/expense"}
      />
      <View style={styles.contentView}>
        <Input
          onChange={(text) => handleChange("title", text)}
          placeholder={"Title"}
          value={ieFormData?.title}
          error={showError && !checkFieldValidation("title") && commonError}
        />
        <DateInput
          onChange={(text) => handleChange("date", text)}
          placeholder={"Date"}
          value={ieFormData?.date}
        />
        <Input
          onChange={(text) => handleChange("amount", text)}
          placeholder={"Amount"}
          value={ieFormData?.amount}
          keyboardType={"numeric"}
          error={showError && !checkFieldValidation("amount") && commonError}
        />
        <Select
          options={IE_TYPES_PICKER}
          onChange={(text) => handleChange("type", text)}
          value={ieFormData?.type}
          placeholder={"Select Type"}
        />
        <Select
          options={IE_CATEGORY_PICKER}
          onChange={(text) => handleChange("category", text)}
          value={ieFormData?.category}
          placeholder={"Select Category"}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
