import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import { Colors } from "../../constants/color";

import CustomButton from "../ui/CustomButton";

export default PatientCard = ({ user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/images/doctor-profile.jpg')} style={styles.image}/>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.heading}>{user.name}</Text>
          <Text style={styles.subHeading}>+91 {user.phone}</Text>
        </View>
        <View style={styles.dobContainer}>
          <Text style={styles.subHeading}>Age:</Text>
          <Text style={styles.heading}>3 M</Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <CustomButton
          title="View Details"
          backgroundColor={Colors.accent500}
          textColor={Colors.white}
          onPress={() => {}}
        />
        <CustomButton 
          title="Remove Patient"
          backgroundColor={Colors.white}
          textColor={Colors.primary500}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary500,
    marginVertical: 8,
    borderRadius: 16,
  },
  details: {
    flexDirection: "row",
  },
  imageContainer: {
    flex: 1,
    padding: 8
  },
  infoContainer: {
    flex: 3,
    padding: 8
  },
  dobContainer: {
    flex: 1,
    padding: 8
  },
  buttons: {
    flexDirection: "row",
    alignItems: 'stretch',
    justifyContent: 'space-around'
  },
  heading: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: 'bold'
  },
  subHeading: {
    fontSize: 16,
    color: Colors.grey,
    fontWeight: '500'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  }
});
