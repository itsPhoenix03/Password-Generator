/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>

      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://motoristprod.s3.amazonaws.com/uploads/redactor_rails/picture/data/5266/JDMs-All-Car-Enthusiasts-Should-Know-Nissan-skyline.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Godzilla</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            culpa odio officia perferendis voluptas sint nesciunt doloribus
            quibusdam, id, aperiam rem? Voluptates voluptas, possimus doloribus
            expedita eligendi accusantium aliquid necessitatibus?
          </Text>
          <Text style={styles.cardFooter}>Type: JDM</Text>
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
    padding: 15,
    borderWidth: 1,
    borderColor: '#e64865',
    borderRadius: 15,
  },
  cardImage: {
    height: 180,
    borderRadius: 10,
  },
  cardContent: {
    marginVertical: 5,
  },
  cardTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  cardDescription: {
    marginVertical: 15,
  },
  cardFooter: {
    color: '#e64865',
  },
});
