package com.anwx.most.utils.filter;

import java.util.Map;

/**
 * Created by pc on 2017-11-16.
 */
public class InFilter implements IFilter{

    private String key;
    private String[] values;

    public InFilter(String key, String[] values) {
        this.key = key;
        this.values = values;
    }

    @Override
    public boolean filter(Map data) {
        boolean result = false;
        for(String value : this.values) {
            if(value.equals(data.get(this.key))) {
                result = true;
                break;
            }
        }

        return result;
    }
}
