/* ============
 * Actions for the account module
 * ============
 *
 * The actions that are available on the
 * account module.
 */

import Transformer from '@/transformers/AccountTransformer';
import * as types from './mutation-types';


export const setOwner = (context, payload) => {
  context.commit('SETOWNER',payload);
}

export default {
  find,
  setOwner
};
