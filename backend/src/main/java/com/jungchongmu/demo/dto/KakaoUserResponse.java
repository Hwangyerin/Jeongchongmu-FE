package com.jungchongmu.demo.dto;

import lombok.Data;
import java.util.Map;

@Data
public class KakaoUserResponse {
    private Long id;
    private Map<String, Object> kakao_account;
    private Map<String, Object> properties;
}
