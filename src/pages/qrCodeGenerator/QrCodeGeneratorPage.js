import CustomButton from "../../components/customButton/CustomButton"
import Input from '../../components/input/Input'
import QRCode from 'react-native-qrcode-svg';
import { View, Text } from "react-native";
import React, { useState } from 'react';
import { styles } from "../../styles/commonStyles";

export default function QrCodeGeneratorPage({ navigation }) {
    const [qrValue, setQRValue] = useState('');
    const [isActive, setIsActive] = useState(false);

    const generateQRCode = () => {
        if (!qrValue) return;

        setIsActive(true);
    };

    const handleInputChange = (text) => {
        setQRValue(text);

        if (!text) {
            setIsActive(false);
        }
    };

    return (
        <View style={[styles.container, { justifyContent: 'flex-start', paddingTop: 20 }]}>
            <View style={styles.barcodeImageBox}>
                {/*<Image source={barcodeImage} style={{ height: 150, width: 150 }} />*/}
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Gerador de QR Code
                </Text>
                <Text style={styles.description}>
                    Cole uma URL ou insira um texto para criar um QR Code.
                </Text>
                {/*<TextInput
                    style={styles.input}
                    placeholder="   Digite o texto ou URL"
                    value={qrValue}
                    onChangeText={handleInputChange}
                />*/}
                <Input placeholder='Digite o texto ou URL' value={qrValue} onChangeText={handleInputChange} />
                {/* <TouchableOpacity
                    style={[styles.button, { alignItems: 'center', backgroundColor: '#171717' }]}
                    onPress={generateQRCode}
                >
                    <Text style={[styles.buttonText, { color: '#F9F5FF' }]}>
                        Gerar QR Code
                    </Text>
                </TouchableOpacity>*/}
                <CustomButton onPress={generateQRCode}>
                    <Text>
                        Gerar QrCode
                    </Text>
                </CustomButton>
                {isActive && (
                    <View style={styles.qrCode}>
                        <QRCode
                            value={qrValue}
                            size={200}
                            color="black"
                            backgroundColor="white"
                        />
                    </View>
                )}
            </View>
        </View>
    )
}