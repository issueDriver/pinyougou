app.controller("brandContrller",function($scope,$http,brandService){
    	//查询品牌列表
    	$scope.findAll=function(){
    		brandService.findAll().success(function(response){
    			
    				$scope.list=response;//给列表的对象赋值
    			
    		});
    		
    	}
    	//分页控件配置
    	//currentPage 当前页码
    	//totalItems 总记录
    	//itemsPerPaeg 每页的记录数
    	//perPageOptions 分页选项
    	//onChange 当页码变更后自动触发的方法
    	$scope.paginationConf={
    			currentPage:1,
    			totalItems:10,
    			itemsPerPage:10,
    			perPageOptions:[10,20,30,40,50],
    			onChange:function(){
    				$scope.reloadList();
    			}
    	}
    	//刷新列表
    	$scope.reloadList=function(){
    		
    		$scope.search($scope.paginationConf.currentPage,$scope.paginationConf.itemsPerPage);
    	}
    	//findPage这个名字可以自定义
    	$scope.findPage=function(page,size){
    		brandService.findPage().success(
    				function(response){
    					$scope.list=response.rows;//显示当前页的数据
    					$scope.paginationConf.totalItems=response.total;//更新总记录数
    		});
    	};
    	//新增
    	$scope.save=function(){
    		var object=null;//方法名
    		if($scope.entity.id!=null){
    			object=brandService.update($scope.entity);
    		}
    		else{
    			object=brandService.add($scope.entity);
    		}
    		object.success(function(response){
    			if(response.success){
    				$scope.reloadList();//刷新
    			}else{
    				alert(response.message);
    			}
    		})
    	}
    	
    	//查询实体
    	$scope.findOne=function(id){
    		this.findOne().success(
    				function(response){
    					$scope.entity=response;
    				}
    		);
    	}
    	
    	$scope.selectIds=[];//用户勾选ID的集合
    	//用户勾选的时候调用这个方法
        $scope.udapteSelect=function($event,id){
    		if($event.target.checked){
    			$scope.selectIds.push(id);//push方法向集合添加元素
    		}
    		else{
    		   var index=$scope.selectIds.indexOf(id);//查找值的位置
    		   $scope.selectIds.splice(index,1);//参数1：移除的位置，参数2：移除的个数
    		}
    	}
    	//移除
    	$scope.dele=function(){
    		brandService.dele($scope.selectIds).success(function(response){
    			if(response.success){
    				$scope.reloadList();//刷新
    			}else{
    				alert(response.message);
    			}
    		})
    	}
    	$scope.searchEntity={};
    	//条件查询
    	$scope.search=function(page,size){
    		brandService.search(page,size,$scope.searchEntity).success(
    				function(response){
    					$scope.list=response.rows;//显示当前页的数据
    					$scope.paginationConf.totalItems=response.total;//更新总记录数
    		});
    	}
    });