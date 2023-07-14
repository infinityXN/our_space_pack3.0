<template>
  <transition name="el-fade-in-linear">
    <div class="progress-mask" v-if="flag" @click.prevent>
      <div class="progress-w">
        <p>{{ progress === 100 ? '加载完成' : '加载中...' }}</p>
        <div class="progress-box">
          <div class="progress" role="progress" :style="`width: ${progress}%;`">
            {{ progress }}
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ownProgress',
  props: {
    flag: { // 进度条显示隐藏
      type: Boolean,
      default() {
        return true;
      }
    },
    progress: {
      type: Number,
      default() {
        return 0;
      }
    },
  },
}

</script>
<style lang="less" scoped>
.progress-mask {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  .progress-w {
    width: 50%;
    p {
      margin: 10px 0;
      text-align: center;
      color: #42474d;
    }
    .progress-box {
      width: 100%;
      background-color: #abb6bf;
      border-radius: 12px;
      height: 30px;
      line-height: 30px;
      .progress {
        border-radius: 12px;
        background-color: #66ffff;
        text-align: center;
        color: #fff;
        transition: all .4s linear;
      }
    }
  }
}
</style>