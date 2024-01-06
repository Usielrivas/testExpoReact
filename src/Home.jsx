import React, { useState } from 'react';
import { Column as Col, Row } from 'react-native-flexbox-grid';
import { IconButton } from 'react-native-paper';
import { Text, View, ScrollView } from 'react-native';
import Lista from './Lista'

export default function Home(props) {

  return (
    <ScrollView>
    <Text style={{fontSize: 20}}>{props.dt.length === 0 ? 'No hay cuentas' : ''}</Text>
      {props.dt.map((detalle, index) => {
        return (<Lista key={index} title={detalle.cuentas} id={detalle.id} />)
      })}
    </ScrollView>
  );
}

