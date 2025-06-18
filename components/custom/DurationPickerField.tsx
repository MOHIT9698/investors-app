import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

const UNITS = ['Minutes', 'Hours', 'Days', 'Weeks', 'Months', 'Years'];

const UNIT_VALUES: Record<string, string[]> = {
  Minutes: Array.from({ length: 60 }, (_, i) => `${i + 1}`),
  Hours: Array.from({ length: 24 }, (_, i) => `${i + 1}`),
  Days: Array.from({ length: 31 }, (_, i) => `${i + 1}`),
  Weeks: Array.from({ length: 52 }, (_, i) => `${i + 1}`),
  Months: Array.from({ length: 12 }, (_, i) => `${i + 1}`),
  Years: Array.from({ length: 10 }, (_, i) => `${i + 1}`),
};

interface Props {
  label?: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

const DurationPickerField = ({ label, value, onChange, placeholder = "Select duration" }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<string>('Minutes');
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleConfirm = () => {
    if (selectedUnit && selectedValue) {
      onChange(`${selectedValue} ${selectedUnit}`);
      setModalVisible(false);
    }
  };

  return (
    <View style={{ marginBottom: 20 }}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TouchableOpacity
        style={styles.input}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{ color: value ? '#000' : '#999' }}>
          {value || placeholder}
        </Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent>
       
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Select Duration</Text>
            <TouchableOpacity
          style={styles.closeIcon}
          onPress={() => setModalVisible(false)}
        >
          <Text style={{ fontSize: 20 }}>✕</Text>
        </TouchableOpacity>

            <View style={styles.unitButtonsContainer}>
              {UNITS.map((unit) => (
                <TouchableOpacity
                  key={unit}
                  style={[
                    styles.unitButton,
                    selectedUnit === unit && styles.unitButtonSelected,
                  ]}
                  onPress={() => {
                    setSelectedUnit(unit);
                    setSelectedValue(''); // reset when changing unit
                  }}
                >
                  <Text
                    style={{
                      color: selectedUnit === unit ? '#fff' : '#000',
                    }}
                  >
                    {unit}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <FlatList
              data={UNIT_VALUES[selectedUnit]}
              keyExtractor={(item) => item}
              style={{ marginVertical: 10 }}
              numColumns={4}
              contentContainerStyle={{ alignItems: 'center' }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.optionItem,
                    selectedValue === item && styles.optionItemSelected,
                  ]}
                  onPress={() => setSelectedValue(item)}
                >
                  <Text
                    style={{
                      color: selectedValue === item ? '#fff' : '#000',
                    }}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />

            <TouchableOpacity
              style={[
                styles.confirmButton,
                !(selectedValue && selectedUnit) && { backgroundColor: '#ccc' },
              ]}
              disabled={!selectedValue || !selectedUnit}
              onPress={handleConfirm}
            >
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                Confirm
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DurationPickerField;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: "#566573",
    marginBottom: 5,
  },
  input: {
    padding: 12,
    fontSize: 16,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 20,
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    maxHeight: "90%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  unitButtonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  unitButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginVertical: 5,
  },
  unitButtonSelected: {
    backgroundColor: "#00bdff",
    borderColor: "#00bdff",
  },
  optionItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    margin: 5,
    minWidth: 60,
    alignItems: "center",
  },
  optionItemSelected: {
    backgroundColor: "#00bdff",
    borderColor: "#00bdff",
  },
  confirmButton: {
    backgroundColor: "#00bdff",
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  closeIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
    padding: 5,
  },
});
