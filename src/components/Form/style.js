import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  mainContainer : {
    backgroundColor: '#FDFDFD',
    height: '100%',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 30,
  },

  form: {
    width: '100%',
    height: 'auto',
    marginTop: 30,
    padding: 20,
  },

  formLabel: {
    color: '#000000',
    fontSize: 18,
    paddingLeft: 20,
    
  },

  input: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#F6F6F6',
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },

  buttonCalculate: {
    borderRadius: 50, 
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#FF0043",
    paddingTop: 14,
    paddingBottom: 14,
    margin: 30,
    marginLeft: 12,
  },
  textButtonCalculat: {
    fontSize: 20,
    color:  "#FFFFFF",
    
  }
})

export default style