import * as React from "react";
import { isString } from "../../helpers/utilities";

export const Hero = ({ data, parentField = ""  }) => {
  const css = `
    #space, .stars {
      overflow: hidden;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .stars {
      background-image: 
        radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
        radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
        radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
        radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
        radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
        radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0));
      background-repeat: repeat;
      background-size: 200px 200px;
      animation: zoom 5s infinite;
      opacity: 0;
    }
    .stars:nth-child(1) {
      background-position: 50% 50%;
      animation-delay: 0s;
    }
    .stars:nth-child(2) {
      background-position: 20% 60%;
      animation-delay: -1s;
    }
    .stars:nth-child(3) {
      background-position: -20% -30%;
      animation-delay: -2s;
    }
    .stars:nth-child(4) {
      background-position: 40% -80%;
      animation-delay: -3s;
    }
    .stars:nth-child(5) {
      background-position: -20% 30%;
      animation-delay: -4s;
    }
    @keyframes zoom {
      0% {
        opacity: 0;
        transform: scale(0.5);
        animation-timing-function: ease-in;
      } 
      85% {
        opacity: 1;
        transform: scale(1.55);
        animation-timing-function: linear;
      }
      100% {
        opacity: 0;
        transform: scale(1.9);
      }
    }

    .logo {
      width: 66px;
      height: 77px;
    }
    .logo:before {
      content: '';
      @apply absolute bg-blue-a25 rounded-full;
      left: 0;
      right: 0;
      top: 2px;
      bottom: 10px;
      z-index: -1;
      backdrop-filter: blur(2px);
    }
    @media (min-width: 1024px) {
      .logo {
        width: 166px;
        height: 173px;
      }
      .logo:before {
        top: 5px;
        bottom: 5px;
      }
    }
  `
  const linkTarget = (link) => {
    const isExternalLink = isString(link) && link.charAt(0) !== '#'
    return isExternalLink ? '_blank' : ''
  }

  return (
    <section className="relative p-20">
      <style>{css}</style>
      <div className="mx-auto">
        <div className="absolute inset-0 -z-1">
          <div className="absolute inset-0 bg-accent1">
            <div id="space">
              <div className="stars"></div>
              <div className="stars"></div>
              <div className="stars"></div>
              <div className="stars"></div>
              <div className="stars"></div>
            </div>
          </div>
          <div className="absolute inset-0 bg-blue-a15"></div>
          <div className="bg-top bg-cover absolute inset-0" style={{backgroundImage: "url('./img/grid.svg')"}}></div>
        </div>
        <div className="relative mx-auto mb-10 logo">
          <img className="m-auto mb-16" src="./img/echo-logo.svg" />
        </div>
        <div className="text-center mb-12">
          <img className="inline-block mx-8 my-8 w-14 h-14" src="./img/filecoin-logo.svg" alt="filecoin logo" />
          <img className="inline-block mx-8 my-8 w-14 h-14" src="./img/ipfs-logo.svg" alt="IPFS logo" />
          <img className="inline-block mx-8 my-8 w-14 h-14" src="./img/libp2p-logo.svg" alt="libp2p logo"/>
        </div>
        <h1 className="text-white leading-none uppercase mb-20 text-center">
          <div className="mb-3 mb-5 sm:text-base text-2xl">Welcome to the</div>
          <div className="mb-3 mb-5 sm:text-xl text-4xl">orbit community</div>
          <div className="sm:text-base text-2xl">program</div>
        </h1>
        
        <div className={`flex w-full justify-center gap-16`}>
          {data.buttons &&
            data.buttons.map(function (button, index) {
              const element = (
                  <a
                    className="relative flex text-white font-bold border-4 rounded-full w-24 h-24 bg-accent1 transition-colors hover:bg-accent2"
                    href={button.link}
                    target={linkTarget(button.link)}
                    key={index}
                    data-tinafield={`${parentField}.${index}`}
                  >
                    <span className="block text-center m-auto px-4 uppercase font-display2 leading-normal text-xs">
                      { button.label }
                    </span>
                  </a>
                );
              return element;
            })}
        </div>
      </div>
      
    </section>
  );
};