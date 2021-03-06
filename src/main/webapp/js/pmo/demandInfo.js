
$(function(){
	loadSkill();
	loadPosition();
	loadDemandStatus();
	
	loadDepartment();
	loadSubDepartment();
	
	loadDemandList();
	$("#searchBtn").click(function(){
		loadDemandList();
	})
	/*loadCsBuName();
	loadScSubDeptName();*/
	
	
})

$("#skill").change(function(){
	$("#exportExcel").attr("disabled", true);
})
$("#position").change(function(){
	$("#exportExcel").attr("disabled", true);
})
$("#department").change(function(){
	$("#exportExcel").attr("disabled", true);
})
$("#sub_department").change(function(){
	$("#exportExcel").attr("disabled", true);
})
$("#status").change(function(){
	$("#exportExcel").attr("disabled", true);
})
$("#csBuName").change(function(){
	$("#exportExcel").attr("disabled", true);
})
$("#scSubDeptName").change(function(){
	$("#exportExcel").attr("disabled", true);
})

/*加载skill本地json信息*/
function loadSkill(){
	var url = path+'/json/skill.json';
	$.getJSON(url, function(data){
		$.each(data, function(i, item){
			 $("#skill").append("<option value='"+item.name+"'>"+item.name+"</option>");
		})
	})
}
/*加载position本地json信息*/
function loadPosition(){
	var url = path+'/json/position.json';
	$.getJSON(url, function(data){
		$.each(data, function(i, item){
			$("#position").append("<option value='"+item.name+"'>"+item.name+"</option>");
		})
	})
}
/*加载status本地json信息*/
function loadDemandStatus(){
	var url = path+'/json/demandStatus.json';
	$.getJSON(url, function(data){
		$.each(data, function(i, item){
			$("#status").append("<option value='"+item.name+"'>"+item.name+"</option>");
		})
	})
}
/*加载业务部*/
function loadCsBuName(){
	var url = path+'/json/csBuName.json';
	$.getJSON(url, function(data){
		$.each(data,function(i,item){
			$("#csBuName").append("<option value='"+item.name+"'>"+item.name+"</option>");
		})
	})
}
function loadCSBu(result){
	var userType = result.user.user_type;
	var url = path+'/json/csBuName.json'
	$.getJSON(url,  function(data) {
		$("#csBuName").empty();
		$("#csBuName").append("<option value=''>-- select --</option>");
	       $.each(data, function(i, item) {
	    	   $("#csBuName").append("<option value='"+item.name+"'>"+item.name+"</option>");
	       })
	       if(userType=='1' || userType=='2' || userType=='3' || userType=='4'){
				$('#csBuName').val(result.user.bu);
				$("#csBuName").attr("disabled","disabled");
			}
	});
}

/*加载交付部*/
/*function loadScSubDeptName(){
	$("#csBuName").change(function(){
		var csBuName = $("#csBuName").val();
		$("#scSubDeptName").empty();
		$("#scSubDeptName").append("<option value=''>-- select --</option>");
		$.ajax({
			url:path+'/service/demand/loadScSubDeptName',
			dataType:"json",
			async:true,
			cache:false,
			type:"post",
			data:{"csBuName":csBuName},
			success:function(data){
				$.each(data, function(i,item){
					$("#scSubDeptName").append("<option value='"+item.csSubDeptName+"'>"+item.csSubDeptName+"</option>");
				})
			}
		})
	})
}
*/
function loadCSSubDept(result){
	var userType = result.user.user_type;
	$.ajax({
		url:path+'/service/csDept/queryAllCSSubDept',
		dataType:"json",
		async:true,
		cache:false,
		type:"post",
		success:function(list){
			$("#csSubDept").empty();
			$("#csSubDept").append("<option value=''>-- select --</option>");
			for(var i = 0;i<list.length;i++){
				$("#csSubDept").append("<option value='"+list[i].csSubDeptId+"'>"+list[i].csSubDeptName+"</option>");
			}
			
			if(userType=='2' || userType=='3' || userType=='4'){
				$('#csSubDept').val(result.csSubDept);
				$("#csSubDept").attr("disabled","disabled");
			}
		}
	})
}
/*异步加载Department信息*/
function loadDepartment(){
	$.ajax({
		url:path+'/service/demand/loadDepartment',
		dataType:"json",
		async:true,
		cache:false,
		type:"post",
		success:function(data){
			$.each(data, function(i,item){
				$("#department").append("<option value='"+item.hsbcDeptName+"'>"+item.hsbcDeptName+"</option>")
			})
		}
	})
}
/*根据department加载subdepartment的ajax*/
function loadSubDepartment(){
	$("#department").change(function(){
		//var department = $("#department option:selected").text();
		var department = $("#department").val();
		//$("#sub_department").find("option").remove();
		$("#sub_department").empty();
		$("#sub_department").append("<option value=''>-- select --</option>");
		$.ajax({
			url:path+'/service/demand/loadSubDepartment',
			dataType:"json",
			async:true,
			cache:false,
			type:"post",
			data:{"hsbcDeptName":department},
			success:function(data){
				$.each(data, function(i,item){
					if(item.hsbcSubDeptName){
						$("#sub_department").append("<option value='"+item.hsbcSubDeptName+"'>"+item.hsbcSubDeptName+"</option>");
					}
				})
			}
		});
	});
}
	
