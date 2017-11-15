package com.anwx.most.controller;

import com.alibaba.fastjson.JSONObject;
import com.anwx.core.ResponseMessage;
import com.anwx.core.utils.ResponseUtils;
import com.anwx.core.web.BaseController;
import com.anwx.most.entity.User;
import com.anwx.most.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by pc on 2017-11-01.
 */
@RestController
@RequestMapping(value = "/api/v1/login")
public class LoginController extends BaseController{

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/register")
    @ResponseBody
    public ResponseMessage<?> register(User user) {
        try {
            logger.debug("新建用户[{}]", user.getUserName());
            userService.createUser(user);
            return ResponseUtils.jsonSuccess(null, "注册成功");
        } catch (Exception e) {
            logger.error("注册失败");
            e.printStackTrace();
            return ResponseUtils.jsonFail(null, "注册失败");
        }
    }
}
