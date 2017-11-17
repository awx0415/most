package com.anwx.most.utils.filter;

import java.util.Map;

/**
 * Created by pc on 2017-11-16.
 */
public class EqualsFilter implements IFilter{

    private String key;
    private String value;

    public EqualsFilter(String key, String value) {
        this.key = key;
        this.value = value;
    }

    @Override
    public boolean filter(Map data) {
        boolean result = false;
        if(this.value.equals(data.get(this.key))) {
            result = true;
        }
        return result;
    }
}
