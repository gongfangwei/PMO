package com.pom.dashboard.service;

import java.util.List;

import com.pmo.dashboard.entity.EmployeeInfo;
import com.pmo.dashboard.entity.EmployeePageCondition;

public interface EmployeeInfoService
{
    List<EmployeeInfo> queryEmployeeList(EmployeePageCondition employeePageCondition);
    int countEmployeeList(EmployeePageCondition employeePageCondition);
}
