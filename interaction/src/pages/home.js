import React, { useEffect } from 'react';
import { gsap } from "gsap";
import Banner from '../components/banner';
import Cases from '../components/cases';
import Intro from '../components/intro';

function Home() {
    useEffect(() => {
        //On load timeline
        const tl = gsap.timeline();

        tl.from(".line span", 1.8, {
            duration: 0.75,
            autoAlpha: 0,
            y: 100,
            ease: "power4.out",
            delay: 1,
            skewY: 7,
            stagger: {
              amount: 0.3
            },
            lazy: false
        })
          .to(".overlay-top", 1.6, {
            height: 0,
            ease: "expo.inOut",
            stagger: {
              amount: 0.4
            }
          })
          .to(".overlay-bottom", 1.6, {
            width: 0,
            ease: "expo.inOut",
            delay: -0.8,
            stagger: {
              amount: 0.4
            }
          })
          .to(".intro-overlay", 0, { css: { display: "none" } })
          .from(".case-image img", 1.6, {
            scale: 1.4,
            ease: "expo.inOut",
            delay: -2,
            stagger: {
              amount: 0.4
            }
          });
    }, []);


  return (
    <>
        <Intro />
        <Banner />
        <Cases />
    </>
  )
}

export default Home