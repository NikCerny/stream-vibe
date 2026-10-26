const rootSelector = "[data-js-video-player]";
const autoplayStorageKey = "stream-vibe:video-autoplay";

class VideoPlayer {
  selectors = {
    root: rootSelector,
    video: "[data-js-video-player-video]",
    playButton: "[data-js-video-player-play-button]",
    autoplayOnNavigate: "[data-js-video-player-autoplay-on-navigate]",
  };

  stateClasses = {
    isActive: "is-active",
  };

  constructor(rootElem, shouldAutoplay = false) {
    this.rootElem = rootElem;
    this.videoElem = this.rootElem.querySelector(this.selectors.video);
    this.playButtonElem = this.rootElem.querySelector(
      this.selectors.playButton,
    );
    this.bindEvents();

    if (
      shouldAutoplay &&
      this.rootElem.matches(this.selectors.autoplayOnNavigate)
    ) {
      this.videoElem.muted = true;
      this.videoElem.play().catch(() => {});
    }
  }

  bindEvents() {
    this.playButtonElem.addEventListener("click", this.onPlayButtonClick);
    this.videoElem.addEventListener("play", this.onVideoPlay);
    this.videoElem.addEventListener("pause", this.onVideoPause);
    this.videoElem.addEventListener(
      "fullscreenchange",
      this.onVideoFullscreenChange,
    );
    this.videoElem.addEventListener("ended", this.onVideoEnded);
  }

  onVideoFullscreenChange = () => {
    if (!this.isFullscreen()) this.videoElem.pause();
  };

  onVideoPlay = () => {
    this.videoElem.controls = true;
    this.playButtonElem.classList.remove(this.stateClasses.isActive);
  };

  onVideoPause = () => {
    if (this.isFullscreen()) return;

    this.videoElem.controls = false;
    this.playButtonElem.classList.add(this.stateClasses.isActive);
  };

  onPlayButtonClick = () => {
    this.videoElem.play();
    if (this.rootElem.hasAttribute("data-js-video-player-fullscreen")) {
      this.videoElem.requestFullscreen();
    }
    this.videoElem.controls = true;
  };

  onVideoEnded = () => {
    this.videoElem.controls = false;
    this.playButtonElem.classList.add(this.stateClasses.isActive);
  };

  isFullscreen = () => {
    return document.fullscreenElement === this.videoElem;
  };
}

class VideoPlayerCollection {
  constructor() {
    this.init();
  }

  init() {
    this.bindNavigationEvents();
    const shouldAutoplay = this.consumeAutoplayIntent();

    document.querySelectorAll(rootSelector).forEach((elem) => {
      new VideoPlayer(elem, shouldAutoplay);
    });
  }

  bindNavigationEvents() {
    document
      .querySelectorAll("[data-js-video-player-navigation]")
      .forEach((linkElem) => {
        linkElem.addEventListener("click", () => {
          const targetPath = new URL(linkElem.href, window.location.href)
            .pathname;
          sessionStorage.setItem(
            autoplayStorageKey,
            JSON.stringify({ targetPath, createdAt: Date.now() }),
          );
        });
      });
  }

  consumeAutoplayIntent() {
    const autoplayIntent = sessionStorage.getItem(autoplayStorageKey);
    sessionStorage.removeItem(autoplayStorageKey);

    if (!autoplayIntent) return false;

    try {
      const { targetPath, createdAt } = JSON.parse(autoplayIntent);
      return (
        targetPath === window.location.pathname && Date.now() - createdAt < 5000
      );
    } catch {
      return false;
    }
  }
}

export default VideoPlayerCollection;
