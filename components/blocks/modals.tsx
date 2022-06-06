import React, { useState } from 'react';
import { Section } from "../section";
import { Content } from "../content";

const Modal = ({ data, parentField = "", className }) => {
  const twModal = "w-1/2 bg-accent1 text-white p-16 rounded-3xl border-4 border-primary  sm:px-4"
  const twCloseButton = "absolute top-8 right-8 height-6 width-6"

  return (
    <div className={`${twModal} ${className}`}>
      <button className={twCloseButton}>
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.67172 0.67172C1.08194 0.261627 1.63824 0.03125 2.21828 0.03125C2.79833 0.03125 3.35463 0.261627 3.76485 0.67172L11.4998 8.40672L19.2348 0.67172C19.6474 0.273249 20.2 0.0527618 20.7735 0.0577458C21.3471 0.0627299 21.8957 0.292787 22.3013 0.698367C22.7069 1.10395 22.937 1.6526 22.9419 2.22616C22.9469 2.79971 22.7264 3.35228 22.328 3.76485L14.593 11.4998L22.328 19.2348C22.7264 19.6474 22.9469 20.2 22.9419 20.7735C22.937 21.3471 22.7069 21.8957 22.3013 22.3013C21.8957 22.7069 21.3471 22.937 20.7735 22.9419C20.2 22.9469 19.6474 22.7264 19.2348 22.328L11.4998 14.593L3.76485 22.328C3.35228 22.7264 2.79971 22.9469 2.22616 22.9419C1.6526 22.937 1.10395 22.7069 0.698367 22.3013C0.292787 21.8957 0.0627299 21.3471 0.0577458 20.7735C0.0527618 20.2 0.273249 19.6474 0.67172 19.2348L8.40672 11.4998L0.67172 3.76485C0.261627 3.35463 0.03125 2.79833 0.03125 2.21828C0.03125 1.63824 0.261627 1.08194 0.67172 0.67172Z" fill="#FF7E7E"/>
        </svg>
      </button>
      <div className={`flex flex-col ${data.width}`}>
        <div className={`markdown items-center`} data-tinafield={`${parentField}.body`}>
          <p className="font-3 text-white text-xl">
            <span className="text-accent2 text-xl font-2 mr-2 font-bold uppercase">{data.headline} </span>
            {data.body}
          </p>
        </div>
      </div>
    </div>
  )
}

export const Modals = ({ data, parentField = "" }) => {
  const [activeModal, setActiveModal] = useState(null)
  const twButtons = "flex flex-wrap gap-12 w-full justify-center"
  const twButton = "relative flex text-white uppercase border-4 border-primary font-1 font-bold rounded-full w-28 h-28 bg-accent1 transition-colors hover:border-accent2"
  const twButtonSpan = "block text-center m-auto font-1 leading-normal text-xs"

  return (
    <Section className="p-20" background={data.background} navigationLabel={data.navigationLabel}>
      <div className="border-4 border-primary bg-accent1 text-sm leading-normal lg:text-lg rounded-3xl p-16 lg:p-16 shadow-xl">
        <Content
          label={data.label}
          headline={data.headline}
          subhead={data.subhead}
          body={data.body}
          buttons={data.buttons}
          labelStyles=""
          headlineStyles="text-white text-2xl font-1 font-bold uppercase text-center mb-8"
          subheadStyles=""
          textStyles="text-white text-xl font-3 font-bold mb-8"
          width="w-full"
          parentField={parentField} alignment={undefined} order={undefined}        />
        <div className={twButtons}>
          {data.items && (
            data.items.map(function (item, index) {
              return <button className={twButton} onClick={() => setActiveModal(index)} key={index}>
                <span className={twButtonSpan}>{item.buttonLabel}<br/>{item.buttonLabelSub}</span>
              </button>
            })
          )}
        </div>
      </div>
      {activeModal !== null && (
        <div className="fixed inset-0 z-10 border-8" onClick={() => setActiveModal(null)}>
          <div className="absolute inset-0 bg-accent1 opacity-80"></div>
          <Modal
            data={data.items[activeModal]}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
            parentField={`${parentField}.items`}
          />
        </div>
      )}
    </Section>
  );
};
