import * as Location from 'expo-location';

export const getCurrentLocation = () => new Promise(async (resolve, reject) => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        reject('Permission to access location was denied')
        return;
    }

    let location = await Location.getCurrentPositionAsync({});
    resolve(location)
});