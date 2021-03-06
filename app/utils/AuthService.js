import decode from 'jwt-decode';
import { browserHistory } from 'react-router';
import Auth0Lock from 'auth0-lock';
const ID_TOKEN_KEY = 'id_token';
const AUTH_CLIENT_ID= 'XEjixkU7EStQeNAd9jL4wwho4nfu42kf';
const AUTH_DOMAIN = 'andreicalazans.auth0.com';
import {store} from '../index';
const lock = new Auth0Lock( AUTH_CLIENT_ID , AUTH_DOMAIN , {
    auth: {
      redirectUrl: `${window.location.origin}`,
      responseType: 'token'
    }
  }
);

lock.on('authenticated', authResult => {
  setIdToken(authResult.idToken);
 
  lock.getUserInfo(authResult.accessToken, (error, profile) => {
    if(error) {
      console.log('Error loading the Profile', error)
    }
      store.dispatch({
         type: "USER_LOGGED",
        Profile: profile
      })
      console.log('authenticated');
      setProfile(profile);
      browserHistory.push('/');
  })

});

export function login(options) {
  lock.show(options);

  return {
    hide() {
      lock.hide();
    }
  }
}

export function logout() {
  clearIdToken();
  browserHistory.replace('/');
}

export function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace({pathname: '/'});
  }
}

function setIdToken(idToken) {
  localStorage.setItem(ID_TOKEN_KEY, idToken);
}

function getIdToken() {
  return localStorage.getItem(ID_TOKEN_KEY);
}

function clearIdToken() {
  localStorage.removeItem(ID_TOKEN_KEY);
  localStorage.removeItem('profile');
}

export function isLoggedIn() {
  const idToken = getIdToken();
  let status = !!idToken && !isTokenExpired(idToken);
  return status;
}

function getTokenExpirationDate(encodedToken) {
  const token = decode(encodedToken);
  if (!token.exp) { return null; }

  const date = new Date(0);
  date.setUTCSeconds(token.exp);

  return date;
}

function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}

export function setProfile(profile) {
  // Saves profile data to local storage
  
  localStorage.setItem('profile', JSON.stringify(profile))

}

export function getProfile() {
  // Retrieves the profile data from local storage
  const profile = localStorage.getItem('profile')
  return profile ? JSON.parse(localStorage.profile) : {}
}
