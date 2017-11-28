package com.anwx.most.utils.filter;

import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;

import java.util.Map;

/**
 * Created by pc on 2017-11-16.
 */
public class GreaterThanDateFilter implements IFilter{

    private String key;
    private String value;
    private DateTimeFormatter format = DateTimeFormat.forPattern("yyyy-MM-dd HH:mm:ss");

    public GreaterThanDateFilter(String key, String value) {
        this.key = key;
        this.value = value;
    }

    @Override
    public boolean filter(Map map) {
        DateTime originDate = DateTime.parse((String)map.get(key), this.format);
        DateTime valueDate = DateTime.parse(this.value, this.format);
        return originDate.isAfter(valueDate);
    }
}
