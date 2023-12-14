/* eslint-disable prettier/prettier */
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = new Array(4).fill({
    name: 'User',
    status: 'Status for user',
    userImage:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
  });

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView scrollEnabled={true} style={styles.container}>
        {contacts.map(({name, status, userImage}) => (
          <View key={Math.random()} style={styles.userCard}>
            <Image source={{uri: userImage}} style={styles.userImage} />
            <View style={styles.userDetails}>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    fontWeight: '600',
    padding: 10,
  },
  container: {},
  userCard: {
    flexDirection: 'row',
    height: 75,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 60 / 2,
  },
  userDetails: {
    paddingHorizontal: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
  },
  userStatus: {},
});
