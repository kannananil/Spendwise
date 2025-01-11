import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Platform } from 'react-native';
import { buttonStyles } from '../styles/button';
import { shadows } from '../styles/shadows';
import { useThemedStyles } from '../hooks/useThemedStyles';

type AddTaskFormProps = {
  onSubmit: (description: string) => void;
};

export const AddTaskForm: React.FC<AddTaskFormProps> = ({onSubmit}) => {
  const styles = useThemedStyles((colors) => ({
    form: {
      height: 50,
      marginBottom: 20,
      flexDirection: 'row',
      ...shadows,
    },
    textInput: {
      flex: 1,
      paddingHorizontal: 15,
      paddingVertical: Platform.OS === 'ios' ? 15 : 0,
      borderRadius: 5,
      backgroundColor: colors.white,
      fontSize: 17,
    },
    submit: {
      ...buttonStyles.button,
      width: 50,
      height: '100%',
      paddingHorizontal: 0,
      paddingVertical: 0,
      marginLeft: 20,
      marginRight: 0,
    },
    icon: {
      ...buttonStyles.text,
    },
  }));

  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    onSubmit(description);
    setDescription('');
  };

  return (
    <View style={styles.form}>
      <TextInput
        value={description}
        placeholder="Enter new task description"
        onChangeText={setDescription}
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.textInput}
      />
      <Pressable onPress={handleSubmit} style={styles.submit}>
        <Text style={styles.icon}>Add task</Text>
      </Pressable>
    </View>
  );
};
