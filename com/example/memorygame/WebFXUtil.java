package com.example.memorygame;

import dev.webfx.platform.resource.Resource;

/**
 * @author Bruno Salmon
 */
public class WebFXUtil {

    public static String toUrl(String path) {
        return Resource.toUrl(path, WebFXUtil.class);
    }


}
