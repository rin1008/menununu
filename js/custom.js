'use strict'
{
  // .store 요소 찾기
  const storeElement = document.querySelector('.store');
  const productElement = document.querySelector('.product');
  const accessoryElement = document.querySelector('.accessory');
  const subscribeElement = document.querySelector('.subscribe');
  const supportElement = document.querySelector('.support');
  // .menu__store 요소 찾기
  const menuStoreElement = document.querySelector('.menu__store');
  const menuProductElement = document.querySelector('.menu__product');
  const menuAccessoryElement = document.querySelector('.menu__accessory');
  const menuSubscribeElement = document.querySelector('.menu__subscribe');
  const menuSupportElement = document.querySelector('.menu__support');

  
  // li에 마우스를 올렸을 때
  storeElement.addEventListener('mouseenter', () => {
    menuStoreElement.style.display = 'block';
  });
  productElement.addEventListener('mouseenter', () => {
    menuProductElement.style.display = 'block';
  });
  accessoryElement.addEventListener('mouseenter', () => {
    menuAccessoryElement.style.display = 'block';
  });
  subscribeElement.addEventListener('mouseenter', () => {
    menuSubscribeElement.style.display = 'block';
  });
  supportElement.addEventListener('mouseenter', () => {
    menuSupportElement.style.display = 'block';
  });
  
  // li에 마우스를 뗐을 때
  storeElement.addEventListener('mouseleave', () => {
    menuStoreElement.style.display = 'none';
  });
  productElement.addEventListener('mouseleave', () => {
    menuProductElement.style.display = 'none';
  });
  accessoryElement.addEventListener('mouseleave', () => {
    menuAccessoryElement.style.display = 'none';
  });
  subscribeElement.addEventListener('mouseleave', () => {
    menuSubscribeElement.style.display = 'none';
  });
  supportElement.addEventListener('mouseleave', () => {
    menuSupportElement.style.display = 'none';
  });


  // 안쪽 메뉴에 마우스를 올렸을 때
  menuStoreElement.addEventListener('mouseenter', () => {
    menuStoreElement.style.display = 'block';
  });
  menuProductElement.addEventListener('mouseenter', () => {
    menuProductElement.style.display = 'block';
  });
  menuAccessoryElement.addEventListener('mouseenter', () => {
    menuAccessoryElement.style.display = 'block';
  });
  menuSubscribeElement.addEventListener('mouseenter', () => {
    menuSubscribeElement.style.display = 'block';
  });
  menuSupportElement.addEventListener('mouseenter', () => {
    menuSupportElement.style.display = 'block';
  });
  
  // 안쪽메뉴에서 마우스를 뗐을 때
  menuStoreElement.addEventListener('mouseleave', () => {
    menuStoreElement.style.display = 'none';
  });
  menuProductElement.addEventListener('mouseleave', () => {
    menuProductElement.style.display = 'none';
  });
  menuAccessoryElement.addEventListener('mouseleave', () => {
    menuAccessoryElement.style.display = 'none';
  });
  menuSubscribeElement.addEventListener('mouseleave', () => {
    menuSubscribeElement.style.display = 'none';
  });
  menuSupportElement.addEventListener('mouseleave', () => {
    menuSupportElement.style.display = 'none';
  });

}

