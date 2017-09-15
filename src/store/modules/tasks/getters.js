/* ============
 * Getters for the account module
 * ============
 *
 * The getters that are available on the
 * account module.
 */

export default {
  doneTodos: state => {
    return state.tasks.filter(task => task.status=='completed');
  },
  allTodo: state => state.tasks,
  filteredTodo: state => filter => state.tasks.filter(task => task.assignedTo === name),
};
