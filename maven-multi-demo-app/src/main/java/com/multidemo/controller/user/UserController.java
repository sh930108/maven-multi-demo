package com.multidemo.controller.user;

import com.multidemo.entity.User;
import com.multidemo.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author shanghao
 * @date 2017/4/16 17:17
 */
@Controller
public class UserController {

    @Autowired
    private TestService testService;

    @RequestMapping("/login.do")
    public String firstPage(HttpServletRequest request, HttpServletResponse response, User user){

        System.out.println("========================");

        System.out.println("++++++++++++++++++++++++++");


        return "/login";
    }


}
