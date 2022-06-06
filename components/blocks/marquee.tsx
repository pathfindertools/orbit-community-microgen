import * as React from "react";
import { isString } from "../../helpers/utilities";
import { Section } from "../section";

const linkTarget = (link) => {
  const isExternalLink = isString(link) && link.charAt(0) !== '#'
  return isExternalLink ? '_blank' : ''
}


export const Marquee = ({ data, parentField = "" }) => {
  const tw = data.tailwind || {};
  return (
    <Section className={tw.content} navigationLabel={data.navigationLabel} background={data.background}>
      <div className="relative p-0 h-24 overflow-hidden">
        <div className="marquee font-4 uppercase font-display text-7xl md:text-5xl text-white block absolute top-1/2 left-1/2 z-20 whitespace-nowrap transform -translate-y-1/2 -translate-x-1/2 ">
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
