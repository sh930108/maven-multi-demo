package com.multidemo.userTest;

import com.multidemo.BaseTest;
import com.multidemo.entity.User;
import com.multidemo.mapper.UserMapper;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by admin on 2016/8/19.
 */
public class MybatisTest extends BaseTest {

    @Autowired
    private UserMapper userMapper1;


    @Test
    public void testMybatis(){
        List<User> users = userMapper1.selectUserList();

        System.out.println("成功了：" + users.size());
        System.out.println("hello!");

    }


}
