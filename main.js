document.querySelectorAll('.tech-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    // 모든 버튼 비활성화
    document.querySelectorAll('.tech-btn').forEach(b => b.classList.remove('active'));
    // 모든 콘텐츠 숨김
    document.querySelectorAll('.tech-content').forEach(c => c.style.display = 'none');
    // 현재 버튼 활성화
    btn.classList.add('active');
    // 해당 콘텐츠만 표시
    const tech = btn.getAttribute('data-tech');
    document.getElementById(tech + '-content').style.display = 'block';
  });
});