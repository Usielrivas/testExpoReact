import * as React from 'react';
import { List, IconButton } from 'react-native-paper';
import { Column as Col, Row } from 'react-native-flexbox-grid';
import { Text, View, ScrollView } from 'react-native';

const Lista = (props) => (
      <Row size={12}>
        <Col sm={8}>
          <List.Item
            title={props.title || "Vacio"}
            description={`ID: ${props.id}`}
            left={props => <List.Icon {...props} icon="android-messages" />}
          />
        </Col>
        <Col sm={4}>
        </Col>
      </Row>
);

export default Lista;
