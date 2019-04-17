import React, {Component} from 'react';
import {CardElement, CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      complete: false,
      cardBrandToPfClass: {
        'visa': 'pf-visa',
        'mastercard': 'pf-mastercard',
        'amex': 'pf-american-express',
        'discover': 'pf-discover',
        'diners': 'pf-diners',
        'jcb': 'pf-jcb',
        'unknown': 'pf-credit-card'
      }
    }

    this.submit = this.submit.bind(this);
    this.setBrandIcon = this.setBrandIcon.bind(this);
  }

  async submit(ev) {
    //tokenize the card information.
    //we are invoking .createToken on the stripe prop. 
    //stripe prop is available due to our wrapping it in injectStripe 
    let {token} = await this.props.stripe.createToken({name: "Name"});

    //send the token to the server.
    //send it as POST request using broser FETCH API
    let response = await fetch("/charge", {
    method: "POST",
    headers: {"Content-Type": "text/plain"},
    body: token.id
    });

    if (response.ok) {this.setState({
      complete: true
    })}
  }

  setBrandIcon = (brand) => {
    console.log("inside set icon")
    console.log("brand in setbicon", brand);

    let brandIconElement = document.getElementById('brand-icon');

    let pfClass = 'pf-credit-card';
    if (brand in this.state.cardBrandToPfClass) {
      pfClass = this.state.cardBrandToPfClass[brand];
    }
    //remvoe the last class from that div
    for (var i = brandIconElement.classList.length - 1; i >= 0; i--) {
      brandIconElement.classList.remove(brandIconElement.classList[i]);
    }
    //add the new class
    brandIconElement.classList.add('pf');
    brandIconElement.classList.add(pfClass);
  }

  findBrand = (event)=>{
    console.log("inside findBrand")
    //call me on change
      // Switch brand logo
      console.log(event.brand);
      if (event.brand) {
        this.setBrandIcon(event.brand);
      }
  }
  
  render() {
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <p>Enter Credit Card Number:</p>
        <div>
        <span>Card number</span>
        <CardNumberElement style={{base: {fontSize: '18px'}}} onChange={this.findBrand}/>
        <span className="brand"><i className="pf pf-credit-card" id="brand-icon"></i></span>
        </div>
        <br></br>
        <span>Expiration:</span><span><CardExpiryElement/></span><span>CVC:</span><span><CardCVCElement/></span>

        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);