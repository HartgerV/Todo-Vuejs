<template>
  <div>
    <button v-if="owner.id" @click="removeTeamMember">Remove this teammember</button>
    <ol>
      <template v-for="todoItem in list">
        <todoItem
            :assignedTo="todoItem.assignedTo"
            :content="todoItem.content"
            :status="todoItem.status"
            :index="todoItem.id"
            :createdBy="todoItem.createdBy"
            :id="todoItem.id"
            :key="todoItem.id"
        >
        </todoItem>
      </template>
    </ol>
  </div>
</template>

<script>
  import TodoItem from '@/components/todoItem';

  export default {
    name: 'todoList',

    data() {
      return {
        assignTo: [],
      };
    },

    props: ['owner'],

    components: {
      TodoItem,
    },

    computed: {
      user() {
        return `${this.$store.state.account.firstName} ${this.$store.state.account.lastName}`;
      },
      list() {
        return this.$store.getters['tasks/allTodo'].filter(task => task.assignedTo === this.owner.name);
      },
    },

    methods: {
      removeTeamMember() {
        this.$store.dispatch('team/remove', { owner: this.owner });
      },
    },
  };
</script>
