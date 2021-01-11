import React from 'react';
import { StyleSheet, View} from 'react-native';
import Header from '../Header';
import OrderCard from '../OrderCard'

export default function Orders() {

    return (
        <>
            <Header />
            <View style={styles.container}>
                <OrderCard />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingRight:'5%',
        paddingLeft: '5%'
    }
});
