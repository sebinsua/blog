import { css } from "@linaria/core";

import { Header } from "./Header";

import type { ReactNode } from "react";

interface FooterProps {
  slug?: string;
}

function Footer({ slug }: FooterProps) {
  return (
    <footer
      className={css`
        display: flex;
        flex-direction: row-reverse;
        font-family: var(--font-family-text);

        a {
          color: lightgrey;
        }

        @media (max-width: 768px) {
          flex-grow: initial;
          flex-basis: initial;
          padding: 0 1rem;
        }
      `}
    >
      {slug === "/about" ? (
        <a href="mailto:me@sebinsua.com" style={{ color: "lightgrey" }}>
          email
        </a>
      ) : (
        <a href="/feed.xml" style={{ color: "lightgrey" }}>
          rss
        </a>
      )}
    </footer>
  );
}

interface PageProps {
  title?: string;
  description?: string;
  siteUrl?: string;
  author?: string;
  slug?: string;
  children?: ReactNode;
}

export function Page({ slug, title, children }: PageProps) {
  return (
    <div
      className={css`
        display: flex;
        justify-content: space-between;
        width: 800px;

        @media (max-width: 768px) {
          flex-direction: column;
          width: 100%;
        }
      `}
    >
      <Header slug={slug} title={title} />

      <div
        className={css`
          width: 80%;

          @media (max-width: 768px) {
            width: 100%;
          }
        `}
      >
        <main
          className={css`
            @media (max-width: 768px) {
              flex-grow: initial;
              flex-basis: initial;
              padding: 0 1rem;
            }
          `}
        >
          {children}
        </main>
        <Footer slug={slug} />
      </div>
    </div>
  );
}
