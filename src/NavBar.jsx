import React, { useState } from 'react';
import { Column as Col, Row } from 'react-native-flexbox-grid';
import { IconButton } from 'react-native-paper';

export default function NavBar() {

  return (
      <Row size={12}>
        <Col sm={4} style={{ alignItems: 'center' }}>
          <IconButton
            icon="account-circle"
            size={30}
            onPress={() => console.log('Pressed')}
          />
        </Col>
        <Col sm={4} style={{ alignItems: 'center' }}>
          <IconButton
            icon="home"
            size={30}
            onPress={() => console.log('Pressed')}
          />
        </Col>
        <Col sm={4} style={{ alignItems: 'center' }}>
          <IconButton
            icon="android"
            size={30}
            onPress={() => console.log('Pressed')}
          />
        </Col>
      </Row>
  );
}

