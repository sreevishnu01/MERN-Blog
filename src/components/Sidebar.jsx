import { Container, Row, Col, Card } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


const randomImg = {
    imagel: 'https://picsum.photos/1000/750',
    images: 'https://picsum.photos/100',

}

function Sidebar() {
    return (

        <Container className=" sticky-md-top mb-5" >
            <h4 className="mb-3">Trending topics</h4>

            <Card className="mb-3 text-center">
                <Card.Title>Top 10</Card.Title>
            </Card>
            <Card className="mb-3 text-center">
                <Card.Title>Bussinus</Card.Title>
            </Card>
            <Card className="mb-3 text-center">
                <Card.Title>Traveling</Card.Title>
            </Card>
            <Card className="mb-3 text-center">
                <Card.Title>Marketing</Card.Title>
            </Card>
            <div className="text-center mt-3">
                <a href='ss' className="fw-bold text-body text-primary-hover"><u>View all categories</u></a>
            </div>

            <h4 className="mt-4 mb-3">Recent Post</h4>

            <Row >

                <Col sm={4}>
                    <Card>
                        <Card.Img src={randomImg.images} />
                    </Card>

                </Col>
                <Col sm={8}>
                    <Card className="border-light">
                        <Card.Title>
                            <h6 className="btn-link stretched-link">The pros and cons of business agency</h6>
                        </Card.Title>
                        <div className="small mt-1">May 17, 2021</div>
                    </Card>
                </Col>

            </Row>


            <Row >

                <Col sm={4}>
                    <Card>
                        <Card.Img src={randomImg.images} />
                    </Card>

                </Col>
                <Col sm={8}>
                    <Card className="border-light">
                        <Card.Title>
                            <h6 className="btn-link stretched-link">The pros and cons of business agency</h6>
                        </Card.Title>
                        <div className="small mt-1">May 17, 2021</div>
                    </Card>
                </Col>

            </Row>

        </Container>


    )
}

export default Sidebar
