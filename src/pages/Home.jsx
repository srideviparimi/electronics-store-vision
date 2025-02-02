import "../css/Home.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBagShopping,faStar,faTruckFast,faMobileScreen,faMoneyBillTransfer,faArrowRotateLeft} from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Navigation, Pagination, Scrollbar,A11y,EffectCards} from 'swiper/modules';
import 'swiper/css/effect-cube';
import 'swiper/swiper-bundle.css';
import testimonials from "../assets/testimonials";
import StarRatings from "react-star-ratings";
import Footer from "../components/Footer";

const Home=()=>{
    return <div className="home">
        {/** this is the home introduction section which is blue in colour */}
    <section className="homeSection">
       <Container  fluid="sm" className="p-3 m-2" > 
       <Row >
        <Col sm={5} >
            <div id="introCard">
                <h2 id="introTitle">"Your One-Stop Shop for Cutting-Edge Electronics – Explore Innovation Today!"</h2>
                <Link to="/products"><Button variant="primary" id="shopBtn">Shop Now</Button></Link>
            </div>
        </Col>
        <Col sm={7}>
            <Card>
            <Card.Img src="./images/home2.jpg" id='homeImage' />
            </Card>
        </Col>
        </Row>
       </Container>
       </section>
       {/** this is  a slide section with photos still using carousel*/}
       <section className="photoSlider">
            <h2>Customer Journey</h2>
        <Carousel fade data-bs-theme="dark">
            {/**first one */}
            <Carousel.Item className="item">
                <Image src="./images/home1.jpg" roundedCircle fluid/>
                <Carousel.Caption>
                    <h3 ><Badge bg="info" className="fs-6 fs-md-5 fs-lg-8 p-2 p-md-3">Explore Thousands of Products</Badge></h3>
                </Carousel.Caption>
            </Carousel.Item>
            {/**second one */}
            <Carousel.Item className="item">
            <Image src="./images/home3.jpg" roundedCircle fluid/>
                <Carousel.Caption>
                <h3 ><Badge bg="info" className="fs-6 fs-md-5 fs-lg-8 p-2 p-md-3">Seamless Shopping at Your Fingertips</Badge></h3>

                </Carousel.Caption>
            </Carousel.Item>
            {/**third one */}
            <Carousel.Item className="item" >
            <Image src="./images/home4.jpg" roundedCircle fluid/>
                <Carousel.Caption>
                <h3 ><Badge bg="info" className="fs-6 fs-md-5 fs-lg-8 p-2 p-md-3">Your Happiness, Delivered</Badge></h3>

                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
       
       </section>
       {/** this is the features section like shipping and others*/}
       <section className="features" >
        <Container  id="featuresContainer" fluid="md">
            <Row>
                <Col sm={5} lg={4}><Card className="text-center " id="featuresCard">
                    <Card.Header><FontAwesomeIcon icon={faStar} className="fa-2xl" /></Card.Header>
                    <Card.Title>Product Recommendations</Card.Title>
                    <Card.Text>Tailored Suggestions based on customer preferences, browsing history, and past purchases to create a unique shopping experience.</Card.Text>
                    </Card>
                </Col>
                <Col sm={5} lg={4}><Card className="text-center " id="featuresCard">
                    <Card.Header><FontAwesomeIcon icon={faTruckFast}className="fa-2xl" /></Card.Header>
                    <Card.Title>Fast and secure Delivery</Card.Title>
                    <Card.Text>Swift Shipping  with efficient logistics and reliable shipping partners.Protect products with robust packaging to ensure they arrive in perfect condition.</Card.Text>
                    </Card>
                </Col>
                <Col sm={5} lg={4}><Card className="text-center " id="featuresCard">
                    <Card.Header><FontAwesomeIcon icon={faMobileScreen} className="fa-2xl"/></Card.Header>
                    <Card.Title>Mobile-Friendly Design</Card.Title>
                    <Card.Text>Ensure the website adapts seamlessly to all screen sizes, from smartphones to tablets.Enable on-the-go shopping with easy navigation and fast loading times.</Card.Text>
                    </Card>
                </Col>
               
            </Row>
            <Row>
            <Col sm={5} lg={4}><Card className="text-center " id="featuresCard">
                    <Card.Header><FontAwesomeIcon icon={faMoneyBillTransfer} className="fa-2xl"/></Card.Header>
                    <Card.Title>Secure Payment Options</Card.Title>
                    <Card.Text>We provide a variety of payment methods, such as credit cards, digital wallets, and BNPL (Buy Now, Pay Later) using SSL encryption and security badges.</Card.Text>
                    </Card>
                </Col>
               
                <Col sm={5} lg={4}><Card className="text-center " id="featuresCard">
                    <Card.Header><FontAwesomeIcon icon={faBagShopping}  className="fa-2xl"/></Card.Header>
                    <Card.Title>Seamless Checkout Process</Card.Title>
                    <Card.Text>Quick and Simple steps with guest checkout and auto-fill for saved customer details making it a hassle-free checkout process. </Card.Text>
                    </Card>
                </Col>
            
                <Col sm={5} lg={4}><Card className="text-center " id="featuresCard">
                    <Card.Header><FontAwesomeIcon icon={faArrowRotateLeft} className="fa-2xl"/></Card.Header>
                    <Card.Title>Easy Returns and Refunds Policy</Card.Title>
                    <Card.Text>Hassle-Free Returns with clear instructions, prepaid return labels.Offering fast refunds and transparent policies to boost confidence.</Card.Text>
                    </Card>
                </Col>
               
            </Row>
        </Container>

       </section>
       {/**this is a testimonial section with carousel */}
       <section className="testimonial">
       <Container fluid="md" className="p-0">
        {/* Background Colors */}
        <Row>
          <Col id="colour1" style={{height:'300px'}}></Col>
        </Row>
        <Row >
        <Col id="colour2" style={{ height: '175px' }}></Col>
        </Row>
        {/* Cards */}
        
        <Row className=" position-absolute top-50 start-50 translate-middle  w-75 g-4">
          <Col >
          <Swiper
          modules={[Navigation, Pagination, Scrollbar,A11y,EffectCards]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
              effect="cards"
              loop>
              {testimonials.map((testimonial,index)=>(
                <SwiperSlide key={index} className=" h-100 ">
                  <Card style={{width:'100%',padding:"10%",height:'400px',backgroundColor:'#EEFBFB'}} >
                    <Card.Header><h3><Badge bg="success" style={{borderRadius:"20px"}}>{testimonial.name.charAt(0)}</Badge> {testimonial.name}</h3>
                    </Card.Header>
                    <Card.Body className="card-body text-center">
                     
                      <Card.Subtitle>{testimonial.date}</Card.Subtitle>
                      <StarRatings rating={testimonial.rating}
                                        starRatedColor="orange"
                                        starEmptyColor="gray"
                                        starDimension="20px"
                                        starSpacing="1px"/>
                      <Card.Text>"{testimonial.feedback}"</Card.Text> 
                    </Card.Body>             
                  </Card>
                </SwiperSlide>
              ))}
                  
          </Swiper>
          </Col>
        </Row>
      </Container>

       </section>
       {/**here comes the footer, just import it from components and use it in all pages */}

       <Footer/>
    </div>
}
export default Home