<template>
  <div id="app">
    <img alt="Vue logo" src="https://vuejs.org/images/logo.png" width="25%" />
    <HelloWorld msg="Hello Vue in CodeSandbox!" />
    <Events />
    <Inputs />
    <div v-for="item in items" :key="item">
      <span v-if="seen">{{ item }}</span>
    </div>
    <TodoItem v-for="todo in todos" :todo="todo" :key="todo.text" />
    <LifeCycle />
    <Once />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Events from "./components/Events";
import Inputs from "./components/Inputs";
import TodoItem from "./components/TodoItem";
import LifeCycle from "./components/LifeCycle";
import Once from "./components/Once";

export default {
  name: "App",
  components: {
    HelloWorld,
    Events,
    Inputs,
    TodoItem,
    LifeCycle,
    Once,
  },
  data() {
    return {
      seen: true,
      items: ["1", "2", "3"],

      todos: [{ text: "Item 1" }, { text: "Item 2" }, { text: "Item 3" }],
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
