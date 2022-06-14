import React from "react";
import { NavLink } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h2>About</h2>
      <p>
        The Film Experience has been recognized as "a pretty hip blog" (The New
        York Times) and "exuberant, optimistic and quick-witted" (Vanity Fair).
        Come visit us for the passionate daily cinematic observations. "Awards,
        Actresses, Cinematic Musings..." that's what we serve up with a little
        something from all cinematic eras / genres and occasional forays theater
        and television.
      </p>
      <p>
        Like many of you I have deeply embedded childhood memories of watching
        The Wizard of Oz on television as a child. And probably also like many
        of you the film was presented to me as a generational hand-off, a
        passing of the cinematic baton. My mom was a lifelong fan, and now twas
        my turn to become the latest Friend of Dorothy (if she only knew). That
        yellow brick road stretches in one ear and out the other across eighty
        entire years of movie-lovers, mother to son to son to daughter and on to
        every Auntie Em adjacent, with something in there for everybody. I can
        trace my love of Horror Movies right to it – how many nightmares have
        those short-jacketed cater-waiter flying monkeys stormed through?
        Others, probably you, can trace your love of the Movie Musical from
        sepia-toned Kansas where Judy first regaled us of rainbows.
      </p>
      <NavLink to="/blogs" id="read-blogs-button">
        Read Blogs
      </NavLink>
    </div>
  );
};

export default About;
