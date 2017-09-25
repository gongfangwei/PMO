$(function(){
	
	loadEmployeeInfo();
	dateType();
});


function dateType(){
	$('.form_datetime').datetimepicker({
		weekStart: 1,
		minView:'month',
		todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		forceParse: 0,
		language:'zh-CN',
		format: 'yyyy-mm-dd',
		pickerPosition: 'bottom-left',
		showMeridian: 1
	});
}


function updateEmployee(){
	var bootstrapValidator = $("#updateEmployeeForm").data('bootstrapValidator');
	   bootstrapValidator.validate();
	if(bootstrapValidator.isValid()){
		var employeeId = $('#employeeId').val();
		var eHr = $('#eHr').val();
		var lob = $('#lob').val();
		var hsbcStaffId = $('#hsbcStaffId').val();
		var staffName = $('#staffName').val();
		var LN = $('#LN').val();
		var staffRegion = $('#staffRegion').val();
		var staffLocation = $('#staffLocation').val();
		var locationType = $('#locationType').val();
		var onshoreOrOffshore = $('#onshoreOrOffshore').val();
		var csSubDept = $('#csSubDept').val();
		var hsbcSubDept = $('#hsbcSubDept').val();
		var projectName = $('#hsbcProjectName').val();
		var projectManager = $('#hsbcProjectManager').val();
		var sow = $('#sow').val();
		var sowExpiredDate = $('#sowExpiredDate1').val();
		var staffCategory = $('#staffCategory').val();
		var engagementType = $('#engagementType').val();
		var hsbcDOJ = $('#hsbcDOJ1').val();
		var graduationDate = $('#graduationDate1').val();
		var role = $('#role').val();
		var skill = $('#skill').val();
		var billingCurrency = $('#billingCurrency').val();
		var billRate = $('#billRate').val();
		var resourceStatus = $('#resourceStatus').val();
		var terminatedDate = $('#terminatedDate1').val();
		var terminationReason = $('#terminationReason').val();
		$.ajax({
			url:path+'/service/employee/updateEmployee',
			dataType:"json",
			data:{"employeeId":employeeId,"eHr":eHr,"lob":lob,"hsbcStaffId":hsbcStaffId,"staffName":staffName,"LN":LN,"staffRegion":staffRegion,"staffLocation":staffLocation,"locationType":locationType,"onshoreOrOffshore":onshoreOrOffshore,"csSubDept":csSubDept,"hsbcSubDept":hsbcSubDept,"projectName":projectName,"projectManager":projectManager,"sow":sow,"sowExpiredDate":sowExpiredDate,"staffCategory":staffCategory,"engagementType":engagementType,"hsbcDOJ":hsbcDOJ,"graduationDate":graduationDate,"role":role,"skill":skill,"billingCurrency":billingCurrency,"billRate":billRate,"resourceStatus":resourceStatus,"terminatedDate":terminatedDate,"terminationReason":terminationReason},
			async:true,
			cache:false,
			type:"post",
			success:function(resultFlag){
				if(resultFlag){
					$("html,body").animate({scrollTop:0}, 500);
					$('#successAlert').html('员工'+staffName+'信息修改成功').show();
					setTimeout(function () {
						$('#successAlert').hide();
					}, 2000);
				}
				if(!resultFlag){
					alert('1');
				}
			}
		})
	}else{
		return;
	}
	
	
}



