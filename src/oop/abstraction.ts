// // firsrt get idea
// //  and get real implementation in later

// interface MediaPlayer {
//   play(): void;
//   pause(): void;
//   stop(): void;
// }

// // implementation
// class MusicPlayer implements MediaPlayer {
//   play(): void {
//     console.log(`playing music`);
//   }
//   pause(): void {
//     console.log(`paused music`);
//   }
//   stop(): void {
//     console.log(`stop music`);
//   }
// }

// const mPlayer = new MusicPlayer();
// mPlayer.play();

// setTimeout(() => {
//   mPlayer.pause();
// }, 2000);
// setTimeout(() => {
//   mPlayer.stop();
// }, 4000);

abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

class mPlayer extends MediaPlayer {
  play(): void {
    console.log("Playing music.....");
  }
  pause(): void {
    console.log("music paused");
  }
  stop(): void {
    console.log("musinc stop");
  }
}

const mPlayer1 = new mPlayer();
mPlayer1.pause();
