import * as React from "react";
import { isString } from "../../helpers/utilities";
import { Section } from "../section";

const linkTarget = (link) => {
  const isExternalLink = isString(link) && link.charAt(0) !== '#'
  return isExternalLink ? '_blank' : ''
}
const css = `
  .marquee {
    animation: animLeft 60s linear infinite;
  }
  @keyframes animLeft {
    0% {
      transform: translate(-75%, -50%)
    } 
    100% {
      transform: translate(-25%, -50%)
    }
  }
`

export const Marquee = ({ data, parentField = "" }) => {
  const tw = data.tailwind || {};
  return (
    <Section className={tw.content} navigationLabel={data.navigationLabel} background={data.background}>
      <style>{css}</style>
      <div className="relative p-0 h-24 overflow-hidden">
        <div className="marquee font-3 uppercase text-5xl text-white block absolute top-1/2 left-1/2 whitespace-nowrap transform -translate-y-1/2 -translate-x-1/2 ">
          <span className="inline-block sm:pr-3 pr-5" data-tinafield={`${parentField}.marqueeText`}>{data.marqueeText}</span>
          <span className="inline-block sm:pr-3 pr-5" data-tinafield={`${parentField}.marqueeText`}>{data.marqueeText}</span>
          <span className="inline-block sm:pr-3 pr-5" data-tinafield={`${parentField}.marqueeText`}>{data.marqueeText}</span>
          <span className="inline-block sm:pr-3 pr-5" data-tinafield={`${parentField}.marqueeText`}>{data.marqueeText}</span>
          <span className="inline-block sm:pr-3 pr-5" data-tinafield={`${parentField}.marqueeText`}>{data.marqueeText}</span>
          <span className="inline-block sm:pr-3 pr-5" data-tinafield={`${parentField}.marqueeText`}>{data.marqueeText}</span>
          <span className="inline-block sm:pr-3 pr-5" data-tinafield={`${parentField}.marqueeText`}>{data.marqueeText}</span>
          <span className="inline-block sm:pr-3 pr-5" data-tinafield={`${parentField}.marqueeText`}>{data.marqueeText}</span>
          <span className="inline-block sm:pr-3 pr-5" data-tinafield={`${parentField}.marqueeText`}>{data.marqueeText}</span>
          <span className="inline-block sm:pr-3 pr-5" data-tinafield={`${parentField}.marqueeText`}>{data.marqueeText}</span>
        </div>
      </div>
    </Section>
  );
};
