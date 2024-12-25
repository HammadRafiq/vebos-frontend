import React, { useState } from "react";
import { CollectionHeader } from "./collection-header";
import { CollectionData } from "./collection-data";
import { SubmitClipForm } from "./submit-clip-form";
export const Collection = () => {
  const [addClip, setAddClip] = useState<boolean>(false);
  return (
    <div>
      {addClip ? (
        <SubmitClipForm />
      ) : (
        <>
          <CollectionHeader />
          <CollectionData setAddClip={setAddClip} />
        </>
      )}
    </div>
  );
};