function loadEmployeeInfo(){
	var employeeId = $('#employeeId').val();
	
	$.ajax({
		url:path+'/service/employee/queryEmployeeById',
		dataType:"json",
		data:{"employeeId":employeeId},
		async:true,
		cache:false,
		type:"post",
		success:function(employee){
			
			
			loadStaffCategory(employee);
			loadEngagementType(employee);
			loadRole(employee);
			loadSkill(employee);
			loadBillingCurrency(employee);
			loadResourceStatus(employee);
			loadCSDept(employee);
			loadStaffRegion(employee);
			loadStaffLocation(employee);
			loadLocationType(employee);
			loadOnshoreOrOffshore(employee);
			loadPersonHsbcDept(employee);
			loadTerminationReason(employee);
			
			$('#hsbcStaffId').val(employee.hsbcStaffId);
			$('#lob').val(employee.lob);
			$('#hsbcProjectName').val(employee.projectName);
			$('#hsbcProjectManager').val(employee.projectManager);
			$('#staffName').val(employee.staffName);
			$('#LN').val(employee.ln);
			$('#sow').val(employee.sow);
			$('#sowExpiredDate1').val(employee.sowExpiredDate);
			$('#hsbcDOJ1').val(employee.hsbcDOJ);
			$('#graduationDate1').val(employee.graduationDate);
			$('#billRate').val(employee.billRate);
			$('#terminatedDate1').val(employee.terminatedDate);
			$('#eHr').val(employee.eHr);
			
		}
	})
}



function dateType(){
	$('.form_datetime').datetimepicker({
		weekStart: 1,
		minView:'month',
		todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		forceParse: 0,
		language:'zh-CN',
		format: 'yyyy-mm-dd',
		pickerPosition: 'bottom-left',
		showMeridian: 1
	});
}


function loadOnshoreOrOffshore(employee){
	var url = path+'/json/onshoreOrOffshore.json'
	$.getJSON(url,  function(data) {
	       $.each(data, function(i, item) {
	    	   $("#onshoreOrOffshore").append("<option>"+item.name+"</option>");
	       })
	       $('#onshoreOrOffshore').val(employee.onshoreOrOffshore);
	});
}


function loadLocationType(employee){
	var url = path+'/json/locationType.json'
	$.getJSON(url,  function(data) {
	       $.each(data, function(i, item) {
	    	   $("#locationType").append("<option>"+item.name+"</option>");
	       })
	       $('#locationType').val(employee.locationType);
	});
}


function loadStaffLocation(employee){
	var url = path+'/json/staffLocation.json'
	$.getJSON(url,  function(data) {
	       $.each(data, function(i, item) {
	    	   $("#staffLocation").append("<option>"+item.name+"</option>");
	       })
	       $('#staffLocation').val(employee.staffLocation);
	});
}



function loadStaffRegion(employee){
	var url = path+'/json/staffRegion.json'
	$.getJSON(url,  function(data) {
	       $.each(data, function(i, item) {
	    	   $("#staffRegion").append("<option>"+item.name+"</option>");
	       })
	       $('#staffRegion').val(employee.staffRegion);
	});
}


function loadResourceStatus(employee){
	var url = path+'/json/resourceStatus.json'
	$.getJSON(url,  function(data) {
	       $.each(data, function(i, item) {
	    	   $("#resourceStatus").append("<option>"+item.name+"</option>");
	       })
	       $('#resourceStatus').val(employee.resourceStatus);
	});
}


function loadBillingCurrency(employee){
	var url = path+'/json/billingCurrency.json'
	$.getJSON(url,  function(data) {
	       $.each(data, function(i, item) {
	    	   $("#billingCurrency").append("<option>"+item.name+"</option>");
	       })
	       $('#billingCurrency').val(employee.billingCurrency);
	});
}

function loadBillingEntity(){
	var url = path+'/json/billingEntity.json'
	$.getJSON(url,  function(data) {
	       $.each(data, function(i, item) {
	    	   $("#billingEntity").append("<option>"+item.name+"</option>");
	       })
	});
}

function loadSkill(employee){
	var url = path+'/json/skill.json'
	$.getJSON(url,  function(data) {
	       $.each(data, function(i, item) {
	    	   $("#skill").append("<option>"+item.name+"</option>");
	       })
	       $('#skill').val(employee.skill);
	});
}

function loadSource(){
	var url = path+'/json/source.json'
	$.getJSON(url,  function(data) {
		$.each(data, function(i, item) {
			$("#source").append("<option>"+item.name+"</option>");
		})
	});
}


function loadRole(employee){
	var url = path+'/json/msaRole.json'
	$.getJSON(url,  function(data) {
	       $.each(data, function(i, item) {
	    	   $("#role").append("<option>"+item.name+"</option>");
	       })
	       $('#role').val(employee.role);
	});
}


