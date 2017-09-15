<template>
  <div
      v-bind:class="{inProgress : (status==='inProgress'), completed : (status==='completed')}"
      @mouseover="expand=true"
      @mouseleave="expand=false"
  >
    <h4>{{content}}</h4>
    <template v-if="expand || (status!=='completed')">
      <h6>{{status}}</h6>
      <button class="button" v-if="assignedTo!==''" @click="setStatus('inProgress')">Start</button>
      <button v-if="status === 'inProgress'" @click="setStatus('completed')">Complete</button>
      Assign task to:
      <select v-model="assignTo" @change="assignTask(id, assignTo)">
        <option value=""></option>
        <option v-if="!(assignedTo==='')" value="">
          Unassign
        </option>
        <option
            v-if="!(assignedTo===teamMember.name)"
            v-for="teamMember in team"
            v-bind:value="teamMember.name"
        >
          {{ teamMember.name }}
        </option>
      </select>
      <button @click="removeItem()">X</button>
      <p>
        Created by: {{createdBy}}
      </p>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'todoItem',

    data() {
      return {
        assignTo: '',
        expand: false,
      };
    },

    props: ['content', 'status', 'createdBy', 'id', 'assignedTo'],

    computed: {
      team() {
        return this.$store.getters['team/allTeam'];
      },
    },

    methods: {
      removeItem() {
        this.$store.commit('tasks/REMOVE', { id: this.id });
      },
      setStatus(newValue) {
        this.$store.commit('tasks/SETSTATUS', { id: this.id, status: newValue });
      },
      assignTask(id, name) {
        this.$store.commit('tasks/SETOWNER', { id, owner: name });
      },
    },
  };
</script>
