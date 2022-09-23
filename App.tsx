/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Alert, Button, SafeAreaView, View} from 'react-native';

import RazorpayCheckout from 'react-native-razorpay';

const App = () => {
  const CompletePayment = () => {
    console.log('I am here');
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.jpg',
      currency: 'INR',
      key: 'rzp_test_FaG6YMx2ipDjfH',
      amount: 5000,
      name: 'Acme Corp',
      //order_id: 'order_DslnoIgkIDL8Zt', //Replace this with an order_id created using Orders API.
      prefill: {
        email: 'gaurav.kumar@example.com',
        contact: '9191919191',
        name: 'Gaurav Kumar',
      },
      theme: {color: '#53a20e'},
      // to hide payment options
      method: {
        netbanking: true,
        card: true,
        wallet: true,
        upi: true,
        paylater: false,
      },
    };

    RazorpayCheckout.open(options)
      .then((data: any) => {
        // handle success
        Alert.alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch((error: any) => {
        // handle failure
        Alert.alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title="Complete payment" onPress={CompletePayment} />
      </View>
    </SafeAreaView>
  );
};

export default App;
