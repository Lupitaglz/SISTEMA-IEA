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

const Indicador6 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
        <NavBar/>
        <Container className='c'>
            <h1 className='titulo'>Índice de satisfacción de egresados y opinión de empleadores.</h1>
            <br />
            <hr />
            <h1 className='titulo'>Grado de Satisfacción de los egresados de TSU</h1>
            <br />
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
                                <Form.Label>Tecnico Superior Universitario</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Selecciona la Carrera Tecnica</option>
                                        <option value="1">Administracion Area Capital Humano</option>
                                        <option value="2">Administracion Area Formulacion de Proyectos </option>
                                        <option value="3">Agricultura Sustentable Area Vitivinicultura</option>
                                        <option value="4">Agricultura Sustentable y protegida</option>
                                        <option value="5">Contaduria</option>
                                        <option value="6"> Desarrollo de Negocios Area Mercadotecnia</option>
                                        <option value="7">Logistica Area Cadena de Suministros </option>
                                        <option value="8">Mantenimiento Area Industrial</option>
                                        <option value="10">Mecanica Area Automotriz</option>
                                        <option value="11">Mecatronica Area Automatizacion Flexible</option>
                                        <option value="12">Procesos Industriales Area Automotriz</option>
                                        <option value="13">Procesos Industriales Area Manufactura</option>
                                        <option value="14">Tecnologias de la Informacion Area Desarrollo de Sotfware Multiplataforma </option>
                                        <option value="15">Tegnologias de la Informacion Area Entornos Virtuales y Negocios Digitales</option>
                                        <option value="16">Administracion Area Capital Humano DESPRESURIZADO</option>
                                        <option value="17">Manteniminto Area Industrial DESPRESURIZADO</option>
                                        {/* <option value="18"></option> */}
                                    </Form.Select>
                
                                    <InputGroup size="sm input" className="mb-3">
                                        <InputGroup.Text id="inputGroup-sizing-sm">Año 2022</InputGroup.Text>
                                            <Form.Control aria-label="Small"  aria-describedby="inputGroup-sizing-sm"/>
                                        </InputGroup>
                            </Form.Group>
                            <Form.Group controlId="formPrograma">
                                <Form.Label>No Competente</Form.Label>
                                <InputGroup.Text></InputGroup.Text> 
                                <Form.Control
                                    aria-label="Small"  aria-describedby="inputGroup-sizing-sm"
                                />
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
                                    <th><h6>Programa Educativo TSU</h6></th>
                                    <th><h6>¿La infraestructura física con que fue dotada la universidad tecnológica, le pareció?</h6></th>
                                    <th><h6>¿El equipamiento de los laboratorios y talleres le pareció?</h6></th>
                                    <th><h6>¿Los servicios prestados en la Bolsa de Trabajo de la universidad como los considera?</h6></th>
                                    <th><h6>¿El nivel de conocimiento y dominio de los temas mostrado por sus profesores al momento de impartirle la cátedra le pareció?</h6></th>
                                    <th><h6>¿El nivel de conocimiento y dominio por parte de los profesores en el manejo de los equipos que se encuentran en los laboratorios y talleres al momento de realizar las prácticas que su carrera requiere, lo considera?</h6></th>
                                    <th><h6>¿La experiencia práctica adquirida por parte suya, derivado de las visitas, prácticas en las empresas, las considera?</h6></th>
                                    <th><h6>¿Cómo considera la preparación académica adquirida?</h6></th>
                                    <th><h6>¿Considera que la estadía complementó su preparación para el mercado laboral?</h6></th>
                                    <th><h6>¿Cómo califica el Modelo Educativo de Técnico Superior Universitario?</h6></th>


                                    <th><h6>Opciones</h6></th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                <tr>
                                    <td>Administracion Area Capital Humano</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Administracion Area Formulacion de Proyectos</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                        <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                        
                                        </td>
                                </tr>
                                <tr>
                                    <td>Agricultura Sustentable Area Vitivinicultura</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                        <td>
                                            <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                            <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                        </td>
                                </tr>
                                <tr>
                                    <td>Agricultura Sustentable y protegida</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                        <td>
                                            <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                            <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                        </td>
                                </tr>
                                <tr>
                                    <td>Contaduria</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Desarrollo de Negocios Area Mercadotecnia</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Logistica Area Cadena de Suministros </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Mantenimiento Area Industrial</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Mecanica Area Automotriz</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Mecatronica Area Automatizacion Flexible</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Procesos Industriales Area Automotriz</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Procesos Industriales Area Manufactura</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tecnologias de la Informacion Area Desarrollo de Sotfware Multiplataforma</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tegnologias de la Informacion Area Entornos Virtuales y Negocios Digitales</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Administracion Area Capital Humano (Despresurizado)</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Manteniminto Area Industrial (Despresurizado)</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
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
        <br />
        <br />
        <Container className='c'>
            <h1 className='titulo'>Tasa de empleadores satisfechos de los TSU</h1>
            <br />
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
                                <Form.Label>Tecnico Superior Universitario</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Selecciona la Carrera Tecnica</option>
                                        <option value="1">Administracion Area Capital Humano</option>
                                        <option value="2">Administracion Area Formulacion de Proyectos </option>
                                        <option value="3">Agricultura Sustentable Area Vitivinicultura</option>
                                        <option value="4">Agricultura Sustentable y protegida</option>
                                        <option value="5">Contaduria</option>
                                        <option value="6"> Desarrollo de Negocios Area Mercadotecnia</option>
                                        <option value="7">Logistica Area Cadena de Suministros </option>
                                        <option value="8">Mantenimiento Area Industrial</option>
                                        <option value="10">Mecanica Area Automotriz</option>
                                        <option value="11">Mecatronica Area Automatizacion Flexible</option>
                                        <option value="12">Procesos Industriales Area Automotriz</option>
                                        <option value="13">Procesos Industriales Area Manufactura</option>
                                        <option value="14">Tecnologias de la Informacion Area Desarrollo de Sotfware Multiplataforma </option>
                                        <option value="15">Tegnologias de la Informacion Area Entornos Virtuales y Negocios Digitales</option>
                                        <option value="16">Administracion Area Capital Humano DESPRESURIZADO</option>
                                        <option value="17">Manteniminto Area Industrial DESPRESURIZADO</option>
                                        {/* <option value="18"></option> */}
                                    </Form.Select>
                
                                    <InputGroup size="sm input" className="mb-3">
                                        <InputGroup.Text id="inputGroup-sizing-sm">Año 2022</InputGroup.Text>
                                            <Form.Control aria-label="Small"  aria-describedby="inputGroup-sizing-sm"/>
                                        </InputGroup>
                            </Form.Group>
                            <Form.Group controlId="formPrograma">
                                <Form.Label>No Competente</Form.Label>
                                <InputGroup.Text></InputGroup.Text> 
                                <Form.Control
                                    aria-label="Small"  aria-describedby="inputGroup-sizing-sm"
                                />
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
                                    <th><h6>Programa Educativo TSU</h6></th>
                                    <th><h6>¿Cómo considera los conocimientos con los que cuenta el TSU(s) para proponer alternativas de solución a los problemas que se le consultan de acuerdo a la carrera que cursó, función que desempeña y/o al puesto?</h6></th>
                                    <th><h6>¿El conocimiento y habilidad por parte del TSU(s), en el manejo del equipo, maquinaria y herramientas de trabajo para desempeñar sus actividades lo considera?</h6></th>
                                    <th><h6>¿Cómo valora usted el trabajo desempeñado por el TSU(s) en cuanto a calidad y rapidez en los proyectos asignados?</h6></th>
                                    <th><h6>La creatividad e innovación para proponer mejoras a los procesos de la empresa por parte del TSU(s), los considera:</h6></th>
                                    <th><h6>La capacidad y disposición con que cuenta el TSU(s) para trabajar en equipo, los valora:</h6></th>
                                    <th><h6>¿El grado del TSU(s) para poder alcanzar un mejor puesto en su empresa de acuerdo a su nivel académico?</h6></th>
                                    <th><h6>¿Considera usted que este profesionista cumple con los requerimientos del sector productivo y social?</h6></th>
                                    <th><h6>En general ¿Cómo califica el trabajo que desempeña el TSU(s), en su empresa?</h6></th>

                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr>
                                    <td className='titulos'>EXANI II</td>
                                    <td className='titulos'>700-800</td>
                                    <td className='titulos'>801-900</td>
                                    <td className='titulos'>901-1001</td>
                                    <td className='titulos'>1001-1200</td>
                                    <td className='titulos'>1201-1300</td>
                                    <td className='titulos'></td> 
                                </tr> */}
                                <tr>
                                    <td>Administracion Area Capital Humano</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Administracion Area Formulacion de Proyectos</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                        <td>
                                            <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                            <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                        </td>
                                </tr>
                                <tr>
                                    <td>Agricultura Sustentable Area Vitivinicultura</td>
                                    <td></td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                        <td>
                                            <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                            <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                        </td>
                                </tr>
                                <tr>
                                    <td>Agricultura Sustentable y protegida</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                        <td>
                                            <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                            <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                        </td>
                                </tr>
                                <tr>
                                    <td>Contaduria</td>
                                    <td></td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Desarrollo de Negocios Area Mercadotecnia</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Logistica Area Cadena de Suministros </td>
                                    <td></td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Mantenimiento Area Industrial</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Mecanica Area Automotriz</td>
                                    <td></td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Mecatronica Area Automatizacion Flexible</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Procesos Industriales Area Automotriz</td>
                                    <td></td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Procesos Industriales Area Manufactura</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tecnologias de la Informacion Area Desarrollo de Sotfware Multiplataforma</td>
                                    <td></td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tegnologias de la Informacion Area Entornos Virtuales y Negocios Digitales</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Administracion Area Capital Humano (Despresurizado)</td>
                                    <td></td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Manteniminto Area Industrial (Despresurizado)</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <br />
                                
                                

                            </tbody>
                               
                        </Table>  
                        <td>
                            <p>* Nota: Los resultados de satisfacción de empleadores se realiza de forma general, los resultados que se presentan estan calificando a todos los programas educativos de manera global.            
                                El área de Egresados en conjunto con las direcciónes acadéicas se trabaja en un nuevo proceso para restructurar la encuesta y sea aplicada por programa educativo. </p>
                        </td>
                        
                    </Col>
                </Row>
        </Container>
        <br />
        <br />

        <Container className='c'>
            <h1 className='titulo'>Grado de Satisfacción de los egresados de ING/LIC</h1>
            <br />
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
                                <Form.Label>Licenciatura / Ingenieria</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Selecciona la Carrera Lic. / Ing.</option>
                                        <option value="1">Ingenieria en Agricultura sustentable y protegida</option>
                                        <option value="2">Ingenieria en desarrollo y gestion de Sotfware </option>
                                        <option value="3">ingenieria en entornos virtuales y negocios digitales</option>
                                        <option value="4">Ingenieria en mantenimiento infdustrial</option>
                                        <option value="5">Ingenieria en mecatronica</option>
                                        <option value="6">Ingenieria en metal mecanica</option>
                                        <option value="7">Ingenieria en sistemas productivos</option>
                                        <option value="8">Licenciatura en contaduria</option>
                                        <option value="10">Licencitura en diseño y gestion de redes logisticas</option>
                                        <option value="11">Licenciatura en gestion de negocios y proyectos</option>
                                        <option value="12">Licencitura en gestion del capital humano</option>
                                        <option value="13">Licenciatura en innovacion del capital humano</option>
                                        <option value="14">Licencitura en innovacion de negocios y mercadotecnia</option>

                                    </Form.Select>
                                    <Form.Group controlId="formPrograma">
                                        <Form.Label>Programa Educativo Licenciatura / Ingenieria</Form.Label>
                                        <Form.Control
                                            
                                        />
                                    </Form.Group>
                
                                    <InputGroup size="sm input" className="mb-3">
                                        <InputGroup.Text id="inputGroup-sizing-sm">Año 2023</InputGroup.Text>
                                            <Form.Control aria-label="Small"  aria-describedby="inputGroup-sizing-sm"/>
                                        </InputGroup>
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
                                    <th><h6>Progtama educativo Licenciatura / Ingenieria</h6></th>
                                    <th><h6>¿La infraestructura física con que fue dotada la universidad tecnológica, le pareció?</h6></th>
                                    <th><h6>¿El equipamiento de los laboratorios y talleres le pareció?</h6></th>
                                    <th><h6>¿Los servicios prestados en la Bolsa de Trabajo de la universidad como los considera?</h6></th>
                                    <th><h6>¿El nivel de conocimiento y dominio de los temas mostrado por sus profesores al momento de 
                                        impartirle la cátedra le pareció?</h6></th>
                                    <th><h6>¿El nivel de conocimiento y dominio por parte de los profesores en el manejo de los equipos que se encuentran en los laboratorios 
                                        y talleres al momento de realizar las prácticas que su carrera requiere, lo considera?</h6></th>
                                    <th><h6>¿La experiencia práctica adquirida por parte suya, derivado de las visitas, prácticas en las empresas, las considera?</h6></th>
                                    <th><h6>¿Cómo considera la preparación académica adquirida?</h6></th>
                                    <th><h6>¿Considera que la estadía complementó su preparación para el mercado laboral?</h6></th>
                                    <th><h6>¿Cómo califica la Continuidad de Estudios nivel 5A (licenciaturas e ingenierías)?</h6></th>
                        

                                    <th><h6>Opciones</h6></th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                <tr>
                                    <td>Ingenieria en Agricultura sustentable y protegida</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ingenieria en desarrollo y gestion de Sotfware </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                        <td>
                                            <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                            <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                        </td>
                                </tr>
                                <tr>
                                    <td>ingenieria en entornos virtuales y negocios digitales</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                        <td>
                                            <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                            <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                        </td>
                                </tr>
                                <tr>
                                    <td>Ingenieria en mantenimiento infdustrial</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                        <td>
                                            <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                            <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                        </td>
                                </tr>
                                <tr>
                                    <td>Ingenieria en mecatronica</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ingenieria en metal mecanica</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ingenieria en sistemas productivos</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Licenciatura en contaduria</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Licencitura en diseño y gestion de redes logisticas</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Licenciatura en gestion de negocios y proyectos</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Licencitura en gestion del capital humano</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Licenciatura en innovacion del capital humano</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Licencitura en innovacion de negocios y mercadotecnia</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
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
        <br />
        <br /><Container className='c'>
            <h1 className='titulo'>Tasa de empleadores satisfechos de egresados de ING/LIC</h1>
            <br />
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
                                <Form.Label>Licenciatura / Ingenieria</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Selecciona la Carrera Lic. / Ing.</option>
                                        <option value="1">Ingenieria en Agricultura sustentable y protegida</option>
                                        <option value="2">Ingenieria en desarrollo y gestion de Sotfware </option>
                                        <option value="3">ingenieria en entornos virtuales y negocios digitales</option>
                                        <option value="4">Ingenieria en mantenimiento infdustrial</option>
                                        <option value="5">Ingenieria en mecatronica</option>
                                        <option value="6">Ingenieria en metal mecanica</option>
                                        <option value="7">Ingenieria en sistemas productivos</option>
                                        <option value="8">Licenciatura en contaduria</option>
                                        <option value="10">Licencitura en diseño y gestion de redes logisticas</option>
                                        <option value="11">Licenciatura en gestion de negocios y proyectos</option>
                                        <option value="12">Licencitura en gestion del capital humano</option>
                                        <option value="13">Licenciatura en innovacion del capital humano</option>
                                        <option value="14">Licencitura en innovacion de negocios y mercadotecnia</option>

                                    </Form.Select>
                                    <Form.Group controlId="formPrograma">
                                        <Form.Label>Programa Educativo Licenciatura / Ingenieria</Form.Label>
                                        <Form.Control
                                            
                                        />
                                    </Form.Group>
                
                                    <InputGroup size="sm input" className="mb-3">
                                        <InputGroup.Text id="inputGroup-sizing-sm">Año 2023</InputGroup.Text>
                                            <Form.Control aria-label="Small"  aria-describedby="inputGroup-sizing-sm"/>
                                        </InputGroup>
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
                                    <th><h6>Progtama educativo Licenciatura / Ingenieria</h6></th>
                                    <th><h6>¿Cómo considera los conocimientos con los que cuenta el egresado de Licenciatura para proponer 
                                        alternativas de solución a los problemas que se le consultan de acuerdo a la carrera que cursó, función que desempeña y/o al puesto?</h6></th>
                                    <th><h6>¿El conocimiento y habilidad por parte del egresado de Licenciatura, en el manejo del equipo, maquinaria y herramientas de trabajo para 
                                        desempeñar sus actividades lo considera?</h6></th>
                                    <th><h6>¿Cómo valora usted el trabajo desempeñado el egresado de Licenciatura en cuanto a calidad 
                                        y rapidez en los proyectos asignados?</h6></th>
                                    <th><h6>La creatividad e innovación para proponer mejoras a los procesos de la empresa por parte del 
                                        egresado de Licenciatura, los considera:</h6></th>
                                    <th><h6>La capacidad y disposición con que cuenta el egresado de Lcenciatura para trabajar en equipo, 
                                        los valora:</h6></th>
                                    <th><h6>¿El grado del egresado de Licenciatura para poder alcanzar un mejor puesto en su empresa de 
                                        acuerdo a su nivel académico?</h6></th>
                                    <th><h6>¿Considera usted que este profesionista cumple con los requerimientos del sector productivo y social?</h6></th>
                                    <th><h6>En general ¿Cómo califica el trabajo que desempeña el egresado de Licenciatura, en su empresa?</h6></th>

                                    <th><h6>Opciones</h6></th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                <tr>
                                    <td>Ingenieria en Agricultura sustentable y protegida</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ingenieria en desarrollo y gestion de Sotfware </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                        <td>
                                            <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                            <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                        </td>
                                </tr>
                                <tr>
                                    <td>ingenieria en entornos virtuales y negocios digitales</td>
                                    <td></td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                        <td>
                                            <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                            <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                        </td>
                                </tr>
                                <tr>
                                    <td>Ingenieria en mantenimiento infdustrial</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                        <td>
                                            <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                            <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                        </td>
                                </tr>
                                <tr>
                                    <td>Ingenieria en mecatronica</td>
                                    <td></td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ingenieria en metal mecanica</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ingenieria en sistemas productivos</td>
                                    <td></td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Licenciatura en contaduria</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Licencitura en diseño y gestion de redes logisticas</td>
                                    <td></td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Licenciatura en gestion de negocios y proyectos</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Licencitura en gestion del capital humano</td>
                                    <td></td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Licenciatura en innovacion del capital humano</td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Licencitura en innovacion de negocios y mercadotecnia</td>
                                    <td></td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td>
                                        <Button className='btn btn-danger me-1'><i class="bi bi-trash3"></i></Button>
                                        <Button className='editar' variant="warning"><i class="bi bi-pencil-square"></i></Button>
                                
                                    </td>
                                </tr>
                            </tbody>
                        </Table>  
                        <td>
                            <p>Nota: Los resultados de satisfacción de empleadores se realiza de forma general, los resultados que se presentan estan calificando a todas los programas educativos de manera global.            
                                El área de Egresados en conjunto con las direcciónes acadéicas se trabaja en un nuevo proceso para restructurar la encuesta y sea aplicada por programa educativo.</p>
                        </td>
                    </Col>
                </Row>
        </Container>
    </div> 
    
  )
}

export default Indicador6