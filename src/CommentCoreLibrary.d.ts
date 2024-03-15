/*!
 * Comment Core Library CommentManager
 * @license MIT
 * @author Jim Chen
 *
 * Copyright (c) 2014 Jim Chen
 */
export const CommentManager: {
  new (stageObject: any): {
      _listeners: {};
      _lastPosition: number;
      stage: any;
      options: {
          global: {
              opacity: number;
              scale: number;
              className: string;
          };
          scroll: {
              opacity: number;
              scale: number;
          };
          limit: number;
          seekTrigger: number;
      };
      timeline: any[];
      runline: any[];
      position: number;
      factory: any;
      filter: any;
      csa: {
          scroll: any;
          top: any;
          bottom: any;
          reverse: any;
          scrollbtm: any;
      };
      /** Precompute the offset width **/
      width: any;
      height: any;
      _startTimer: () => void;
      _stopTimer: () => void;
      /** Public **/
      stop(): void;
      start(): void;
      seek(time: number): void;
      validate(cmt: any): any;
      load(a: any): void;
      insert(c: any): void;
      clear(): void;
      setBounds(width?: number, height?: number): void;
      init(renderer?: 'legacy' | 'css'): void;
      time(time: number): void;
      rescale(): void;
      _preprocess(data: any): any;
      _allocateSpace(cmt: any): void;
      send(data: any): void;
      finish(cmt: any): void;
      addEventListener(event: any, listener: any): void;
      dispatchEvent(event: any, data: any): void;
      /** Static Functions **/
      onTimerEvent(timePassed: any, { runline }: {
          runline: any;
      }): void;
  };
};
