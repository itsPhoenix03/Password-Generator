/* eslint-disable prettier/prettier */
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(website: string) {
    Linking.openURL(website);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          How GTR got it's nickname 'Godzilla'?
        </Text>

        <Image
          source={{
            uri: 'https://motoristprod.s3.amazonaws.com/uploads/redactor_rails/picture/data/5266/JDMs-All-Car-Enthusiasts-Should-Know-Nissan-skyline.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text numberOfLines={3} style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            culpa odio officia perferendis voluptas sint nesciunt doloribus
            quibusdam, id, aperiam rem? Voluptates voluptas, possimus doloribus
            expedita eligendi accusantium aliquid necessitatibus?
          </Text>
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://motoristprod.s3.amazonaws.com/uploads/redactor_rails/picture/data/5266/JDMs-All-Car-Enthusiasts-Should-Know-Nissan-skyline.jpg',
              )
            }>
            <Text style={[styles.primaryBtn, styles.btn]}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://motoristprod.s3.amazonaws.com/uploads/redactor_rails/picture/data/5266/JDMs-All-Car-Enthusiasts-Should-Know-Nissan-skyline.jpg',
              )
            }>
            <Text style={[styles.secondaryBtn, styles.btn]}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    padding: 8,
    fontSize: 25,
    fontWeight: 'bold',
  },
  card: {
    margin: 10,
    borderWidth: 1,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    elevation: 4,
  },
  cardImage: {
    height: 250,
    marginVertical: 5,
  },
  cardContent: {
    marginVertical: 5,
    padding: 15,
  },
  cardTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
    marginTop: 15,
    color: '#000',
  },
  cardDescription: {},
  cardFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 10,
  },
  btn: {
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
  primaryBtn: {
    backgroundColor: '#000',
    color: '#fff',
  },
  secondaryBtn: {
    color: '#000',
  },
});
