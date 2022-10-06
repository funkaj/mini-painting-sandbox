import FooterLinks from "../Footer_Links/FooterLinks";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Footer.css"

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="logo">
                <h2>Funk.Ink Logo</h2>
            </div>
            <Container fluid="md">
                <Row>
                    <Col xs={12} className="divider"></Col>
                </Row>
                <Row>
                    <Col>
                        <p>Links</p>
                        <FooterLinks/>
                    </Col>
                    <Col>
                        <p>Section 2</p>
                    </Col>
                    <Col>
                        <p>Section 3</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="center copyright" >
                        <p>Copyright &copy; {(new Date().getFullYear())} Funk.Ink All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Footer;