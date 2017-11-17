package com.anwx.most.utils.filter;

import java.util.Map;

/**
 * Created by pc on 2017-11-16.
 */
public class IsNotNullFilter implements IFilter{

    private String key;

    public IsNotNullFilter(String key) {
        this.key = key;
    }

    @Override
    public boolean filter(Map data) {
        return data.get(key) != null ? true : false;
    }
}
