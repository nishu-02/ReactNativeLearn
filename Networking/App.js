import { useEffect, useState } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {

  const[postList, setPostList] = useState([])

  const fetchData = async( limit = 15) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    const data = await response.json()
    setPostList(data)
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <SafeAreaView style ={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
        data={postList}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.bodyText}>{item.body}</Text>
            </View>
          )
          
        }}
        
        
        ItemSeparatorComponent={() => (
          <View
            style={{
              height:16
              }}
          />
                  
        )}
        ListEmptyComponent={<Text>Nothing to show</Text>}
        ListFooterComponent={<Text style={styles.footerText}>END OF THE LIST COLONEL!</Text>}  
        ListHeaderComponent={<Text style={styles.headerText}>JUST STARTED - API CALL</Text>}
       />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    paddingTop: StatusBar.currentHeight,
  },
  listContainer:{
    flex: 1,
    paddingHorizontal: 16,
  },
  card:{
    backgroundColor:'thistle',
    padding:16,
    borderRadius:8,
    borderWidth:2,
  },
  titleText: {
    fontSize:20,
    fontFamily:'serif',
  },
  bodyText: {
    fontSize:14,
  },
  headerText:{
    fontSize:23,
    marginBottom:17,
    alignItems:'center',
    fontFamily:'serif',
    color:'teal',
    textAlign:'center',
    ontWeight:"semibold",
  },
  footerText :{
    fontsize:18,
    fontFamily:'serif',
    color:"teal",
    fontWeight:"condensed",
    margin:16,
    textAlign:'center',
  },
});
