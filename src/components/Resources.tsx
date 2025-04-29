"use client";
import React from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";

import { AudioResourcesPanel } from "./panels/AudioResourcesPanel";
import { ExportVideoPanel } from "./panels/ExportVideoPanel";
import { ImageResourcesPanel } from "./panels/ImageResourcesPanel";
import { TextResourcesPanel } from "./panels/TextResourcesPanel";
import { VideoResourcesPanel } from "./panels/VideoResourcesPanel";

export const Resources = observer(() => {
  const store = React.useContext(StoreContext);
  const selectedMenuOption = store.selectedMenuOption;
  return (
    <div className="bg-slate-200 h-full">
      {selectedMenuOption === "Video" ? <VideoResourcesPanel /> : null}
      {selectedMenuOption === "Audio" ? <AudioResourcesPanel /> : null}
      {selectedMenuOption === "Image" ? <ImageResourcesPanel /> : null}
      {selectedMenuOption === "Text" ? <TextResourcesPanel /> : null}
      {selectedMenuOption === "Export" ? <ExportVideoPanel /> : null}
    </div>
  );
});
