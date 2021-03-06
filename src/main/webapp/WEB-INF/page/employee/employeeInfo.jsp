<%@ page language="java" import="java.util.*" pageEncoding="utf-8"
	contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%
	String path = request.getContextPath();
%>
<!DOCTYPE html>
<html lang="en">
<head>

<meta charset="utf-8">
<title>PMO</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description"
	content="Charisma, a fully featured, responsive, HTML5, Bootstrap admin template.">
<meta name="author" content="Muhammad Usman">

<!-- The styles -->
<link href="<%=path %>/css/bootstrap-cerulean.min.css" rel="stylesheet">

<link href="<%=path %>/css/charisma-app.css" rel="stylesheet">
<link
	href='<%=path %>/bower_components/fullcalendar/dist/fullcalendar.css'
	rel='stylesheet'>
<link
	href='<%=path %>/bower_components/fullcalendar/dist/fullcalendar.print.css'
	rel='stylesheet' media='print'>
<link href='<%=path %>/bower_components/chosen/chosen.min.css'
	rel='stylesheet'>
<link href='<%=path %>/bower_components/colorbox/example3/colorbox.css'
	rel='stylesheet'>
<link
	href='<%=path %>/bower_components/responsive-tables/responsive-tables.css'
	rel='stylesheet'>
<link
	href='<%=path %>/bower_components/bootstrap-tour/build/css/bootstrap-tour.min.css'
	rel='stylesheet'>
<link
	href='<%=path %>/bower_components/bootstrap-val/bootstrapValidator.css'
	rel='stylesheet'>
<link href='<%=path %>/css/jquery.noty.css' rel='stylesheet'>
<link href='<%=path %>/css/noty_theme_default.css' rel='stylesheet'>
<link href='<%=path %>/css/elfinder.min.css' rel='stylesheet'>
<link href='<%=path %>/css/elfinder.theme.css' rel='stylesheet'>
<link href='<%=path %>/css/jquery.iphone.toggle.css' rel='stylesheet'>
<link href='<%=path %>/css/uploadify.css' rel='stylesheet'>
<link href='<%=path %>/css/animate.min.css' rel='stylesheet'>
<link href='<%=path%>/css/bootstrap-datetimepicker.css' rel='stylesheet'>
<link href='<%=path%>/css/bootstrap-datetimepicker.min.css' rel='stylesheet'>

<!-- jQuery -->
<script src="<%=path %>/bower_components/jquery/jquery.min.js"></script>

<!-- The HTML5 shim, for IE6-8 support of HTML5 elements -->
<!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

<!-- The fav icon -->
<link rel="shortcut icon" href="<%=path %>/img/favicon.ico">

