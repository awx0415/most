package com.anwx.most.dao;

import com.anwx.most.entity.User;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserDao {

    int deleteByPrimaryKey(Long userId);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Long userId);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);
}