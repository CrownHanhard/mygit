import {playMode} from "../common/js/config";
const  state ={
    singer:{},
    playing:false,//播放器状态
    fullScreen:false,//播放器界面, 是否全屏
    playlist:[],//播放列表
    sequenceList:[],//顺序播放列表
    playMode:playMode.sequence,//播放模式, 我们在common目录下的js目录下新建一个config文件, 存储一些配置信息,
    currentIndex:-1,//当前播放的歌曲, 默认不播放, 咱们就设置为-1
    disc:{},
    topList:{},//存储 排行榜的歌单数据
};
export default state;