import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css'

function Contacto() {
  return (
      <Form className='formato-form'>
        <h2 className='mb-3'>Formulario de Contacto</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu correo" />
          <Form.Text className="text-muted">
            Nunca compartiremos tus datos con nadie.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Cuentanos de que se trata.</Form.Label>
          <Form.Control type="text" className="formato-descripcion"/>
        </Form.Group>
        <Form.Group variant="danger" className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Recordar mis datos" />
        </Form.Group>
        <Button variant="danger" type="submit">
          Enviar
        </Button>
      </Form>
  );
}

export default Contacto;