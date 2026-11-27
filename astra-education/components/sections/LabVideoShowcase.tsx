'use client';

import { useEffect, useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import { home } from '@/content/home';

const CHAPTERS = [
  { label: 'Classroom lab', time: 0 },
  { label: 'Coding logic', time: 3.6 },
  { label: 'Artificial intelligence', time: 7.2 },
  { label: 'Electronics and 3D', time: 10.8 },
];

export default function LabVideoShowcase() {
  const { videoShowcase } = home;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      video.pause();
      setIsPlaying(false);
    }

    const onTimeUpdate = () => {
      const t = video.currentTime;
      if (t >= 10.5) setActiveChapter(3);
      else if (t >= 7.0) setActiveChapter(2);
      else if (t >= 3.5) setActiveChapter(1);
      else setActiveChapter(0);
    };

    video.addEventListener('timeupdate', onTimeUpdate);
    return () => video.removeEventListener('timeupdate', onTimeUpdate);
  }, []);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }

  function jumpToChapter(index: number, time: number) {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = time;
    setActiveChapter(index);
    if (video.paused) {
      void video.play();
      setIsPlaying(true);
    }
  }

  return (
    <section
      className="bg-surface border-y border-elevated py-20 lg:py-24"
      aria-labelledby="video-showcase-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="max-w-[680px] mx-auto text-center mb-12">
            <SectionLabel text={videoShowcase.sectionLabel} />
            <h2 id="video-showcase-heading" className="heading-2 text-navy mb-4">
              {videoShowcase.heading}
            </h2>
            <p className="body-3 text-muted">{videoShowcase.body}</p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="bg-white border border-elevated rounded-2xl p-4 sm:p-8 max-w-5xl mx-auto shadow-sm">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-elevated bg-navy mb-6">
              <video
                ref={videoRef}
                src="/videos/astra-lab-reel.mp4"
                poster="/images/lab-hero-real.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                aria-label="Astra Education school technology lab reel covering coding, robotics, AI vision, and 3D design"
              />

              <button
                type="button"
                onClick={togglePlayback}
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/90 backdrop-blur-md border border-elevated text-navy caption-3 shadow-sm hover:bg-white active:scale-[0.98] transition-[background-color,transform] duration-300 ease-base"
                aria-label={isPlaying ? 'Pause lab reel' : 'Play lab reel'}
              >
                {isPlaying ? (
                  <>
                    <Pause size={14} strokeWidth={2} aria-hidden="true" />
                    <span>Pause reel</span>
                  </>
                ) : (
                  <>
                    <Play size={14} strokeWidth={2} aria-hidden="true" />
                    <span>Play reel</span>
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {CHAPTERS.map((chapter, idx) => {
                const isActive = activeChapter === idx;
                return (
                  <button
                    key={chapter.label}
                    type="button"
                    onClick={() => jumpToChapter(idx, chapter.time)}
                    className={`text-left px-4 py-3 rounded-xl border transition-colors duration-300 ease-base ${
                      isActive
                        ? 'bg-accent border-accent text-white'
                        : 'bg-surface border-elevated text-navy hover:bg-white hover:border-control'
                    }`}
                  >
                    <span
                      className={`caption-5 block mb-1 tabular-nums ${
                        isActive ? 'text-blue-100' : 'text-accent'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span className="caption-3 block">{chapter.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
