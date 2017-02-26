<template>
  <div>
    <div id="javascript-editor" class="editor"></div>
  </div>
</template>

<script>
  import ace from 'brace'
  import 'brace/mode/javascript'
  import 'brace/theme/monokai'
  import 'brace/keybinding/vim'

  export default {
    name: 'editor',
    data () {
      return {
        editor: ''
      }
    },
    methods: {
      editorInit: function () {
        this.editor = ace.edit('javascript-editor')
        this.editor.getSession().setMode('ace/mode/javascript')
        this.editor.setTheme('ace/theme/monokai')
        this.editor.setKeyboardHandler('ace/keyboard/vim')
        this.editor.setValue([
          '// javascript',
          'console.log("Hello World")'
        ].join('\n')
        )
        this.editor.clearSelection()
      }
    },
    mounted: function () {
      this.editorInit()
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
  
  div.editor {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>

