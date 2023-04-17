import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import MapPreview from '../components/MapPreview'
import { useSelector } from 'react-redux'
import { COLORS } from '../constants'

const PlaceDetailScreen = ({ route }) => {
    const { placeId } = route.params

    const selectedPlace = useSelector(state => state.places.places.find(place => place.id === placeId))

    return (
        <ScrollView>
            <Image source={{ uri: selectedPlace.image }} style={styles.image} />
            <View style={styles.location}>
                <View style={styles.addressContainer}>
                    <Text style={styles.addressContainer}>{selectedPlace.address}</Text>
                </View>
                <MapPreview style={styles.map} location={{ lat: selectedPlace.lat, lng: selectedPlace.lng }} >
                    <Text>{selectedPlace.title}</Text>
                </MapPreview>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    image: {
        height: '35%',
        minHeight: 300,
        width: '100%'
    },
    location: {
        margin: 20,
        width: '90%',
        maxWidth: 350,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10
    },
    addressContainer: {
        padding: 20
    },
    address: {
        color: COLORS.celeste,
        textAlign: 'center'
    },
    map: {
        height: 300,
    }
})

export default PlaceDetailScreen