{
  // 제품 안쪽 제품 카테고리 찾기
  const macElement = document.querySelector('.mac');
  const ipadElement = document.querySelector('.ipad');
  const iphoneElement = document.querySelector('.iphone');
  const watchElement = document.querySelector('.watch');
  const airpodsElement = document.querySelector('.airpods');
  const tvElement = document.querySelector('.tv');
  


  //보이게하고 안보이게 할 부분 
  const productInnerMacElement = document.querySelector('.product_inner_mac');
  const productInnerIpadElement = document.querySelector('.product_inner_ipad');
  const productInnerIphoneElement = document.querySelector('.product_inner_iphone');
  const productInnerWatchElement = document.querySelector('.product_inner_watch');
  const productInnerAirpodsElement = document.querySelector('.product_inner_airpods');
  const productInnerTvElement = document.querySelector('.product_inner_tv');


  // 보이게
  macElement.addEventListener('mouseenter', () => {
    productInnerMacElement.style.display = 'block';
  });
  ipadElement.addEventListener('mouseenter', () => {
    productInnerIpadElement.style.display = 'block';
  });
  iphoneElement.addEventListener('mouseenter', () => {
    productInnerIphoneElement.style.display = 'block';
  });
  watchElement.addEventListener('mouseenter', () => {
    productInnerWatchElement.style.display = 'block';
  });
  airpodsElement.addEventListener('mouseenter', () => {
    productInnerAirpodsElement.style.display = 'block';
  });
  tvElement.addEventListener('mouseenter', () => {
    productInnerTvElement.style.display = 'block';
  });

  //안보이게 
  macElement.addEventListener('mouseleave', () => {
    productInnerMacElement.style.display = 'none';
  });
  ipadElement.addEventListener('mouseleave', () => {
    productInnerIpadElement.style.display = 'none';
  });
  iphoneElement.addEventListener('mouseleave', () => {
    productInnerIphoneElement.style.display = 'none';
  });
  watchElement.addEventListener('mouseleave', () => {
    productInnerWatchElement.style.display = 'none';
  });
  airpodsElement.addEventListener('mouseleave', () => {
    productInnerAirpodsElement.style.display = 'none';
  });
  tvElement.addEventListener('mouseleave', () => {
    productInnerTvElement.style.display = 'none';
  });


  productInnerMacElement.addEventListener('mouseenter', () => {
    productInnerMacElement.style.display = 'block';
  });
  productInnerIpadElement.addEventListener('mouseenter', () => {
    productInnerIpadElement.style.display = 'block';
  });
  productInnerIphoneElement.addEventListener('mouseenter', () => {
    productInnerIphoneElement.style.display = 'block';
  });
  productInnerWatchElement.addEventListener('mouseenter', () => {
    productInnerWatchElement.style.display = 'block';
  });
  productInnerAirpodsElement.addEventListener('mouseenter', () => {
    productInnerAirpodsElement.style.display = 'block';
  });
  productInnerTvElement.addEventListener('mouseenter', () => {
    productInnerTvElement.style.display = 'block';
  });

  //안보이게 
  productInnerMacElement.addEventListener('mouseleave', () => {
    productInnerMacElement.style.display = 'none';
  });
  productInnerIpadElement.addEventListener('mouseleave', () => {
    productInnerIpadElement.style.display = 'none';
  });
  productInnerIphoneElement.addEventListener('mouseleave', () => {
    productInnerIphoneElement.style.display = 'none';
  });
  productInnerWatchElement.addEventListener('mouseleave', () => {
    productInnerWatchElement.style.display = 'none';
  });
  productInnerAirpodsElement.addEventListener('mouseleave', () => {
    productInnerAirpodsElement.style.display = 'none';
  });
  productInnerTvElement.addEventListener('mouseleave', () => {
    productInnerTvElement.style.display = 'none';
  });


}



{
  // 제품에 마우스 올리면 기본으로 보이게 할 부분 = 맥
  // 디스플레이 블록과 논 설정 그리고 css호버효과를 스크립트로!
  const productElement = document.querySelector('.product');
  const macElement = document.querySelector('.mac');
  const productInnerMacElement = document.querySelector('.product_inner_mac');

  productElement.addEventListener('mouseenter', () => {
    productInnerMacElement.style.display = 'block';
  });
  productElement.addEventListener('mouseleave', () => {
    productInnerMacElement.style.display = 'none';
  });

  productElement.addEventListener('mouseenter', () => {
    // 특정 CSS 스타일을 JavaScript로 설정
    macElement.style.textDecoration = 'underline 3px';
    macElement.style.color = '#000';
  });
  
  productElement.addEventListener('mouseleave', () => {
    // 원래 스타일로 돌아가도록 설정
    macElement.style.textDecoration = 'none';
    macElement.style.color = ''; // 빈 문자열로 설정하면 초기 스타일로 돌아갑니다.
  });

  macElement.addEventListener('mouseenter', () => {
    // 특정 CSS 스타일을 JavaScript로 설정
    macElement.style.textDecoration = 'underline 3px';
    macElement.style.color = '#000';
  });
  macElement.addEventListener('mouseleave', () => {
    // 원래 스타일로 돌아가도록 설정
    macElement.style.textDecoration = 'none';
    macElement.style.color = ''; // 빈 문자열로 설정하면 초기 스타일로 돌아갑니다.
  });

}