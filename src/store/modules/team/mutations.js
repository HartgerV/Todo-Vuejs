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
    state.teamMembers.push({ name : payload.name, id : state.count++ });
  },
  [REMOVE](state, payload) {
    for( var i=state.teamMembers.length-1; i>=0; i--) {
      if(state.teamMembers[i].id == payload.owner.id) state.teamMembers.splice(i,1);
    }
  },
};
