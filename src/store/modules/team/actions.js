/* ============
 * Actions for the account module
 * ============
 *
 * The actions that are available on the
 * account module.
 */
import Vue from 'vue';
import Transformer from '@/transformers/AccountTransformer';
import * as types from './mutation-types';

export const remove = (context, payload) => {
  console.log(context.rootState);
  context.commit('REMOVE', payload );
  const ownedTasks = context.rootGetters['tasks/allTodo'].filter(task => task.assignedTo === payload.name);
  console.log(ownedTasks);
  for(var i = 0;i<ownedTasks.length;i++) {
    for( var y=context.rootState.tasks.tasks.length-1; y>=0; y--) {
      if(context.rootState.tasks.tasks[y].id == ownedTasks[i].id)
        context.commit('tasks/SETOWNER', { id : ownedTasks[i].id, owner: ''}, { root: true });
    }

  }
};

export default {
  remove,
};
