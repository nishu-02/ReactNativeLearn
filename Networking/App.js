import { useEffect, useState } from 'react';
import { Button, FlatList, StatusBar, TextInput } from 'react-native';
import { StyleSheet, Text, View, SafeAreaView,ActivityIndicator } from 'react-native';

export default function App() {

  const[postList, setPostList] = useState([])
  //adding a loading state while the data fetche in the background

  const[isLoading, setIsLoading] = useState(true)
  //once the data is fetched update the state to false

  const[refreshing, setRefreshing] = useState(false)
  //implementing the pull to refresh

  //setting up the POST Request the data submission process
  const[postTitle, setPostTitle] = useState("")

  const[postBody, setPostBody] = useState("")
  //state to store the post body
  
  const[isPosting, setIsPosting] = useState(false)
  //state to check if the post is being posted

  const[error, setError] = useState("")
  //state to store the error message


  const fetchData = async( limit = 15) => {
    try{
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    const data = await response.json()
    setPostList(data);
    setIsLoading(false);
    } catch(error){
      console.error("Error fetching data....", error)
      setIsLoading(false)
      setError("Failed to get the data")
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData(20)
    setRefreshing(false)
  }

  const addPost = async () => {
    setIsPosting(true)

    try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
      })
    })
    const newPost = await response.json()
    setPostList([newPost, ...postList]);
    setPostTitle("");
    setPostBody("")
    setIsPosting(false);
    setError("");
  } catch(error){
    console.error("Error adding new Post")
    setError("Failed to uplaod the data")
  }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if(isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size='large' color="teal" />
        <Text> Initiliazing..... </Text>

      </SafeAreaView>
    )
  }
  return (
    <SafeAreaView style ={styles.container}>
      {error ? (
        <View>
          <Text>{error}
          </Text>
        </View>
      ) : (
      <>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Post title'
        value ={postTitle}
        onChangeText={setPostTitle}/>

        <TextInput style={styles.input} placeholder='Post Body'
        value ={postBody}
        onChangeText={setPostBody}/>
        
        <Button title={isPosting ? 'Posting...' : ' Add Post'} 
        onPress={addPost}
        disabled={isPosting}/>
        </View>      
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
        refreshing= {refreshing}
        onRefresh = {handleRefresh}
       />
       

      </View>
      </>   
      )}
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
  loadingContainer:{
    flex:1,
    justifyContent:'center',  
    paddingTop: StatusBar.currentHeight,
    alignItems:'center',
    backgroundColor:'peach',
  },
  inputContainer:{
    backgroundColor:'white',
    borderRadius:10,
    borderWidth:2,
    margin:16,
    padding:16,
  },
  input:{
    height:40,
    borderColor:'grey',
    marginBottom:8,
    padding:8,
    borderWidth:1,
    borderColor:'teal',
  },
});
