package com.anwx.other.interceptor;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

/**
 * Created by pc on 2017-11-16.
 */
public class TargetProxy implements InvocationHandler {

    private Object target;
    private Interceptor interceptor;

    private TargetProxy(Object target, Interceptor interceptor) {
        this.target = target;
        this.interceptor = interceptor;
    }

    //将拦截逻辑封装到拦截器中，有客户端生成目标类的代理类的时候一起传入，这样客户端就可以设置不同的拦截逻辑。
    public static Object bind(Object target, Interceptor interceptor) {
        return Proxy.newProxyInstance(target.getClass().getClassLoader(),
                target.getClass().getInterfaces(),
                new TargetProxy(target, interceptor));
    }

    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        Invocation invocation = new Invocation(target, method, args);
        return interceptor.intercept(invocation);
    }
}