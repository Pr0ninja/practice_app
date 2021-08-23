import React,{useEffect, useState} from 'react'
import { Button, Pressable, StyleSheet, Text, TextInput, View,Image } from 'react-native'
import {useSelector,useDispatch} from 'react-redux'
import {color,fontColor} from '../constant/colors'
import Todobox from './components/Todobox';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';


export default function Home() {
    const [todo,setTodo]=useState();
    let myState=useSelector((state)=>state.mathOperation);
    let myDispatch=useDispatch();



    const opacityValue = useSharedValue(0);

    const animationStyle = useAnimatedStyle(() => {
        return {
          opacity:opacityValue.value
        }
      })
      useEffect(()=>{
          
      },[])
    return (
        <View style={styles.main}>
           <View style={styles.todoSection}>
               <Text style={styles.h1}>Todo List</Text>
               <View style={styles.todoInput}>
                    <TextInput value={todo} placeholder="Enter todos" style={styles.input} onChangeText={(e)=>{setTodo(e)}} />
                    <Pressable style={styles.customButton} onPress={()=>{
                        myDispatch({type:"ADD_TODO",paylod:todo})
                        opacityValue.value=withTiming(1,{duration:500})
                        setTodo('')
                        }}>
                        <Text>Add</Text>

                    </Pressable>
               </View>
              
               {/* <Animated.View style={[{width:100,height:100,backgroundColor:"red"},animationStyle]}>

               </Animated.View> */}
           </View>
           {/* <Image source={require('../assets/images/icons8-home.svg')} style={{width:100,height:100,resizeMode:'contain'}}/> */}
           <Todobox animationStyle={animationStyle} />
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:color.primaryColor
    },
    todoSection:{
        margin:10

    },
    h1:{
        color:fontColor.colorType1,
        fontSize:35
    },
    todoInput:{
        flexDirection:'row',
        marginTop:10

    },
    input:{
        borderColor:color.colorType3,
        borderWidth:3,
        flex:1,
        borderRadius:5
    },
    customButton:{
        alignItems:'center',justifyContent:'center',
        marginHorizontal:10,
        padding:20,
        backgroundColor:color.colorType2,
        borderRadius:5,
        borderColor:color.colorType3,
        borderWidth:3,
        
    }

})
