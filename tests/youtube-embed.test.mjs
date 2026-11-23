import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { runInNewContext } from 'node:vm';

test('built blog uses a local facade only on the configured post', () => {
  const page = readFileSync('dist/blog/how-to-blur-whatsapp-messages-during-screen-share/index.html', 'utf8');
  const otherPage = readFileSync('dist/blog/hide-slack-messages-screen-sharing/index.html', 'utf8');
  assert.match(page, /data-video-id="jSbM7q5BBQE"/);
  assert.match(page, /src="\/assets\/youtube\/jSbM7q5BBQE\.jpg"/);
  assert.match(page, /src="\/assets\/youtube\/jSbM7q5BBQE\.jpg"[^>]*width="1280" height="720"/);
  assert.match(page, /src="\/scripts\/youtube-embed\.js"/);
  assert.doesNotMatch(page, /<iframe\b/i);
  assert.doesNotMatch(otherPage, /data-youtube-embed|youtube-embed\.js/);
});

test('click creates only the selected privacy-enhanced iframe', () => {
  const script = readFileSync('public/scripts/youtube-embed.js', 'utf8');
  const frames = [];
  const embeds = ['jSbM7q5BBQE', 'abcdefghijk'].map((videoId) => {
    const button = {
      addEventListener(event, callback, options) {
        assert.equal(event, 'click');
        assert.equal(options.once, true);
        this.click = callback;
      },
      replaceWith(frame) { this.frame = frame; },
    };
    return {
      dataset: { videoId, videoTitle: `Video ${videoId}` },
      button,
      querySelector() { return button; },
    };
  });
  const document = {
    querySelectorAll() { return embeds; },
    createElement(tag) {
      assert.equal(tag, 'iframe');
      const frame = { focus() { this.focused = true; } };
      frames.push(frame);
      return frame;
    },
  };
  runInNewContext(script, { document });
  assert.equal(frames.length, 0);
  embeds[0].button.click();
  assert.equal(frames.length, 1);
  assert.equal(frames[0].src, 'https://www.youtube-nocookie.com/embed/jSbM7q5BBQE?autoplay=1');
  assert.equal(frames[0].title, 'Video jSbM7q5BBQE');
  assert.equal(frames[0].focused, true);
  assert.equal(embeds[1].button.frame, undefined);
});
