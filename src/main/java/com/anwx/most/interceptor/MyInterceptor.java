package com.anwx.most.interceptor;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.core.Ordered;

/**
 * 切面
 *
 */
@Aspect
public class MyInterceptor implements Ordered{

    @Pointcut("execution (* com.anwx.most.service..*(..))")// 表示com.anwx.most.service包以及子孙包下面所有类的所有方法
    private void anyMethod() {} // 声明一个切入点，anyMethod为切入点名称

    // 声明该方法是一个前置通知：在目标方法开始之前执行
    @Before("anyMethod()")
    public void doAccessCheck(JoinPoint joinPoint) {
        System.out.println(joinPoint.getArgs()[0]);

        System.out.println(joinPoint.getTarget().getClass());
        System.out.println("前置通知");
    }

    @AfterReturning("anyMethod()")
    public void doAfterReturning() {
        System.out.println("后置通知");
    }

    @Override
    public int getOrder() {
        return 0;
    }
}
