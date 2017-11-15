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
public class UserService2 {

    @Autowired
    private IUserDao userDao;

    @Transactional()
    public void createUser(User user) throws Exception{
//        userDao.insert(user);
    }

    @Transactional(readOnly=true)
    public void createUser2(User user) throws Exception{
//        userDao.insert(user);
    }
}
