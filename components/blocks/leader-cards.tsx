import * as React from "react";
import { isString } from "../../helpers/utilities";
import { Section } from "../section";

const linkTarget = (link) => {
  const isExternalLink = isString(link) && link.charAt(0) !== '#'
  return isExternalLink ? '_blank' : ''
}


const Card = ({ data, index, parentField = ""  }) => {
  return (
    <div className="lc flex bg-accent1 text-white w-full py-4 px-10 sm:px-4">
      <div className="lc-image-wrap w-12 h-12 mr-6 rounded-lg">
        {data.imageSrc && (
          <img
            alt={data.name}
            src={data.imageSrc}
            className=""
            data-tinafield={`${parentField}.${index}.image`}
          />
        )}
      </div>
      <div className="flex w-full">
        <div className="flex-1 w-1/2">
          {data.name && <h2 className="font-bold text-lg" data-tinafield={`${parentField}.${index}.name`}>{data.name}</h2>}
          {data.twitter && (
            <a className="text-md"
              data-tinafield={`${parentField}.${index}.twitter`}
              href={`https://twitter.com/${data.twitter.toLowerCase()}`}
              target="_blank">
              {`@${data.twitter}`}
            </a>
          )}
        </div>
        <div
          className="w-12 h-12 bg-contain bg-no-repeat mr-16 sm:mr-4"
          style={{backgroundImage: `url(./img/flag-${data.country}.png)`}}
        ></div>
        <div className="w-8 h-12 bg-contain bg-no-repeat" style={{backgroundImage: `url(./img/badge-${data.badge}.png)`}}></div>
      </div>
    </div>
  )
}


export const LeaderCards = ({ data, parentField = "" }) => {
  const tw = data.tailwind || {};
  return (
    <Section className="p-20" background={data.background} navigationLabel={data.navigationLabel}>
      <div className="">
        <div className={tw.content}>
          {data.headline && <h2 className="font-bold font-display2 text-xl uppercase text-center text-white mb-8" data-tinafield={`${parentField}.headline`}>{data.headline}</h2>}
        </div>
      </div>
      <div className="leader-cards grid gap-8 grid-cols-2 sm:gap-4 sm:grid-cols-1">
        {data.items && (
          data.items.map(function (block, index) {
            return <Card
              key={index}
              index={index}
              data={block}
              parentField={`${parentField}.items`}
            />
          })
        )}
      </div>
    </Section>
  );
};
