"use client";
import { useEffect, useRef, useState } from "react";
import { useDetections } from "../context/DetectionsContext";

const Speak = () => {
  const { detections } = useDetections();
  const announcedObjects = useRef(new Set());
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!detections || detections.length === 0) {
      stopWarningSound();
      return;
    }

    const highThreatObjects = detections.filter((obj) => obj.threat_level === "High");

    if (highThreatObjects.length > 0) {
      highThreatObjects.forEach((obj) => {
        if (!announcedObjects.current.has(obj.id)) {
          announcedObjects.current.add(obj.id);
          speakWarning(obj.class);
        }
      });

      if (!audioPlaying) {
        playWarningSound();
      }
    } else {
      stopWarningSound();
    }
  }, [detections]);

  useEffect(() => {
    const enableAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error("Audio play failed. User interaction required:", error);
        });
      }
      document.removeEventListener("click", enableAudio);
    };

    document.addEventListener("click", enableAudio);
    return () => document.removeEventListener("click", enableAudio);
  }, []);

  const playWarningSound = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/alert.mp3");
      audioRef.current.loop = true;
    }

    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.error("Audio play failed due to autoplay restrictions:", error);
      });
    }

    setAudioPlaying(true);
  };

  const stopWarningSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setAudioPlaying(false);
    }
  };

  const speakWarning = (objectName) => {
    if (!window.speechSynthesis) {
      console.error(" Speech synthesis not supported");
      return;
    }

    const speech = new SpeechSynthesisUtterance(`Warning! A ${objectName} has been detected.`);
    speech.lang = "en-US";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
  };

  return null;
};

export default Speak;
