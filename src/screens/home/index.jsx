import { useEffect } from "react";
import { useState } from "react";
import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { Input } from "../../components/Input";
import { HomeItem } from "../../widgets/HomeItem";
import { styles } from "./styles";

export const HomeScreen = () => {
  const { ieData } = useSelector((state) => state.home);

  const [displayData, setDisplayData] = useState(ieData);
  const [search, setSearch] = useState();

  useEffect(() => {
    setDisplayData([...ieData]);
  }, [ieData]);

  const renderItem = ({ item }) => <HomeItem data={item} />;

  const onSearch = (keyword) => {
    setSearch(keyword);
    if (keyword !== "") {
      const results = ieData.filter((item) => {
        return item.title.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setDisplayData(results);
    } else {
      setDisplayData(ieData);
      // If the text field is empty, show all users
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.containtView}>
        <Input
          value={search}
          placeholder={"Search..."}
          onChange={(text) => onSearch(text)}
        />
        <FlatList
          style={styles.listStyle}
          data={displayData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};
