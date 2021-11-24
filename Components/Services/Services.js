import React, { useEffect, useState } from 'react'
import { View, Text,ScrollView } from 'react-native'
import { Link } from 'react-router-native'
import Service from './Service/Service'

export default function Services() {
    const [services,setServices]= useState([])
    useEffect(()=>{
        fetch("https://mighty-caverns-68467.herokuapp.com/products")
        .then(res=>res.json())
        .then(data=>setServices(data))

    },[])

    return (
        <View>
            <Link to="/home"><Text>Go Home</Text></Link>
            <Text>This is service Sections {services.length}</Text>
            <ScrollView>
            {
                services.map(service=><Service key={service._id} service={service}></Service>)
            }
            </ScrollView>
            

        </View>
    )
}