/*根据条件和当前页加载查询到的信息*/
function loadDemandList(currPage){
	var skill= $("#skill").val();
	var position= $("#position").val();
	var department= $("#department").val();
	var sub_department= $("#sub_department").val();
	var status= $("#status").val();
	var rr= $("#rr").val();
	var csBuName = $("#csBu").val();
	var csSubDept = $("#scSubDept").val();
	//$("#demandList").empty();
	$("#demandList  tr:not(:first)").html("");
	$.ajax({
		url:path+'/service/demand/queryDemandList',
		dataType:"json",
		async:true,
		cache:false,
		type:"post",
		data:{"csBuName":csBuName,"skill":skill,"position":position,"hsbcDept.hsbcDeptName":department,"hsbcDept.hsbcSubDeptName":sub_department,
			"status":status,"rr":rr,"currPage":currPage,"csSubDept":csSubDept},
		success:function(result){
			//alert(result.list.length);
			if(result.list.length > 0){
				$("#exportExcel").removeAttr("disabled");
			}else{
				$("#demandList").append("<tr><td colspan='7' style='text-align:center'>暂无数据！</td></tr>");
			}
			//$.each(reslut, function(i,data){
			for (var i = 0; i < result.list.length; i++) {
				var tr = $("<tr id='"+result.list[i].rr+"'></tr>");
				var td1 = $("<td>"+result.list[i].rr+"</td>");
				var td2 = $("<td>"+result.list[i].skill+"</td>");
				var td3 = $("<td>"+result.list[i].position+"</td>");
				if(result.list[i].hsbcDept == null){
					var td4 = $("<td></td>");
					var td5 = $("<td></td>");
				}else{
					var td4 = $("<td>"+result.list[i].hsbcDept.hsbcDeptName+"</td>");
					var td5 = $("<td>"+result.list[i].hsbcDept.hsbcSubDeptName+"</td>");
				}
				var td6 = $("<td>"+result.list[i].status+"</td>");
				var td7 = $("<td>"+result.list[i].csSubDept+"</td>");
				var td8 = $("<td><a href='javascript:void(0);' class='btn btn-info btn-small' onclick='demandDetail("+result.list[i].demandId+")'>DETAIL</a></td>");
				td1.appendTo(tr);
				td2.appendTo(tr);
				td3.appendTo(tr);
				td4.appendTo(tr);
				td5.appendTo(tr);
				td6.appendTo(tr);
				td7.appendTo(tr);
				td8.appendTo(tr);
				$("#demandList").append(tr);
			}
			//alert(result.pageCondition.totalPage);
			$("#pageCount").html(result.pageCondition.totalPage);
			$("#currentPage").html(result.pageCondition.currPage);
			$("#fristPage").attr("onclick","loadDemandList(1)");
			if(result.pageCondition.currPage <= result.pageCondition.totalPage){
				$("#previousPage").attr("onclick","loadDemandList("+(result.pageCondition.currPage - 1)+")");
				$("#nextPage").attr("onclick","loadDemandList("+(result.pageCondition.currPage + 1)+")");
				$("#lastPage").attr("onclick","loadDemandList("+(result.pageCondition.totalPage)+")");
			}
			if(result.pageCondition.currPage==result.pageCondition.totalPage){
				$("#nextPage").parent("li").addClass("disabled");
				$("#nextPage").removeAttr('onclick');
				$("#lastPage").parent("li").addClass("disabled");
				$("#lastPage").removeAttr('onclick');
				$("#fristPage").parent("li").removeClass("disabled");
				$("#previousPage").parent("li").removeClass("disabled");
			}
			if(result.pageCondition.currPage==1){
				$("#fristPage").parent("li").addClass("disabled");
				$("#fristPage").removeAttr('onclick');
				$("#previousPage").parent("li").addClass("disabled");
				$("#previousPage").removeAttr('onclick');
				$("#nextPage").parent("li").removeClass("disabled");
				$("#lastPage").parent("li").removeClass("disabled");
			}
			$("ul.pagination-centered li a").each(function(){
				if( 1 < result.pageCondition.currPage && result.pageCondition.currPage < result.pageCondition.totalPage){
					$(this).parent("li").siblings("li").removeClass("disabled");
				}
			});
			
            loadCSSubDept(result);			
			loadCSBu(result);
		}
	})
	
}

$('#exportExcel').bind("click", function(){
	
	$('#myModal').modal('show');
	
});

function exportCondition(){
	var condition="";
	$("label").find(":checkbox:checked").each(function(){
		condition += $(this).attr("name") +",";
	});
	var url = path+'/service/demand/exportExcel';
	$("#condition").val(condition);
	$("#conditionForm").attr("action",url);
	$("#conditionForm").submit();
	
	$('#myModal').modal('hide');
	$("[type='checkbox']").removeAttr("checked");
}

function demandDetail(demandId){
	$("#demandId").val(demandId);
	var url = path+'/service/demand/demandDetail';
	$("#detailForm").attr("action",url);
	$("#detailForm").submit();
}
