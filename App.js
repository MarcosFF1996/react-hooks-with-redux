import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import axios from 'axios';

export default function app() {

    const [dados, setDados] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const result = await axios('https://reactnative.dev/movies.json');
            setDados(result.data.movies);
        }
        fetchData();
    }, []);

    return (
        <View style={styles.body}>
            {
                dados.length>0?
                <View>
                    {dados.map((item) => <Text key={item.id}>{item.title}</Text>)}
                </View>:<Text>Carregando</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
  body: {
    flex: 1
  },
});