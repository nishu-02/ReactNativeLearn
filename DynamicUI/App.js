import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Platform, SafeAreaView,FlatList,
   ScrollView, 
   SectionList} from 'react-native';
import pokemonList from './data.json';
import groupedPokemonList from "./grouped-data.json";

export default function App() {

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* <ScrollView style={styles.scrollView}>
        {pokemonList.map((pokemon) => {
          console.log(pokemon.id);
          return (
            <View style = {styles.card} 
            key = {pokemon.id}>
              <Text style = {styles.text}> {pokemon.type} </Text>
              <Text style = {styles.text}> {pokemon.name} </Text>
            </View>
          )
        })}
      </ScrollView> */}
      {/* <FlatList
        // data = { [ ] }
        data = {pokemonList}
        renderItem = {({ item }) => {
          // console.log(item.id);
          return (
            <View style = {styles.card} key = {item.id}>
              <Text style = {styles.text}> {item.type} </Text>
              <Text style = {styles.text}> {item.name} </Text>
            </View>
          );
        }}
        // horizontal
        //key index id
        ItemSeparatorComponent = {<View style ={{height:16}}/>} 
        keyExtractor={(item, index) => item.id.toString()}
        ListEmptyComponent={<Text>kuch nhi h bhai </Text>}
        ListHeaderComponent={
          <Text style={{fontSize:34, marginBottom:15, fontFamily:'serif', color:'teal', 
            textAlign:'center', marginTop:15,
          }}>  Pokemon List</Text>
        }
        

        ListFooterComponent={
          <Text style={{fontSize:34, fontFamily:'serif', color:'teal', 
            textAlign:'center', marginTop:15,
          }}>  Khatam Bhai!</Text>
        }
        /> */}
        {/* it accepts two props
         1. sections
         2. renderItem that return jsx for rendering the items in the list*/}
      
        <SectionList 
        sections={groupedPokemonList}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text style = {styles.text}> {item} </Text>
            </View>
          );
        }}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeaderText}>{section.type}</Text>
        )}

        SectionSeparatorComponent={ () =>
        <View style={{height:24}} />}
        
        />
      
    </SafeAreaView>

  );
}
//there can be issue in the performance as the whole list is rendering all the time
//FlatList component render only the items currently in view making it highly performant for long lists.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    // paddingTop: Platform.OS === 'android' ? 25 : 0,
    //  not a good approach for the safeareaview  
    paddingTop: StatusBar.currentHeight,  

  },
  scrollView: {
    paddingHorizontal:10,
  },
  card: {
    backgroundColor:'thistle',
    borderRadius:10,
    padding:16,
    // marginBottom:8,
    borderWidth:1,
    borderColor:'teal',
  },
  text: {
    fontSize:16,
  },
  sectionHeaderText: {
    fontSize:26,
    backgroundColor:'beige',

  }
  
}  
);

// import { StyleSheet, View, Text, SafeAreaView, Platform } from 'react-native';
// import CustomButton from './components/CustomButtons/CustomButton';

// //SafeAreaView


// export default function App() {

//   return (
//     <SafeAreaView style={styles.safeContainer}>
//       <View style={styles.container}>
//          <View style ={styles.box}>
//           <Text style={styles.text}>Nishant Garg</Text>
//           <CustomButton title="Press Me" onPress= { () => alert('!daba diya')}></CustomButton>
//         </View>
//       </View>
//     </SafeAreaView>

//   );
// }

// const styles = StyleSheet.create({
//   safeContainer: {
//     flex: 1,
//     backgroundColor:'beige',
//   },
//   container: {
//     flex: 1,
//     backgroundColor: 'beige',
//     paddingTop: Platform.OS === 'android' ? 25 : 0,
//     //  not a good approach for the safeareaview    
//   },
//   box: {
//     justifyContent:'center',
//     alignItems:'center',
//     // padding:16,
//   },
//   text: {
//     ...Platform.select({
//       ios:{
//         color:"midnightblue",
//         fontSize: 35,
//         fontStyle:"italic",

//       },
//       android: {
//         color: "teal",
//         fontSize:26,
//         fontFamily:'serif',

//       }
//     }),

//     textAlign:'center',
//     fontWeight:'bold',
//   },
// }  
// );


// import { useState, useEffect } from 'react';
// import { StyleSheet, View, Text, Dimensions } from 'react-native';

// export default function App() {

//   const [dimensions, setDimensions] = useState({
//     window: Dimensions.get("window")
//   })

//   useEffect(() => {
//     const subscription = Dimensions.addEventListener("change", ({window}) => {
//       setDimensions({window});
//     });
//     return () => subscription?.remove();
//   })

//   const {window} = dimensions;
//   const windowWidth = window.width;
//   const windowHeight = window.height;

//   return (
//     <View style={styles.container}>
//       <View style ={[styles.box, {
//       height: windowHeight > 600 ? '60%' : '90%',
//       width: windowWidth > 500 ? '70%' : '90%',}]}>
//         <Text style ={{ fontSize: windowWidth > 500 ? 50 :24 }}>Hello, world!</Text>
        
//       </View>
//     </View>
//   );
// }
// //it accepts either screen (includes notches and all system navbar) or window (visible portion of the app) as an argument
// // const windowWidth = Dimensions.get("window").width
// // const windowHeight = Dimensions.get("window").height

// //drawbacks--> it doesnt update with orientation of the device like landscape

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'beige',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   box: {
//     // height: windowHeight > 600 ? '60%' : '90%',
//     // width: windowWidth > 500 ? '70%' : '90%',
//     backgroundColor:'cyan',
//     justifyContent:'center',
//     alignItems:'center',
//   },
//   // text: {
//   //   color:'teal',
//   //   fontSize: windowWidth > 500 ? 50 : 24 ,
//   //   fontWeight:'condensed',
//   // },
// }  
// );


//The above code is for the drawbacks and the below code is for the solution
//this is the recommended approach



// import { StyleSheet, View, Text, useWindowDimensions } from 'react-native';

// export default function App() {

//   const windowWidth = useWindowDimensions().width
//   const windowHeight = useWindowDimensions().height
//   return (
//     <View style={styles.container}>
//        <View style ={[styles.box, {
//        height: windowHeight > 600 ? '60%' : '90%',
//        width: windowWidth > 500 ? '70%' : '90%',}]}>
//         <Text style ={{ fontSize: windowWidth > 500 ? 50 :24 }}>Hello, world!</Text>
        
//       </View>
//     </View>

//   );


// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'beige',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   box: {
//     // height: windowHeight > 600 ? '60%' : '90%',
//     // width: windowWidth > 500 ? '70%' : '90%',
//     backgroundColor:'cyan',
//     justifyContent:'center',
//     alignItems:'center',
//   },
//   // text: {
//   //   color:'teal',
//   //   fontSize: windowWidth > 500 ? 50 : 24 ,
//   //   fontWeight:'condensed',
//   // },
// }  
// );