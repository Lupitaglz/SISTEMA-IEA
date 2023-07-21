import React from 'react'
import { NavBar } from './NavBar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import Modal from 'react-bootstrap/Modal';


import './styles/indicador.css'


import Table from 'react-bootstrap/Table';

const Indicador7 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <NavBar/>

      <Container className='c'>
        <h1 className='titulo'>Tasa de programa educativo</h1>
      <hr />
      <br />
      <h2 className='titulo'>Estudios de Analisis de Satisfacción de Trabajo</h2>
      <hr />
        <Row className='filas'>

        <Button variant="success" className='boton-modal' onClick={handleShow}>
        Añadir Registro <i class="bi bi-file-plus"></i>
      </Button>

      <Modal className='modal' show={show} onHide={handleClose}>
        <Modal.Header className='modal-header'  closeButton>
          <Modal.Title className='modal-tittle anadir'>Añadir nuevo registro</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body mb'>
          <Form className='form'>
            <Form.Group className="mb-3 form-group" controlId="exampleForm.ControlInput1">
            <Form.Label>Universidades:</Form.Label>
              <Form.Select aria-label="Default select example">
                  <option>Selecciona la Universidad</option>
                  <option value="1">Universidad Tecnológica del Norte de Aguascalientes</option>
                  <option value="2">Universidad Tecnológica de Aguascalientes</option>
                  <option value="3">Universidad Tecnológica de Calvillo</option>
                  <option value="4">Universidad Tecnológica El Retoño</option>
                  <option value="5">Tecnológica Metropolitana de Aguascalientes</option>
                  <option value="6">Universidad Politécnica de Aguascalientes</option>
                  <option value="7">Normal Rafael Aguilar Lomeli</option>
                  <option value="8">Normal Superior Federal José Santos Valdéz</option>
                  <option value="9">Centro Regional de Educación Normal de Aguascalientes.</option>
                  <option value="10">Normal Rural Justo Sierra Mendez Cañada Honda</option>
                  <option value="11">Escuela Normal de Aguascalientess</option>
                </Form.Select>
              
            </Form.Group>
            <Form.Group className="mb-3 dd" >
              <Form.Label>Carreras TSU, lic / Ing:</Form.Label>
              <Form.Select aria-label="Default select example">
              <option>Selecciona la Carrera </option>
                                    <option value="1">Administracion Area Capital Humano</option>
                                    <option value="2">Proyectos </option>
                                    <option value="3">Agricultura Sustentable Area Vitivinicultura</option>
                                    <option value="4">Agricultura Sustentable y protegida</option>
                                    <option value="5">Contaduria</option>
                                    <option value="6"> Desarrollo de Negocios Area Mercadotecnia</option>
                                    <option value="7">Logistica Area Cadena de Suministros </option>
                                    <option value="8">Mantenimiento Area Industrial</option>
                                    <option value="10"> Mecanica Area Automotriz</option>
                                    <option value="11"> Mecatronica Area Automatizacion</option>
                                    <option value="12">Flexible</option>
                                    <option value="13">Procesos Industriales Area Automotriz</option>
                                    <option value="14">Procesos Industriales Area Mnufactura</option>
                                    <option value="15">Tecnologias de la Informacion Area Desarrollo de Sotfware Multiplataforma</option>
                                    <option value="16">Tegnologias de la Informacion Area Entornos Virtuales y Negocios Digitales</option>
                                    <option value="17">Administracion Area Capital Humano</option>
                                    <option value="18">Mantenimiento Area Industrial</option>
                                    <option value="19">Ingenieria en Agricultura sustentable y protegida</option>
                                    <option value="20">Ingenieria en desarrollo y gestion de Sotfware </option>
                                    <option value="21">ingenieria en entornos virtuales y negocios digitales</option>
                                    <option value="22">Ingenieria en mantenimiento infdustrial</option>
                                    <option value="23">Ingenieria en mecatronica</option>
                                    <option value="24">Ingenieria en metal mecanica</option>
                                    <option value="25">Ingenieria en sistemas productivos</option>
                                    <option value="26">Licenciatura en contaduria</option>
                                    <option value="27">Licencitura en diseño y gestion de redes logisticas</option>
                                    <option value="28">Licenciatura en gestion de negocios y proyectos</option>
                                    <option value="29">Licencitura en gestion del capital humano</option>
                                    <option value="30">Licenciatura en innovacion del capital humano</option>
                                    <option value="31">Licencitura en innovacion de negocios y mercadotecnia</option>
                
                </Form.Select>
              
                  {/* <InputGroup size="sm input" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Año 2023</InputGroup.Text>
          <Form.Control aria-label="Small"  aria-describedby="inputGroup-sizing-sm"/>
        </InputGroup> */}


            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary button" onClick={handleClose}>
          Cerrar
          </Button>
          <Button variant="dark button guardar" onClick={handleClose}>
          Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    
      </Row>
      <Row>
        <Col>
        <Table  className='tabla' >
      <thead >
        <tr>
            <th>Carrera</th>
            <th>Nivel</th>
            <th>¿Cuándo se realizó el AST?</th>
            <th>¿Cuando vence?</th>
            <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>Administracion Area Capital Humano</td>
            <td> TSU</td>
            <td> </td>
            <td> </td>
            <td>
                <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
            </td>
                                </tr>
                                <tr>
                                    <td>Administracion Area Formulacion de Proyectos</td>
                                    <td>TSU</td>
                                    <td> </td>
                                    <td> </td>
                                        <td>
                                            <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                            <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                        </td>
                                </tr>
                                <tr>
                                    <td>Agricultura Sustentable Area Vitivinicultura</td>
                                    <td>TSU</td>
                                    <td> </td>
                                    <td> </td>
                                        <td>
                                            <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                            <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                        </td>
                                    <td>
                                    Es necesario hacer una actualización, pues solo se hizo cuando se aperturó el programa.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Agricultura Sustentable y protegida</td>
                                    <td>TSU</td>
                                    <td> </td>
                                    <td> </td>
                                        <td>
                                            <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                            <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                        </td>
                                </tr>
                                <tr>
                                    <td>Contaduria</td>
                                    <td>TSU</td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Desarrollo de Negocios Area Mercadotecnia</td>
                                    <td>TSU </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Logistica Area Cadena de Suministros </td>
                                    <td>TSU</td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Mantenimiento Area Industrial</td>
                                    <td> TSU</td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Mecanica Area Automotriz</td>
                                    <td>TSU</td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Mecatronica Area Automatizacion Flexible</td>
                                    <td> TSU</td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Procesos Industriales Area Automotriz</td>
                                    <td>TSU</td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Procesos Industriales Area Manufactura</td>
                                    <td>TSU </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tecnologias de la Informacion Area Desarrollo de Sotfware Multiplataforma</td>
                                    <td>TSU</td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tegnologias de la Informacion Area Entornos Virtuales y Negocios Digitales</td>
                                    <td> TSU</td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Administracion Area Capital Humano (Despresurizado)</td>
                                    <td>TSU</td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Manteniminto Area Industrial (Despresurizado)</td>
                                    <td>TSU </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ingenieria en Agricultura sustentable y protegida</td>
                                    <td> LIC</td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ingenieria en desarrollo y gestion de Sotfware </td>
                                    <td>LIC</td>
                                    <td> </td>
                                    <td> </td>
                                        <td>
                                            <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                            <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                        </td>
                                </tr>
                                <tr>
                                    <td>ingenieria en entornos virtuales y negocios digitales</td>
                                    <td>LIC</td>
                                    <td> </td>
                                    <td> </td>
                                        <td>
                                            <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                            <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                        </td>
                                </tr>
                                <tr>
                                    <td>Ingenieria en mantenimiento infdustrial</td>
                                    <td>LIC </td>
                                    <td> </td>
                                    <td> </td>
                                        <td>
                                            <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                            <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                        </td>
                                </tr>
                                <tr>
                                    <td>Ingenieria en mecatronica</td>
                                    <td>LIC</td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ingenieria en metal mecanica</td>
                                    <td>LIC </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ingenieria en sistemas productivos</td>
                                    <td>LIC</td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Licenciatura en contaduria</td>
                                    <td>LIC </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Licencitura en diseño y gestion de redes logisticas</td>
                                    <td>LIC</td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Licenciatura en gestion de negocios y proyectos</td>
                                    <td>LIC </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Licencitura en gestion del capital humano</td>
                                    <td>LIC</td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Licenciatura en innovacion del capital humano</td>
                                    <td>LIC </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                    <td>
                                    Se hizo como IDIE, no se ha hecho con LINM, es necesario hacer una actualización.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Licencitura en innovacion de negocios y mercadotecnia</td>
                                    <td>LIC</td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>

      </tbody>
    </Table>
        
        
        </Col>
      
      </Row>
      
    </Container>
    <Container className='c'>
      <h2 className='titulo'>Estudio de Pertinencia </h2>
      <hr />
        <Row className='filas'>

        <Button variant="success" className='boton-modal' onClick={handleShow}>
        Añadir Registro <i class="bi bi-file-plus"></i>
      </Button>

      <Modal className='modal' show={show} onHide={handleClose}>
        <Modal.Header className='modal-header'  closeButton>
          <Modal.Title className='modal-tittle anadir'>Añadir nuevo registro</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body mb'>
          <Form className='form'>
            <Form.Group className="mb-3 form-group" controlId="exampleForm.ControlInput1">
            <Form.Label>Universidades:</Form.Label>
              <Form.Select aria-label="Default select example">
                  <option>Selecciona la Universidad</option>
                  <option value="1">Universidad Tecnológica del Norte de Aguascalientes</option>
                  <option value="2">Universidad Tecnológica de Aguascalientes</option>
                  <option value="3">Universidad Tecnológica de Calvillo</option>
                  <option value="4">Universidad Tecnológica El Retoño</option>
                  <option value="5">Tecnológica Metropolitana de Aguascalientes</option>
                  <option value="6">Universidad Politécnica de Aguascalientes</option>
                  <option value="7">Normal Rafael Aguilar Lomeli</option>
                  <option value="8">Normal Superior Federal José Santos Valdéz</option>
                  <option value="9">Centro Regional de Educación Normal de Aguascalientes.</option>
                  <option value="10">Normal Rural Justo Sierra Mendez Cañada Honda</option>
                  <option value="11">Escuela Normal de Aguascalientess</option>
                </Form.Select>
              
            </Form.Group>
            <Form.Group className="mb-3 dd" >
              <Form.Label>Carreras TSU, lic / Ing:</Form.Label>
              <Form.Select aria-label="Default select example">
              <option>Selecciona la Carrera </option>
                                    <option value="1">Administracion Area Capital Humano</option>
                                    <option value="2">Proyectos </option>
                                    <option value="3">Agricultura Sustentable Area Vitivinicultura</option>
                                    <option value="4">Agricultura Sustentable y protegida</option>
                                    <option value="5">Contaduria</option>
                                    <option value="6"> Desarrollo de Negocios Area Mercadotecnia</option>
                                    <option value="7">Logistica Area Cadena de Suministros </option>
                                    <option value="8">Mantenimiento Area Industrial</option>
                                    <option value="10"> Mecanica Area Automotriz</option>
                                    <option value="11"> Mecatronica Area Automatizacion</option>
                                    <option value="12">Flexible</option>
                                    <option value="13">Procesos Industriales Area Automotriz</option>
                                    <option value="14">Procesos Industriales Area Mnufactura</option>
                                    <option value="15">Tecnologias de la Informacion Area Desarrollo de Sotfware Multiplataforma</option>
                                    <option value="16">Tegnologias de la Informacion Area Entornos Virtuales y Negocios Digitales</option>
                                    <option value="17">Administracion Area Capital Humano</option>
                                    <option value="18">Mantenimiento Area Industrial</option>
                                    <option value="19">Ingenieria en Agricultura sustentable y protegida</option>
                                    <option value="20">Ingenieria en desarrollo y gestion de Sotfware </option>
                                    <option value="21">ingenieria en entornos virtuales y negocios digitales</option>
                                    <option value="22">Ingenieria en mantenimiento infdustrial</option>
                                    <option value="23">Ingenieria en mecatronica</option>
                                    <option value="24">Ingenieria en metal mecanica</option>
                                    <option value="25">Ingenieria en sistemas productivos</option>
                                    <option value="26">Licenciatura en contaduria</option>
                                    <option value="27">Licencitura en diseño y gestion de redes logisticas</option>
                                    <option value="28">Licenciatura en gestion de negocios y proyectos</option>
                                    <option value="29">Licencitura en gestion del capital humano</option>
                                    <option value="30">Licenciatura en innovacion del capital humano</option>
                                    <option value="31">Licencitura en innovacion de negocios y mercadotecnia</option>
                
                </Form.Select>
              
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary button" onClick={handleClose}>
          Cerrar
          </Button>
          <Button variant="dark button guardar" onClick={handleClose}>
          Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    
      </Row>
      <Row>
        <Col>
        <Table  className='tabla' >
      <thead >
        <tr>
            <th>Carrera</th>
            <th>Nivel</th>
            <th>¿Cuándo se realizó el AST?</th>
            <th>¿Cuando vence?</th>
            <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>Administracion Area Capital Humano</td>
            <td> TSU</td>
            <td> </td>
            <td> </td>
            <td>
                <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
            </td>
                                </tr>
                                <tr>
                                    <td>Administracion Area Formulacion de Proyectos</td>
                                    <td>TSU</td>
                                    <td> </td>
                                    <td> </td>
                                        <td>
                                            <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                            <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                        </td>
                                </tr>
                                <tr>
                                    <td>Agricultura Sustentable Area Vitivinicultura</td>
                                    <td>TSU</td>
                                    <td> </td>
                                    <td> </td>
                                        <td>
                                            <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                            <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                        </td>
                                    <td>
                                    Es necesario hacer una actualización, pues solo se hizo cuando se aperturó el programa.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Agricultura Sustentable y protegida</td>
                                    <td>TSU</td>
                                    <td> </td>
                                    <td> </td>
                                        <td>
                                            <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                            <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                        </td>
                                </tr>
                                <tr>
                                    <td>Contaduria</td>
                                    <td>TSU</td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Desarrollo de Negocios Area Mercadotecnia</td>
                                    <td>TSU </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Logistica Area Cadena de Suministros </td>
                                    <td>TSU</td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Mantenimiento Area Industrial</td>
                                    <td> TSU</td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Mecanica Area Automotriz</td>
                                    <td>TSU</td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Mecatronica Area Automatizacion Flexible</td>
                                    <td> TSU</td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Procesos Industriales Area Automotriz</td>
                                    <td>TSU</td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Procesos Industriales Area Manufactura</td>
                                    <td>TSU </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tecnologias de la Informacion Area Desarrollo de Sotfware Multiplataforma</td>
                                    <td>TSU</td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                    <td>
                                        Se realizó el 21 de marzo de 2013 del TSU en Tecnologías de la Información y Comunicación, 
                                        área Multimedia y Comercio Electrónico
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tegnologias de la Informacion Area Entornos Virtuales y Negocios Digitales</td>
                                    <td> TSU</td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                    <td>
                                        Se realizó el 21 de marzo de 2013 del TSU en Tecnologías de la Información y Comunicación, 
                                        área Multimedia y Comercio Electrónico
                                    </td>
                                </tr>
                                <tr>
                                    <td>Administracion Area Capital Humano (Despresurizado)</td>
                                    <td>TSU</td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Manteniminto Area Industrial (Despresurizado)</td>
                                    <td>TSU </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ingenieria en Agricultura sustentable y protegida</td>
                                    <td> LIC</td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ingenieria en desarrollo y gestion de Sotfware </td>
                                    <td>LIC</td>
                                    <td> </td>
                                    <td> </td>
                                        <td>
                                            <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                            <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                        </td>
                                </tr>
                                <tr>
                                    <td>ingenieria en entornos virtuales y negocios digitales</td>
                                    <td>LIC</td>
                                    <td> </td>
                                    <td> </td>
                                        <td>
                                            <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                            <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                        </td>
                                </tr>
                                <tr>
                                    <td>Ingenieria en mantenimiento infdustrial</td>
                                    <td>LIC </td>
                                    <td> </td>
                                    <td> </td>
                                        <td>
                                            <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                            <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                        </td>
                                </tr>
                                <tr>
                                    <td>Ingenieria en mecatronica</td>
                                    <td>LIC</td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ingenieria en metal mecanica</td>
                                    <td>LIC </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ingenieria en sistemas productivos</td>
                                    <td>LIC</td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Licenciatura en contaduria</td>
                                    <td>LIC </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Licencitura en diseño y gestion de redes logisticas</td>
                                    <td>LIC</td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                    <td>
                                        <p>Se realizó para el Programa Educativo de Ingeniería en Logística Internacional</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Licenciatura en gestion de negocios y proyectos</td>
                                    <td>LIC </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                    <td>
                                        <p>Se realizó para el Programa Educativo de Ingeniería en Desarrollo Empresarial y Dirección de Proyectos</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Licencitura en gestion del capital humano</td>
                                    <td>LIC</td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Licenciatura en innovacion del capital humano</td>
                                    <td>LIC </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Licencitura en innovacion de negocios y mercadotecnia</td>
                                    <td>LIC</td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>

      </tbody>
    </Table>
        
        
        </Col>
      
      </Row>
      
    </Container>
    </div>
    
  )
}

export default Indicador7