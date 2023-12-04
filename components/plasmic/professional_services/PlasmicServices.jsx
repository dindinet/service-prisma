// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tTqxxSNNPLamhhbvK9V5UT
// Component: sddCOJO2o3gS
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
import ServicesWhite from "../../ServicesWhite"; // plasmic-import: l2pJeXquhqW8/component
import Footer from "../../Footer"; // plasmic-import: c7_nsHlFJRh2/component
import { useScreenVariants as useScreenVariantshXfVib0KeY9U } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: hXFVib0keY9u/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_professional_services.module.css"; // plasmic-import: tTqxxSNNPLamhhbvK9V5UT/projectcss
import sty from "./PlasmicServices.module.css"; // plasmic-import: sddCOJO2o3gS/css

createPlasmicElementProxy;

export const PlasmicServices__VariantProps = new Array();

export const PlasmicServices__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicServices__RenderFunc(props) {
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
            data-plasmic-name={"pageBanerSection"}
            data-plasmic-override={overrides.pageBanerSection}
            className={classNames(projectcss.all, sty.pageBanerSection)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__lw1)}>
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
                {"Services"}
              </h1>
            </div>
          </div>
          <section className={classNames(projectcss.all, sty.section__sIgCk)}>
            <div className={classNames(projectcss.all, sty.freeBox___8DUsa)}>
              <div className={classNames(projectcss.all, sty.freeBox__ydxio)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__pLecd)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.columns__kZs9)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column___7IoO8)}
                    >
                      <ServicesWhite
                        className={classNames(
                          "__wab_instance",
                          sty.servicesWhite__leB2I
                        )}
                        slot={
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3___8Yxqw
                            )}
                          >
                            {"Services main"}
                          </h3>
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column___2JMa9)}
                    >
                      <ServicesWhite
                        className={classNames(
                          "__wab_instance",
                          sty.servicesWhite__hhBqu
                        )}
                        slot={
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__yuQgM
                            )}
                          >
                            {"Services main"}
                          </h3>
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__oqKsJ)}
                    >
                      <ServicesWhite
                        className={classNames(
                          "__wab_instance",
                          sty.servicesWhite__tOey
                        )}
                        slot={
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__a77Pb
                            )}
                          >
                            {"Services main"}
                          </h3>
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__sR8C2)}
                    >
                      <ServicesWhite
                        className={classNames(
                          "__wab_instance",
                          sty.servicesWhite__cq0Dg
                        )}
                        slot={
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__gWl7
                            )}
                          >
                            {"Services main"}
                          </h3>
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__kyYpA)}
                    >
                      <ServicesWhite
                        className={classNames(
                          "__wab_instance",
                          sty.servicesWhite__nu7Ow
                        )}
                        slot={
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__gUsTi
                            )}
                          >
                            {"Services main"}
                          </h3>
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__t4F84)}
                    >
                      <ServicesWhite
                        className={classNames(
                          "__wab_instance",
                          sty.servicesWhite___7IABm
                        )}
                        slot={
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__ua2He
                            )}
                          >
                            {"Services main"}
                          </h3>
                        }
                      />
                    </div>
                  </p.Stack>
                </p.Stack>
              </div>
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section___0QmHr)}>
            <h2
              className={classNames(
                projectcss.all,
                projectcss.h2,
                projectcss.__wab_text,
                sty.h2__kKpoM
              )}
            >
              {hasVariant(globalVariants, "screen", "mobileOnly")
                ? "Why Choose Us"
                : "Our process"}
            </h2>
            <div className={classNames(projectcss.all, sty.freeBox__nWZk)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns__kkP4O)}
              >
                <div className={classNames(projectcss.all, sty.column__bsfIy)}>
                  <ServicesWhite
                    className={classNames(
                      "__wab_instance",
                      sty.servicesWhite___1Agei
                    )}
                    slot={
                      <h3
                        className={classNames(
                          projectcss.all,
                          projectcss.h3,
                          projectcss.__wab_text,
                          sty.h3___5RTtp
                        )}
                      >
                        {"Services main"}
                      </h3>
                    }
                  />
                </div>
                <div className={classNames(projectcss.all, sty.column__dsgdc)}>
                  <ServicesWhite
                    className={classNames(
                      "__wab_instance",
                      sty.servicesWhite__aIgCw
                    )}
                    slot={
                      <h3
                        className={classNames(
                          projectcss.all,
                          projectcss.h3,
                          projectcss.__wab_text,
                          sty.h3__rCbp
                        )}
                      >
                        {"Services main"}
                      </h3>
                    }
                  />
                </div>
                <div className={classNames(projectcss.all, sty.column__mTpg9)}>
                  <ServicesWhite
                    className={classNames(
                      "__wab_instance",
                      sty.servicesWhite__hNgFw
                    )}
                    slot={
                      <h3
                        className={classNames(
                          projectcss.all,
                          projectcss.h3,
                          projectcss.__wab_text,
                          sty.h3___0Nope
                        )}
                      >
                        {"Services main"}
                      </h3>
                    }
                  />
                </div>
                <div className={classNames(projectcss.all, sty.column___5Hayx)}>
                  <ServicesWhite
                    className={classNames(
                      "__wab_instance",
                      sty.servicesWhite__jno4K
                    )}
                    slot={
                      <h3
                        className={classNames(
                          projectcss.all,
                          projectcss.h3,
                          projectcss.__wab_text,
                          sty.h3__yQGz5
                        )}
                      >
                        {"Services main"}
                      </h3>
                    }
                  />
                </div>
                <div className={classNames(projectcss.all, sty.column__tQva)}>
                  <ServicesWhite
                    className={classNames(
                      "__wab_instance",
                      sty.servicesWhite__ouQXm
                    )}
                    slot={
                      <h3
                        className={classNames(
                          projectcss.all,
                          projectcss.h3,
                          projectcss.__wab_text,
                          sty.h3__u6Ouz
                        )}
                      >
                        {"Services main"}
                      </h3>
                    }
                  />
                </div>
                <div className={classNames(projectcss.all, sty.column__wQp3V)}>
                  <ServicesWhite
                    className={classNames(
                      "__wab_instance",
                      sty.servicesWhite__kCoA
                    )}
                    slot={
                      <h3
                        className={classNames(
                          projectcss.all,
                          projectcss.h3,
                          projectcss.__wab_text,
                          sty.h3__rLz1W
                        )}
                      >
                        {"Services main"}
                      </h3>
                    }
                  />
                </div>
              </p.Stack>
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section__mkHPb)}>
            <div className={classNames(projectcss.all, sty.freeBox___7Sjc6)}>
              <div className={classNames(projectcss.all, sty.freeBox__v6K4Q)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__zANb)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.columns__hFvVe)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__p6Geh)}
                    >
                      <ServicesWhite
                        className={classNames(
                          "__wab_instance",
                          sty.servicesWhite__vXTnd
                        )}
                        slot={
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__nRh7W
                            )}
                          >
                            {"Services main"}
                          </h3>
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__wQp1A)}
                    >
                      <ServicesWhite
                        className={classNames(
                          "__wab_instance",
                          sty.servicesWhite__knSle
                        )}
                        slot={
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__lIquC
                            )}
                          >
                            {"Services main"}
                          </h3>
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__lJdoO)}
                    >
                      <ServicesWhite
                        className={classNames(
                          "__wab_instance",
                          sty.servicesWhite__rn85S
                        )}
                        slot={
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__n1QlE
                            )}
                          >
                            {"Services main"}
                          </h3>
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__wOxvd)}
                    >
                      <ServicesWhite
                        className={classNames(
                          "__wab_instance",
                          sty.servicesWhite__m2DXu
                        )}
                        slot={
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__dYcXe
                            )}
                          >
                            {"Services main"}
                          </h3>
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column___2Gz0T)}
                    >
                      <ServicesWhite
                        className={classNames(
                          "__wab_instance",
                          sty.servicesWhite__yfpSd
                        )}
                        slot={
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__moxId
                            )}
                          >
                            {"Services main"}
                          </h3>
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__gqDb3)}
                    >
                      <ServicesWhite
                        className={classNames(
                          "__wab_instance",
                          sty.servicesWhite__sJopF
                        )}
                        slot={
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__eiJId
                            )}
                          >
                            {"Services main"}
                          </h3>
                        }
                      />
                    </div>
                  </p.Stack>
                </p.Stack>
              </div>
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section__auo1I)}>
            <div className={classNames(projectcss.all, sty.freeBox___6XwJy)}>
              <div className={classNames(projectcss.all, sty.freeBox__uglt9)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___9LV0E)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.columns__zgAdq)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column___0AVb8)}
                    >
                      <p.PlasmicImg
                        data-plasmic-name={"img"}
                        data-plasmic-override={overrides.img}
                        alt={""}
                        className={classNames(sty.img)}
                        displayHeight={"100%"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"100%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"100%"}
                        loading={"lazy"}
                        src={{
                          src: "/plasmic/professional_services/images/woman32879561920Jpg.jpg",
                          fullWidth: 1920,
                          fullHeight: 1280,
                          aspectRatio: undefined
                        }}
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column___4UqXy)}
                    >
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__ddmq8
                        )}
                      >
                        <h2
                          className={classNames(
                            projectcss.all,
                            projectcss.h2,
                            projectcss.__wab_text,
                            sty.h2__mnvwK
                          )}
                        >
                          {"Why Choose Us"}
                        </h2>
                        <div
                          data-plasmic-name={"text"}
                          data-plasmic-override={overrides.text}
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text
                          )}
                        >
                          {
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                          }
                        </div>
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.columns__jjmJr
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column___3HZqs
                            )}
                          >
                            <ServicesWhite
                              className={classNames(
                                "__wab_instance",
                                sty.servicesWhite___4PWT
                              )}
                              slot={
                                <h3
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.h3,
                                    projectcss.__wab_text,
                                    sty.h3__yi7Dj
                                  )}
                                >
                                  {"Services main"}
                                </h3>
                              }
                            />
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column___7CuNi
                            )}
                          >
                            <ServicesWhite
                              className={classNames(
                                "__wab_instance",
                                sty.servicesWhite___4Dmdp
                              )}
                              slot={
                                <h3
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.h3,
                                    projectcss.__wab_text,
                                    sty.h3__hTjTg
                                  )}
                                >
                                  {"Services main"}
                                </h3>
                              }
                            />
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__qFi5
                            )}
                          >
                            <ServicesWhite
                              className={classNames(
                                "__wab_instance",
                                sty.servicesWhite__j1E7C
                              )}
                              slot={
                                <h3
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.h3,
                                    projectcss.__wab_text,
                                    sty.h3__iUyG4
                                  )}
                                >
                                  {"Services main"}
                                </h3>
                              }
                            />
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__glG8
                            )}
                          >
                            <ServicesWhite
                              className={classNames(
                                "__wab_instance",
                                sty.servicesWhite__z8GCm
                              )}
                              slot={
                                <h3
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.h3,
                                    projectcss.__wab_text,
                                    sty.h3__xz1Kd
                                  )}
                                >
                                  {"Services main"}
                                </h3>
                              }
                            />
                          </div>
                        </p.Stack>
                      </p.Stack>
                    </div>
                  </p.Stack>
                </p.Stack>
              </div>
            </div>
          </section>
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
  root: ["root", "header", "pageBanerSection", "h1", "img", "text", "footer"],
  header: ["header"],
  pageBanerSection: ["pageBanerSection", "h1"],
  h1: ["h1"],
  img: ["img"],
  text: ["text"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicServices__ArgProps,
          internalVariantPropNames: PlasmicServices__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicServices__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicServices";
  } else {
    func.displayName = `PlasmicServices.${nodeName}`;
  }
  return func;
}

export const PlasmicServices = Object.assign(
  // Top-level PlasmicServices renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    pageBanerSection: makeNodeComponent("pageBanerSection"),
    h1: makeNodeComponent("h1"),
    img: makeNodeComponent("img"),
    text: makeNodeComponent("text"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicServices
    internalVariantProps: PlasmicServices__VariantProps,
    internalArgProps: PlasmicServices__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicServices;
/* prettier-ignore-end */