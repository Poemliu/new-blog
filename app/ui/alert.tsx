"use client";
import React from "react";
import { Alert as HeroAlert, Button } from "@heroui/react";

export default function Alert() {
  const [isVisible, setIsVisible] = React.useState(true);

  const title = "Success Notification";
  const description =
    "Your action has been completed successfully. We'll notify you when updates are available.";

  return (
    <div className="flex flex-col gap-4">
      {isVisible ? (
        <HeroAlert
          color="success"
          description={description}
          isVisible={isVisible}
          title={title}
          variant="faded"
          onClose={() => setIsVisible(false)}
        />
      ) : (
        <Button variant="bordered" onPress={() => setIsVisible(true)}>
          Show Alert
        </Button>
      )}
    </div>
  );
}
