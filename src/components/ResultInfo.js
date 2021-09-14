import React from 'react'
import { Row, Col } from 'antd';
import useModal from '../hooks/useModal';
import Modal from './Modal';
import { Card} from 'antd';
import { Button } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content} = Layout;

const { Meta } = Card;

const ResultInfo = () => {

    const [isOpeDetailnModal, openDetailnModal, closeDetailnModal] = useModal();
    
    return (
        <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
         <div className="logo" />
         <Menu style={{paddingleft: 24}} theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
           <Menu.Item key="1">Inicio</Menu.Item>
           <Menu.Item key="2">Servicios</Menu.Item>
           <Menu.Item key="3">Acerca de nosotros</Menu.Item>
           <Menu.Item key="4">Contactos</Menu.Item>
           <Menu.Item key="5">Perfil</Menu.Item>
         </Menu>
       </Header>
       <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
         <Breadcrumb style={{ margin: '16px 0' }}>
         <h1>Resultados</h1>
         </Breadcrumb>
         <div className="site-layout-background" style={{ padding: 24, minHeight: 880 }}>
           <Row>
             <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
             <Card style={{ width: 300 }}>
             <Meta title= "Prueba 1"/>
             <Button onClick={openDetailnModal}>
               Ver resultados
             </Button>
              <Modal isOpen={isOpeDetailnModal} closeModal={closeDetailnModal} title="Resultados">
                <p>Sección de resultados pendientes xd</p>
             </Modal> 
           </Card> 
             </Col>
             <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
             <Card style={{ width: 300 }}>
             <Meta title= "Prueba 2"/>
             <Button onClick={openDetailnModal}>
               Ver resultados
             </Button>
              <Modal isOpen={isOpeDetailnModal} closeModal={closeDetailnModal} title="Resultados">
                <p>Sección de resultados pendientes xd</p>
             </Modal> 
           </Card> 
             </Col>
             <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
             <Card style={{ width: 300 }}>
             <Meta title= "Prueba 3"/>
             <Button onClick={openDetailnModal}>
               Ver resultados
             </Button>
              <Modal isOpen={isOpeDetailnModal} closeModal={closeDetailnModal} title="Resultados">
                <p>Sección de resultados pendientes xd</p>
             </Modal> 
           </Card> 
             </Col>
           </Row>
         </div>
       </Content>
      </Layout>
    )
}

export default ResultInfo
