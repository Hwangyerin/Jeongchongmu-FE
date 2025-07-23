package com.jungchongmu.demo.service;

import com.jungchongmu.demo.dto.KakaoTokenResponse;
import com.jungchongmu.demo.dto.KakaoUserResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

@Service
public class KakaoAuthService {
        @Value("${kakao.client-id}")
        private String clientId;
        
        @Value("${kakao.redirect-uri}")
        private String redirectUri;
        
        public KakaoUserResponse kakaoLogin(String code) {
        // 1. Access Token 요청
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", "authorization_code");
        params.add("client_id", clientId);
        params.add("redirect_uri", redirectUri);
        params.add("code", code);

        HttpEntity<MultiValueMap<String, String>> tokenRequest =
                new HttpEntity<>(params, headers);

        ResponseEntity<KakaoTokenResponse> tokenResponse = restTemplate.postForEntity(
                "https://kauth.kakao.com/oauth/token",
                tokenRequest,
                KakaoTokenResponse.class
        );

        String accessToken = tokenResponse.getBody().getAccessToken();


        // 2. 사용자 정보 요청
        HttpHeaders profileHeaders = new HttpHeaders();
        profileHeaders.setBearerAuth(accessToken);

        HttpEntity<Void> profileRequest = new HttpEntity<>(profileHeaders);
        ResponseEntity<KakaoUserResponse> profileResponse = restTemplate.exchange(
                "https://kapi.kakao.com/v2/user/me",
                HttpMethod.GET,
                profileRequest,
                KakaoUserResponse.class
        );

        return profileResponse.getBody();
        }
}