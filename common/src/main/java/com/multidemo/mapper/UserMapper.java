package com.multidemo.mapper;



import com.multidemo.entity.User;

import java.util.List;

/**
 * Created by admin on 2016/8/19.
 */
public interface UserMapper {

    List<User> selectUserList();

}
