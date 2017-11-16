package com.anwx.other.interceptor;

/**
 * Created by pc on 2017-11-16.
 */
public class InterceptorImpl implements Interceptor{

    private String msg;

    public InterceptorImpl(String msg) {
        this.msg = msg;
    }

    @Override
    public Object intercept(Invocation invocation) throws Exception{
        System.out.println("test1");
        return invocation.proceed();
    }
}
