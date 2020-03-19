export const singer = state => state.singer;
export const playing = state => state.playing;
export const playlist = state => state.playlist;
export const sequenceList = state => state.sequenceList;
export const fullScreen = state => state.fullScreen;
export const playMode = state => state.playMode;
export const currentIndex = state => state.currentIndex;
export const currentSong = (state) => {
    //类似于一个计算属性, 做一个防错处理,
    return state.playlist[state.currentIndex]||{};
};
export const disc = state => state.disc;
export const topList = state => state.topList;