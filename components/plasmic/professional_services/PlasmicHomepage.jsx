// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tTqxxSNNPLamhhbvK9V5UT
// Component: PalHc3wV2s29
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: 8XH6WBEcDkWr/component
import Button from "../../Button"; // plasmic-import: eaK0I-WEquua/component
import Testimonial from "../../Testimonial"; // plasmic-import: aFdpj-meEvBJ/component
import CtaBottom from "../../CtaBottom"; // plasmic-import: Aj33d4hO6_qo/component
import Footer from "../../Footer"; // plasmic-import: c7_nsHlFJRh2/component
import { useScreenVariants as useScreenVariantshXfVib0KeY9U } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: hXFVib0keY9u/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_professional_services.module.css"; // plasmic-import: tTqxxSNNPLamhhbvK9V5UT/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: PalHc3wV2s29/css
import Icon8Icon from "./icons/PlasmicIcon__Icon8"; // plasmic-import: qOXpUFNAULBU/icon
import Icon13Icon from "./icons/PlasmicIcon__Icon13"; // plasmic-import: BrWW4NsZns9k/icon
import Icon10Icon from "./icons/PlasmicIcon__Icon10"; // plasmic-import: V-JiRU5uXDCg/icon
import Icon11Icon from "./icons/PlasmicIcon__Icon11"; // plasmic-import: q6Gwo3C3kEsI/icon

