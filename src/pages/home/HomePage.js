import { View } from 'react-native'
import { styles } from '../../pages/home/HomePageStyles'
import CustomButton from '../../components/customButton/CustomButton'
export default function HomePage() {
    return (
        <View>
            <View>
                <View>
                    <Image />
                </View>
                <View>
                    <Text style={{ color: '#171717', fontWeight: '700', fontSize: 25 }}>Boas Vindas à <Text style={{ color: '#3479FA', }}>nossa plataforma!</Text></Text>
                    <Text style={{ fontWeight: '500', fontSize: 18 }}>Descubra a praticidade do nosso aplicativo com apenas um toque!</Text>
                    <Text style={{ color: '#333333', fontSize: 16 }}>Escolha entre gerar seu próprio QR Code ou ler um já existente!</Text>
                </View>
                <View>
                    <CustomButton>
                    <Text style={[styles.buttonText, { color: '#F9F5FF' }]}>Gerar QR Code</Text>
                    </CustomButton>
                    <CustomButton>
                    <Text style={[styles.buttonText, { color: '#000' }]}>Ler QR Code</Text>
                    </CustomButton>
                </View>
            </View>
        </View>
    )
}