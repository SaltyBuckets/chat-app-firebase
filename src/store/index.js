import Vue from 'vue';
import Vuex from 'vuex';
import { vuexfireMutations, firestoreAction } from 'vuexfire';
import { db } from '../firebase.js';

import { ToastProgrammatic as Toast } from 'buefy';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    testData: null,
    username: 'sanchit',
    userId: null,
    userProfilePhoto_encoded: '',
    message: '',
  },
  mutations: {
    ...vuexfireMutations,

    SET_CURRENTMESSAGE(state, newMessage) {
      state.message = newMessage;
      console.log(`updated to ${newMessage}`);
    },
    SET_PROFILEPICTURE(state, file_base64) {
      state.userProfilePhoto_encoded = file_base64;
    },
  },
  actions: {
    initialize() {
      var messagesRef = database.ref('messages/');
      messagesRef.on('value', function(snapshot) {
        console.log(snapshot);
      });
    },

    updateMessage({ context }) {
      console.log('updateMessage');
    },
    updateProfilePicture({ commit }, file_encoded) {
      //uploadto firebase
      //if success=>
      commit('SET_PROFILEPICTURE', { file_encoded: file_encoded });
      Toast.open('Profile Saved!');
    },

    testDatabase() {
      db.collection('groupchats')
        .doc('MI3meaoRBeaqMfPJeY0o')
        .get()
        .then((snapshot) => {
          const document = snapshot.data();
          console.log(document);
        });
    },
  },
  modules: {},
});
