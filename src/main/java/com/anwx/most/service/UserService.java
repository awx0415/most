package com.anwx.most.service;

import com.anwx.most.dao.IUserDao;
import com.anwx.most.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;

/**
 * Created by pc on 2017-11-01.
 */
@Service
public class UserService {

    @Autowired
    private IUserDao userDao;

//    @Autowired
//    private UserService2 userService2;

    @Transactional(rollbackFor={Exception.class})
    public void createUser(User user) {
//        userDao.insert(user);
        System.out.println("执行查询-----");
        User result = userDao.selectByPrimaryKey(1L);
//        userService2.createUser(user);
    }

    @Transactional(readOnly=true)
    public void createUser2(User user) throws Exception{
//        userDao.insert(user);
    }
}
