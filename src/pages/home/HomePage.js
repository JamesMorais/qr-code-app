import { View, Text } from 'react-native';
import CustomButton from '../../components/customButton/CustomButton';
import { styles } from '../../styles/commonStyles';

export default function HomePage({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View>
                    <Text style={styles.title}>
                        Boas Vindas à <Text style={styles.highlightedText}>nossa plataforma!</Text>
                    </Text>
                    <Text style={styles.subText}>Descubra a praticidade do nosso aplicativo com apenas um toque!</Text>
                    <Text style={styles.maintext}>Escolha entre gerar seu próprio QR Code, ler um já existente, ou até mesmo salvar seus links!</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <CustomButton onPress={() => navigation.navigate('QrCodeGenerator')}>
                        <Text style={[styles.buttonText, { color: '#F9F5FF' }]}>Gerar QR Code</Text>
                    </CustomButton>

                    <CustomButton onPress={() => navigation.navigate('QrCodeScan')}>
                        <Text style={styles.buttonText}>Ler QR Code</Text>
                    </CustomButton>

                    <CustomButton onPress={() => navigation.navigate('SavedLinks')}>
                        <Text style={styles.buttonText}>Salvar Links</Text>
                    </CustomButton>
                </View>
            </View>
        </View>
    );
}
