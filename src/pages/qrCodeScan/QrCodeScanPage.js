import React, { useState, useEffect } from 'react';
import * as Clipboard from 'expo-clipboard';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Text, View, Button, } from 'react-native';
import CustomButton from '../../components/customButton/CustomButton';
import { styles } from '../../styles/commonStyles';

export default function QrCodeScanPage({ navigation }){
    //const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('Ainda não escaneado')
    const [permission, requestPermission] = useCameraPermissions();


    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
      }
    
      if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
          <View style={styles.container}>
            <Text style={styles.message}>We need your permission to show the camera</Text>
            <Button onPress={requestPermission} title="grant permission" />
          </View>
        );
      }

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setText(data)
        console.log('Type: ' + type + '\nData: ' + data)
    };


    async function copyToClipboard(){
        await Clipboard.setStringAsync(text);
        alert('Texto copiado para a área de transferência!');
    }



    return (
        <View style={styles.cameraContainer}>
            <View style={styles.barcodebox}>
                <CameraView
                    onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
                    barcodeScannerSettings={{
                        barcodeTypes: ["qr", "pdf417"],
                    }}
                    style={{ height: 400, width: 400 }} />
            </View>
            <Text style={styles.maintext}>{text}</Text>

            <View style={[styles.boxButtons, {justifyContent:'space-evenly'}  ]}>

                {scanned && ( <CustomButton onPress={copyToClipboard}>
                        <Text>Copiar Link</Text>
                </CustomButton>
                )}

                {scanned && (
                    <CustomButton onPress={()=> setScanned(false)}>
                        <Text>Escanear novamente</Text>
                    </CustomButton>
                )}
                {scanned &&(<CustomButton onPress={() => navigation.navigate('SavedLinks')}>
                    <Text>Guardar Links</Text>
                </CustomButton>)}
            </View>
        </View>
    );
}