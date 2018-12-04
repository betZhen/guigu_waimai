<template>
    <div>
      <header class="top">
      <div class="line">
         <a class="logo" href="#"></a>
         <div class="search_input">
           <i class="icon"></i>
           <span class="placeholder">搜索商品, 共19913款好物</span>
         </div>

         <div class="login">登录</div>
       </div>
      <div class="tabWrap">
          <div class="m-tabs">
            <header class="tuiJ">
              <div class="inner">
                <div class="list">
                  <div class="lie_b"><span class="txt">推荐</span></div>
                  <div class="lie_b"><span class="txt">居家</span></div>
                  <div class="lie_b"><span class="txt">鞋包配饰</span></div>
                  <div class="lie_b"><span class="txt">服装</span></div>
                  <div class="lie_b"><span class="txt">电器</span></div>
                  <div class="lie_b"><span class="txt">洗护</span></div>
                  <div class="lie_b"><span class="txt">饮食</span></div>
                  <div class="lie_b"><span class="txt">餐厨</span></div>
                  <div class="lie_b"><span class="txt">婴童</span></div>
                  <div class="lie_b"><span class="txt">文体</span></div>
                  <div class="lie_b"><span class="txt">特色区</span></div>
                </div>
              </div>
            </header>
          </div>
          <div class="toggleWrap">
            <div class="linear"></div>
            <div class="toggle">
              <div class="icon"></div>
            </div>
          </div>
        </div>
      </header>
      <div class="slideWarp">
        <div class="m-slide">
          <div class="slide-con">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="hua_p">
                  <img class="tuPian" src="#" alt="">
                </div>
              </div>
              <div class="swiper-pagination">
                <span class="hau_xian"></span>
                <span class="hau_xian"></span>
                <span class="hau_xian"></span>
                <span class="hau_xian"></span>
                <span class="hau_xian"></span>
                <span class="hau_xian"></span>
                <span class="hau_xian"></span>
                <span class="hau_xian"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pin_p"></div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .top
    background-color #fff
    border-bottom 1px solid #d9d9d9

    .line
      position relative
      display flex
      flex-flow row nowrap
      align-items center
      background #fff
      padding .21333rem .4rem
      .logo
        width: 1.84rem;
        height: .53333rem;
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
        display: inline-block;
        margin-right: .26667rem;
        background-size: cover;
        background-position: center;
      .search_input
        display flex
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        height: .74667rem;
        font-size: .37333rem;
        background-color: #ededed;
        border-radius: .10667rem;
        flex-grow 1
        .icon
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .37333rem;
          height: .37333rem;
          margin-right: .13333rem;
        .placeholder
          color: #666;
      .login
        width: .98667rem;
        height: .53333rem;
        line-height: .53333rem;
        text-align: center;
        color: #b4282d;
        border: 1px solid #b4282d;
        border-radius: .10667rem;
        margin-left: .21333rem;
    .tabWrap
      position: relative;
      z-index: 2;
      background: #fff;
      margin-top: -.01333rem;
      .m-tabs
        padding-right: 1.33333rem;
        width: 100%
        .tuiJ
          display: flex;
          flex-flow: row nowrap;
          background-color: #fff;
          position: relative;
          .inner
            position: relative;
            height: 100%;
            width: 100%;
            overflow: hidden;
            display: flex;
            flex-flow: row nowrap
            .list
              transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
              transition-duration: 0ms;
              transform: translate(-108px, 0px) translateZ(0px);
              display flex
              flex-flow: row nowrap;
              flex-shrink: 0;
              padding: 0 .4rem;
              background: #fff;
              &.lie_b:nth-child(1)
                margin-left 0
              .lie_b
                flex-shrink: 0;
                position: relative;
                color: #b4282d;
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
                justify-content: center;
                z-index: 1;
                text-align: center;
                margin-left: .26667rem;
                .txt
                  display: inline-block;
                  padding: 0 .21333rem;
                  line-height: .8rem;
                  font-size: .37333rem;
                  color: #333;
                  text-align: center;
                  /*position: relative;
                  color: #b4282d;*/

      .toggleWrap
        display: flex;
        flex-grow: 0;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        right: 0;
        .linear
          width: .8rem;
          height: .8rem;
          background-image: linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%);
        .toggle
          width: 1.33333rem;
          height: .8rem;
          text-align: center;
          background: #fff;
          .icon
            margin-top: .2rem;
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-a6045aadfd.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: .4rem;
            height: .4rem;
            transition: transform .5s,-webkit-transform .5s;
  .slideWarp
    height: 4.93333rem;
    position: relative;
    .m-slide
      padding-top: 4.93333rem!important;
      position: relative;
      width: 100%;
      overflow: hidden;
      .slide-con
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        .swiper-container
          height: 100%;
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          overflow: hidden;
          z-index: 1;
          background-image url("https://yanxuan.nosdn.127.net/850c005113e5becbfd98d797b8a2101a.jpg?imageView&quality=75&thumbnail=750x0")
          background-repeat no-repeat
          background-size 100% 100%
          .swiper-wrapper
            transform: translate3d(-3200px, 0px, 0px);
            transition-duration: 300ms;
            z-index: 1;
            display: flex;
            transition-property: transform,-webkit-transform;
            box-sizing: content-box;
            width 100%
            height 100%
            position relative
            .hua_p
              width: 320px;
              position: relative;
              flex-shrink: 0;
              height: 100%;
              transform: translate3d(0,0,0);
              .tuPian
                width: 100%;
                height: auto;
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                background-color: #f9f9f9;
  .swiper-pagination
    bottom: .4rem;
    width: 100%;
    left 0
    position: absolute;
    text-align: center;
    transition: .3s;
    transform: translate3d(0,0,0);
    z-index: 10;
    .hau_xian
      margin: 0 .13333rem 0 0;
      cursor: pointer;
      width: .53333rem;
      height: .05333rem;
      display: inline-block;
      background: #fff;
      opacity: 23.4;
      border-radius: 0;
</style>
