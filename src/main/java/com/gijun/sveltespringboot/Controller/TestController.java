package com.gijun.sveltespringboot.Controller;

import com.gijun.sveltespringboot.etc.ExampleTest;
import com.google.common.base.Charsets;
import com.google.common.collect.Maps;
import com.google.gson.Gson;
import lombok.SneakyThrows;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

@RestController
public class TestController {

    @PostMapping("/test/getSign")
    public String getSign(){
        System.out.println("접근");
        Map<String, String> map = generateHeader("https://rest-wyw11bwts5.kylin.shuyun.com/customized-service/v1/offer/instance/list", "wyw11bwts5-rest", "fxlF7yE2wvuy");
        Gson gson = new Gson();
        String json = gson.toJson(map);
        System.out.println(json);
        return json;
    }


    public  DateTimeFormatter DTF = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

    public  Map<String, String> generateHeader(String url, String callerService, String secret) {
        int index = url.indexOf("//");
        String uriPath = url;
        StringBuffer requestPath = new StringBuffer();
        if (index > 0) { // if it contains http or https, then exclude http:// or https://
            uriPath = url.substring(index + 2);
        }
        // remove th parameters after the URL
        index = uriPath.indexOf("?");
        if (index > 0) {
            uriPath = uriPath.substring(0, index);
        }
        String[] paths = uriPath.split("/");
        String serviceName = paths[1];
        String version = paths[2];
        for (int i = 3; i < paths.length; i++) {
            requestPath.append("/").append(paths[i]);
        }
        String timestamp = "2024-04-18 00:00:00";
        Map<String, String> headerMap = Maps.newHashMap();
        headerMap.put("X-Caller-Service", callerService);
        headerMap.put("X-Caller-Timestamp", timestamp);
        headerMap.put("X-Caller-Sign", generateSign(callerService, serviceName, version, timestamp, secret, requestPath.toString()));
        return headerMap;
    }

    @SneakyThrows
    public  String generateSign(String callerService, String contextPath, String version, String timestamp, String serviceSecret, String requestPath) {
        Map<String, String> map = new LinkedHashMap<>();
        map.put("callerService", callerService);
        map.put("contextPath", contextPath);
        if(requestPath != null){
            StringBuilder sb = new StringBuilder();
            Arrays.stream(requestPath.split("/")).forEach(it -> sb.append("/").append(it));
            map.put("requestPath", sb.substring(1));
            map.put("timestamp", timestamp);
            map.put("v", version);
        }
        return generateMD5Sign(serviceSecret, map);
    }

    private  String generateMD5Sign(String secret, Map<String,String> parameters){
        return DigestUtils.md5DigestAsHex(generateConcatSign(secret, parameters).getBytes(Charsets.UTF_8)).toUpperCase();
    }

    private  String generateConcatSign(String secret, Map<String, String> parameters){
        StringBuilder sb = new StringBuilder().append(secret);
        Set<String> keys = parameters.keySet();
        keys.forEach(it -> sb.append(it).append(parameters.get(it)));
        sb.append(secret).toString();
        System.out.println(sb);
        System.out.println(sb.toString().getBytes(Charsets.UTF_8));
        return sb.toString();
    }

}
