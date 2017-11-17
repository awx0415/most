package com.anwx.most.utils;

import com.anwx.most.utils.filter.IFilter;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by pc on 2017-11-16.
 */
public class Collections {

    public static List filter(List<Map> list, List<IFilter> filters) {
        List newList = new ArrayList();
        for(Map data : list) {
            boolean match = true;
            for(IFilter filter : filters) {
                if(!filter.filter(data)) {
                    match = false;
                    break;
                }
            }
            if(!match) {
                continue;
            }

            newList.add(data);
        }

        return newList;
    }
}
