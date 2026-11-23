document.querySelectorAll('[data-youtube-embed]').forEach((embed) => {
  const button = embed.querySelector('.youtube-facade');
  const { videoId, videoTitle } = embed.dataset;
  if (!button || !videoId || !videoTitle) return;

  button.addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;
    iframe.title = videoTitle;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    button.replaceWith(iframe);
    iframe.focus();
  }, { once: true });
});
