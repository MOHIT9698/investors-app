import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

interface Item {
  id: string | number;
  label: string;
  [key: string]: any;
}

interface SearchSelectProps {
  label?: string;
  placeholder?: string;
  fetchOptions: (query: string) => Promise<Item[]>;
  onSelect: (item: Item) => void;
  selectedItem?: Item | string | any | null;
  error?: string;

}

const SearchSelect = ({
  label,
  placeholder = "Search...",
  fetchOptions,
  onSelect,
  selectedItem,
  error,

}: SearchSelectProps) => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (query.length === 0) {
      setData([]);
      setDropdownVisible(false);
      return;
    }

    setLoading(true);
    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(async () => {
      try {
        const results = await fetchOptions(query);
        setData(results);
        setDropdownVisible(true);
      } catch (err) {
        console.error("Failed to fetch options:", err);
      } finally {
        setLoading(false);
      }
    }, 300);
  }, [query]);

  useEffect(() => {
    setQuery(selectedItem?.label || "");
    setDropdownVisible(false);
  }, [selectedItem]);

  const handleSelect = (item: Item) => {
    onSelect(item?.value);
    setQuery(item.label);          // ✅ sets the selected label into the input
    setDropdownVisible(false);
    Keyboard.dismiss();
  };

  return (

    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      {/* <TouchableWithoutFeedback onPress={() => {
        setDropdownVisible(false);
        Keyboard.dismiss();
      }}> */}

        <TextInput
          placeholder={placeholder}
          style={styles.input}
          value={query || selectedItem?.label || ""}
          onChangeText={(text) => {
            setQuery(text);
            setDropdownVisible(true);
          }}
          placeholderTextColor="#999"
          onFocus={() => {
            if (query.length > 0 && data.length > 0) {
              setDropdownVisible(true);
            }
          }}
        />
      {/* </TouchableWithoutFeedback> */}
      {error && <Text style={styles.error}>{error}</Text>}

      {loading && <ActivityIndicator size="small" color="#666" style={{ marginVertical: 10 }} />}

      {dropdownVisible && !loading && (
        <View style={styles.dropdown}>
          {data.length === 0 ? (
            <Text style={styles.empty}>No results found.</Text>
          ) : (
            <FlatList
              data={data}
              keyExtractor={(item) => item.id.toString()}
              keyboardShouldPersistTaps="handled"
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.item} onPress={() => handleSelect(item)}>
                  <Text style={{ fontSize: 16 }}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      )}
    </View>
  );
};

export default SearchSelect;


const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    zIndex: 999, // helps with overlapping
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: "#444",
  },
  input: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    fontSize: 16,
  },
  error: {
    color: "red",
    marginTop: 5,
    fontSize: 14,
  },
  dropdown: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 5,
    maxHeight: 200,
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  empty: {
    textAlign: "center",
    paddingVertical: 12,
    color: "#999",
  },
});
