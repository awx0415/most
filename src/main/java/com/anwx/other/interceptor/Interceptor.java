package com.anwx.other.interceptor;

/**
 * Created by pc on 2017-11-16.
 */
public interface Interceptor {

    public Object intercept(Invocation invocation) throws Exception;
}
