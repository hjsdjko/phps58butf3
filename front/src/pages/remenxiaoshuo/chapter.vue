<template>
  <div :style='{"width":"100%","padding":"30px 7% 40px","margin":"0px auto","position":"relative","background":"none"}'>
    <div class="section-title" :style='{"padding":"12px 0 0","margin":"0px auto","color":"#1b394c","textAlign":"left","background":"url(http://codegen.caihongy.cn/20231009/8f2613f5f198426ab730d135e0a2e138.png) no-repeat 120px center","width":"100%","fontSize":"24px","fontWeight":"600","height":"60px"}'>{{detail.chaptertitle}}</div>
    <div class="section-content">
      <div class="content-title">{{detail.title}}</div>
      <div class="content-sub-title">发布时间：{{detail.addtime}}</div>
      <el-divider></el-divider>
      <div class="content-detail" v-html="detail.content"></div>
      <el-divider></el-divider>
	  <div style="display: flex;align-items: center;justify-content: center;width: 50%;position: fixed;bottom: 2%;left: 25%;">
		  <el-button type="primary" @click="prepClick">上一章</el-button>
		  <el-button type="warning" @click="catalogueClick">目录</el-button>
		  <el-button type="primary" @click="nextClick">下一章</el-button>
	  </div>
    </div>
  </div>
</template>

<script>
  export default {
    //数据集合
    data() {
      return {
        detail: {},
		id:'',
		chapterList:[],
      }
    },
    created() {
      this.id = this.$route.query.id
      this.getDetail(1)
    },
	methods:{
		getDetail(type){
			this.$http.get('chapterremenxiaoshuo/detail/' + this.id, {}).then(res => {
				if (res.data.code == 0) {
					this.detail = res.data.data;
					window.scrollTo( 0, 100 )
					if(type){
						this.getChapterList()
					}
				}
			});
		},
		getChapterList(){
			this.$http.get('chapterremenxiaoshuo/list', {
				params: {
					refid: this.detail.refid,
                    limit: 1000,
				}
			}).then(res => {
				if (res.data.code == 0 && res.data.data.list.length > 0) {
					this.chapterList = res.data.data.list
				}
			});
		},
		prepClick(){
			for(let x in this.chapterList){
				if(this.chapterList[x].id==this.id){
					if(x==0){
						this.$message.warning('没有上一章了!')
						return false
					}
					this.id = this.chapterList[Number(x) - 1].id
					this.getDetail()
					break;
				}
			}
		},
		catalogueClick(){
			this.$router.push({path: '/index/remenxiaoshuoDetail', query: {id: this.detail.refid}});
		},
		nextClick(){
			for(let x in this.chapterList){
				if(this.chapterList[x].id==this.id){
					if(x==this.chapterList.length - 1){
						this.$message.warning('已经是最后一章了!')
						return false
					}
					if(this.chapterList[Number(x) + 1].vipread=='是' && localStorage.getItem('vip')!='是'){
						this.$message.warning('下一章为vip章节，请购买会员后阅读!')
						return false
					}
					this.id = this.chapterList[Number(x) + 1].id
					this.getDetail()
					break;
				}
			}
		},
	}
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .section {
    width: 900px;
    margin: 0 auto;
  }

  .section-content {
      margin-top: 30px;
  }
  .content-title {
      text-align: center;
      font-size: 22px;
      font-weight: bold;
  }
  .content-sub-title {
      text-align: center;
      margin-top: 20px;
      color: #888888;
      font-size: 14px;
  }
</style>
