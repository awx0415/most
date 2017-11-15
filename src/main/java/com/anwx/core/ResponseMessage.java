package com.anwx.core;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * 系统标准的响应输出类
 */
@XmlRootElement(name = "ResponseMessage")
public class ResponseMessage<T> {
    private boolean success;
    private String message;
    private Integer code;
    private long timeSpan;
    private T result;

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public long getTimeSpan() {
        return timeSpan;
    }

    public void setTimeSpan(long timeSpan) {
        this.timeSpan = timeSpan;
    }

    public T getResult() {
        return result;
    }

    public void setResult(T result) {
        this.result = result;
    }

    @Override
    public String toString() {
        return "awx";
    }
}
