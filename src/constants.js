// Authentication
export const LOGIN  = 'LOGIN';
export const LOGOUT  = 'LOGOUT';
export const UPDATE_SECURITY_TOKEN = 'UPDATE_SECURITY_TOKEN';
export const UPDATE_AUTHENTICATION_SESSION = 'UPDATE_AUTHENTICATION_SESSION';

// Positions and portfolio
export const REQUEST_POSITIONS  = 'REQUEST_POSITIONS';
export const RECEIVE_POSITIONS  = 'RECEIVE_POSITIONS';
export const RECEIVE_PORTFOLIO  = 'RECEIVE_PORTFOLIO';

// Socket
export const HANDSHAKED_SOCKET      = 'HANDSHAKED_SOCKET';
export const SUBSCRIBED_SOCKET  = 'SUBSCRIBED_SOCKET';
export const RECEIVE_QUOTE      = 'RECEIVE_QUOTE';
export const SEND_MESSAGE       = 'SEND_MESSAGE';
export const CONNECTED_SOCKET = 'CONNECTED_SOCKET';
export const INITIALIZED_SOCKET  = 'INITIALIZE_SOCKET';

// Instruments
export const ADD_INSTRUMENT  = 'ADD_INSTRUMENT';
export const DELETE_INSTRUMENT  = 'DELETE_INSTRUMENT';

// Notifications
export const CREATE_NOTIFICATION = 'CREATE_NOTIFICATION';
export const ORDERBOOK_BUYER = 'ORDERBOOK_BUYER';
export const ORDERBOOK_SELLER = 'ORDERBOOK_SELLER';
export const TARGET_REACHED = 'TARGET_REACHED';
export const PRICE_DECREASE = 'PRICE_DECREASE';

// Persistence
export const REHYDRATE = 'persist/REHYDRATE';

// Modals
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

// Notifiers
export const TOGGLE_NOTIFIER = 'TOGGLE_NOTIFIER';

// Targets
export const CREATE_TARGET = 'CREATE_TARGET';
export const DELETE_TARGET = 'DELETE_TARGET';
export const UPDATE_TARGET = 'UPDATE_TARGET';