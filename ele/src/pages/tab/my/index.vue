<template>
	<div class="detail">
		<header>
			<span
			 v-for="item in top" :key="item.id"
			 @click="handleBar(item.id)"
			>{{item.title}}</span>
		</header>
		<section>
			<div class="leftList">
				<scroll-view scroll-y style="height: 600px;" scroll-with-animation='true'>
					<li v-for="(item,index) in list" :key="item.id"
					@click="menuClick(index)"
					:class="LeftIndex===index?'active':null">
						{{item.name}}
					</li>
				</scroll-view>
			</div>
			<div class="rightList">
					<scroll-view scroll-y style="height: 600px;" scroll-with-animation='true' :scroll-into-view="views" >
						<div class='rightDl' v-for="(item,index) in list" :key="index" :id="'a'+index" >
								<p><span>{{item.name}}</span><span>{{item.description}}</span></p>
								<div class="dlList">
									<dl v-for="(val,ind) in item.foods" 
										:key="ind"
										>
										<dt>
											<img :src='url+val.image_path' alt="">
										</dt>
										<dd>
											<h3>{{val.name}}</h3>
											<p>{{val.description}}</p>
											<p>{{val.tips}}</p>
											<div>
											
											</div>
										</dd>
									</dl>	
								</div>			
						</div>
					</scroll-view>
			</div>
		</section>
		<footer></footer>
	</div>
</template>
<script>
import {mapState,mapActions} from 'vuex';
export default {
	data:{
		top:[{
			title:'商品',
			id:'1'
		},{
			title:'评价',
			id:'2'
		}],
		url:'https://elm.cangdu.org/img/',
		list:[],
		foods: [],
		listHeight: [],
		foodsScrollY: 0,
		LeftIndex:0,
		views:null
	},
	created(){
		this.getDetails().then(res=>{
				res.map(item=>{
					this.list.push(item);
				})
			});
	
	},

 computed: {
    ...mapState({
		}),
  },
  methods: {
    ...mapActions({
       getDetails: 'detail/getDetails',

		}),
    handleBar(id){
			console.log(id)
		},
		async menuClick(index){
			this.LeftIndex=index;
			this.views = await "a" + index;
		}
  },
  mounted() {
		console.log(this.list,'11111')

  },	
}
</script>

<style lang="scss" scoped>
.detail{
	width:100%;
	height: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	header{
		width: 100%;
		height: 70rpx;
		border-bottom: 1rpx solid #ccc;
		display: flex;
		justify-content: space-between;
		align-items: center;
		span{
			flex: 1;
			text-align: center;
			font-size: 30rpx;
		}
	
	}
	section{
		width: 100%;
		flex: 1;
		display: flex;
		
		.leftList{
			width: 30%;
			height: 100%;
			border-right: 1px solid #ccc;
			overflow-x: hidden; 
			overflow-y: auto;
			font-size: 30rpx;
			background: #fcfcfc;
			li{
				width: 100%;
				height: 80rpx;
				overflow: hidden;
				display: flex;
				align-items: center;
		
				padding-left:20px;
				border-bottom: 1px solid #fafafa;
				
			}
			li.active{
			background: #fff;
			font-weight: bold;
			}
		}
	}
	.rightList{
		flex: 1;
		height: 100%;
		overflow-y: auto;
		.rightDl{
			width: 100%;
			box-sizing: border-box;
			>p{
				width: 100%;
				height: 80rpx;
				display: flex;
				align-items: center;
				background: #fafafa;
				overflow: hidden;
				span{
					font-size: 28rpx;
					margin:0 10rpx;
				}
				span:nth-child(2){
					font-size: 24rpx;
				}
			}
			.dlList{
				box-sizing: border-box;
				width: 100%;
				font-size: 24rpx;
				padding: 0 20rpx;
				dl{
					width: 100%;
					display: flex;
					margin: 10rpx 0;
					overflow: hidden;
					dt{
						width: 30%;
						height: 130rpx;
						overflow: hidden;
						img{
							width:100%;
							height: 100%;
						}
					}
					dd{
						flex: 1;
						margin-left: 10px;
				
						>h3{
							width: 100%;
							margin: 10px 0;
							font-size: 30rpx;
							font-weight: bold;
							overflow: hidden;
						
						}
						>p{
							margin: 10px 0; 
							display: flex;
							flex-direction: column;
							overflow: hidden;	
						}
						>div{
							display: flex;
							justify-content: space-between;
							padding: 0 16rpx;
							
						}
					}

				}
			}
		}
	}
}
</style>
