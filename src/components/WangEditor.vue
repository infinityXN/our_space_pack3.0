<template>
  <div :class="prefixCls">
    <div ref="editor" class="editor-wrapper"></div>
  </div>
</template>

<script>
import WEditor from 'wangeditor';
import { ref, watchEffect, watch, onMounted } from 'vue';

export default {
  name: 'WangEditor',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-editor-wang'
    },
    value: {
      type: String
    },
    menu: {
      type: Array,
      default() {
        return []
      }
    }
  },
  setup(props, ctx) {
    const editor = ref(null);
    const editorContent = ref(null);
    // 在组件第一次渲染时执行，之后监听每次组件的变化
    watchEffect(() => {
      console.log('执行了watchEffect');
    });
    // 只侦听被侦听的对象
    watch(() => props.value, (newValue, oldValue) => {
      console.log();
      editorContent.value = newValue;
      editor.value.txt.html(newValue);
    })
    const initEditor = () => {
      editor.value = new WEditor(editor.value);
      console.log(editor.value);
      // editor.value.config.onchange = (html) => {
      //   editorContent.value = html;
      //   ctx.emit('change', editorContent.value);
      // }
      // if(props.menu.length != 0) {
      //   editor.value.config.menus = props.menu;
      // }
      editor.value.config.menus = props.menu;
      editor.value.create();
    }
    onMounted(() => {
      initEditor();
    });

    return {
      editor
    }
  },
}
</script>

<style lang="less" scoped>
.ant-editor-wang {
  .editor-wrapper {
    text-align: left;
  }
}
</style>
