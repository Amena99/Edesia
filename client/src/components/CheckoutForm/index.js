import React, {Component} from 'react';
import {CardElement, CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      complete: false
    }

    this.submit = this.submit.bind(this);
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

  render() {
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <p>Enter Credit Card Number:</p>
        <CardNumberElement style={{base: {fontSize: '18px'}}}/>
        <br></br>
        <span>Expiration:</span><span><CardExpiryElement/></span><span>CVC:</span><span><CardCVCElement/></span>

        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);