function loadStaffCategory(employee){
	var url = path+'/json/staffCategory.json'
	$.getJSON(url,  function(data) {
	       $.each(data, function(i, item) {
	    	   $("#staffCategory").append("<option>"+item.name+"</option>");
	       })
	       $('#staffCategory').val(employee.staffCategory);
	});
	}


function loadEngagementType(employee){
	var url = path+'/json/engagementType.json'
	$.getJSON(url,  function(data) {
	       $.each(data, function(i, item) {
	    	   $("#engagementType").append("<option>"+item.name+"</option>");
	       })
	       $('#engagementType').val(employee.engagementType);
	});
}


function loadCSDept(employee){
	$.ajax({
		url:path+'/service/csDept/queryAllCSSubDept',
		dataType:"json",
		async:true,
		cache:false,
		type:"post",
		success:function(list){
			for(var i = 0;i<list.length;i++){
				$("#csSubDept").append("<option value='"+list[i].csSubDeptId+"'>"+list[i].csSubDeptName+"</option>");
			}
			$('#csSubDept').val(employee.csSubDept);
		}
	})
}



function loadPersonHsbcDept(employee){
	var hsbcSubDeptId = employee.hsbcSubDept;
	$.ajax({
		url:path+'/service/hsbcDept/queryDeptById',
		dataType:"json",
		async:true,
		cache:false,
		data:{"hsbcSubDeptId":hsbcSubDeptId},
		type:"post",
		success:function(hsbcDept){
			
			loadDept(employee,hsbcDept);
		} 
	})
}


function loadDept(employee,hsbcDept){
	$.ajax({
		url:path+'/service/hsbcDept/queryDeptName',
		dataType:"json",
		async:true,
		cache:false,
		type:"post",
		success:function(list){
			
			var hsbcDeptName = hsbcDept.hsbcDeptName;
			
			for(var i = 0;i<list.length;i++){
						
				$("#hsbcDept").append("<option value='"+list[i].hsbcSubDeptId+"'>"+list[i].hsbcDeptName+"</option>");
				if(list[i].hsbcDeptName == hsbcDeptName){
					$("#hsbcDept").val(list[i].hsbcSubDeptId);
				}
			}
			
			//$('#hsbcDept').val(employee.hsbcSubDept);
			
			loadHSBCSubDept(employee);
		}
	})
}


function loadHSBCSubDept(employee){
	var hsbcSubDeptId = employee.hsbcSubDept;
	$.ajax({
		url:path+'/service/hsbcDept/querySubDeptName',
		dataType:"json",
		async:true,
		data:{"hsbcSubDeptId":hsbcSubDeptId},
		cache:false,
		type:"post",
		success:function(list){
			if(list.length == 1 && list[0].hsbcSubDeptName == null){
				$("#hsbcSubDept").append("<option value='"+$('#hsbcDept').find("option:selected").val()+"'>"+$('#hsbcDept').find("option:selected").text()+"</option>");
			}else{
				$("#hsbcSubDept").find("option").remove(); 
				$("#hsbcSubDept").append("<option value=''>-- 请选择子交付部 --</option>");
				for(var i = 0;i<list.length;i++){
					$("#hsbcSubDept").append("<option value='"+list[i].hsbcSubDeptId+"'>"+list[i].hsbcSubDeptName+"</option>");
				}
			}
			if(hsbcSubDeptId != null && hsbcSubDeptId != ''){
				$("#hsbcSubDept").val(employee.hsbcSubDept)
			}
		}
	})
}

function loadTerminationReason(employee){
	var url = path+'/json/terminatedReason.json'
	$.getJSON(url,  function(data) {
	       $.each(data, function(i, item) {
	    	   $("#terminationReason").append("<option value='"+item.key+"'>"+item.name+"</option>");
	    	   if(item.key == employee.terminationReason){
	    		   $('#terminationReason').val(item.key);
	    	   }
	       })
	});
}



$("#hsbcDept").change(function(){
	loadHSBCSubDept();
})

