import React from "react";
import { TextReveal } from "./text-reveal";


export const timelineData = [
  {
    title: "Первый шаг ",
    content: <TextReveal>
        Это пример текста, который будет постепенно появляться по мере прокрутки.
      </TextReveal>,
  },
  {
    title: "Второй шаг",
    content: (
     <TextReveal>
        Это пример текста, который будет постепенно появляться по мере прокрутки.
      </TextReveal>
    ),
  },
  {
    title: "Третий шаг ",
    content: <TextReveal>
        Это пример текста, который будет постепенно появляться по мере прокрутки.
      </TextReveal>
  },
];
