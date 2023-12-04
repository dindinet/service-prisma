// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tTqxxSNNPLamhhbvK9V5UT
// Component: Aj33d4hO6_qo
import * as React from "react";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: eaK0I-WEquua/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_professional_services.module.css"; // plasmic-import: tTqxxSNNPLamhhbvK9V5UT/projectcss
import sty from "./PlasmicCtaBottom.module.css"; // plasmic-import: Aj33d4hO6_qo/css

createPlasmicElementProxy;

export const PlasmicCtaBottom__VariantProps = new Array();

export const PlasmicCtaBottom__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCtaBottom__RenderFunc(props) {
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
  return (
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
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"container"}
        data-plasmic-override={overrides.container}
        hasGap={true}
        className={classNames(projectcss.all, sty.container)}
      >
        <h2
          data-plasmic-name={"h2"}
          data-plasmic-override={overrides.h2}
          className={classNames(
            projectcss.all,
            projectcss.h2,
            projectcss.__wab_text,
            sty.h2
          )}
        >
          {"Make a call to action."}
        </h2>
        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          className={classNames("__wab_instance", sty.button)}
          color={"blackCoffee"}
          submitsForm={true}
        >
          {"Get In Touch"}
        </Button>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "container", "h2", "button"],
  container: ["container", "h2", "button"],
  h2: ["h2"],
  button: ["button"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCtaBottom__ArgProps,
          internalVariantPropNames: PlasmicCtaBottom__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCtaBottom__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCtaBottom";
  } else {
    func.displayName = `PlasmicCtaBottom.${nodeName}`;
  }
  return func;
}

export const PlasmicCtaBottom = Object.assign(
  // Top-level PlasmicCtaBottom renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    container: makeNodeComponent("container"),
    h2: makeNodeComponent("h2"),
    button: makeNodeComponent("button"),
    // Metadata about props expected for PlasmicCtaBottom
    internalVariantProps: PlasmicCtaBottom__VariantProps,
    internalArgProps: PlasmicCtaBottom__ArgProps
  }
);

export default PlasmicCtaBottom;
/* prettier-ignore-end */
