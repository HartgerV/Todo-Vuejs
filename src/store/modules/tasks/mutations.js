/* ============
 * Mutations for the account module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */
import Vue from 'vue';
import { PUSH } from './mutation-types';
import { REMOVE } from './mutation-types';
import { SETSTATUS } from './mutation-types';
import { SETOWNER } from './mutation-types';

export default {
  [PUSH](state, payload) {
    state.tasks.push({id: state.count++, content: payload.content, createdBy: payload.createdBy, assignedTo: ''});
  },
  [REMOVE](state, payload) {
    for( var i=state.tasks.length-1; i>=0; i--) {
      console.log(payload.id);
      if(state.tasks[i].id == payload.id) state.tasks.splice(i,1);
    }
  },
  [SETSTATUS](state, payload) {
    for( var i=state.tasks.length-1; i>=0; i--) {
      if(state.tasks[i].id == payload.id) Vue.set(state.tasks[i], 'status', payload.status);
    }
  },
  [SETOWNER](state, payload) {
    for( var i=state.tasks.length-1; i>=0; i--) {
      if(state.tasks[i].id == payload.id) Vue.set(state.tasks[i], 'assignedTo', payload.owner);
    }
  },
};
