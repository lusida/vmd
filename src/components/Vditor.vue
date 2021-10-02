<template>
  <VueVditor
    v-model="text"
    :options="options"
    @after="handleAfter"
    class="editor"
  />
</template>
<script>
import options from "./Vditor"
export default {
  data() {
    return {
      editor: {},
      text: "Hello",
      options: options
    };
  },
  methods: {
    handleAfter(editor) {
      this.editor = editor;
    },
  },
};
</script>