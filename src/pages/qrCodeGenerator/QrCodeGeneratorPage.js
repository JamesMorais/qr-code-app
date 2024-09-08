import CustomButton from "../../components/customButton/CustomButton";
import Input from '../../components/input/Input';
import { View, Text, Image } from "react-native";
import React, { useState } from 'react';
import { styles } from "../../styles/commonStyles";
import axios from 'axios';  

export default function QrCodeGeneratorPage({ navigation }) {
    const [qrValue, setQRValue] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [qrCodeImage, setQRCodeImage] = useState(null);  

    const generateQRCode = async () => {
        if (!qrValue) return;

        try {
            // Fazendo a requisição para a API de geração de QR Code
            const response = await axios.get('https://api.qrserver.com/v1/create-qr-code/', {
                params: {
                    data: qrValue,  
                    size: '200x200',  
                    color: '000000',  
                    bgcolor: 'ffffff'  
                },
                responseType: 'blob',  
            });

            // Criando um URL para exibir a imagem
            const imageURL = URL.createObjectURL(response.data);
            setQRCodeImage(imageURL);
            setIsActive(true);
        } catch (error) {
            console.error("Erro ao gerar o QR Code:", error);
            setIsActive(false);
        }
    };

    const handleInputChange = (text) => {
        setQRValue(text);

        if (!text) {
            setIsActive(false);
            setQRCodeImage(null);  // Reseta a imagem quando o campo está vazio
        }
    };

    return (
        <View style={[styles.container, { justifyContent: 'flex-start', paddingTop: 20 }]}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Gerador de QR Code
                </Text>
                <Text style={styles.description}>
                    Cole uma URL ou insira um texto para criar um QR Code.
                </Text>

                <Input placeholder='Digite o texto ou URL' value={qrValue} onChangeText={handleInputChange} />

                <CustomButton style={styles.button} onPress={generateQRCode}>
                    <Text>
                        Gerar QrCode
                    </Text>
                </CustomButton>
                {isActive && qrCodeImage && (
                    <View style={styles.qrCode}>
                        <Image
                            source={{ uri: qrCodeImage }}
                            style={{ width: 200, height: 200 }}
                            resizeMode="contain"
                        />
                    </View>
                )}
            </View>
        </View>
    );
}
