import React, { useState } from 'react';
import { Modal, Button, View, Image, ScrollView, Pressable, ActivityIndicator, Alert, StyleSheet,Text } from 'react-native';
import Greet from './components/Greet';
import Box from './components/Box';
const logoImg = require('./assets/adaptive-icon.png');
const logoo = require('./assests/kraven_logo.png');


export default function App() {
  return (
    <View style ={[styles.container]}>
      {/*the align self inhertis the alignItems and doestn have the auto value of the flex strech  */}
      {/* <Box style={{backgroundColor:"pink", alignSelf:"flex-start"}}> Box 1 </Box>  */}
      {/* <Box style={{backgroundColor:"pink", alignSelf:"flex-end"}}> Box 2</Box> */}
      {/* <Box style={{backgroundColor:"pink", alignSelf:"center"}}> Box 3 </Box> */}
      {/* <Box style={{backgroundColor:"pink",flexShrink:1}}> Box 4 shrink </Box>  */}
      {/* this is relative property flex shrink and the felxGrow */}
      {/* <Box style={{backgroundColor:"pink",flexShrink:2}}> Box 8 shrink</Box> */}
      {/* flexGrow ki deafult value 0 hoti hai so no change  */}
      {/* <Box style={{backgroundColor:"pink", flexGrow:1}}> Box 9 </Box> */}
      {/* <Box style={{backgroundColor:"pink", flexGrow:5}}> Box 5 </Box>  */}
      {/* <Box style={{backgroundColor:"pink", top:75, left:75}}> Box 10 </Box> */}
      <Box style={{backgroundColor:"pink",}}> Box 11 </Box>
      <Box style={{backgroundColor:"pink"}}> Box 12 </Box>
      {/* relative when the responsivenessa nd adaptibility is crcuial for the app and absoulte when you need precise placements and build custom animations with fixed co-ordinates*/}
      {/* <Box style={{backgroundColor:"pink",positon:"absolute",top:75, left:75}}> Box 13 </Box> */}
      <Box style={{backgroundColor:"pink"}}> Box 14 </Box>
      <Box style={{backgroundColor:"pink"}}> Box 15 </Box>
      <Box style={{backgroundColor:"pink"}}> Box 16 </Box>
      {/* <Box style={{backgroundColor:"pink", flexBasis: 140}}> Box 6 </Box> */}
      {/* <Box style={{backgroundColor:"pink", height:140, flex:1 }}> Box 7 </Box> */}
     
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor:"white",
    // flexDirection:"row",
    // width:300,
    // alignItems:"flex-start",//shifs the main axis to the cross axis
    // justifyContent:"flex-end",
    // justifyContent:"center",
    // justifyContent:"space-around",
    // justifyContent:"space-between",
    // justifyContent:"space-evenly",
    // alignItems:"flex-start",
    // alignItems:"baseline", // the text in the coantiner align in the same line
    // padding:5,
    flex:1,
    borderColor:"red",
    borderWidth:4,
    // height:400,
    marginTop:30,
    // flexWrap:"wrap",
    // gap:10,
  },
})
 {/* <Text> styleSheet  API</Text>
      <View style={[styles.box ,styles.container]}> 
        <Text>Hi there</Text>
      </View>
      
      <View style={[styles.container, styles.box]}>
        <Text>kya haal chaal</Text>
      </View> */}

// there is no inheritance of styles in react-native from the view component to the text component but it supports within text trees
//so when using the array of styles in the coponent so the last styles imported take the precedance.
  //contins key values pairs


// export default function App() {
//   return(
//     <View style={{backgroundColor:"teal" , padding:60 , flex:1}}>
//       <Greet name="Arthur Morgan" />      
//       <Greet name="John  Marston" />
//     </View>
//   );
// }
// export default function App() {
//   const [isModalVisible, SetIsModalVisible] = useState(false);
//   const [isStatusBarVisible, setIsStatusBarVisible] = useState(false);
//   const toggleStatusBar = () => {
//     setIsStatusBarVisible(prev => {
//       StatusBar.setHidden(!prev, 'slide');  // Slide animation for better effect
//       return !prev;
//     });
//   };

//   return (
//     <View style={{ flex: 1, backgroundColor: 'cyan', padding: 20 }}>
//       <ScrollView>
//         {/* Button with onPress action */}
//         <Button 
//           title="Hi there" 
//           onPress={() => console.log("Button Pressed!")} 
//           color="midnightblue"
//         />

//         {/* Pressable component with nested Image and multiple onPress events */}
//         <Pressable
//           onPressIn={() => console.log("Image Pressed")}
//           onPressOut={() => console.log("Image Press Out")}
//           onPress={() => console.log("Press action confirmed")}
//         >
//           <Image source={logoImg} style={{ width: 100, height: 100 }} />
//         </Pressable>

//         {/* Pressable Text with long text content */}
//         <Pressable onPress={() => console.log("Press detected")}>
//           <Text>
//             A week ago a friend invited a couple of other couples over for dinner. Eventually, the food was cleared off the table for what turned out to be some fierce Scrabbling. Heeding the strategy of going for the shorter, more valuable word over the longer cheaper word, our final play was “Bon,” which–as luck would have it!–happens to be a Japanese Buddhist festival, and not, as I had originally asserted while laying the tiles on the board, one half of a chocolate-covered cherry treat. Anyway, the strategy worked. My team only lost by 53 points instead of 58.
//           </Text>
//         </Pressable>

//         {/* Button to Trigger Modal */}
//         <Button 
//           title="Modal View Trigger" 
//           onPress={() => SetIsModalVisible(true)} 
//         />
//       </ScrollView>

//       {/* Modal Component */}
//       <Modal 
//         visible={isModalVisible}
//         onRequestClose={() => SetIsModalVisible(false)}
//         animationType="fade"
//         presentationStyle='pageSheet' //only for ios
//       >
//         <View style={{ padding: 20 }}>
//           <Text style={{ color: "red" }}>Hi there fella, how's it going?</Text>
//           <Button 
//             title="Close" 
//             color="teal" 
//             onPress={() => SetIsModalVisible(false)} 
//           />
//           <ActivityIndicator/>
//           <ActivityIndicator size ="large"/>
          
//           <ActivityIndicator color="midnightblue"/>
          
//           <ActivityIndicator animating={false}/>
//         </View>
//       </Modal>
//       {/* to only android */}
//       <Button title='view status bar' color="teal" onPress={toggleStatusBar}></Button>
//       <StatusBar backgroundColor="lightgreen" barStyle="dark-content">
        
//       </StatusBar>
      
//       <Button title="alert 1" onPress={() => Alert.alert("Galat option bhai!" , "shi option daaliyo")}> </Button>
//       <Button title="alert 2" onPress={() => Alert.alert("Galat option bhai!")}> </Button>
      
//       <Button title="alert 3" onPress={() => Alert.alert("Galat option bhai!" , "shi option daaliyo" ,[
//         {
//           text:"cancel krdo",
//           onPress: () => console.warn("cancel pressed!"),
//         },
//         {
//           text:"thik hai",
//           onPress: () => console.warn("ok pressed!"),
//         }
//       ])}> </Button>
//       {/* then android button limit is three */}
//     </View> 
//   );
// }
