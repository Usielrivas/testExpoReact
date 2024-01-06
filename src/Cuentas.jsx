import * as React from 'react';
import { TextInput, Button } from 'react-native-paper';
import { Column as Col, Row } from 'react-native-flexbox-grid';

const Cuentas = (props) => {
  const [text, setText] = React.useState("");
  const [id, setId] = React.useState("");

  return (
    <>
      <Row size={12}>
        <Col sm={12} >
          <TextInput
            label="Crear Cuenta"
            value={text}
            onChangeText={text => setText(text)}
          />
        </Col>
        <Col sm={4} style={{marginTop: 15}}>
          <Button mode="contained" onPress={() => props.fn.crear(text)}>
            Crear
          </Button>
        </Col>
      </Row>
      <Row size={12} style={{marginTop: 20}}>
        <Col sm={12} >
          <TextInput
            label="Eliminar por ID"
            value={id}
            onChangeText={id => setId(id)}
          />
        </Col>
        <Col sm={4} style={{marginTop: 15}}>
          <Button mode="contained" onPress={() => props.fn.borrar(id)}>
            Borrar
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Cuentas;
