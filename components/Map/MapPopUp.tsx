"use client";

import React, { useState, useRef, useMemo, ReactNode } from "react";
import { useEffect } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import { RefHandles } from "react-spring-bottom-sheet/dist/types";

type MapPopUpType = { children: ReactNode; status: number; handExitComplete: () => void | null };

const MapPopUp = ({ children, handExitComplete, status }: MapPopUpType) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const sheetRef = useRef<RefHandles>(null);

  useMemo(() => {
    if (start && end && start > end) {
      handExitComplete();
    }
  }, [start, end]);

  return (
    <div className={" mb-4"}>
      <BottomSheet
        ref={sheetRef}
        open={true}
        maxHeight={window !== undefined ? Number(window?.innerHeight) * 0.91 : 0}
        // minHeight={window !== undefined ? Number(window?.innerHeight) * 0.2 : 0}
        blocking={false}
        snapPoints={({ minHeight, maxHeight }) => [
          window !== undefined ? Number(window?.innerHeight) * 0.23 : 0,
          maxHeight,
        ]}
        expandOnContentDrag={true}
        onSpringStart={async () => {
          if (sheetRef.current) setStart(sheetRef.current?.height);
        }}
        onSpringEnd={async (event) => {
          if (sheetRef.current) setEnd(sheetRef.current?.height);
        }}
        // skipInitialTransition={true}
        // onDismiss={() => setShow(false)}
        className="app-text zGoUp"
        scrollLocking={true}
      >
        {children}
      </BottomSheet>
    </div>
  );
};

export default MapPopUp;
