import React, { useState, useEffect } from "react";
import { View, Image } from "@tarojs/components";
import { AtButton, AtSlider } from "taro-ui";
import Taro from "@tarojs/taro";
import "./index.scss";

const Music = () => {
  const [audioCtx, setAudioCtx] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const musicList = [
    {
      title: "冷战",
      artist: "万妮达Vinida Weng",
      avatar:
        "https://yeluzi08-bucket.oss-cn-nanjing.aliyuncs.com/upload/Snipaste_2025-04-07_20-31-51.png",
      url: "https://yeluzi08-bucket.oss-cn-nanjing.aliyuncs.com/mp3/TizzyT%20_%20%E4%B8%87%E5%A6%AE%E8%BE%BEVinida%20Weng%20-%20%E5%86%B7%E6%88%98%20-%20%E5%89%AF%E6%9C%AC.mp3",
    },
    {
      title: "STAY (PHONK)",
      artist: "XloveSF _ ZsFlovexl",
      avatar:
        "https://yeluzi08-bucket.oss-cn-nanjing.aliyuncs.com/upload/Snipaste_2025-04-07_20-33-24.png",
      url: "https://yeluzi08-bucket.oss-cn-nanjing.aliyuncs.com/mp3/XloveSF%20_%20ZsFlovexl%20-%20STAY%20(PHONK)%20-%20%E5%89%AF%E6%9C%AC.mp3",
    },
    {
      title: "输了全世界",
      artist: "杨友友",
      avatar:
        "https://yeluzi08-bucket.oss-cn-nanjing.aliyuncs.com/upload/Snipaste_2025-04-07_20-34-10.png",
      url: "https://yeluzi08-bucket.oss-cn-nanjing.aliyuncs.com/mp3/%E6%9D%A8%E5%8F%8B%E5%8F%8B%20-%20%E8%BE%93%E4%BA%86%E5%85%A8%E4%B8%96%E7%95%8C%20-%20%E5%89%AF%E6%9C%AC.MP3",
    },
  ];

  useEffect(() => {
    const audio = Taro.createInnerAudioContext();
    audio.src = musicList[currentIndex].url;
    audio.onTimeUpdate(() => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
    });
    setAudioCtx(audio);

    return () => {
      audio.destroy();
    };
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioCtx.pause();
    } else {
      audioCtx.play();
    }
    setIsPlaying(!isPlaying);
  };

  const changeTrack = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex >= musicList.length) newIndex = 0;
    if (newIndex < 0) newIndex = musicList.length - 1;

    setCurrentIndex(newIndex);
    setCurrentTime(0);
    audioCtx.src = musicList[newIndex].url;
    audioCtx.seek(0);
    if (isPlaying) audioCtx.play();
  };

  const handleSliderChange = (value) => {
    audioCtx.seek(value);
    setCurrentTime(value);
  };

  return (
    <View className="music">
      <View className="player-container">
        <View className="song-info">
          <Image src={musicList[currentIndex].avatar} />
          <View>
            {musicList[currentIndex].title} - {musicList[currentIndex].artist}
          </View>
        </View>

        <AtSlider
          max={duration}
          value={currentTime}
          onChange={handleSliderChange}
          activeColor="#6190E8"
        />

        <View className="controls">
          <AtButton
            type="secondary"
            size="small"
            onClick={() => changeTrack(-1)}
          >
            上一曲
          </AtButton>

          <AtButton type="primary" size="small" onClick={handlePlayPause}>
            {isPlaying ? "暂停" : "播放"}
          </AtButton>

          <AtButton
            type="secondary"
            size="small"
            onClick={() => changeTrack(1)}
          >
            下一曲
          </AtButton>
        </View>
      </View>
    </View>
  );
};

export default Music;
