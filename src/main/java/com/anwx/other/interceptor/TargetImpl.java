package com.anwx.other.interceptor;

/**
 * Created by pc on 2017-11-16.
 */
public class TargetImpl implements Target{
    @Override
    public void execute() {
        System.out.println("执行目标方法");
    }
}
