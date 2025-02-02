import "../css/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCcVisa,faCcMastercard,faCcPaypal,faCcApplePay,faGooglePay} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
const Footer=()=>{
    const scrollToTop=()=>{
        window.scrollTo({
            top:"0",
            behaviour:"auto"
        })

    }
    return <div className="footer"><br/>
                <ul>
                    <li> <Link to="/" >Home</Link></li>
                    <li><Link  to="/products" >Products</Link></li>
                    <li> <Link to="/cart" >Cart</Link></li>
                    <li><Link to="/checkout" >Checkout</Link></li>
                    <li><a href="#" onClick={()=>{scrollToTop();}}>Back to Top</a></li>

                </ul>
                <div>
                <FontAwesomeIcon icon={faCcVisa} className='payment'/>
                <FontAwesomeIcon icon={faCcMastercard} className='payment'/>
                <FontAwesomeIcon icon={faCcPaypal} className='payment'/>
                <FontAwesomeIcon icon={faCcApplePay} className='payment'/>
                <FontAwesomeIcon icon={faGooglePay} className='payment'/>
                </div>

                <p>Disclaimer Discounts apply to most recent previous ticketed advertised price. Some products will have likely been sold below ticketed advertised price in some stores prior to the discount offer. Prices displayed inclusive of discount. Some in-store prices may vary.
                    <br/><br/>
                    Privacy Policy | Terms & Conditions | Site Map
                    <br/>
                    Copyright © 2023 Merchant Electronics. All Rights Reserved.</p>
        

            </div>
}
export default Footer