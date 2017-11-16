package com.anwx.other.interceptor;

/**
 * Created by pc on 2017-11-16.
 */
public class InterceptorImpl2 implements Interceptor{

    private String msg;

    public InterceptorImpl2(String msg) {
        this.msg = msg;
    }

    @Override
    public Object intercept(Invocation invocation) throws Exception{
        System.out.println("test2");
        return invocation.proceed();
    }
}
