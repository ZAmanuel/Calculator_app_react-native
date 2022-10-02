import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Switch,
} from "react-native";

import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
function start_counting() {
  setInterval(() => {
    alert("working");
  }, 2000);
}


export default function App() {
  const [calcBoard, setCalcBoard] = useState(0);
  
  const [isEnabled, setIsEnabled] = useState(false);
  
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  return (
    
    <View style={[styles.container ,{backgroundColor: isEnabled ? "black" : "white"}]}>
     
     <View style={{paddingRight:340}}>
       <Switch
        trackColor={{ false: "grey", true: "black" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /></View> 
      <View
        style={{
          flex: 2,
          flexDirection: "row",
          color:"white",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingRight: 20,
        }}
      >
        
        <Text
          numberOfLines={2}
         style={{ fontSize: 60 ,color :isEnabled ? "white" : "black"}}
        >
           
          {calcBoard}
          
        </Text>
      </View>

      <View
        style={{flexDirection: "row", }}
      >

<TouchableOpacity
           
           onPress={() => {
            setCalcBoard(0);
          }}
         >

 <Text style={{paddingLeft:30 ,fontSize:45 , color:"red"}}>
       C
       </Text>

         </TouchableOpacity>

         <TouchableOpacity
           
           onPress={() => {
            
          }}
         >

    <Text style={{paddingLeft:80,paddingTop:10}}>
     <FontAwesome name="history" size={40} color="green" />
       </Text>

         </TouchableOpacity>

        <TouchableOpacity
           
            onPress={() => {
              var editedText = calcBoard.slice(0, -1);
              setCalcBoard(editedText);
            }}
          >

  <Text style={{paddingLeft:160}}>
         <Feather name="delete" size={40} color="green" />
        </Text>

          </TouchableOpacity>
      

          

          
      
      </View>

      <View style={styles.viewsRow}>
        <View style={styles.btnViews}>
          <TouchableOpacity
            //disabled={true}
            style={[styles.button , {backgroundColor:isEnabled ? "#030404" : "#DCDCDC",width:85,height:76,borderRadius:50}]} 
            onPress={() => {
              if (calcBoard == 0) setCalcBoard(7);
              else setCalcBoard(calcBoard + "" + 7);
            }}
          >
            <Text style={[styles.btnText ,{color : isEnabled ? "white" : "black"}]}>7</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnViews}>
          <TouchableOpacity
            style={[styles.button , {backgroundColor:isEnabled ? "#110c11" : "#DCDCDC",width:85,height:76,borderRadius:50}]}
            onPress={() => {
              if (calcBoard == 0) setCalcBoard(8);
              else setCalcBoard(calcBoard + "" + 8);
            }}
          >
            <Text style={[styles.btnText ,{color : isEnabled ? "white" : "black"}]}>8</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnViews}>
          <TouchableOpacity
             style={[styles.button , {backgroundColor:isEnabled ? "#110c11" : "#DCDCDC",width:85,height:76,borderRadius:50}]}
            onPress={() => {
              if (calcBoard == 0) setCalcBoard(9);
              else setCalcBoard(calcBoard + "" + 9);
            }}
          >
            <Text style={[styles.btnText ,{color : isEnabled ? "white" : "black"}]}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnViews}>
          {/*<TouchableOpacity
            style={styles.button}
            onPress={() => {
              var editedText = calcBoard.slice(0, -1);
              setCalcBoard(editedText);
            }}
          >
            <Text style={styles.btnText}>del</Text>
          </TouchableOpacity>*/}
          <TouchableOpacity
            style={[styles.button , {backgroundColor:isEnabled ? "#110c11" : "#DCDCDC",width:85,height:76,borderRadius:50,}]}
            onPress={() => {
              if (calcBoard == 0) setCalcBoard("");
              else setCalcBoard(calcBoard + "" + "/");
            }}
          >
            <Text style={[styles.btnText ,{color:"green"}]}>&#247;</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewsRow}>
        <View style={styles.btnViews}>
          <TouchableOpacity 
           style={[styles.button , {backgroundColor:isEnabled ? "#110c11" : "#DCDCDC",width:85,height:76,borderRadius:50}]}
           onPress={() => {
            if (calcBoard == 0) setCalcBoard(4);
            else setCalcBoard(calcBoard + "" + 4);
          }}>
            <Text style={[styles.btnText ,{color : isEnabled ? "white" : "black"}]}>4</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnViews}>
          <TouchableOpacity 
          style={[styles.button , {backgroundColor:isEnabled ? "#110c11" : "#DCDCDC",width:85,height:76,borderRadius:50}]} 
          onPress={() => {
            if (calcBoard == 0) setCalcBoard(5);
            else setCalcBoard(calcBoard + "" + 5);
          }}>
            <Text style={[styles.btnText ,{color : isEnabled ? "white" : "black"}]}>5</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnViews}>
          <TouchableOpacity
             style={[styles.button , {backgroundColor:isEnabled ? "#110c11" : "#DCDCDC",width:85,height:76,borderRadius:50}]}
             onPress={() => {
              if (calcBoard == 0) setCalcBoard(6);
              else setCalcBoard(calcBoard + "" + 6);
            }}
          >
            <Text style={[styles.btnText ,{color : isEnabled ? "white" : "black"}]}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnViews}>
          <TouchableOpacity
             style={[styles.button , {backgroundColor:isEnabled ? "#110c11" : "#DCDCDC",width:85,height:76,borderRadius:50}]}
            onPress={() => {
              if (calcBoard == 0) setCalcBoard("");
              else setCalcBoard(calcBoard + "" + "*");
            }}
          >
            <Text style={[styles.btnText , {color:"green"}]}>x</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewsRow}>
        <View style={styles.btnViews}>
          <TouchableOpacity 
          style={[styles.button , {backgroundColor:isEnabled ? "#110c11" : "#DCDCDC",width:85,height:76,borderRadius:50}]}
          onPress={() => {
            if (calcBoard == 0) setCalcBoard(1);
            else setCalcBoard(calcBoard + "" + 1);
          }}>
            <Text style={[styles.btnText ,{color : isEnabled ? "white" : "black"}]}>1</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnViews}>
          <TouchableOpacity
            style={[styles.button , {backgroundColor:isEnabled ? "#110c11" : "#DCDCDC",width:85,height:76,borderRadius:50}]}
            onPress={() => {
              if (calcBoard == 0) setCalcBoard(2);
              else setCalcBoard(calcBoard + "" + 2);
            }}>
            <Text style={[styles.btnText ,{color : isEnabled ? "white" : "black"}]}>2</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnViews}>
          <TouchableOpacity 
          style={[styles.button , {backgroundColor:isEnabled ? "#110c11" : "#DCDCDC",width:85,height:76,borderRadius:50}]} 
          onPress={() => {
            if (calcBoard == 0) setCalcBoard(3);
            else setCalcBoard(calcBoard + "" + 3);
          }}>
            <Text style={[styles.btnText ,{color : isEnabled ? "white" : "black"}]}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnViews}>
          <TouchableOpacity 
           style={[styles.button , {backgroundColor:isEnabled ? "#110c11" : "#DCDCDC",width:85,height:76,borderRadius:50}]}
           onPress={() => {
            if (calcBoard == 0) setCalcBoard("");
            else setCalcBoard(calcBoard + "" + "+");
          }}>
            <Text style={[styles.btnText ,{color:"green"}]}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewsRow}>
        <View style={styles.btnViews}>
          <TouchableOpacity
          style={[styles.button , {backgroundColor:isEnabled ? "#110c11" : "#DCDCDC",width:85,height:76,borderRadius:50}]}
            onPress={() => {
              if (calcBoard == 0) setCalcBoard(".");
              else setCalcBoard(calcBoard + "" + ".");
            }}
          >
            <Text style={[styles.btnText ,{color:"green"}]}>.</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnViews}>
          <TouchableOpacity 
          style={[styles.button , {backgroundColor:isEnabled ? "#110c11" : "#DCDCDC",width:85,height:76,borderRadius:50}]} 
          onPress={() => {
            if (calcBoard == 0) setCalcBoard(0);
            else setCalcBoard(calcBoard + "" + 0);
          }}>
            <Text style={[styles.btnText ,{color : isEnabled ? "white" : "black"}]}>0</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.btnViews}>
          <TouchableOpacity 
          style={[styles.button , {backgroundColor:isEnabled ? "#110c11" : "#DCDCDC",width:85,height:76,borderRadius:50}]}
          onPress={() => {
            if (calcBoard == 0) setCalcBoard("-");
            else setCalcBoard(calcBoard + "" + "-");
          }}>
            <Text style={[styles.btnText ,{color:"green"}]}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnViews}>
          <TouchableOpacity
            style={[styles.button , {backgroundColor: isEnabled ? "#110c11" : "#DCDCDC",width:85,height:76,borderRadius:50}]}
            onPress={() => {
              
              setCalcBoard(calcBoard + " = " + eval(calcBoard));
              results.push(eval(calcBoard));
            }}
          >
            <Text style={[styles.btnText, {color:"green"}]}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    flexDirection: "column",
    flex: 1,
    

  },
  button: {
    width: "90%",
    //marginTop: 20,
    backgroundColor: "isEnabled" ? "black" : "white",
    padding: 3.5,
    borderRadius: 10,
  },
  btnText: {
    color: "black",
    fontSize: 40,
    justifyContent: "center",
    textAlign: "center",
  },
  btnViews: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewsRow: {
    flex: 0.5,
    flexDirection: "row",
    
  },
});