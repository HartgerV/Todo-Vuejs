<template>
  <v-layout>
    <v-card contextual-style="dark">
      <span slot="header">
        Add Teammembers
      </span>
      <div slot="body">
        <p>
        Logged in user:{{user}}
        </p>
        <input v-model="addTeamMemberInput" @keyup.enter="addTeamMember">
        <button @click="addTeamMember">+</button>
      </div>
    </v-card>
    <v-card contextual-style="dark">
      <span slot="header">
        Add Task
      </span>
      <div slot="body">
        <input v-model="addTodoInput" @keyup.enter="addTodo">
        <button @click="addTodo">+</button>
      </div>
    </v-card>
    <v-card>
      <span slot="header">
        Unassigned tasks
      </span>
      <div slot="body">
        Tasks:
        <todoList :owner="{ name : '' }"></todoList>
        <span v-if="todo.length == 0">
          No unnassigned tasks available.
        </span>
      </div>
    </v-card>
    <v-card v-for="teamMember in team">
      <span slot="header">
        {{teamMember.name}}'s tasks
      </span>
      <div slot="body">
        <todoList :owner="teamMember"></todoList>
      </div>
    </v-card>
  </v-layout>
</template>

<script>
  import VLayout from '@/layouts/default';
  import VCard from '@/components/card';
  import TodoList from '@/components/todoList';

  export default {
    name: 'todo',
    data() {
      return {
        addTodoInput: '',
        addTeamMemberInput: '',
      };
    },

    components: {
      VLayout,
      VCard,
      TodoList,
    },

    computed: {
      user() {
        return `${this.$store.state.account.firstName} ${this.$store.state.account.lastName}`;
      },
      todo() {
        return this.$store.state.tasks.tasks;
      },
      team() {
        return this.$store.getters['team/allTeam'];
      },
    },

    methods: {
      addTodo() {
        this.$store.commit('tasks/PUSH', { content: this.addTodoInput, status: 'unassigned', createdBy: this.user });
        this.addTodoInput = '';
      },
      addTeamMember() {
        this.$store.commit('team/PUSH', { name: this.addTeamMemberInput });
        this.addTeamMemberInput = '';
      },
    },

  };
</script>
