import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5FF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  box: {
    marginTop:
    40,
    width: '70%',
    alignItems: 'baseline'
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
    alignItems: 'center',
    
    justifyContent: 'space-between',
    width: '100%',
  },
  button:{
    width: 400,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  maintext: {
    fontSize: 20,
    marginTop: 15,
    marginBottom: 10,
    fontWeight:'700'
  },
  cameraContainer: {
    //flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F9F5FF',
    alignItems: 'center',
    marginTop: '10%',
    //justifyContent: 'flex-start',
    gap:'15%'
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
    textAlign: 'left',
    color: '#171717', fontWeight: '700', fontSize: 25
  },
  subText:{ fontWeight: '500', fontSize: 20 },
  buttonContainer:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  highlightedText:{
    color: '#007BFF',
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