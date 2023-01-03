import { Dimensions, StyleSheet } from "react-native";

export{modalstyles}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const modalstyles = StyleSheet.create({
    centeredView: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 11,
      marginBottom: 11,
    },
    modalView: {
      marginTop: 15,
      marginBottom: 15,
      backgroundColor: 'rgba(7, 9, 12,0.78)',
      borderRadius: 20,
      padding: 5,
      width: width - 50,
      height: height - 100,
    },
    modalTopView: {
      width: '100%',
    },
    buttonOutView: {
      margin: 7,
      flexDirection: 'row',
    },
    imageView: {
      //아마 사진바뀌면 수정할 필요있음
      width: width - 50,
      height: height - 400,
    },
    buttonout: {
      borderRadius: 100,
      borderWidth: 2.5,
      justifyContent: 'flex-end',
      borderColor: 'lightgray',
      backgroundColor: 'lightgray',
      padding: 10,
      // elevation: 2
    },
    textStyle: {
      color: '#02183c',
      fontSize: 15,
      fontWeight: 'bold',
    },
    largeUnitText: {
      fontSize: 30,
      color: 'white',
      fontWeight: 'bold',
      width:200
    },
    largeUnitText2: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
      width: 200,
    },
    largeUnitText3: {
      fontSize: 15,
      color: 'white',
    },
    largeUnitTextnum: {
      fontSize: 35,
      color: 'white',
    },
    subunitText: {
      marginBottom: 5,
      fontSize: 15,
      color: 'white',
      textAlign: 'left',
      marginLeft: 11,
    },
    image: {
      width: width - 220,
      height: height - 500,
      marginLeft: 10,
      marginRight: 10,
    },
    phonbtn: {
      textAlign: 'center',
      width: 200,
      alignItems: 'flex-end',
    },
    subunitText2: {
      marginBottom: 20,
      fontSize: 23,
      color: 'white',
      textAlign: 'left',
      marginLeft: 11,
      fontWeight: 'bold',
    },
  });
  