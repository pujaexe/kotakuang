// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3tzABpV4VA1CYr52QLfLwC
// Component: 4F2hipkNlIzF
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { PlasmicHead } from "@plasmicapp/react-web"; // plasmic-import: xaA4zDSt8T/codeComponent
import { Embed } from "@plasmicpkgs/plasmic-basic-components"; // plasmic-import: PKldDYkH42/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_zeus.module.css"; // plasmic-import: 3tzABpV4VA1CYr52QLfLwC/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: 4F2hipkNlIzF/css

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  head?: p.Flex<typeof PlasmicHead>;
  section?: p.Flex<"section">;
  h1?: p.Flex<"h1">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  h3?: p.Flex<"h3">;
  columns?: p.Flex<"div">;
};

export interface DefaultHomepageProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          <PlasmicHead
            data-plasmic-name={"head"}
            data-plasmic-override={overrides.head}
            className={classNames("__wab_instance", sty.head)}
            description={
              "Selamat datang di Mr88! Silahkan masuk atau daftar jika anda belum memiliki akun. Jadi pemenang berikutnya dan rasakan keseruan bermain di Mr88!" as const
            }
            image={"/plasmic/zeus/images/mr88Png.png"}
            title={"Mr88" as const}
          />

          <Embed
            className={classNames("__wab_instance", sty.embedHtml__iY4LJ)}
            code={
              "<!-- Google tag (gtag.js) --> <script async src=\"https://www.googletagmanager.com/gtag/js?id=AW-11106485876\"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-11106485876'); </script>\n<!-- Event snippet for Sign-up conversion page --> <script> gtag('event', 'conversion', {'send_to': 'AW-11106485876/A-GyCPLn8I4YEPSM_q8p'}); </script>" as const
            }
          />

          <p.Stack
            as={"section"}
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            hasGap={true}
            className={classNames(projectcss.all, sty.section)}
          >
            <Embed
              className={classNames("__wab_instance", sty.embedHtml__xkr54)}
              code={
                "<style>\n\t.blink{\n\t\twidth:100%;\n\t\theight: auto;\n\t\tpadding: 12px;\t\n\t\ttext-align: center;\n\t\tline-height: 50px;\n\t}\n\th1{\n\t\tfont-size: 72px;\n\t\tfont-family: poppins;\n\t\tcolor: white;\n\t\tanimation: blink 1s linear infinite;\n\t}\n@keyframes blink{\n0%{opacity: 0;}\n50%{opacity: .5;}\n100%{opacity: 1;}\n}\n</style>" as const
              }
            />

            <div className={classNames(projectcss.all, sty.freeBox__qz4Mw)}>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__dvnZ8)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"60%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"100%" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/zeus/images/logosvg.svg",
                  fullWidth: 300,
                  fullHeight: 96,
                  aspectRatio: 3.13108
                }}
              />

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__mzLe)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/zeus/images/zeuspng.png",
                  fullWidth: 1024,
                  fullHeight: 1024,
                  aspectRatio: undefined
                }}
              />

              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__tqENt)}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__hBspV
                    )}
                  >
                    {"SLOT BONUS HARIAN"}
                  </h2>

                  <h1
                    data-plasmic-name={"h1"}
                    data-plasmic-override={overrides.h1}
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1,
                      "blink" as const
                    )}
                  >
                    {"TERTINGGI"}
                  </h1>

                  <p.PlasmicLink
                    data-plasmic-name={"link"}
                    data-plasmic-override={overrides.link}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link
                    )}
                    component={Link}
                    href={"https://mr88.asia/?ref=CHVerse" as const}
                    platform={"nextjs"}
                  >
                    <h3
                      data-plasmic-name={"h3"}
                      data-plasmic-override={overrides.h3}
                      className={classNames(
                        projectcss.all,
                        projectcss.h3,
                        projectcss.__wab_text,
                        sty.h3
                      )}
                    >
                      {"Daftar Sekarang"}
                    </h3>
                  </p.PlasmicLink>
                </p.Stack>
              ) : null}

              <div
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column__hcIsk)}>
                  <h4
                    className={classNames(
                      projectcss.all,
                      projectcss.h4,
                      projectcss.__wab_text,
                      sty.h4__mjHde
                    )}
                  >
                    {"Bonus New Member"}
                  </h4>

                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__cwLbU
                    )}
                  >
                    {"50%"}
                  </h2>
                </div>

                <div className={classNames(projectcss.all, sty.column__lYze)}>
                  <h4
                    className={classNames(
                      projectcss.all,
                      projectcss.h4,
                      projectcss.__wab_text,
                      sty.h4__g38BT
                    )}
                  >
                    {"Bonus Hingga"}
                  </h4>

                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__r1Eht
                    )}
                  >
                    {"1 Juta"}
                  </h2>
                </div>
              </div>

              <div className={classNames(projectcss.all, sty.freeBox__nJzi)}>
                <div className={classNames(projectcss.all, sty.freeBox__guMnD)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__efHtY)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"64px" as const}
                    loading={"lazy" as const}
                    src={
                      "https://dmwl0ca1bvnm.cloudfront.net/common/dark/payment/BCA.svg" as const
                    }
                  />
                </div>

                <div className={classNames(projectcss.all, sty.freeBox__fWz9F)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__i1Klh)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"64px" as const}
                    loading={"lazy" as const}
                    src={
                      "https://dmwl0ca1bvnm.cloudfront.net/common/dark/payment/BNI.svg" as const
                    }
                  />
                </div>

                <div className={classNames(projectcss.all, sty.freeBox__cteZ)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__yqsMl)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"64px" as const}
                    loading={"lazy" as const}
                    src={
                      "https://dmwl0ca1bvnm.cloudfront.net/common/dark/payment/BRI.svg" as const
                    }
                  />
                </div>

                <div className={classNames(projectcss.all, sty.freeBox__i6Imk)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__iQ3Y)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"64px" as const}
                    loading={"lazy" as const}
                    src={
                      "https://dmwl0ca1bvnm.cloudfront.net/common/dark/payment/Mandiri.svg" as const
                    }
                  />
                </div>

                <div className={classNames(projectcss.all, sty.freeBox__vwG9)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__zdV1)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"64px" as const}
                    loading={"lazy" as const}
                    src={
                      "https://dmwl0ca1bvnm.cloudfront.net/common/dark/payment/DANA.svg" as const
                    }
                  />
                </div>

                <div className={classNames(projectcss.all, sty.freeBox__pl0AV)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__aGpGq)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"64px" as const}
                    loading={"lazy" as const}
                    src={
                      "https://dmwl0ca1bvnm.cloudfront.net/common/dark/payment/OVO.svg" as const
                    }
                  />
                </div>

                <div className={classNames(projectcss.all, sty.freeBox__y1NX)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___7KORn)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"64px" as const}
                    loading={"lazy" as const}
                    src={
                      "https://dmwl0ca1bvnm.cloudfront.net/common/dark/payment/Gopay.svg" as const
                    }
                  />
                </div>

                <div className={classNames(projectcss.all, sty.freeBox__nrGa3)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__wn9D)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"32px" as const}
                    loading={"lazy" as const}
                    src={
                      "https://dmwl0ca1bvnm.cloudfront.net/common/dark/payment/LINKAJA.svg" as const
                    }
                  />
                </div>
              </div>
            </div>
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "head", "section", "h1", "link", "h3", "columns"],
  head: ["head"],
  section: ["section", "h1", "link", "h3", "columns"],
  h1: ["h1"],
  link: ["link", "h3"],
  h3: ["h3"],
  columns: ["columns"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  head: typeof PlasmicHead;
  section: "section";
  h1: "h1";
  link: "a";
  h3: "h3";
  columns: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    head: makeNodeComponent("head"),
    section: makeNodeComponent("section"),
    h1: makeNodeComponent("h1"),
    link: makeNodeComponent("link"),
    h3: makeNodeComponent("h3"),
    columns: makeNodeComponent("columns"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
