import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '80%',
    alignItems: 'center',
  },
  boxImage: {
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
  },
  boxText: {
    width: '100%',
    marginBottom: 20,
  },
  boxButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#171717'
  },
  buttonText: {
    fontSize: 16,
  },
  maintext: {
    fontSize: 20,
    margin: 20,
    fontWeight:'700'
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: '#F9F5FF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    //gap:'15%'
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  },
  barcodeImageBox: {
    padding: 20
  },
  qrCode: {
    marginTop: 20,
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    padding: 17,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    marginBottom: 20,
  },
  description: {
    color: '#575757',
    fontSize: 16,
    marginBottom: 20,
  }, 
  title: {
    fontSize: 21,
    fontWeight: '500',
    marginBottom: 10,
  },
  wrapper: {
    maxWidth: 300,
    backgroundColor: '#F9F5FF',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#171717',
    padding: 20,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 30,
  },
});