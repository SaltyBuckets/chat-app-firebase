// @ts-nocheck
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { vuexfireMutations, firestoreAction } from 'vuexfire';
import { db, firebase } from '@/db.js';
import { Object } from 'core-js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    testData: null,
    username: 'sanchit',
    userId: null,
    userProfilePicture: '',
    userRef: db.collection('users').doc('vvZCrfCFRy3jK0uWMZMs'), //TODO update this when login
    currentMessage: '',
    messages: [],
    groupchats: null,
    currentGroupchatID: 'MI3meaoRBeaqMfPJeY0o',
    attachedImage: 'https://media.giphy.com/media/q1MeAPDDMb43K/giphy.gif',
    doc: '',
  },
  mutations: {
    ...vuexfireMutations,

    SET_CURRENTMESSAGE(state, newMessage) {
      state.currentMessage = newMessage;
      console.log(`updated to ${newMessage}`);
    },
    SET_PROFILE(state, { uid, username, profilePicture }) {
      console.log('SETTING STORE TO :', uid, username, profilePicture);
      state.userId = uid;
      state.username = username;
      state.userProfilePicture = profilePicture;
    },
  },
  actions: {
    bindMessages: firestoreAction(({ state, bindFirestoreRef }) => {
      return bindFirestoreRef(
        'doc',
        db.collection('groupchats').doc(state.currentGroupchatID)
      );
    }),

    sendMessage: firestoreAction(({ state }) => {
      const timestamp = Date.now();
      let newMessage = {
        message: state.currentMessage,
        date: 'timestamp',
        image: state.attachedImage,
        sender: state.userRef,
      };
      if (state.attachedImage !== '')
        Object.assign(newMessage, { date: timestamp });
      if (state.currentMessage != '') {
        db.collection('groupchats')
          .doc(state.currentGroupchatID)
          .update({
            messages: firebase.firestore.FieldValue.arrayUnion(newMessage),
          })
          .then(() => {
            console.log('message sent!');
          });
      }
    }),
  },
  modules: {},
});
