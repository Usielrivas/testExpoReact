import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import { Avatar, Card, IconButton, Appbar } from 'react-native-paper';
import NavBar from './src/NavBar'
import Home from './src/Home'
import Cuentas from './src/Cuentas'


export default function App() {

  const [dato, setDato] = useState([])
  const [display, setDisplay] = useState( <Home dt={dato} /> )
  const crear = (data) => {
    // console.log([...dato, {cuentas: data}])
    const dd = {cuentas: data, id: parseInt(dato.length) + 1}
    setDato([...dato, dd])
    setDisplay(<Home dt={[...dato, dd]} />)
  }

 const borrar = (id) => {
    const updatedTasks = dato.filter((task) => parseInt(task.id) !== parseInt(id));
    setDato(updatedTasks);
    setDisplay(<Home dt={updatedTasks} />)
  };

  return (
    <View style={ {marginTop: 25, padding: 10} }>
      <View style={{height: "90%"}}>
        {display}
      </View>
      <Row size={12}>
        <Col sm={4} style={{ alignItems: 'center' }}>
          <IconButton
            icon="account-circle"
            size={30}
    onPress={() => setDisplay( <Cuentas fn={ {crear: crear, borrar: borrar} }/> )}
          />
        </Col>
        <Col sm={4} style={{ alignItems: 'center' }}>
          <IconButton
            icon="home"
            size={30}
            onPress={() => setDisplay( <Home dt={dato} /> )}
          />
        </Col>
        <Col sm={4} style={{ alignItems: 'center' }}>
          <IconButton
            icon="android"
            size={30}
            onPress={() => setDisplay( <Home dt={dato} /> )}
          />
        </Col>
      </Row>
    </View>
  );
}

