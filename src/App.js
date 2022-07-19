import { Amplify } from 'aws-amplify';
import { API  } from 'aws-amplify';
// API.GET/PUT/POST etc.

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import React, { useEffect } from 'react';
import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);

async function callApi () {

  try {
    const data = await API.get('startPersonalServer','/ec2api')
    console.log('data:', data)
  } catch (err) {
    console.log('error:', err)
  }
  
} 

function App({ signOut, user }) {
  useEffect(() => {
    callApi()
  }, [])
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);