createPlasmicElementProxy;

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantshXfVib0KeY9U()
  });
  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <div
            data-plasmic-name={"hero"}
            data-plasmic-override={overrides.hero}
            className={classNames(projectcss.all, sty.hero)}
          >
            <div
              data-plasmic-name={"container7"}
              data-plasmic-override={overrides.container7}
              className={classNames(projectcss.all, sty.container7)}
            >
              <div
                data-plasmic-name={"row3"}
                data-plasmic-override={overrides.row3}
                className={classNames(projectcss.all, sty.row3)}
              >
                <div
                  data-plasmic-name={"info"}
                  data-plasmic-override={overrides.info}
                  className={classNames(projectcss.all, sty.info)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__nmjUc)}
                  >
                    <h1
                      data-plasmic-name={"h1"}
                      data-plasmic-override={overrides.h1}
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1
                      )}
                    >
                      {"Choose us for marketing photography"}
                    </h1>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__gq8A
                      )}
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                      }
                    </div>
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__cgl4R
                      )}
                      color={"blackCoffee"}
                      submitsForm={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___3RXvv
                        )}
                      >
                        {hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "Get In touch"
                          : "Get In touch"}
                      </div>
                    </Button>
                  </p.Stack>
                </div>
                <div
                  data-plasmic-name={"fig"}
                  data-plasmic-override={overrides.fig}
                  className={classNames(projectcss.all, sty.fig)}
                />
              </div>
            </div>
          </div>
          <section className={classNames(projectcss.all, sty.section___3CueM)}>
            <div className={classNames(projectcss.all, sty.freeBox__mJDwK)}>
              <div className={classNames(projectcss.all, sty.freeBox___9Wix2)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__zkLu)}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__oyZ7S
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "Why Choose Us"
                      : "Why choose us"}
                  </h2>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.columns__qVmRi)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__zLcwh)}
                    >
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__nq2N
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__nmttq
                          )}
                        >
                          <Icon8Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__qbMgL
                            )}
                            role={"img"}
                          />
                        </div>
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__tYzz5
                          )}
                        >
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__aLDn
                            )}
                          >
                            {"Welcoming  trusted"}
                          </h3>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__hcgWh
                            )}
                          >
                            {
                              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ."
                            }
                          </div>
                        </p.Stack>
                      </p.Stack>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__lKh5E)}
                    >
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__sEkX
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__ocYjV
                          )}
                        >
                          <Icon13Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg___8DMf8
                            )}
                            role={"img"}
                          />
                        </div>
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__vV15K
                          )}
                        >
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__jQmEu
                            )}
                          >
                            {"Tested and secure"}
                          </h3>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___9YzL5
                            )}
                          >
                            {
                              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ."
                            }
                          </div>
                        </p.Stack>
                      </p.Stack>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__e0Tzt)}
                    >
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__mWx8D
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__cVjn3
                          )}
                        >
                          <Icon10Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__qy5FI
                            )}
                            role={"img"}
                          />
                        </div>
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__knBb8
                          )}
                        >
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__lnGf5
                            )}
                          >
                            {"Mindful notifications"}
                          </h3>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__urqPg
                            )}
                          >
                            {
                              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ."
                            }
                          </div>
                        </p.Stack>
                      </p.Stack>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__hljwU)}
                    >
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__us4T8
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__p3SN
                          )}
                        >
                          <Icon11Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__x1A7I
                            )}
                            role={"img"}
                          />
                        </div>
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__wTzu
                          )}
                        >
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__e1VL6
                            )}
                          >
                            {"Real-time results"}
                          </h3>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__nqpYt
                            )}
                          >
                            {
                              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ."
                            }
                          </div>
                        </p.Stack>
                      </p.Stack>
                    </div>
                  </p.Stack>
                </p.Stack>
              </div>
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section__mPm)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns___4Rn1G)}
            >
              <div className={classNames(projectcss.all, sty.column__qIdrC)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__egMxd)}
                  displayHeight={"100%"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/professional_services/images/girls18285391920Jpg.jpg",
                    fullWidth: 1920,
                    fullHeight: 1280,
                    aspectRatio: undefined
                  }}
                />
              </div>
              <div className={classNames(projectcss.all, sty.column__gEusi)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__nHz5)}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__jJkvl
                    )}
                  >
                    {"The standard used since"}
                  </h2>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__gp7UJ
                    )}
                  >
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                    }
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tIsBx
                    )}
                  >
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                    }
                  </div>
                  <Button
                    className={classNames("__wab_instance", sty.button__wZPid)}
                    color={"blackCoffee"}
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__o3OUa
                      )}
                    >
                      {"About Us"}
                    </div>
                  </Button>
                </p.Stack>
              </div>
            </p.Stack>
            <div className={classNames(projectcss.all, sty.freeBox__dWpJv)}>
              <div className={classNames(projectcss.all, sty.freeBox__kCgkm)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___6Rfl6)}
                />
              </div>
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section__yKJcL)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__pzo4N)}
            >
              <div className={classNames(projectcss.all, sty.column__bTqBi)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___6Kxj3)}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__tGvBj
                    )}
                  >
                    {"The standard used since"}
                  </h2>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___9RSbY
                    )}
                  >
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                    }
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ohSzU
                    )}
                  >
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                    }
                  </div>
                  <Button
                    className={classNames("__wab_instance", sty.button__vSiHf)}
                    color={"blackCoffee"}
                    submitsForm={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__nUlP4
                      )}
                    >
                      {"Contact Us"}
                    </div>
                  </Button>
                </p.Stack>
              </div>
              <div className={classNames(projectcss.all, sty.column__hx7Fa)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__h14RR)}
                  displayHeight={
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "100%"
                      : "100%"
                  }
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/professional_services/images/people31046351920Jpg.jpg",
                    fullWidth: 1920,
                    fullHeight: 1281,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </p.Stack>
            <div className={classNames(projectcss.all, sty.freeBox___4UNc)}>
              <div className={classNames(projectcss.all, sty.freeBox__iPeWk)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__obIBn)}
                />
              </div>
            </div>
          </section>
          <div className={classNames(projectcss.all, sty.freeBox__wtqjF)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___9PYzZ)}
            >
              <Testimonial
                className={classNames("__wab_instance", sty.testimonial__ofCeB)}
                slot={
                  <React.Fragment>
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img___7QgSz)}
                      displayHeight={"64px"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"none"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"64px"}
                      src={{
                        src: "/plasmic/professional_services/images/woman32879561920Jpg.jpg",
                        fullWidth: 1920,
                        fullHeight: 1280,
                        aspectRatio: undefined
                      }}
                    />

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___7WyK0
                      )}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox___7TU8C
                        )}
                      >
                        <h5
                          className={classNames(
                            projectcss.all,
                            projectcss.h5,
                            projectcss.__wab_text,
                            sty.h5__hgFVk
                          )}
                        >
                          {"Lorem doi"}
                        </h5>
                      </div>
                    </p.Stack>
                  </React.Fragment>
                }
              />

              <Testimonial
                className={classNames(
                  "__wab_instance",
                  sty.testimonial___8AsdT
                )}
                slot={
                  <React.Fragment>
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__fvEy5)}
                      displayHeight={"64px"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"none"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"64px"}
                      src={{
                        src: "/plasmic/professional_services/images/people31046351920Jpg.jpg",
                        fullWidth: 1920,
                        fullHeight: 1281,
                        aspectRatio: undefined
                      }}
                    />

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__nlg7J)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__jgPas
                        )}
                      >
                        <h5
                          className={classNames(
                            projectcss.all,
                            projectcss.h5,
                            projectcss.__wab_text,
                            sty.h5__gIaPk
                          )}
                        >
                          {"Lorem doi"}
                        </h5>
                      </div>
                    </p.Stack>
                  </React.Fragment>
                }
              />

              <Testimonial
                className={classNames("__wab_instance", sty.testimonial__lvOSz)}
                slot={
                  <React.Fragment>
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__aq2ZV)}
                      displayHeight={"64px"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"none"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"64px"}
                      src={{
                        src: "/plasmic/professional_services/images/girls18285391920Jpg.jpg",
                        fullWidth: 1920,
                        fullHeight: 1280,
                        aspectRatio: undefined
                      }}
                    />

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__ocLpy)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__k4Fj0
                        )}
                      >
                        <h5
                          className={classNames(
                            projectcss.all,
                            projectcss.h5,
                            projectcss.__wab_text,
                            sty.h5__eNvH
                          )}
                        >
                          {"Lorem doi"}
                        </h5>
                      </div>
                    </p.Stack>
                  </React.Fragment>
                }
              />
            </p.Stack>
          </div>
          <div
            data-plasmic-name={"companiesSection"}
            data-plasmic-override={overrides.companiesSection}
            className={classNames(projectcss.all, sty.companiesSection)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"container2"}
              data-plasmic-override={overrides.container2}
              hasGap={true}
              className={classNames(projectcss.all, sty.container2)}
            >
              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2__jCWnM
                )}
              >
                {"We work with local businesses"}
              </h2>
              <div className={classNames(projectcss.all, sty.freeBox___9PVqR)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__zvHaJ)}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__jc8Ln)}
                    displayHeight={"48px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    src={
                      "https://plasmic-ray.s3.us-west-2.amazonaws.com/logo-strapi.svg"
                    }
                  />

                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__caRiv)}
                    displayHeight={"48px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    src={
                      "https://plasmic-ray.s3.us-west-2.amazonaws.com/logo-segment.svg"
                    }
                  />

                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__xdP20)}
                    displayHeight={"48px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    src={
                      "https://plasmic-ray.s3.us-west-2.amazonaws.com/logo-xstate.svg"
                    }
                  />

                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__cgF7X)}
                    displayHeight={"48px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    src={
                      "https://plasmic-ray.s3.us-west-2.amazonaws.com/logo-mapbox.svg"
                    }
                  />
                </p.Stack>
              </div>
            </p.Stack>
          </div>
          <CtaBottom
            data-plasmic-name={"ctaBottom"}
            data-plasmic-override={overrides.ctaBottom}
            className={classNames("__wab_instance", sty.ctaBottom)}
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </p.Stack>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "hero",
    "container7",
    "row3",
    "info",
    "h1",
    "fig",
    "companiesSection",
    "container2",
    "ctaBottom",
    "footer"
  ],

  header: ["header"],
  hero: ["hero", "container7", "row3", "info", "h1", "fig"],
  container7: ["container7", "row3", "info", "h1", "fig"],
  row3: ["row3", "info", "h1", "fig"],
  info: ["info", "h1"],
  h1: ["h1"],
  fig: ["fig"],
  companiesSection: ["companiesSection", "container2"],
  container2: ["container2"],
  ctaBottom: ["ctaBottom"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
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
    header: makeNodeComponent("header"),
    hero: makeNodeComponent("hero"),
    container7: makeNodeComponent("container7"),
    row3: makeNodeComponent("row3"),
    info: makeNodeComponent("info"),
    h1: makeNodeComponent("h1"),
    fig: makeNodeComponent("fig"),
    companiesSection: makeNodeComponent("companiesSection"),
    container2: makeNodeComponent("container2"),
    ctaBottom: makeNodeComponent("ctaBottom"),
    footer: makeNodeComponent("footer"),
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