import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { useSelector } from "react-redux";

export default function PatientList() {
  const users = useSelector((state) => state.users)

  return (
    <View>
      {users.map((user) => {
        return <Text key={user.id}>{user.name}</Text>
      })}
    </View>
  );
}

const styles = StyleSheet.create({});
