package com.anwx.core.utils;

import com.anwx.core.ResponseMessage;

/**
 * response工具类.
 * User: zhushaoping
 * Date: 12-6-27
 * Time: AM9:23
 */
public class ResponseUtils {

    /**
     * 返回success为true的json对象
     *
     * @param response 响应json对象
     * @return 返回success为true的json对象
     */
    public static <T> ResponseMessage<T> jsonSuccess(T response) {
        return jsonResult(response, true);
    }

    /**
     * 返回success为true的json对象
     *
     * @param response, 结果
     * @param msg，      消息
     * @return 返回success为true的json对象
     */
    public static <T> ResponseMessage<T> jsonSuccess(T response, String msg) {
        return jsonResult(response, true, 200, msg);
    }

    /**
     * 返回success为false的json对象
     *
     * @param response 响应json对象
     * @return 返回success为false的json对象
     */
    public static <T> ResponseMessage<T> jsonFail(T response) {
        return jsonFail(response, "");
    }

    /**
     * 显示错误信息
     *
     * @param response
     * @param msg
     * @return 返回失败的JSONObject结果
     */
    public static <T> ResponseMessage<T> jsonFail(T response, String msg) {
        return jsonResult(response, false, 400, msg);
    }

    /**
     * 显示未授权错误信息
     *
     * @param msg
     * @return 返回失败的JSONObject结果
     */
    public static <T> ResponseMessage<T> jsonUnauthorized(String msg) {
        return jsonResult(null, false, 401, msg);
    }

    /**
     * 返回标准格式的json对象
     *
     * @param result  结果数据
     * @param success 是否成功
     * @return 返回响应的JSONObject结果
     */
    public static <T> ResponseMessage<T> jsonResult(T result, boolean success) {
        return jsonResult(result, success, "");
    }

    public static <T> ResponseMessage<T> jsonResult(T result, boolean success, String message) {
        int code = success ? 200 : 500;
        return jsonResult(result, success, code, message);
    }

    /**
     * 返回标准格式的json对象
     *
     * @param result  结果数据
     * @param success 是否成功
     * @param code    代码
     * @param message 消息
     * @return 返回响应的JSONObject结果
     */
    public static <T> ResponseMessage<T> jsonResult(T result, boolean success, Integer code, String message) {
        ResponseMessage<T> responseMessage = new ResponseMessage<T>();
        responseMessage.setCode(code);
        responseMessage.setSuccess(success);
        responseMessage.setMessage(message);
        responseMessage.setResult(result);
        responseMessage.setTimeSpan(System.currentTimeMillis());

        return responseMessage;
    }
}
