import { StyleSheet, ScrollView } from "react-native";
import React from "react";

import { useSelector } from "react-redux";

import { Colors } from "../../constants/color";

import PatientCard from "./PatientCard";

export default function PatientList() {
  const users = useSelector((state) => state.users)

  return (
    <ScrollView style={styles.container}>
      {users.map((user) => {
        console.log(user)
        return <PatientCard key={user.id} user={user}/>
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16
  }
});
