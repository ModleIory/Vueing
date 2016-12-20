<style scoped>
	
</style>
<template>
	<nav class="navbar navbar-default" role="navigation">
		<div class="container-fluid">

			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="nav.left.branch.branch_link?nav.left.branch.branch_link:''">
					{{nav.left.branch.branch_name?nav.left.branch.branch_name:''}}
				</a>
			</div>

			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

				<ul class="nav navbar-nav">
					<template v-for="x in nav.left.links">
						<li class="active"><a href="x.href">{{x.name}}</a></li>
					</template>
				</ul>

				<form class="navbar-form navbar-left" role="search">
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Search">
					</div>
					<button type="button" class="btn btn-default">Submit</button>
				</form>

				<ul class="nav navbar-nav navbar-right">
					<template v-for="x in nav.right.links">
						<li><a href="x.href">{{x.name}}</a></li>
					</template>
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
							{{nav.right.dropdown.name?nav.right.dropdown.name:' '}} 
						<span class="caret"></span></a>
						<ul class="dropdown-menu" role="menu">
							<template v-for="x in nav.right.dropdown.list">
								<li><a href="{{x.href}}">{{x.name}}</a></li>
							</template>
						</ul>
					</li>
				</ul>

			</div><!-- /.navbar-collapse -->

		</div><!-- /.container-fluid -->
	</nav>
</template>
<script>
	export default{
		data(){
			return {
				nav:{
					"left":{
						"branch":{
							"branch_name":"",
							"branch_link":""
						},
						"links":[
							{"name":"","href":""},
							{"name":"","href":""}
						]
					},
					"right":{
						"links":[
							{"name":"","href":""}
						],
						"dropdown":{
							"name":"",
							"list":[
								{"name":"","href":""}	
							]
						}
					}
				},
				get_nav_link:'/src/config/logo.json',
				active:true
			}
		},
		created(){
			this.getNav()
		},
		methods:{
			getNav(){
				this.$http.get(this.get_nav_link,{
					params:{

					},
					timeout:20
				}).then((res)=>{
					console.log(res.data)
					this.nav = res.data
				})
			}
		}
	}
</script>