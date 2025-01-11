import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, FlatList, Modal } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export const Dropdown = ({ options, placeholder, onSelect }) => {
  const { colors } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    onSelect(item.value);
  };

  return (
    <View style={styles.container}>
      <Pressable 
        onPress={() => setIsOpen(!isOpen)} 
        style={[styles.trigger, { 
          borderColor: colors.inputBorder,
          backgroundColor: colors.inputBackground 
        }]}
      >
        <Text style={[styles.triggerText, { color: colors.text }]}>
          {selectedItem ? selectedItem.label : placeholder || 'Select an option'}
        </Text>
      </Pressable>

      {isOpen && (
        <Modal transparent animationType="fade">
          <Pressable style={styles.overlay} onPress={() => setIsOpen(false)} />
          <View style={[styles.dropdown, { 
            backgroundColor: colors.card,
            borderColor: colors.border
          }]}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value.toString()}
              renderItem={({ item }) => (
                <Pressable 
                  onPress={() => handleSelect(item)} 
                  style={[styles.option, { borderBottomColor: colors.border }]}
                >
                  <Text style={[styles.optionText, { color: colors.text }]}>{item.label}</Text>
                </Pressable>
              )}
            />
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 3,
    height: 50,
  },
  trigger: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  triggerText: {
    fontSize: 16,
    color: '#333',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  dropdown: {
    position: 'absolute',
    top: 60,
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  option: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});