</head>
<script>
var path='<%=path%>';
</script>
<body>
	<!-- topbar starts -->
	<c:import url="/service/manage/top" />
	<!-- topbar ends -->
	<div class="ch-container">
		<div class="row">
			<!-- left menu starts -->
			<c:import url="/service/manage/left" />
			<!-- left menu ends -->
			<div id="content" class="col-lg-10 col-sm-10">
				<!-- content starts -->
				<div class="row" >					
				<div class="box col-md-12">
						<div class="box-inner">
							<div class="box-header well" data-original-title="">
								<h2>
									<i class="glyphicon glyphicon-user"></i> 员工信息维护
								</h2>
							</div>
							<div id="employeeInfo" class="box-content">
							    
							    <form id="employeeForm" method="post" class="form-horizontal">
									
									
										<div class="group">
										<label class="col-lg-2 control-label">BU</label>
										<div class="col-lg-4">
											<select class="form-control" name="csBu" data-bv-notempty
												data-bv-notempty-message="请选择角色" id="csBu" data-bv-group=".group">
												<option value="">-- Option--</option>
												<!-- <option value="1">第一事业部</option>
												<option value="2">第二事业部</option>
												<option value="3">第三事业部</option>
												<option value="4">第四事业部</option>
												<option value="5">业务部门</option> -->
											</select>
										</div>
										</div>
										<div class="group">
										<label class="col-lg-2 control-label">Dept</label>
										<div class="col-lg-4">
											<select class="form-control" name="csSubDept" data-bv-notempty
												data-bv-notempty-message="请选择角色" id="csSubDept" data-bv-group=".group">
												<option value="">-- Option--</option>
											</select>
										</div>
										</div>
										</br></br></br>
										<div class="group">
											<label class="col-sm-2 control-label">LOB</label>
											<div class="col-sm-4">
												<input type="text" class="form-control" name="lob"
													id="lob" />
											</div>
										</div>
										<div class="group">
											<label class="col-sm-2 control-label">HSBC Staff ID</label>
											<div class="col-sm-4">
												<input type="text" class="form-control" name="hsbcStaffId"
													id="hsbcStaffId" />
											</div>
										</div>
										</br></br></br>
										
								        <div id="successAlert" class="alert alert-success" style="display: none;"></div>
										
										<div class="group">
											<label class="col-sm-2 control-label">E-HR</label>
											<div class="col-sm-4">
												<input type="text" class="form-control" name="eHr"
													id="eHr" />
											</div>
										</div>
										</br></br></br>
										
										
										<div class="form-group">
									    <div style="text-align:center;width:50%;float:left">
									    <input type="button" value="查&nbsp;&nbsp;询"
										name="searchBtn" id="searchBtn" href="#"
										class="button btn btn-primary" data-dismiss="modal"
										style="background-color: #D5D5D5; border: 0 none; border-radius: 4px; color: #FFFFFF; cursor: pointer; display: inline-block; font-size: 15px; font-weight: bold; height: 32px; line-height: 32px; margin: 0 5px 10px 0; padding: 0; text-align: center; text-decoration: none; vertical-align: top; white-space: nowrap; width: 100px; margin:auto ;">
									    </div>
									    <div style="text-align:center;width:50%;float:right">
									    <input type="reset" value="导出Excel" disabled="disabled"
										name="exportExcel" id="exportExcel" href="#"
										class="button btn btn-primary" data-dismiss="modal"
										style="background-color: #D5D5D5; border: 0 none; border-radius: 4px; color: #FFFFFF; cursor: pointer; display: inline-block; font-size: 15px; font-weight: bold; height: 32px; line-height: 32px; margin: 0 5px 10px 0; padding: 0; text-align: center; text-decoration: none; vertical-align: top; white-space: nowrap; width: 100px; margin:auto ;">
									    </div>
								        </div>
								        
								        <div >
									    <a href="" id="exceltHref" style="display:none;">导出</a>
									    </div>
								    
									<div style="overflow: auto;">
									<table id="employeeList"
										class="table table-striped table-bordered">
										<thead>
											<tr>
												<th>StaffId</th>
												<th>ER</th>
												<th>LOB</th>
												<th>姓名</th>
												<th>LN</th>
												<th>交付部</th>
												<th>操作</th>
											</tr>
										</thead>
										
										<tbody>


									    </tbody>
									</table>
									</div>
									<div>
										<ul class="pagination pagination-centered">
											<li><a href="#" id="fristPage" onclick="loadEmployeeList('frist')">首页</a></li>
											<li><a href="#" id="previousPage" onclick="loadEmployeeList('previous')">上一页</a></li>
											<li><a href="#" id="nextPage" onclick="loadEmployeeList('next')">下一页</a></li>
											<li><a href="#" id="lastPage" onclick="loadEmployeeList('last')">末页</a></li>
										</ul>
										<br>
										共<span id="pageCount"></span>页   第<span id="currentPage"></span>页
									</div>
									
								</form>
								<form action="" id="editForm" method="post" target="_blank">
									<input id="employeeId" name="employeeId" type="hidden" />
								</form>

							</div>
						</div>
				</div>
				</div>
				<!--/row-->
				<!-- content ends -->
			</div>
			<!--/#content.col-md-0-->
		</div>

		<hr>

		<div class="modal fade" id="myModal" tabindex="-1" role="dialog"
			aria-labelledby="myModalLabel" aria-hidden="true">


			<div class="modal-dialog">
				<div class="modal-content">
					<div class="box-header well" data-original-title="">
						<h2>
							<i class="glyphicon glyphicon-user"></i> 列表项
						</h2>

						<div class="box-icon">
							<a href="#" class="btn btn-round btn-default  btn-minimize "><i
								class="glyphicon glyphicon-chevron-up"></i></a> <a
								class="btn btn-round btn-default" href="#" data-dismiss="modal">
								<i class="glyphicon glyphicon-remove"></i>
							</a>
						</div>
					</div>
					<div id="excelCheckBox" class="box-content">
						<table id="excelBox"
							class="table table-striped table-bordered">
							<thead>
								<tr>
									<label><input type="checkbox" name="HSBC Staff ID"/>HSBC Staff ID&nbsp;&nbsp;</label>
									<label><input type="checkbox" name="LOB"/>LOB&nbsp;&nbsp;</label>
									<label><input type="checkbox" name="Staff Name"/>Staff Name&nbsp;&nbsp;</label>
									<label><input type="checkbox" name="LN"/>LN&nbsp;&nbsp;</label>
									<label><input type="checkbox" name="Staff Region"/>Staff Region&nbsp;&nbsp;</label>
									<label><input type="checkbox" name="Staff Location (country)"/>Staff Location (country)&nbsp;&nbsp;</label>
									<label><input type="checkbox" name="Location Type (HSBCOffice/ODC)"/>Location Type (HSBCOffice/ODC)&nbsp;&nbsp;</label>
									<label><input type="checkbox" name="Onshore or Offshore"/>Onshore or Offshore&nbsp;&nbsp;</label>
									<label><input type="checkbox" name="HSBC Dept">HSBC Dept&nbsp;&nbsp;</label>
									<label><input type="checkbox" name="HSBC Sub Dept"/>HSBC Sub Dept&nbsp;&nbsp;</label>
									<label><input type="checkbox" name="HSBC Manager"/>HSBC Manager&nbsp;&nbsp;</label>
									<label><input type="checkbox" name="Project Name"/>Project Name&nbsp;&nbsp;</label>
									<label><input type="checkbox" name="SOW#"/>SOW#&nbsp;&nbsp;</label>
									<label><input type="checkbox" name="SOW# Expired Date"/>SOW# Expired Date&nbsp;&nbsp;</label>
									<label><input type="checkbox" name="Staff Category(CATG/CATB)"/>Staff Category(CATG/CATB)&nbsp;&nbsp;</label>
									<label><input type="checkbox" name="Engagement Type (T&M/FixedCost)"/>Engagement Type (T&M/FixedCost)&nbsp;&nbsp;</label>
									<label><input type="checkbox" name="HSBC DOJ"/>HSBC DOJ&nbsp;&nbsp;</label>
									<label><input type="checkbox" name="Experience on HSBC account in Months"/>Experience on HSBC account in Months&nbsp;&nbsp;</label>
									<label><input type="checkbox" name="Graduation Date"/>Graduation Date&nbsp;&nbsp;</label>
									<label><input type="checkbox" name="Total Experience in Months"/>Total Experience in Months&nbsp;&nbsp;</label>
									<label><input type="checkbox" name="MSA Role"/>MSA Role&nbsp;&nbsp;</label>
									<label><input type="checkbox" name="Skills/Technology"/>Skills/Technology&nbsp;&nbsp;</label>
									<label><input type="checkbox" name="Billing Currency"/>Billing Currency&nbsp;&nbsp;</label>
									<c:if test="${!(sessionScope.loginUser.user_type eq '5') || (sessionScope.loginUser.user_type eq '6')}">
									<label><input type="checkbox" name="Bill Rate"/>Bill Rate&nbsp;&nbsp;</label>
									</c:if>
									<label><input type="checkbox" name="Resource Status (Active/Terminated)"/>Resource Status (Active/Terminated)&nbsp;&nbsp;</label>
									<label><input type="checkbox" name="If terminated mention LWD"/>If terminated mention LWD&nbsp;&nbsp;</label>
									<label><input type="checkbox" name="Reason for Termination"/>Reason for Termination&nbsp;&nbsp;</label>
									<label><input type="checkbox" name="E-HR"/>E-HR&nbsp;&nbsp;</label>
									<label><input type="checkbox" name="AM"/>AM&nbsp;&nbsp;</label>
									<label><input type="checkbox" name="CS Dept"/>CS Dept&nbsp;&nbsp;</label>
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>
						<div class="center">
							<a class="btn btn-success" href="#" onClick="exportCondition()"> <i
								class="glyphicon glyphicon-ok icon-white" ></i> 确定
							</a> <a class="btn btn-info" href="#" data-dismiss="modal"> <i
								class="glyphicon glyphicon-remove icon-white"></i> 取消
							</a>
						</div>
					</div>
				</div>
			</div>
			<!--/span-->
		</div>
		 
		

		<c:import url="/service/manage/footer" />

	</div>
	<!--/.fluid-container-->

	<!-- external javascript -->

	<script
		src="<%=path %>/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
	<script
		src="<%=path %>/bower_components/bootstrap-val/bootstrapValidator.min.js"></script>

	<!-- library for cookie management -->
	<script src="<%=path %>/js/jquery.cookie.js"></script>
	<!-- calender plugin -->
	<script src='<%=path %>/bower_components/moment/min/moment.min.js'></script>
	<script
		src='<%=path %>/bower_components/fullcalendar/dist/fullcalendar.min.js'></script>
	<!-- data table plugin -->
	<script src='<%=path %>/js/jquery.dataTables.min.js'></script>

	<!-- select or dropdown enhancer -->
	<script src="<%=path %>/bower_components/chosen/chosen.jquery.min.js"></script>
	<!-- plugin for gallery image view -->
	<script
		src="<%=path %>/bower_components/colorbox/jquery.colorbox-min.js"></script>
	<!-- notification plugin -->
	<script src="<%=path %>/js/jquery.noty.js"></script>
	<!-- library for making tables responsive -->
	<script
		src="<%=path %>/bower_components/responsive-tables/responsive-tables.js"></script>
	<!-- tour plugin -->
	<script
		src="<%=path %>/bower_components/bootstrap-tour/build/js/bootstrap-tour.min.js"></script>
	<!-- star rating plugin -->
	<script src="<%=path %>/js/jquery.raty.min.js"></script>
	<!-- for iOS style toggle switch -->
	<script src="<%=path %>/js/jquery.iphone.toggle.js"></script>
	<!-- autogrowing textarea plugin -->
	<script src="<%=path %>/js/jquery.autogrow-textarea.js"></script>
	<!-- multiple file upload plugin -->
	<script src="<%=path %>/js/jquery.uploadify-3.1.min.js"></script>
	<!-- history.js for cross-browser state change on ajax -->
	<script src="<%=path %>/js/jquery.history.js"></script>
	<!-- application script for Charisma demo -->
	<script src="<%=path %>/js/charisma.js"></script>

	<script type="text/javascript" src="<%=path %>/js/pmo/employeeInfo.js"></script>
	<script type="text/javascript" src="<%=path %>/js/bootstrap-datetimepicker.js"></script>
	<script type="text/javascript" src="<%=path %>/js/bootstrap-datetimepicker.min.js"></script>
	<script type="text/javascript" src="<%=path %>/js/bootstrap-datetimepicker.zh-CN.js"></script>

</body>
</html>


