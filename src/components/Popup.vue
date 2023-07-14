<template>
  <div class="popup" :style="{width: pWidth+'px',height: pHeight+'px',top: pTop+'px',left: pLeft+'px',}" v-if="pShow">
    <div class="popup-top">
      <div class="popup-top-trapezoid"></div>
      <div class="popup-top-right"></div>
    </div>
    <div class="popup-center">

    </div>
    <div class="popup-bottom">
      <div class="popup-bottom-left"></div>
      <div class="popup-bottom-trapezoid"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popup',
  props: {
    pWidth: {
      type: Number,  // 弹窗宽
      default() {
        return 400;
      }
    },
    pHeight: {
      type: Number,  // 弹窗高
      default() {
        return 300;
      }
    },
    pTop: {
      type: Number,  // 弹窗定位top
      default() {
        return 0;
      }
    },
    pLeft: {
      type: Number,  // 弹窗定位left
      default() {
        return 0;
      }
    },
    pShow: {
      type: Boolean,  // 弹窗是否显示
      default() {
        return false;
      }
    },
  },
}

</script>
<style lang="less" scoped>
.popup {
  position: fixed;
  background-color: transparent;
  .popup-top {
    display: flex;
    width: 100%;
    height: 7%;
    /* 直角梯形 */
    .popup-top-trapezoid{
      position: relative;
      height: 100%;
      width: 40%;
      border-left: 2px solid #00ffff;
      border-top-left-radius: 2px;
      overflow: hidden;
    }
    .popup-top-trapezoid:before{
      content: '';
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      border: 2px solid #00ffff;
      border-bottom: none;
      transform-origin: 0 92%;
      transform: skewX(45deg);
      background-color: rgba(0, 0, 0, 0.6);
    }
    .popup-top-right {
      height: 100%;
      width: 60%;
      border-left: none;
      border-right: none;
      border-top: none;
      border-bottom: 3px solid #00ffff;
    }
  }
  .popup-center {
    width: 100%;
    height: 87%;
    background-color: rgba(0, 0, 0, 0.6);
    border-left: 2px solid #00ffff;
    border-right: 2px solid #00ffff;
  }
  .popup-bottom {
    display: flex;
    width: 100%;
    height: 7%;
    .popup-bottom-left {
      height: 100%;
      width: 60%;
      border-left: none;
      border-right: none;
      border-top: none;
      border-top: 3px solid #00ffff;
      // border-left: 2px solid #00ffff;
    }
    /* 直角梯形 */
    .popup-bottom-trapezoid{
      position: relative;
      height: 100%;
      width: 40%;
      border-right: 2px solid #00ffff;
      border-bottom-right-radius: 2px;
      overflow: hidden;
    }
    .popup-bottom-trapezoid:before{
      content: '';
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      border: 2px solid #00ffff;
      border-top: none;
      transform-origin: 0 -9%;
      transform: skewX(45deg);
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
}

</style>