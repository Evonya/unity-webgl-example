import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const UnityLoader = () => {
    const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
        loaderUrl: "../../public/Build/Build.loader.js",
        dataUrl: "../../public/Build/webgl.data",
        frameworkUrl: "../../public/Build/build.framework.js",
        codeUrl: "../../node_modulespublic/Build/build.wasm",
    });

  return (
    <div className="unity-container">
      {!isLoaded && (
        <div className="loading-overlay">
          <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
        </div>
      )}
      <Unity
        unityProvider={unityProvider}
        style={{ visibility: isLoaded ? "visible" : "hidden", width: "100%", height: "100vh" }}
      />
    </div>
  );
};

export default UnityLoader;