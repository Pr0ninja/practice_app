import React from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { color, fontColor } from '../../constant/colors'
import {useSelector,useDispatch} from 'react-redux'
import Animated from 'react-native-reanimated'

export default function Todobox(props) {
    const todoData= useSelector((state)=>state.todoReducer);
    const dispatch=useDispatch();
    
    return (
        <View style={styles.main}>
            <ScrollView>
            {
                todoData.todo.map((item,index)=>(
                    <Animated.View key={index} style={[styles.tile,props.animationStyle]}>
                        
                        <Text style={styles.h2}>{item.name}</Text>
                        <Pressable onPress={()=>{dispatch({type:"DELETE",paylod:item.id})}}>
                            <Text style={{color:'red'}}>Delete</Text>
                        </Pressable>
                    </Animated.View>
                    
                ))
            }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        padding:10
    },
    tile:{
        backgroundColor:color.colorType3,
        marginTop:5,
        paddingVertical:10,
        paddingHorizontal:5,
        borderRadius:5,
        elevation:2,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    h2:{
        color:fontColor.colorType2
    }
})
