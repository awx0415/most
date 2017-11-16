package com.anwx.other.interceptor;

/**
 * Created by pc on 2017-11-16.
 */
public class Client {

    public static void main(String[] args) throws Exception {
        Target target = new TargetImpl();
        Interceptor interceptor1 = new InterceptorImpl("拦截1");
        Interceptor interceptor2 = new InterceptorImpl2("拦截2");
        InterceptorChain chain = new InterceptorChain();
        chain.addInterceptor(interceptor1);
        chain.addInterceptor(interceptor2);
        target = (Target) chain.registerAll(target);

        target.execute();
    }
}
