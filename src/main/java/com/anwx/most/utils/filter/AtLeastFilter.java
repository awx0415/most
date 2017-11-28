package com.anwx.most.utils.filter;

import com.google.common.collect.Range;

import java.util.Map;

/**
 * "大于" 过滤
 * Created by pc on 2017-11-16.
 */
public class AtLeastFilter implements IFilter{

    protected String key;
    protected int value;

    public AtLeastFilter(String key, int value) {
        this.key = key;
        this.value = value;
    }

    @Override
    public boolean filter(Map data) {
        return Range.atLeast(this.value).contains((Integer) data.get(this.key));
    }
}
