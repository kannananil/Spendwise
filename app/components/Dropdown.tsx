import React, { useState } from 'react';
import { View, Text, Pressable, FlatList, Modal } from 'react-native';
import { useThemedStyles } from '../hooks/useThemedStyles';

export const Dropdown = ({ options, placeholder, onSelect }) => {
  const styles = useThemedStyles((colors) => ({
    container: {
      marginVertical: 3,
      height: 50,
    },
    trigger: {
      padding: 12,
      borderWidth: 1,
      borderColor: colors.inputBorder,
      borderRadius: 8,
      backgroundColor: colors.inputBackground,
    },
    triggerText: {
      fontSize: 16,
      color: colors.text,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    dropdown: {
      position: 'absolute',
      top: 60,
      left: 20,
      right: 20,
      backgroundColor: colors.card,
      borderRadius: 8,
      padding: 8,
      shadowColor: colors.shadow,
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 4,
      borderColor: colors.border
    },
    option: {
      padding: 12,
      borderBottomWidth: 1,
      borderBottomColor: colors.inputBoarder,
    },
    optionText: {
      fontSize: 16,
      color: colors.text,
    },
  }));
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    onSelect(item.value);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setIsOpen(!isOpen)} style={styles.trigger} >
        <Text style={styles.triggerText}>
          {selectedItem ? selectedItem.label : placeholder || 'Select an option'}
        </Text>
      </Pressable>

      {isOpen && (
        <Modal transparent animationType="fade">
          <Pressable style={styles.overlay} onPress={() => setIsOpen(false)} />
          <View style={styles.dropdown}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value.toString()}
              renderItem={({ item }) => (
                <Pressable onPress={() => handleSelect(item)} style={styles.option} >
                  <Text style={styles.optionText}>{item.label}</Text>
                </Pressable>
              )}
            />
          </View>
        </Modal>
      )}
    </View>
  );
};
