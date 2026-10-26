const rootSelector = "[data-js-video-player]";

class VideoPlayer {
  selectors = {
    root: rootSelector,
    video: "[data-js-video-player-video]",
    playButton: "[data-js-video-player-play-button]",
  };

  stateClasses = {
    isActive: "is-active",
  };

  constructor(rootElem) {
    this.rootElem = rootElem;
    this.videoElem = this.rootElem.querySelector(this.selectors.video);
    this.playButtonElem = this.rootElem.querySelector(
      this.selectors.playButton,
    );
    this.bindEvents();
  }

  bindEvents() {
    this.playButtonElem.addEventListener("click", this.onPlayButtonClick);
    // this.videoElem.addEventListener("pause", this.onVideoPause);
    this.videoElem.addEventListener(
      "fullscreenchange",
      this.onVideoFullscreenChange,
    );
    this.videoElem.addEventListener("ended", this.onVideoEnded);
  }

  onVideoFullscreenChange = () => {
    if (!this.isFullscreen()) this.videoElem.pause();
  };

  onPlayButtonClick = () => {
    this.videoElem.play();
    this.videoElem.requestFullscreen();
    this.videoElem.controls = true;
    this.playButtonElem.classList.remove(this.stateClasses.isActive);
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
    document.querySelectorAll(rootSelector).forEach((elem) => {
      new VideoPlayer(elem);
    });
  }
}

export default VideoPlayerCollection;
