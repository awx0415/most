package com.anwx.other.interceptor;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by pc on 2017-11-16.
 */
public class InterceptorChain {

    private List<Interceptor> interceptorList = new ArrayList<Interceptor>();

    public Object registerAll(Object target) {
        for(Interceptor interceptor : interceptorList) {
            target = TargetProxy.bind(target, interceptor);
        }
        return target;
    }

    public void addInterceptor(Interceptor interceptor) {
        this.interceptorList.add(interceptor);
    }

    public List<Interceptor> getInterceptorList() {
        return interceptorList;
    }
}
