import { Text, View } from 'react-native';
import { styles } from './styles'
import { useState } from 'react';

export default function HomeMap() {

    const [data, setData] = useState([
        'Alana Hauser', 'Kauane Cassenote', 'Luh', 'Leticia', 'Carolzinha'
    ])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Convidados - Festa Magnus</Text>
            {/* <Text style={styles.itemList}>Alana Hauser</Text> */}
            {
                data.map(item => (
                    <Text
                        key={item}
                        style={styles.itemList}
                    >
                        {item}
                    </Text>
                ))
            }
        </View>
    )
}