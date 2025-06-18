// src/components/SearchSelect.tsx
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
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
  selectedItem?: Item | null;
}

const SearchSelect = ({
  label,
  placeholder = "Search...",
  fetchOptions,
  onSelect,
  selectedItem,
}: SearchSelectProps) => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (query.length === 0) {
      setData([]);
      return;
    }

    setLoading(true);
    if (debounceTimer) clearTimeout(debounceTimer);

    const timer = setTimeout(async () => {
      try {
        const results = await fetchOptions(query);
        setData(results);
      } catch (err) {
        console.error("Failed to fetch options:", err);
      } finally {
        setLoading(false);
      }
    }, 500);

    setDebounceTimer(timer);
  }, [query]);

  useEffect(() => {
    setQuery("");
  }, [selectedItem])

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TextInput
        placeholder={placeholder}
        style={styles.input}
        defaultValue={selectedItem?.label}
        onChangeText={setQuery}
        placeholderTextColor="#999"
      />

      {loading && <ActivityIndicator size="small" color="#666" style={{ marginVertical: 10 }} />}

      {!loading && (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          style={styles.list}
          keyboardShouldPersistTaps="handled"
          ListEmptyComponent={
            query.length > 0 ? <Text style={styles.empty}>No results found.</Text> : null
          }
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={() => onSelect(item)}>
              <Text style={{ fontSize: 16 }}>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
      )}


    </View>
  );
};

export default SearchSelect;

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
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
  list: {
    maxHeight: 200,
    marginTop: 8,
  },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  selected: {
    marginTop: 10,
    fontStyle: "italic",
    color: "#555",
  },
  empty: {
    textAlign: "center",
    marginTop: 10,
    color: "#999",
  },
});
