/* 微信弹窗 */
document.addEventListener("DOMContentLoaded", function() {
    const link = document.querySelector(".wechat-link");
    const modal = document.getElementById("wechatModal");

    if (link && modal) {
        link.addEventListener("click", function() {
            modal.style.display = "flex";
        });

        modal.addEventListener("click", function() {
            modal.style.display = "none";
        });
    }
});



// DarkMode logo switch (stable)
(function () {
  const img = document.querySelector('.brand-logo .logo-img');
  if (!img) return;

  const lightSrc = img.getAttribute('src');        // 现有 logo
  const darkSrc  = '/medias/favicon2.png';         // ✅暗黑 logo（站点路径）

  const apply = () => {
    img.src = document.body.classList.contains('DarkMode') ? darkSrc : lightSrc;
  };

  apply();
  new MutationObserver(apply).observe(document.body, { attributes: true, attributeFilter: ['class'] });
})();
