import { useState } from "react";
import { Dimensions, TouchableOpacity, Keyboard, View, Text, Image, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { Checkbox } from "./Checkbox";

const { width } = Dimensions.get('window');

const allFilters = [
  'Male',
  'Female',
  'Non-binary',
];

export const FilterBar = ({ onFilter }) => {
  const [search, setSearch] = useState('');
  const [dropDownVisible, setDropDownVisible] = useState(false);
  const [filters, setFilters] = useState(new Set());

  const toggleFilter = (filter) => {
    const newFilters = new Set(filters);
    if(filters.has(filter)) {
      newFilters.delete(filter);
    } else {
      newFilters.add(filter);
    }

    setFilters(Array.from(newFilters));
    onFilter(search, Array.from(newFilters));
  };

  const searchPosts = (text) => {
    setSearch(text);
    onFilter(text);
  };

  const dropdown = (
    <View>
      {allFilters.map((filter) => (
        <TouchableOpacity
          key={filter}
          onPress={() => toggleFilter(filter)}
        >
          <View>
            <Text>{filter}</Text>
            <Checkbox value={filters.has(filter)} onChange={() => toggleFilter(filter)}/>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View>
      <TouchableOpacity
        onPress={() => setDropDownVisible(!dropDownVisible)}
      >
        <View style={styles.iconContainer}>
          <Image style={styles.hamburgerIcon} source={require('../../assets/hamburger.png')}/>
        </View>
      </TouchableOpacity>

      {dropDownVisible ? dropdown : null}

      <View style={styles.searchBarContainer}>

        <TextInput
          value={search}
          onChangeText={text => searchPosts(text)}
          placeholder="Search for a post"
          onBlur={Keyboard.dismiss}
          clearButtonMode="always"
          style={styles.searchBar}
        />

        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../assets/search.png')}/>
        </View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  filters: {
    zIndex: 1,
    marginHorizontal: 17,
    flexDirection: 'row',
  },
  button: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
  iconContainer: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hamburgerIcon: {
    height: 30,
    width: 30,
  },
  dropdown: {
    position: 'absolute',
    marginTop: 44,
    paddingTop: 8,
    paddingBottom: 6,
    paddingHorizontal: 5,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: 0.16,
    shadowOffset: { width: 0, height: 3 },
  },
  nameBoxContainer: {
    flexDirection: 'row',
    marginBottom: 2,
    justifyContent: 'space-between',
  },
  languageLabel: {
    marginRight: 8,
  },
  searchBarContainer: {
    flexDirection: 'row',
    width: width - 84,
    height: 40,
    borderWidth: 2,
    borderRadius: 5,
  },
  searchBar: {
    height: 36,
    width: width - 134,
    paddingLeft: 10,
  },
  imageContainer: {
    height: 36,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
  image: {
    height: 20,
    width: 20,
  },
});